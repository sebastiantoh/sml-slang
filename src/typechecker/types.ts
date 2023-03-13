export type Type = PrimitiveType | FunctionType

export type PrimitiveType = 'int' | 'real' | 'string' | 'char' | 'bool' | 'unit'

// to simplify typechecking, we curry multi param funcs
export interface FunctionType {
  parameterType: Type
  returnType: Type
}
