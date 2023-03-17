import { Node } from '../parser/ast'
import { typeCheckConditional } from './expressions'
import { Type } from './types'
import { UNIT_TY } from './utils'

export function typeCheck(node: Node): Type {
  switch (node.tag) {
    /* Constant */
    case 'IntConstant':
    case 'RealConstant':
    case 'StringConstant':
    case 'CharConstant':
    case 'BoolConstant':
    case 'UnitConstant':
      return node.type
    /* Application */
    /* InfixApplication */
    /* ExpSequence */
    /* LetExpression */
    /* ConditionalExpression */
    case 'ConditionalExpression':
      return typeCheckConditional(node)
    /* Function */
    /* Match */
    case 'Match':
      return {
        parameterType: typeCheck(node.pat),
        returnType: typeCheck(node.exp)
      }
  }
  return UNIT_TY
}
