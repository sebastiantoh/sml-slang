export type Type = PrimitiveType | MatchType

export type PrimitiveType = 'int' | 'real' | 'string' | 'char' | 'bool' | 'unit'

// to simplify typechecking, we curry multi param funcs
export interface MatchType {
  parameterType: Type
  returnType: Type
}
