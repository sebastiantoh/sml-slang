import { FunctionType, ListType, PrimitiveType, Type, TypeVariable } from './types'

export const INT_TY: PrimitiveType = 'int'
export const REAL_TY: PrimitiveType = 'real'
export const STR_TY: PrimitiveType = 'string'
export const CHAR_TY: PrimitiveType = 'char'
export const BOOL_TY: PrimitiveType = 'bool'
export const UNIT_TY: PrimitiveType = 'unit'
export const DUMMY_TYPE_VAR_TY: TypeVariable = { id: 0 }

/* Checking Type helpers */

export function isInt(type: Type): boolean {
  return type === INT_TY
}

export function isReal(type: Type): boolean {
  return type === REAL_TY
}

export function isStr(type: Type): boolean {
  return type === STR_TY
}

export function isChar(type: Type): boolean {
  return type === CHAR_TY
}

export function isBool(type: Type): boolean {
  return type === BOOL_TY
}

export function isUnit(type: Type): boolean {
  return type === UNIT_TY
}

export function isPrimitiveType(type: Type): type is PrimitiveType {
  return [type].some(isInt || isReal || isStr || isChar || isBool || isUnit)
}

export function isFunctionType(type: Type): type is FunctionType {
  return (
    (type as FunctionType).parameterType !== undefined &&
    (type as FunctionType).returnType !== undefined
  )
}

export function isListType(type: Type): type is ListType {
  return (type as ListType).elementType !== undefined
}

export function isTypeVariableType(type: Type): type is TypeVariable {
  return (type as TypeVariable).id !== undefined
}

export function isSameType(fst: Type, snd: Type): boolean {
  if (isFunctionType(fst) && isFunctionType(snd)) {
    const isSameParamType = isSameType(fst.parameterType, snd.parameterType)
    const isSameReturnType = isSameType(fst.returnType, snd.returnType)
    return isSameParamType && isSameReturnType
  }
  return isPrimitiveType(fst) && isPrimitiveType(snd) && fst === snd
}

/* FunctionType helpers */

// given types t0 t1 t2 .... tN, create a function type of
// form: fun t0 -> fun t1 -> fun t2 -> ... -> tN
export function makeFunctionType(...types: Type[]): FunctionType {
  const parameterTypes = types.slice(0, -1)
  const returnType = types[types.length - 1]
  return curryFunctionTypes(parameterTypes, returnType)
}

// convert match type of format: x0 x1 x2 .... -> xN
// to: x0 -> x1 -> x2 -> ..... -> xN
export function curryFunctionTypes(paramTypes: Type[], returnType: Type): FunctionType {
  let tmpType = returnType
  for (let i = paramTypes.length - 1; i >= 0; i--) {
    tmpType = {
      parameterType: paramTypes[i],
      returnType: tmpType
    }
  }
  return tmpType as FunctionType
}

/* Prettifiers */

export function stringifyType(type: Type): string {
  if (isPrimitiveType(type)) {
    return type.toString()
  }
  if (isListType(type)) {
    return `${stringifyType(type.elementType)} list`
  }
  if (isTypeVariableType(type)) {
    // TODO: change this to 'a, 'b, ....
    return `t${type.id}`
  }
  let parameterType = stringifyType(type.parameterType)
  if (isFunctionType(type.parameterType)) {
    parameterType = `(${parameterType})`
  }
  return `${parameterType} -> ${stringifyType(type.returnType)}`
}
