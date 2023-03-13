import { FunctionType, Type } from './types';
export declare function makeFunctionType(...types: Type[]): FunctionType;
export declare function curryFuncionTypes(paramTypes: Type[], returnType: Type): FunctionType;
