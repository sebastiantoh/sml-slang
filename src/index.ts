import { evaluateExp, evaluateProg } from './interpreter/interpreter'
import { Expression, Program } from './parser/ast'
import { parseExp, parseProg } from './parser/parser'
import { typeCheck } from './typechecker'

export const parseTypeCheckAndEvaluateExp = (exp: string, outputWithType: boolean = false) => {
  const node = parseExp(exp) as Expression
  const type = typeCheck(node)
  const res = evaluateExp(node)
  if (outputWithType && res.status === 'finished') {
    res.type = type
  }
  return res
}

export const parseTypeCheckAndEvaluateProg = (prog: string) => {
  const node = parseProg(prog) as Program
  const _type = typeCheck(node)
  const res = evaluateProg(node)
  return res
}
