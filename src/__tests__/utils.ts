import { evaluateExp, evaluateProg } from '../interpreter/interpreter'
import { Expression, Program } from '../parser/ast'
import { parseExp, parseProg } from '../parser/parser'
import { resToString } from '../utils/formatters'

export const parseAndEvaluateExp = (exp: string) => {
  const node = parseExp(exp) as Expression
  const res = evaluateExp(node, false)
  return resToString(res)
}

export const parseAndEvaluateProg = (prog: string) => {
  const node = parseProg(prog) as Program
  const res = evaluateProg(node)
  return resToString(res)
}
