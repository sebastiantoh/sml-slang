import { Node } from '../parser/ast'
import { getTypeSchemeFromEnv, instantiate, TypeEnvironment } from './environment'
import { Type, TypeConstraint } from './types'
import { UNIT_TY } from './utils'

export function hindleyMilner(env: TypeEnvironment, node: Node): [Type, TypeConstraint[]] {
  switch (node.tag) {
    /* Expressions */
    // Constant
    case 'IntConstant':
    case 'RealConstant':
    case 'StringConstant':
    case 'CharConstant':
    case 'BoolConstant':
    case 'UnitConstant':
      return [node.type, []]
    // Variable
    case 'Variable':
      const ts = getTypeSchemeFromEnv(env, node.id)
      return [instantiate(ts), []]
  }

  return [UNIT_TY, []]
}
