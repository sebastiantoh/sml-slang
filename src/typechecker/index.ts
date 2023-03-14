import { Node } from '../parser/ast'
import { Type } from './types'
import { UNIT_TY } from './utils'

export function typeCheck(node: Node): Type {
  switch (node.tag) {
    /* Constants */
    case 'IntConstant':
    case 'RealConstant':
    case 'StringConstant':
    case 'CharConstant':
    case 'BoolConstant':
    case 'UnitConstant':
      return node.type
  }
  return UNIT_TY
}
