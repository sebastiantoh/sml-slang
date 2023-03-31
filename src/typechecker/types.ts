import { Node } from '../parser/ast'

export type Type = PrimitiveType | FunctionType | ListType | TypeVariable

export type PrimitiveType = 'int' | 'real' | 'string' | 'char' | 'bool' | 'unit'

// to simplify typechecking, we curry multi param funcs
export interface FunctionType {
  parameterType: Type
  returnType: Type
}

export interface ListType {
  elementType: Type
}

// 0: 'a, 1: 'b, ....
// can format nicely when printing
export interface TypeVariable {
  id: number
}

export interface TypeScheme {
  type: Type
  typeVariables: TypeVariable[]
}

// represents type1 = type2
export interface TypeConstraint {
  type1: Type
  type2: Type
  node: Node
}

// represents a type substitution {to / from}
export interface TypeSubstitution {
  from: Type
  to: Type
}
