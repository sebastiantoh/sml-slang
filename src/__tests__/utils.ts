import { evaluateExp, evaluateProg } from '../interpreter/interpreter'
import { Expression, Program } from '../parser/ast'
import { parseExp, parseProg } from '../parser/parser'
import { hindleyMilner } from '../typechecker'
import { createInitialTypeEnvironment, unifyAndSubstitute } from '../typechecker/environment'
import { resToString } from '../utils/formatters'

const INIT_ENV = createInitialTypeEnvironment()

export const parseTypeCheckAndEvaluateExp = (exp: string) => {
  const node = parseExp(exp) as Expression
  const [type, typeConstraints] = hindleyMilner(INIT_ENV, node)
  const _solvedType = unifyAndSubstitute(type, typeConstraints)
  const res = evaluateExp(node, false)
  return resToString(res)
}

export const parseTypeCheckAndEvaluateProg = (prog: string) => {
  const node = parseProg(prog) as Program
  const [type, typeConstraints] = hindleyMilner(INIT_ENV, node)
  const _solvedType = unifyAndSubstitute(type, typeConstraints)
  const res = evaluateProg(node)
  return resToString(res)
}
