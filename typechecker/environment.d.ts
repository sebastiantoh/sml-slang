import { Type, TypeScheme } from './types';
export type TypeEnvironment = {
    [k: string]: TypeScheme;
};
export declare function createInitialTypeEnvironment(): TypeEnvironment;
export declare function getTypeSchemeFromEnv(env: TypeEnvironment, id: string): TypeScheme;
export declare function instantiate(typeScheme: TypeScheme): Type;
