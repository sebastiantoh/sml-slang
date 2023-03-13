import { Node } from '../parser/ast'
import { Type } from './types'

const UNIT_TYPE: Type = 'unit'

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
  return UNIT_TYPE
}
