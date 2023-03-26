import _ from 'lodash'

import { Declaration } from '../parser/ast'
import { hindleyMilner } from '.'
import { TypeMismatchError } from './errors'
import { Type, TypeConstraint, TypeScheme, TypeVariable } from './types'
import {
  DUMMY_TYPE_VAR_TY,
  INT_TY,
  isFunctionType,
  isListType,
  isPrimitiveType,
  isUnit,
  makeFunctionType,
  REAL_TY,
  STR_TY,
  UNIT_TY
} from './utils'

export type TypeEnvironment = { [k: string]: TypeScheme }

const primitiveFuncs: [string, TypeScheme][] = [
  ['/', { type: makeFunctionType(REAL_TY, REAL_TY, REAL_TY), typeVariables: [] }],
  ['div', { type: makeFunctionType(INT_TY, INT_TY, INT_TY), typeVariables: [] }],
  ['mod', { type: makeFunctionType(INT_TY, INT_TY, INT_TY), typeVariables: [] }],
  ['div', { type: makeFunctionType(INT_TY, INT_TY, INT_TY), typeVariables: [] }],
  ['+', { type: makeFunctionType(INT_TY, INT_TY, INT_TY), typeVariables: [] }],
  ['*', { type: makeFunctionType(INT_TY, INT_TY, INT_TY), typeVariables: [] }],
  ['-', { type: makeFunctionType(INT_TY, INT_TY, INT_TY), typeVariables: [] }],
  ['^', { type: makeFunctionType(STR_TY, STR_TY, STR_TY), typeVariables: [] }],
  ...['=', '<>', '<', '>', '<=', '>=', 'print'].map(
    comp =>
      // TODO: might need to update these to equality type variables (''a, ''b, etc.)
      [
        comp,
        {
          type: makeFunctionType(DUMMY_TYPE_VAR_TY, DUMMY_TYPE_VAR_TY, DUMMY_TYPE_VAR_TY),
          typeVariables: [DUMMY_TYPE_VAR_TY]
        }
      ] as [string, TypeScheme]
  )
]

export function createInitialTypeEnvironment(): TypeEnvironment {
  // initial type env only contains inbuilt funcs
  return Object.fromEntries(primitiveFuncs)
}

export function getTypeSchemeFromEnv(env: TypeEnvironment, id: string): TypeScheme {
  if (!env.hasOwnProperty(id)) {
    throw new Error(`Unbound value identifier "${id}".`)
  }
  return env[id]
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
                throw new TypeMismatchError(valbind, UNIT_TY, t)
              }
              break
            }
            // if constant, we check that lhs value = rhs value
            case 'IntConstant':
            case 'RealConstant':
            case 'StringConstant':
            case 'CharConstant':
            case 'BoolConstant': {
              /*
                TODO: make this more sophisticated - rn jus checks same num of both side.

                support things like:
                val 2 = 1 + 1;

                (or)

                val x = 1;
                val 2 = 1 + x
              */
              if (valbind.exp.tag !== valbind.pat.tag || valbind.exp.val != valbind.pat.val) {
                // TODO: add support for Constant type errors
                throw new Error(
                  `Invalid constant binding. Expected type ${valbind.pat.tag} with value ${valbind.pat.val}, got ${valbind.exp.tag}.`
                )
              }
              break
            }
            case 'Variable': {
              const [t, C] = hindleyMilner(env, valbind.exp)
              env = generalize(C, env, valbind.pat.id, t)
              break
            }
            case 'InfixConstruction': {
              throw new Error(`TODO: add support for infix`)
            }
            // TODO: add support for lists.
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

let CUR_FRESH_VAR = 0

export function freshTypeVariable(): TypeVariable {
  return { id: CUR_FRESH_VAR++ }
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
  const newEnv = _.cloneDeep(env)
  newEnv[id] = {
    type: type,
    // TODO: check that this list difference works for type vars
    typeVariables: _.difference(unsolved(type), unsolvedEnv(env))
  }
  return newEnv
}
