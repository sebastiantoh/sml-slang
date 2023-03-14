import { Type } from './types'
import { BOOL_TY, CHAR_TY, INT_TY, makeMatchType, REAL_TY, STR_TY } from './utils'

type TypeEnvironmentFrame = { [k: string]: Type | Type[] }

export interface TypeEnvironment {
  frame: TypeEnvironmentFrame
  parent?: TypeEnvironment
}

const primitiveFuncs: [string, Type | Type[]][] = [
  ['/', makeMatchType(REAL_TY, REAL_TY, REAL_TY)],
  ['div', makeMatchType(INT_TY, INT_TY, INT_TY)],
  ['mod', makeMatchType(INT_TY, INT_TY, INT_TY)],
  ['div', makeMatchType(INT_TY, INT_TY, INT_TY)],
  ['+', [makeMatchType(INT_TY, INT_TY, INT_TY), makeMatchType(REAL_TY, REAL_TY, REAL_TY)]],
  ['*', [makeMatchType(INT_TY, INT_TY, INT_TY), makeMatchType(REAL_TY, REAL_TY, REAL_TY)]],
  ['-', [makeMatchType(INT_TY, INT_TY, INT_TY), makeMatchType(REAL_TY, REAL_TY, REAL_TY)]],
  ['^', makeMatchType(STR_TY, STR_TY, STR_TY)],
  // TODO: shd be able to do smt like this instead of all the
  // repeated code, debug later
  // ...['=', '<>', '<', '>', '<=', '>='].map(comp => [
  //     [comp, [
  //         makeMatchType(INT_TY, INT_TY, BOOL_TY),
  //         makeMatchType(REAL_TY, REAL_TY, BOOL_TY),
  //         makeMatchType(STR_TY, STR_TY, BOOL_TY),
  //         makeMatchType(CHAR_TY, CHAR_TY, BOOL_TY),
  //     ]]
  // ])
  [
    '=',
    [
      makeMatchType(INT_TY, INT_TY, BOOL_TY),
      makeMatchType(REAL_TY, REAL_TY, BOOL_TY),
      makeMatchType(STR_TY, STR_TY, BOOL_TY),
      makeMatchType(CHAR_TY, CHAR_TY, BOOL_TY)
    ]
  ],
  [
    '<>',
    [
      makeMatchType(INT_TY, INT_TY, BOOL_TY),
      makeMatchType(REAL_TY, REAL_TY, BOOL_TY),
      makeMatchType(STR_TY, STR_TY, BOOL_TY),
      makeMatchType(CHAR_TY, CHAR_TY, BOOL_TY)
    ]
  ],
  [
    '<',
    [
      makeMatchType(INT_TY, INT_TY, BOOL_TY),
      makeMatchType(REAL_TY, REAL_TY, BOOL_TY),
      makeMatchType(STR_TY, STR_TY, BOOL_TY),
      makeMatchType(CHAR_TY, CHAR_TY, BOOL_TY)
    ]
  ],
  [
    '>',
    [
      makeMatchType(INT_TY, INT_TY, BOOL_TY),
      makeMatchType(REAL_TY, REAL_TY, BOOL_TY),
      makeMatchType(STR_TY, STR_TY, BOOL_TY),
      makeMatchType(CHAR_TY, CHAR_TY, BOOL_TY)
    ]
  ],
  [
    '<=',
    [
      makeMatchType(INT_TY, INT_TY, BOOL_TY),
      makeMatchType(REAL_TY, REAL_TY, BOOL_TY),
      makeMatchType(STR_TY, STR_TY, BOOL_TY),
      makeMatchType(CHAR_TY, CHAR_TY, BOOL_TY)
    ]
  ],
  [
    '>=',
    [
      makeMatchType(INT_TY, INT_TY, BOOL_TY),
      makeMatchType(REAL_TY, REAL_TY, BOOL_TY),
      makeMatchType(STR_TY, STR_TY, BOOL_TY),
      makeMatchType(CHAR_TY, CHAR_TY, BOOL_TY)
    ]
  ],
  ['andalso', makeMatchType(BOOL_TY, BOOL_TY, BOOL_TY)],
  ['orelse', makeMatchType(BOOL_TY, BOOL_TY, BOOL_TY)]
]

export function createInitialTypeEnvironments(): TypeEnvironment {
  // initial type env only contains inbuilt funcs
  return { frame: Object.fromEntries(primitiveFuncs) }
}
