import * as assert from 'assert'
import { cloneDeep, difference } from 'lodash'

import { Declaration, ExpVariable, InfixApplication, Pattern } from '../parser/ast'
import { hindleyMilner } from '.'
import { CustomSourceError, TypeMismatchError } from './errors'
import { Type, TypeConstraint, TypeScheme, TypeSubstitution, TypeVariable } from './types'
import {
  BOOL_TY,
  hasTypeVariable,
  INT_TY,
  isFunctionType,
  isListType,
  isPrimitiveType,
  isSameType,
  isTypeVariableType,
  isUnit,
  makeFunctionType,
  REAL_TY,
  STR_TY,
  stringifyType,
  UNIT_TY
} from './utils'

export type TypeEnvironment = { [k: string]: TypeScheme }

let CUR_FRESH_VAR = 0

export function freshTypeVariable(): TypeVariable {
  return { id: CUR_FRESH_VAR++ }
}

const primitiveFuncs: [string, TypeScheme][] = [
  ['/', { type: makeFunctionType(REAL_TY, REAL_TY, REAL_TY), typeVariables: [] }],
  ['div', { type: makeFunctionType(INT_TY, INT_TY, INT_TY), typeVariables: [] }],
  ['mod', { type: makeFunctionType(INT_TY, INT_TY, INT_TY), typeVariables: [] }],
  ['div', { type: makeFunctionType(INT_TY, INT_TY, INT_TY), typeVariables: [] }],
  ['+', { type: makeFunctionType(INT_TY, INT_TY, INT_TY), typeVariables: [] }],
  ['*', { type: makeFunctionType(INT_TY, INT_TY, INT_TY), typeVariables: [] }],
  ['-', { type: makeFunctionType(INT_TY, INT_TY, INT_TY), typeVariables: [] }],
  ['^', { type: makeFunctionType(STR_TY, STR_TY, STR_TY), typeVariables: [] }],
  [
    '::',
    (function (): TypeScheme {
      const t = freshTypeVariable()
      const tList = { elementType: t }
      return { type: makeFunctionType(t, tList, tList), typeVariables: [t] }
    })()
  ],
  [
    '@',
    (function (): TypeScheme {
      const t = freshTypeVariable()
      const tList = { elementType: t }
      return { type: makeFunctionType(tList, tList, tList), typeVariables: [t] }
    })()
  ],
  ...['=', '<>', '<', '>', '<=', '>='].map(comp => {
    const t = freshTypeVariable()
    // TODO: might need to update these to equality type variables (''a, ''b, etc.)
    return [
      comp,
      {
        type: makeFunctionType(t, t, t),
        typeVariables: [t]
      }
    ] as [string, TypeScheme]
  }),
  [
    'print',
    (function (): TypeScheme {
      const t = freshTypeVariable()
      return { type: makeFunctionType(t, UNIT_TY), typeVariables: [t] }
    })()
  ],
  ['size', { type: makeFunctionType(STR_TY, INT_TY), typeVariables: [] }],
  ['not', { type: makeFunctionType(BOOL_TY, BOOL_TY), typeVariables: [] }]
]

export function createInitialTypeEnvironment(): TypeEnvironment {
  // initial type env only contains inbuilt funcs
  return Object.fromEntries(primitiveFuncs)
}

export function getTypeSchemeFromEnv(env: TypeEnvironment, expVar: ExpVariable): TypeScheme {
  if (!env.hasOwnProperty(expVar.id)) {
    throw new CustomSourceError(expVar, `Unbound value identifier "${expVar.id}".`)
  }
  return env[expVar.id]
}

export function extendTypeEnv(env: TypeEnvironment, decs: Declaration[]): TypeEnvironment {
  for (const dec of decs) {
    switch (dec.tag) {
      case 'ValueDeclaration': {
        for (const valbind of dec.valbinds) {
          switch (valbind.pat.tag) {
            // if wildcard, we typecheck the expression and simply ignore the dec
            case 'Wildcard': {
              const [_, __] = hindleyMilner(env, valbind.exp)
              break
            }
            // if unit, check that rhs is also unit
            case 'UnitConstant': {
              const [t, _] = hindleyMilner(env, valbind.exp)
              if (!isUnit(t)) {
                throw new TypeMismatchError(valbind.exp, UNIT_TY, t)
              }
              break
            }
            // if constant, we check that lhs value = rhs value
            case 'IntConstant':
            case 'RealConstant':
            case 'StringConstant':
            case 'CharConstant':
            case 'BoolConstant': {
              const [expType, _] = hindleyMilner(env, valbind.exp)
              const [patType, __] = hindleyMilner(env, valbind.pat)

              if (patType !== expType) {
                throw new CustomSourceError(
                  valbind,
                  `Invalid constant binding. Expected type ${patType}, got ${expType}.`
                )
              }
              break
            }
            case 'PatVariable': {
              // Create new type variable for the pattern type and assign it to env
              const patTy = freshTypeVariable()

              if (valbind.isRec) {
                const newEnv = cloneDeep(env)
                newEnv[valbind.pat.id] = {
                  type: patTy,
                  typeVariables: []
                }

                // Since the RHS may refer to this pattern ID in the case of recursive functions
                // we need to infer type of RHS in this new env
                const [t, C] = hindleyMilner(newEnv, valbind.exp)
                // Now that we've solved the type of the RHS, we add a constraint to the pat type
                C.push({ type1: patTy, type2: t })
                env = generalize(C, env, valbind.pat.id, t)
              } else {
                const [t, C] = hindleyMilner(env, valbind.exp)
                env = generalize(C, env, valbind.pat.id, t)
              }
              break
            }
            // Intentional fallthrough
            case 'InfixConstruction':
            case 'ListPattern': {
              const [t, _] = hindleyMilner(env, valbind.exp)
              env = extendTypeEnvFromPattern(env, valbind.pat, t)
              break
            }

            default: {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore: The following line will throw a compile error if all the
              // case statements are implemented (i.e. this branch is never taken).
              throw new CustomSourceError(valbind.pat, `unimplemented for ${valbind.pat.tag}`)
            }
          }
        }
        break
      }
      case 'LocalDeclaration': {
        const envWithLocalDecs = extendTypeEnv(env, dec.localDecs)
        const envWithDecs = extendTypeEnv(envWithLocalDecs, dec.decs)

        /*
          now we remove all declarations from local declarations
          make sure things like `local val x = 5 in val x = 3 end;` work as expected

          TODO: figure out if theres a nice way of doing this without needing a seperate function extendTypeEnvWithLocalDecs(env, decs, envWithLocalDecs)
            perhaps we cld have an optional third param for this function envWithLocalDecs, which is used as the env if defined?
            right now this doesnt work properly!
        */
        return envWithDecs
      }
    }
  }
  return env
}

export function extendTypeEnvFromPattern(
  originalEnv: TypeEnvironment,
  pat: Pattern,
  patType: Type
): TypeEnvironment {
  switch (pat.tag) {
    // Do nothing for the case of constants / wildcards
    case 'IntConstant':
    case 'RealConstant':
    case 'StringConstant':
    case 'CharConstant':
    case 'BoolConstant':
    case 'Wildcard': {
      return originalEnv
    }
    case 'PatVariable': {
      const newEnv = cloneDeep(originalEnv)
      newEnv[pat.id] = {
        type: patType,
        typeVariables: []
      }
      return newEnv
    }
    case 'InfixConstruction': {
      // we only support ::
      if (pat.id !== '::') {
        throw new CustomSourceError(pat, `${pat.id} is not a supported constructor`)
      }

      assert(isListType(patType))
      const { elementType } = patType
      const envExtendedFromPat1 = extendTypeEnvFromPattern(originalEnv, pat.pat1, elementType)
      return extendTypeEnvFromPattern(envExtendedFromPat1, pat.pat2, patType)
    }
    case 'ListPattern': {
      assert(isListType(patType))
      const { elementType } = patType
      let env = originalEnv
      for (const elePat of pat.elements) {
        env = extendTypeEnvFromPattern(env, elePat, elementType)
      }
      return env
    }
    default: {
      throw new CustomSourceError(pat, `${pat.tag} not implemented`)
    }
  }
}

export function getPrimitiveFuncTypes(
  env: TypeEnvironment,
  infixApp: InfixApplication
): [Type, Type, Type] {
  if (!env.hasOwnProperty(infixApp.id)) {
    throw new CustomSourceError(infixApp, `Unsupported infix operator "${infixApp.id}".`)
  }
  const type = env[infixApp.id].type
  if (!isFunctionType(type) || !isFunctionType(type.returnType)) {
    throw new CustomSourceError(
      infixApp,
      `Infix operator "${infixApp.id}" declared as non fun -> fun type.`
    )
  }
  return [type.parameterType, type.returnType.parameterType, type.returnType.returnType]
}

export function instantiate(typeScheme: TypeScheme): Type {
  const typeMappings = typeScheme.typeVariables.map(tv => [tv, freshTypeVariable()])
  function substitute(type: Type): Type {
    if (isPrimitiveType(type)) {
      return type
    }
    if (isFunctionType(type)) {
      return {
        parameterType: substitute(type.parameterType),
        returnType: substitute(type.returnType)
      }
    }
    if (isListType(type)) {
      return {
        elementType: substitute(type.elementType)
      }
    }
    for (const [typeVar, freshTypeVar] of typeMappings) {
      if (typeVar == type) {
        return freshTypeVar
      }
    }
    return type
  }
  return substitute(typeScheme.type)
}

function unsolved(type: Type): TypeVariable[] {
  if (isPrimitiveType(type)) {
    return []
  }
  if (isFunctionType(type)) {
    return [...unsolved(type.parameterType), ...unsolved(type.returnType)]
  }
  if (isListType(type)) {
    return unsolved(type.elementType)
  }
  return [type]
}

function unsolvedEnv(env: TypeEnvironment): TypeVariable[] {
  let tvs: TypeVariable[] = []
  for (const id in env) {
    const ts = env[id]
    tvs = [...tvs, ...unsolved(ts.type)]
  }
  return tvs
}

// inefficient way of generalizing. TODO: make this more efficient?
function generalize(
  C: TypeConstraint[],
  env: TypeEnvironment,
  id: string,
  type: Type
): TypeEnvironment {
  // solve constraints C and get a type t
  const t = unifyAndSubstitute(type, C)

  const newEnv = cloneDeep(env)
  newEnv[id] = {
    type: t,
    // TODO: check that this list difference works for type vars
    typeVariables: difference(unsolved(t), unsolvedEnv(env))
  }
  return newEnv
}

function substituteTypeVarIntoType(type: Type, typeVar: TypeVariable, subsType: Type): Type {
  if (isPrimitiveType(type)) {
    return type
  }
  if (isFunctionType(type)) {
    return {
      parameterType: substituteTypeVarIntoType(type.parameterType, typeVar, subsType),
      returnType: substituteTypeVarIntoType(type.returnType, typeVar, subsType)
    }
  }
  if (isListType(type)) {
    return { elementType: substituteTypeVarIntoType(type.elementType, typeVar, subsType) }
  }
  return type.id === typeVar.id ? subsType : type
}

// subs type for typeVar for all constraints in C
function substituteTypeVarIntoConstraints(
  C: TypeConstraint[],
  typeVar: TypeVariable,
  type: Type
): TypeConstraint[] {
  return C.map(({ type1: t1, type2: t2 }) => ({
    type1: substituteTypeVarIntoType(t1, typeVar, type),
    type2: substituteTypeVarIntoType(t2, typeVar, type)
  }))
}

export function unify(C: TypeConstraint[]): TypeSubstitution[] {
  // no more subsitutions can be generated
  if (C.length === 0) {
    return []
  }
  const [{ type1: t1, type2: t2 }, ...C2] = C
  // both t1 and t2 are the same simple types
  // - throw away constraint (no useful info)
  if (
    (isPrimitiveType(t1) && isPrimitiveType(t2)) ||
    (isTypeVariableType(t1) && isTypeVariableType(t2))
  ) {
    if (isSameType(t1, t2)) {
      return unify(C2)
    }
  }
  // t1 is a type variable 'x and 'x does not occur in t2
  if (isTypeVariableType(t1) && !hasTypeVariable(t2, t1)) {
    const S = { from: t1, to: t2 }
    return [S, ...unify(substituteTypeVarIntoConstraints(C2, t1, t2))]
  }

  // t2 is a type variable 'x and 'x does not occur in t1
  if (isTypeVariableType(t2) && !hasTypeVariable(t1, t2)) {
    const S = { from: t2, to: t1 }
    return [S, ...unify(substituteTypeVarIntoConstraints(C2, t2, t1))]
  }

  // t1 and t2 are function types
  if (isFunctionType(t1) && isFunctionType(t2)) {
    return unify([
      { type1: t1.parameterType, type2: t2.parameterType },
      { type1: t1.returnType, type2: t2.returnType },
      ...C2
    ])
  }

  // t1 and t2 are list types
  if (isListType(t1) && isListType(t2)) {
    return unify([{ type1: t1.elementType, type2: t2.elementType }, ...C2])
  }

  // TODO: make errors better - can include line number etc.
  // to support that we will need to additionally inlcude node in our type constraints
  // (or) simply include the line and col nums in the type constraints
  throw new Error(`Failed to unify type constraint ${stringifyType(t1)} = ${stringifyType(t2)}.`)
}

export function substituteIntoType(type: Type, S: TypeSubstitution[]): Type {
  function _subsIntoType(type: Type, S: TypeSubstitution): Type {
    if (isPrimitiveType(type)) {
      return type
    }
    if (isSameType(type, S.from)) {
      return S.to
    }
    if (isFunctionType(type)) {
      return {
        parameterType: _subsIntoType(type.parameterType, S),
        returnType: _subsIntoType(type.returnType, S)
      }
    }
    if (isListType(type)) {
      return { elementType: _subsIntoType(type.elementType, S) }
    }
    // different type var
    return type
  }

  for (const ts of S) {
    type = _subsIntoType(type, ts)
  }
  return type
}

export function unifyAndSubstitute(type: Type, typeConstraints: TypeConstraint[]): Type {
  const S = unify(typeConstraints)
  return substituteIntoType(type, S)
}
