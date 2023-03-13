import { FunctionType, Type } from './types'

// given types t0 t1 t2 .... tN, create a function type of
// form: fun t0 -> fun t1 -> fun t2 -> ... -> tN
export function makeFunctionType(...types: Type[]): FunctionType {
  const parameterTypes = types.slice(0, -1)
  const returnType = types[types.length - 1]
  return curryFuncionTypes(parameterTypes, returnType)
}

// convert function type of format: fun x0 x1 x2 .... -> xN
// to: fun x0 -> fun x1 -> fun x2 -> ..... -> xN
export function curryFuncionTypes(paramTypes: Type[], returnType: Type): FunctionType {
  let tmpType = returnType
  for (let i = paramTypes.length - 1; i >= 0; i--) {
    tmpType = {
      parameterType: paramTypes[i],
      returnType: tmpType
    }
  }
  return tmpType as FunctionType
}
