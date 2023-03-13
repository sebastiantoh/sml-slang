import { PrimitiveType, Type } from './types'
import { makeFunctionType } from './utils'

export interface TypeEnvironment {
  types: Map<string, Type | Type[]>
}

const INT_TY: PrimitiveType = 'int'
const REAL_TY: PrimitiveType = 'real'
const STR_TY: PrimitiveType = 'string'
const CHAR_TY: PrimitiveType = 'char'
const BOOL_TY: PrimitiveType = 'bool'

const primitiveFuncs: [string, Type | Type[]][] = [
  ['/', makeFunctionType(REAL_TY, REAL_TY, REAL_TY)],
  ['div', makeFunctionType(INT_TY, INT_TY, INT_TY)],
  ['mod', makeFunctionType(INT_TY, INT_TY, INT_TY)],
  ['div', makeFunctionType(INT_TY, INT_TY, INT_TY)],
  ['+', [makeFunctionType(INT_TY, INT_TY, INT_TY), makeFunctionType(REAL_TY, REAL_TY, REAL_TY)]],
  ['*', [makeFunctionType(INT_TY, INT_TY, INT_TY), makeFunctionType(REAL_TY, REAL_TY, REAL_TY)]],
  ['-', [makeFunctionType(INT_TY, INT_TY, INT_TY), makeFunctionType(REAL_TY, REAL_TY, REAL_TY)]],
  ['^', makeFunctionType(STR_TY, STR_TY, STR_TY)],
  // TODO: shd be able to do smt like this instead of all the
  // repeated code, debug later
  // ...['=', '<>', '<', '>', '<=', '>='].map(comp => [
  //     [comp, [
  //         makeFunctionType(INT_TY, INT_TY, BOOL_TY),
  //         makeFunctionType(REAL_TY, REAL_TY, BOOL_TY),
  //         makeFunctionType(STR_TY, STR_TY, BOOL_TY),
  //         makeFunctionType(CHAR_TY, CHAR_TY, BOOL_TY),
  //     ]]
  // ])
  [
    '=',
    [
      makeFunctionType(INT_TY, INT_TY, BOOL_TY),
      makeFunctionType(REAL_TY, REAL_TY, BOOL_TY),
      makeFunctionType(STR_TY, STR_TY, BOOL_TY),
      makeFunctionType(CHAR_TY, CHAR_TY, BOOL_TY)
    ]
  ],
  [
    '<>',
    [
      makeFunctionType(INT_TY, INT_TY, BOOL_TY),
      makeFunctionType(REAL_TY, REAL_TY, BOOL_TY),
      makeFunctionType(STR_TY, STR_TY, BOOL_TY),
      makeFunctionType(CHAR_TY, CHAR_TY, BOOL_TY)
    ]
  ],
  [
    '<',
    [
      makeFunctionType(INT_TY, INT_TY, BOOL_TY),
      makeFunctionType(REAL_TY, REAL_TY, BOOL_TY),
      makeFunctionType(STR_TY, STR_TY, BOOL_TY),
      makeFunctionType(CHAR_TY, CHAR_TY, BOOL_TY)
    ]
  ],
  [
    '>',
    [
      makeFunctionType(INT_TY, INT_TY, BOOL_TY),
      makeFunctionType(REAL_TY, REAL_TY, BOOL_TY),
      makeFunctionType(STR_TY, STR_TY, BOOL_TY),
      makeFunctionType(CHAR_TY, CHAR_TY, BOOL_TY)
    ]
  ],
  [
    '<=',
    [
      makeFunctionType(INT_TY, INT_TY, BOOL_TY),
      makeFunctionType(REAL_TY, REAL_TY, BOOL_TY),
      makeFunctionType(STR_TY, STR_TY, BOOL_TY),
      makeFunctionType(CHAR_TY, CHAR_TY, BOOL_TY)
    ]
  ],
  [
    '>=',
    [
      makeFunctionType(INT_TY, INT_TY, BOOL_TY),
      makeFunctionType(REAL_TY, REAL_TY, BOOL_TY),
      makeFunctionType(STR_TY, STR_TY, BOOL_TY),
      makeFunctionType(CHAR_TY, CHAR_TY, BOOL_TY)
    ]
  ],
  ['andalso', makeFunctionType(BOOL_TY, BOOL_TY, BOOL_TY)],
  ['orelse', makeFunctionType(BOOL_TY, BOOL_TY, BOOL_TY)]
]

export function createInitialTypeEnvironments(): TypeEnvironment[] {
  // initial type env only contains inbuilt funcs
  return [{ types: new Map(primitiveFuncs) }]
}
