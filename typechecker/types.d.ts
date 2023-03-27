export type Type = PrimitiveType | FunctionType | ListType | TypeVariable;
export type PrimitiveType = 'int' | 'real' | 'string' | 'char' | 'bool' | 'unit';
export interface FunctionType {
    parameterType: Type;
    returnType: Type;
}
export interface ListType {
    elementType: Type;
}
export interface TypeVariable {
    id: number;
}
export interface TypeScheme {
    type: Type;
    typeVariables: TypeVariable[];
}
export interface TypeConstraint {
    type1: Type;
    type2: Type;
}
export interface TypeSubstitution {
    from: Type;
    to: Type;
}
