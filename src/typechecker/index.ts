import { Node } from '../parser/ast'
import {
  extendTypeEnv,
  freshTypeVariable,
  getTypeSchemeFromEnv,
  instantiate,
  TypeEnvironment
} from './environment'
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
    case 'UnitConstant': {
      return [node.type, []]
    }
    // Variable
    case 'Variable': {
      const ts = getTypeSchemeFromEnv(env, node.id)
      return [instantiate(ts), []]
    }
    // Application
    case 'Application': {
      const t = freshTypeVariable()
      const [t1, C1] = hindleyMilner(env, node.fn)
      const [t2, C2] = hindleyMilner(env, node.arg)
      return [t, [...C1, ...C2, { type1: t1, type2: { parameterType: t2, returnType: t } }]]
    }
    // List
    case 'ListLiteral': {
      const t = freshTypeVariable()
      let C: TypeConstraint[] = []
      for (const el of node.elements) {
        const [tmp_ty, tmp_C] = hindleyMilner(env, el)
        C = [...C, ...tmp_C, { type1: t, type2: tmp_ty }]
      }
      return [t, C]
    }
    // Let Expression
    case 'LetExpression': {
      const extendedEnv = extendTypeEnv(env, node.decs)
      let t: Type = UNIT_TY
      let C: TypeConstraint[] = []
      for (const exp of node.exps) {
        [t, C] = hindleyMilner(extendedEnv, exp)
      }
      return [t, C]
    }
    // Expression Sequence
    case 'ExpSequence': {
      let t: Type = UNIT_TY
      let C: TypeConstraint[] = []
      for (const exp of node.exps) {
        [t, C] = hindleyMilner(env, exp)
      }
      return [t, C]
    }
  }

  return [UNIT_TY, []]
}
