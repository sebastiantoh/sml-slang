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
