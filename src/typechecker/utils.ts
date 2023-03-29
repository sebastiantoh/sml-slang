import * as assert from 'assert'
import { uniqBy } from 'lodash'

import { FunctionType, ListType, PrimitiveType, Type, TypeVariable } from './types'

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
  return isInt(type) || isReal(type) || isStr(type) || isChar(type) || isBool(type) || isUnit(type)
}

export function isFunctionType(type: Type): type is FunctionType {
  return (
    (type as FunctionType)?.parameterType !== undefined &&
    (type as FunctionType)?.returnType !== undefined
  )
}

export function isListType(type: Type): type is ListType {
  return (type as ListType)?.elementType !== undefined
}

export function isTypeVariableType(type: Type): type is TypeVariable {
  return (type as TypeVariable)?.id !== undefined
}

export function isSameType(fst: Type, snd: Type): boolean {
  if (isFunctionType(fst) && isFunctionType(snd)) {
    const isSameParamType = isSameType(fst.parameterType, snd.parameterType)
    const isSameReturnType = isSameType(fst.returnType, snd.returnType)
    return isSameParamType && isSameReturnType
  }
  if (isListType(fst) && isListType(snd)) {
    return isSameType(fst.elementType, snd.elementType)
  }
  if (isTypeVariableType(fst) && isTypeVariableType(snd)) {
    return fst.id === snd.id
  }
  return isPrimitiveType(fst) && isPrimitiveType(snd) && fst === snd
}

// checks if type contains typeVar
export function hasTypeVariable(type: Type, typeVar: TypeVariable): boolean {
  if (isPrimitiveType(type)) {
    return false
  }
  if (isFunctionType(type)) {
    return hasTypeVariable(type.parameterType, typeVar) || hasTypeVariable(type.returnType, typeVar)
  }
  if (isListType(type)) {
    return hasTypeVariable(type.elementType, typeVar)
  }
  return type.id === typeVar.id
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

function collectTypeVars(type: Type): TypeVariable[] {
  if (isPrimitiveType(type)) {
    return []
  }
  if (isFunctionType(type)) {
    return [...collectTypeVars(type.parameterType), ...collectTypeVars(type.returnType)]
  }
  if (isListType(type)) {
    return collectTypeVars(type.elementType)
  }
  return [type]
}

/* Prettifiers */
// t0 -> 'a, t1 -> 'b, ... t25 -> 'z, t26 -> 'a1, t27 -> 'b1, ... t51 -> 'z1, t52 -> 'a2, ...
function stringifyTypeVariable(tv: TypeVariable, id: number): string {
  const ASCII_START = 97 // 'a'
  const NUM_LETTERS = 26
  const letter = String.fromCharCode(ASCII_START + (id % NUM_LETTERS))
  const number = Math.floor(id / 26)
  return `'${letter}${number === 0 ? '' : number}`
}

// we support downcasting types to the smallest identifiers
export function stringifyType(type: Type): string {
  // collect all the type variables in the type and
  // assign first type in result to 'a and so on
  const tvs = uniqBy(collectTypeVars(type), tv => tv.id)
  const tvsToStringifiedTvs = new Map(
    tvs.map((tv, idx) => [tv.id, stringifyTypeVariable(tv, idx)])
  )

  function _stringifyType(type: Type): string {
    if (isPrimitiveType(type)) {
      return type.toString()
    }
    if (isListType(type)) {
      return `${_stringifyType(type.elementType)} list`
    }
    if (isTypeVariableType(type)) {
      assert(tvsToStringifiedTvs.has(type.id))
      return tvsToStringifiedTvs.get(type.id) as string
    }
    let parameterType = _stringifyType(type.parameterType)
    if (isFunctionType(type.parameterType)) {
      parameterType = `(${parameterType})`
    }
    return `${parameterType} -> ${_stringifyType(type.returnType)}`
  }
  return _stringifyType(type)
}
