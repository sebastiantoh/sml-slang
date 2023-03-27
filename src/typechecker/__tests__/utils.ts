import { Expression } from '../../parser/ast'
import { parseExp } from '../../parser/parser'
import { hindleyMilner } from '..'
import { createInitialTypeEnvironment, substituteIntoType, unify } from '../environment'
import { stringifyType } from '../utils'

export const parseAndTypeCheckExp = (exp: string) => {
  const node = parseExp(exp) as Expression
  const [type, typeConstraints] = hindleyMilner(createInitialTypeEnvironment(), node)
  const S = unify(typeConstraints)
  return stringifyType(substituteIntoType(type, S))
}
