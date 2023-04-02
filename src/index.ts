import { evaluateExp, evaluateProg } from './interpreter/interpreter'
import { Expression, Program } from './parser/ast'
import { parseExp, parseProg } from './parser/parser'
import { hindleyMilner } from './typechecker'
import { createInitialTypeEnvironment, unifyAndSubstitute } from './typechecker/environment'

export const INIT_ENV = createInitialTypeEnvironment()

export const parseTypeCheckAndEvaluateExp = (exp: string, outputWithType: boolean = false) => {
  const node = parseExp(exp) as Expression
  const [type, typeConstraints] = hindleyMilner(INIT_ENV, node)
  const _solvedType = unifyAndSubstitute(type, typeConstraints)
  const res = evaluateExp(node, outputWithType)
  return res
}

export const parseTypeCheckAndEvaluateProg = (prog: string) => {
  const node = parseProg(prog) as Program
  const [type, typeConstraints] = hindleyMilner(INIT_ENV, node)
  const _solvedType = unifyAndSubstitute(type, typeConstraints)
  const res = evaluateProg(node)
  return res
}
