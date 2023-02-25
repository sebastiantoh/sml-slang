import { Options } from 'acorn'
import * as es from 'estree'

import { Chapter, Language, Variant } from './types'

export const CUT = 'cut' // cut operator for Source 4.3
export const TRY_AGAIN = 'retry' // command for Source 4.3
export const GLOBAL = typeof window === 'undefined' ? global : window
export const NATIVE_STORAGE_ID = 'nativeStorage'
export const MODULE_PARAMS_ID = 'moduleParams'
export const MODULE_CONTEXTS_ID = 'moduleContexts'
export const MAX_LIST_DISPLAY_LENGTH = 100
export const UNKNOWN_LOCATION: es.SourceLocation = {
  start: {
    line: -1,
    column: -1
  },
  end: {
    line: -1,
    column: -1
  }
}
export const JSSLANG_PROPERTIES = {
  maxExecTime: 1000,
  factorToIncreaseBy: 10
}

export const sourceLanguages: Language[] = [{ chapter: Chapter.SMLSlang, variant: Variant.DEFAULT }]

export const ACORN_PARSE_OPTIONS: Options = { ecmaVersion: 2015 }
