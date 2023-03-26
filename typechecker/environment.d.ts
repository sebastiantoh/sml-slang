import { Declaration } from '../parser/ast';
import { Type, TypeScheme, TypeVariable } from './types';
export type TypeEnvironment = {
    [k: string]: TypeScheme;
};
export declare function createInitialTypeEnvironment(): TypeEnvironment;
export declare function getTypeSchemeFromEnv(env: TypeEnvironment, id: string): TypeScheme;
export declare function extendTypeEnv(env: TypeEnvironment, decs: Declaration[]): TypeEnvironment;
export declare function freshTypeVariable(): TypeVariable;
export declare function instantiate(typeScheme: TypeScheme): Type;
