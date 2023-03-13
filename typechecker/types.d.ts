export type Type = PrimitiveType | FunctionType;
export type PrimitiveType = 'int' | 'real' | 'string' | 'char' | 'bool' | 'unit';
export interface FunctionType {
    parameterType: Type;
    returnType: Type;
}
