import { evaluate } from '../interpreter/interpreter'
import { parse } from '../parser/parser'
import * as Sml from '../sml'

export const parseAndEvaluate = (src: string) => {
  const node = parse(src)
  // pass in a dummy context
  const res = evaluate(node, { a: null })
  return Sml.valueToString(res)
}
