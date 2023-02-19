import { evaluate } from '../interpreter/interpreter'
import { parse } from '../parser/parser'

export const parseAndEvaluate = (src: string) => {
  const node = parse(src)
  // pass in a dummy context
  const res = evaluate(node, { a: null }).next().value
  return res
}
