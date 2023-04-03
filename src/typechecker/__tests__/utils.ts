import { Expression } from '../../parser/ast'
import { parseExp } from '../../parser/parser'
import { typeCheck } from '..'
import { stringifyType } from '../utils'

export const parseAndTypeCheckExp = (exp: string) => {
  const node = parseExp(exp) as Expression
  const solvedType = typeCheck(node)
  return stringifyType(solvedType)
}
