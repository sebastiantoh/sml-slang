import { Node, TypeAstNode } from '../parser/ast'
import {
  createInitialTypeEnvironment,
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
import { PrimitiveType, Type, TypeConstraint } from './types'
import { BOOL_TY, UNIT_TY } from './utils'

function genAnnotations(node: Node, t: Type): TypeConstraint[] {
  if (!('annotated_type' in node) || node.annotated_type == undefined) return []

  function getAnnotationType(annotation: TypeAstNode): Type {
    switch (annotation.tag) {
      case 'TypeVariable':
        // Currently all possible cases are primitive type?
        return annotation.id as PrimitiveType
      case 'TypeFunction':
        return {
          parameterType: getAnnotationType(annotation.argTy),
          returnType: getAnnotationType(annotation.retTy)
        }
      case 'TypeConstructor':
        switch (annotation.id) {
          // TODO: check if this is exhaustive
          case 'list':
            return { elementType: getAnnotationType(annotation.typeParameters[0]) }
          default:
            return annotation.id as PrimitiveType
        }
      default:
        throw new Error('Not implemented')
    }
  }

  return [{ type1: getAnnotationType(node.annotated_type), type2: t, node }]
}

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
      return [node.type, genAnnotations(node, node.type)]
    }
    // Variable
    case 'ExpVariable': {
      const ts = getTypeSchemeFromEnv(env, node)
      const t = instantiate(ts)
      return [t, genAnnotations(node, t)]
    }
    // Application
    case 'Application': {
      const t = freshTypeVariable()
      const [t1, C1] = hindleyMilner(env, node.fn)
      const [t2, C2] = hindleyMilner(env, node.arg)
      const constraints = [
        ...C1,
        ...C2,
        { type1: t1, type2: { parameterType: t2, returnType: t }, node }
      ]
      const solvedType = unifyAndSubstitute(t, constraints)
      return [solvedType, [...constraints, ...genAnnotations(node, solvedType)]]
    }
    // Infix Application
    case 'InfixApplication': {
      const [t1, t2, t3] = getPrimitiveFuncTypes(env, node)
      const [t4, C1] = hindleyMilner(env, node.operand1)
      const [t5, C2] = hindleyMilner(env, node.operand2)
      const constraints = [
        ...C1,
        ...C2,
        { type1: t1, type2: t4, node: node.operand1 },
        { type1: t2, type2: t5, node: node.operand2 }
      ]
      const solvedType = unifyAndSubstitute(t3, constraints)
      return [solvedType, [...constraints, ...genAnnotations(node, solvedType)]]
    }
    // List
    case 'ListLiteral': {
      const t = freshTypeVariable()
      let C: TypeConstraint[] = []
      for (const el of node.elements) {
        const [tmp_ty, tmp_C] = hindleyMilner(env, el)
        C = [...C, ...tmp_C, { type1: t, type2: tmp_ty, node: el }]
      }
      const solvedType = unifyAndSubstitute({ elementType: t }, C)
      return [solvedType, [...C, ...genAnnotations(node, solvedType)]]
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
      return [solvedType, [...C, ...genAnnotations(node, solvedType)]]
    }
    // Expression Sequence
    case 'ExpSequence': {
      let t: Type = UNIT_TY
      let C: TypeConstraint[] = []
      for (const exp of node.exps) {
        ;[t, C] = hindleyMilner(env, exp)
      }
      const solvedType = unifyAndSubstitute(t, C)
      return [solvedType, [...C, ...genAnnotations(node, solvedType)]]
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
        { type1: t1, type2: BOOL_TY, node: node.pred },
        { type1: t, type2: t2, node: node.consequent },
        { type1: t, type2: t3, node: node.alternative }
      ]
      const solvedType = unifyAndSubstitute(t, constraints)
      return [solvedType, [...constraints, ...genAnnotations(node, solvedType)]]
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
          { type1: parameterType, type2: patTy, node: pat },
          { type1: returnType, type2: expTy, node: exp }
        )
      }
      const solvedType = unifyAndSubstitute(funTy, constraints)
      return [solvedType, [...constraints, ...genAnnotations(node, solvedType)]]
    }

    /* Patterns */
    // For wildcard and variables, we are not able to infer any more information
    case 'Wildcard':
    case 'PatVariable': {
      const t = freshTypeVariable()
      return [t, genAnnotations(node, t)]
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

      const constraints = [
        ...C1,
        ...C2,
        { type1: t1, type2: t, node: node.pat1 },
        { type1: t2, type2: tList, node: node.pat2 }
      ]
      const solvedType = unifyAndSubstitute(tList, constraints)
      return [solvedType, [...constraints, ...genAnnotations(node, solvedType)]]
    }
    case 'ListPattern': {
      const t = freshTypeVariable()
      const tList = { elementType: t }
      const constraints: TypeConstraint[] = []
      for (const pat of node.elements) {
        const [elementTy, elementConstraints] = hindleyMilner(env, pat)
        constraints.push(...elementConstraints, { type1: elementTy, type2: t, node: pat })
      }
      const solvedType = unifyAndSubstitute(tList, constraints)
      return [solvedType, [...constraints, ...genAnnotations(node, solvedType)]]
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

export function typeCheck(node: Node) {
  const [type, typeConstraints] = hindleyMilner(INIT_ENV, node)
  return unifyAndSubstitute(type, typeConstraints)
}

export const INIT_ENV = createInitialTypeEnvironment()
