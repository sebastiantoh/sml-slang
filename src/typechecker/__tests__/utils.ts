import { Expression } from '../../parser/ast'
import { parseExp } from '../../parser/parser'
import { hindleyMilner } from '..'
import { createInitialTypeEnvironment, unifyAndSubstitute } from '../environment'
import { stringifyType } from '../utils'

const INIT_ENV = createInitialTypeEnvironment()

export const parseAndTypeCheckExp = (exp: string) => {
  const node = parseExp(exp) as Expression
  const [type, typeConstraints] = hindleyMilner(INIT_ENV, node)
  const solvedType = unifyAndSubstitute(type, typeConstraints)
  return stringifyType(solvedType)
}
