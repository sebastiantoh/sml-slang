import { evaluate } from './interpreter/interpreter'
import { parseProg } from './parser/parser'
import * as Sml from './sml'
import { Context } from './types'

export function run(code: string, context: Context): Sml.Value {
  const program = parseProg(code)
  // TODO: type checking, error handling etc.
  return evaluate(program)
}
