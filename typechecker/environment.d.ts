import { Declaration, ExpVariable, InfixApplication, Pattern } from '../parser/ast';
import { Type, TypeConstraint, TypeScheme, TypeSubstitution, TypeVariable } from './types';
export type TypeEnvironment = {
    [k: string]: TypeScheme;
};
export declare function freshTypeVariable(): TypeVariable;
export declare function createInitialTypeEnvironment(): TypeEnvironment;
export declare function getTypeSchemeFromEnv(env: TypeEnvironment, expVar: ExpVariable): TypeScheme;
export declare function extendTypeEnv(env: TypeEnvironment, decs: Declaration[]): TypeEnvironment;
export declare function extendTypeEnvFromPattern(originalEnv: TypeEnvironment, pat: Pattern, patType: Type): TypeEnvironment;
export declare function getPrimitiveFuncTypes(env: TypeEnvironment, infixApp: InfixApplication): [Type, Type, Type];
export declare function instantiate(typeScheme: TypeScheme): Type;
export declare function unify(C: TypeConstraint[]): TypeSubstitution[];
export declare function substituteIntoType(type: Type, S: TypeSubstitution[]): Type;
export declare function unifyAndSubstitute(type: Type, typeConstraints: TypeConstraint[]): Type;
