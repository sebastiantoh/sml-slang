import { evaluateExp, evaluateProg } from '../interpreter/interpreter'
import { Expression, Program } from '../parser/ast'
import { parseExp, parseProg } from '../parser/parser'
import * as Sml from '../sml'

export const parseAndEvaluateExp = (exp: string) => {
  const node = parseExp(exp) as Expression
  const res = evaluateExp(node)
  return Sml.valueToString(res)
}

export const parseAndEvaluateProg = (prog: string) => {
  const node = parseProg(prog) as Program
  const stdout = evaluateProg(node)
  return stdout
}
