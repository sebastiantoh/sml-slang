import { TypeScheme } from './types'
import { DUMMY_TYPE_VAR_TY, INT_TY, makeFunctionType, REAL_TY, STR_TY } from './utils'

type TypeEnvironmentFrame = { [k: string]: TypeScheme }

export interface TypeEnvironment {
  frame: TypeEnvironmentFrame
  parent?: TypeEnvironment
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
  ...['=', '<>', '<', '>', '<=', '>='].map(
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

export function createInitialTypeEnvironments(): TypeEnvironment {
  // initial type env only contains inbuilt funcs
  return { frame: Object.fromEntries(primitiveFuncs) }
}
