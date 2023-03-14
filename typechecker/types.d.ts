export type Type = PrimitiveType | MatchType;
export type PrimitiveType = 'int' | 'real' | 'string' | 'char' | 'bool' | 'unit';
export interface MatchType {
    parameterType: Type;
    returnType: Type;
}
