import { Type, TypeScheme, TypeVariable } from './types'
import {
  DUMMY_TYPE_VAR_TY,
  INT_TY,
  isFunctionType,
  isListType,
  isPrimitiveType,
  makeFunctionType,
  REAL_TY,
  STR_TY
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

let CUR_FRESH_VAR = 0

function freshTypeVariable(): TypeVariable {
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
