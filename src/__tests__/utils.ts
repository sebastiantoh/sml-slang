import { evaluate } from '../interpreter/interpreter'
import { parse } from '../parser/parser'
import * as Sml from '../sml'

export const parseAndEvaluate = (src: string) => {
  const node = parse(src)
  const res = evaluate(node)
  return Sml.valueToString(res)
}
