import { MatchType, PrimitiveType, Type } from './types'

export const INT_TY: PrimitiveType = 'int'
export const REAL_TY: PrimitiveType = 'real'
export const STR_TY: PrimitiveType = 'string'
export const CHAR_TY: PrimitiveType = 'char'
export const BOOL_TY: PrimitiveType = 'bool'
export const UNIT_TY: PrimitiveType = 'unit'

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

export function isMatchType(type: Type): type is MatchType {
  return (
    (type as MatchType).parameterType !== undefined && (type as MatchType).returnType !== undefined
  )
}

export function isSameType(fst: Type, snd: Type): boolean {
  if (isMatchType(fst) && isMatchType(snd)) {
    const isSameParamType = isSameType(fst.parameterType, snd.parameterType)
    const isSameReturnType = isSameType(fst.returnType, snd.returnType)
    return isSameParamType && isSameReturnType
  }
  return isPrimitiveType(fst) && isPrimitiveType(snd) && fst === snd
}

/* FunctionType helpers */

// given types t0 t1 t2 .... tN, create a function type of
// form: fun t0 -> fun t1 -> fun t2 -> ... -> tN
export function makeMatchType(...types: Type[]): MatchType {
  const parameterTypes = types.slice(0, -1)
  const returnType = types[types.length - 1]
  return curryMatchTypes(parameterTypes, returnType)
}

// convert match type of format: x0 x1 x2 .... -> xN
// to: x0 -> x1 -> x2 -> ..... -> xN
export function curryMatchTypes(paramTypes: Type[], returnType: Type): MatchType {
  let tmpType = returnType
  for (let i = paramTypes.length - 1; i >= 0; i--) {
    tmpType = {
      parameterType: paramTypes[i],
      returnType: tmpType
    }
  }
  return tmpType as MatchType
}

/* Prettifiers */

export function stringifyType(type: Type | Type[]): string {
  if (Array.isArray(type)) {
    return type.map(stringifyType).join(' or ')
  }
  if (isPrimitiveType(type)) {
    return type.toString()
  }
  let parameterType = stringifyType(type.parameterType)
  if (isMatchType(type.parameterType)) {
    parameterType = `(${parameterType})`
  }
  return `${parameterType} -> ${stringifyType(type.returnType)}`
}
