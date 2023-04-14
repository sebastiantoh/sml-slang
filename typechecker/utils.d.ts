import { FunctionType, ListType, PrimitiveType, Type, TypeVariable } from './types';
export declare const INT_TY: PrimitiveType;
export declare const REAL_TY: PrimitiveType;
export declare const STR_TY: PrimitiveType;
export declare const CHAR_TY: PrimitiveType;
export declare const BOOL_TY: PrimitiveType;
export declare const UNIT_TY: PrimitiveType;
export declare function isInt(type: Type): boolean;
export declare function isReal(type: Type): boolean;
export declare function isStr(type: Type): boolean;
export declare function isChar(type: Type): boolean;
export declare function isBool(type: Type): boolean;
export declare function isUnit(type: Type): boolean;
export declare function isPrimitiveType(type: Type): type is PrimitiveType;
export declare function isPrimitiveTypeString(str: string): boolean;
export declare function isFunctionType(type: Type): type is FunctionType;
export declare function isListType(type: Type): type is ListType;
export declare function isTypeVariableType(type: Type): type is TypeVariable;
export declare function isSameType(fst: Type, snd: Type): boolean;
export declare function hasTypeVariable(type: Type, typeVar: TypeVariable): boolean;
export declare function makeFunctionType(...types: Type[]): FunctionType;
export declare function curryFunctionTypes(paramTypes: Type[], returnType: Type): FunctionType;
export declare function stringifyType(type: Type): string;
