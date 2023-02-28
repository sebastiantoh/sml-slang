import { evaluate } from './interpreter/interpreter'
import { parseProg } from './parser/parser'
import { Context } from './types'
import { SourceError, Value } from './types'

export function run(code: string, context: Context): Value {
  const program = parseProg(code)
  // TODO: type checking, error handling etc.
  return evaluate(program)
}

export function parseError(errors: SourceError[]): string {
  const errorMessagesArr = errors.map(error => {
    const line = error.location ? error.location.start.line : '<unknown>'
    const explanation = error.explain()
    return line < 1 ? explanation : `Line ${line}: ${explanation}`
  })
  return errorMessagesArr.join('\n')
}
