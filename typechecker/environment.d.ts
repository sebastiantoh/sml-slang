import { Declaration } from '../parser/ast';
import { Type, TypeConstraint, TypeScheme, TypeSubstitution, TypeVariable } from './types';
export type TypeEnvironment = {
    [k: string]: TypeScheme;
};
export declare function freshTypeVariable(): TypeVariable;
export declare function createInitialTypeEnvironment(): TypeEnvironment;
export declare function getTypeSchemeFromEnv(env: TypeEnvironment, id: string): TypeScheme;
export declare function extendTypeEnv(env: TypeEnvironment, decs: Declaration[]): TypeEnvironment;
export declare function getPrimitiveFuncTypes(env: TypeEnvironment, id: string): [Type, Type, Type];
export declare function instantiate(typeScheme: TypeScheme): Type;
export declare function unify(C: TypeConstraint[]): TypeSubstitution[];
export declare function substituteIntoType(type: Type, S: TypeSubstitution[]): Type;
