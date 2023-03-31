import { Node } from '../parser/ast'
import {
  extendTypeEnv,
  extendTypeEnvFromPattern,
  freshTypeVariable,
  getPrimitiveFuncTypes,
  getTypeSchemeFromEnv,
  instantiate,
  TypeEnvironment,
  unifyAndSubstitute
} from './environment'
import { CustomSourceError } from './errors'
import { Type, TypeConstraint } from './types'
import { BOOL_TY, UNIT_TY } from './utils'

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
    case 'ExpVariable': {
      const ts = getTypeSchemeFromEnv(env, node)
      return [instantiate(ts), []]
    }
    // Application
    case 'Application': {
      const t = freshTypeVariable()
      const [t1, C1] = hindleyMilner(env, node.fn)
      const [t2, C2] = hindleyMilner(env, node.arg)
      const constraints = [...C1, ...C2, { type1: t1, type2: { parameterType: t2, returnType: t } }]
      const solvedType = unifyAndSubstitute(t, constraints)
      return [solvedType, constraints]
    }
    // Infix Application
    case 'InfixApplication': {
      const [t1, t2, t3] = getPrimitiveFuncTypes(env, node)
      const [t4, C1] = hindleyMilner(env, node.operand1)
      const [t5, C2] = hindleyMilner(env, node.operand2)
      const constraints = [...C1, ...C2, { type1: t1, type2: t4 }, { type1: t2, type2: t5 }]
      const solvedType = unifyAndSubstitute(t3, constraints)
      return [solvedType, constraints]
    }
    // List
    case 'ListLiteral': {
      const t = freshTypeVariable()
      let C: TypeConstraint[] = []
      for (const el of node.elements) {
        const [tmp_ty, tmp_C] = hindleyMilner(env, el)
        C = [...C, ...tmp_C, { type1: t, type2: tmp_ty }]
      }
      const solvedType = unifyAndSubstitute({ elementType: t }, C)
      return [solvedType, C]
    }
    // Let Expression
    case 'LetExpression': {
      const extendedEnv = extendTypeEnv(env, node.decs)
      let t: Type = UNIT_TY
      let C: TypeConstraint[] = []
      for (const exp of node.exps) {
        ;[t, C] = hindleyMilner(extendedEnv, exp)
      }
      const solvedType = unifyAndSubstitute(t, C)
      return [solvedType, C]
    }
    // Expression Sequence
    case 'ExpSequence': {
      let t: Type = UNIT_TY
      let C: TypeConstraint[] = []
      for (const exp of node.exps) {
        ;[t, C] = hindleyMilner(env, exp)
      }
      const solvedType = unifyAndSubstitute(t, C)
      return [solvedType, C]
    }
    // Conditional
    case 'ConditionalExpression': {
      const t = freshTypeVariable()
      const [t1, C1] = hindleyMilner(env, node.pred)
      const [t2, C2] = hindleyMilner(env, node.consequent)
      const [t3, C3] = hindleyMilner(env, node.alternative)
      const constraints = [
        ...C1,
        ...C2,
        ...C3,
        { type1: t1, type2: BOOL_TY },
        { type1: t, type2: t2 },
        { type1: t, type2: t3 }
      ]
      const solvedType = unifyAndSubstitute(t, constraints)
      return [solvedType, constraints]
    }
    // Function
    case 'Function': {
      const parameterType = freshTypeVariable()
      const returnType = freshTypeVariable()
      const funTy = { parameterType, returnType }
      const constraints: TypeConstraint[] = []

      for (const { pat, exp } of node.matches) {
        const [patTy, patConstraints] = hindleyMilner(env, pat)
        const extendedEnv = extendTypeEnvFromPattern(env, pat, patTy)
        const [expTy, expConstraints] = hindleyMilner(extendedEnv, exp)

        constraints.push(
          ...patConstraints,
          ...expConstraints,
          { type1: parameterType, type2: patTy },
          { type1: returnType, type2: expTy }
        )
      }
      const solvedType = unifyAndSubstitute(funTy, constraints)
      return [solvedType, constraints]
    }

    /* Patterns */
    // For wildcard and variables, we are not able to infer any more information
    case 'Wildcard':
    case 'PatVariable': {
      const t = freshTypeVariable()
      return [t, []]
    }
    case 'InfixConstruction': {
      // we only support ::
      if (node.id !== '::') {
        throw new CustomSourceError(node, `${node.id} is not a supported constructor`)
      }
      const t = freshTypeVariable()
      const [t1, C1] = hindleyMilner(env, node.pat1)
      const [t2, C2] = hindleyMilner(env, node.pat2)
      const tList = { elementType: t }

      const constraints = [...C1, ...C2, { type1: t1, type2: t }, { type1: t2, type2: tList }]
      const solvedType = unifyAndSubstitute(tList, constraints)
      return [solvedType, constraints]
    }
    case 'ListPattern': {
      const t = freshTypeVariable()
      const tList = { elementType: t }
      const constraints: TypeConstraint[] = []
      for (const pat of node.elements) {
        const [elementTy, elementConstraints] = hindleyMilner(env, pat)
        constraints.push(...elementConstraints, { type1: elementTy, type2: t })
      }
      const solvedType = unifyAndSubstitute(tList, constraints)
      return [solvedType, constraints]
    }

    /* Programs */
    case 'Program': {
      // suffices to typecheck declarations in the program
      const _ = extendTypeEnv(env, node.body)
      return [UNIT_TY, []]
    }

    default: {
      throw new CustomSourceError(node, `${node.tag} not implemented`)
    }
  }
}
