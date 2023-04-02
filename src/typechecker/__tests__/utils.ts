import { INIT_ENV } from '../..'
import { Expression } from '../../parser/ast'
import { parseExp } from '../../parser/parser'
import { hindleyMilner } from '..'
import { unifyAndSubstitute } from '../environment'
import { stringifyType } from '../utils'

export const parseAndTypeCheckExp = (exp: string) => {
  const node = parseExp(exp) as Expression
  const [type, typeConstraints] = hindleyMilner(INIT_ENV, node)
  const solvedType = unifyAndSubstitute(type, typeConstraints)
  return stringifyType(solvedType)
}
