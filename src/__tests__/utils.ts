import { evaluate } from '../interpreter/interpreter'
import { parseExp } from '../parser/parser'
import * as Sml from '../sml'

export const parseAndEvaluateExp = (exp: string) => {
  const node = parseExp(exp)
  const res = evaluate(node)
  return Sml.valueToString(res)
}
