import { ConditionalExpression } from '../parser/ast'
import { typeCheck } from '.'
import { TypeMismatchError } from './errors'
import { Type } from './types'
import { BOOL_TY, isBool, isSameType } from './utils'

export function typeCheckConditional(node: ConditionalExpression): Type {
  const pred = typeCheck(node.pred)
  if (!isBool(pred)) {
    throw new TypeMismatchError(node.pred, BOOL_TY, pred)
  }
  const consequent = typeCheck(node.consequent)
  const alternative = typeCheck(node.alternative)
  if (!isSameType(consequent, alternative)) {
    throw new TypeMismatchError(node.alternative, consequent, alternative)
  }
  return consequent
}
