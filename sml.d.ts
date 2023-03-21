import { BuiltinFn, Value } from './types';
export declare const valueToString: (val: Value) => string;
export declare const builtinBinOperators: {
    '/': (a: Value, b: Value) => {
        tag: string;
        jsVal: number;
    };
    div: (a: Value, b: Value) => {
        tag: string;
        jsVal: number;
    };
    mod: (a: Value, b: Value) => {
        tag: string;
        jsVal: number;
    };
    '*': (a: Value, b: Value) => {
        tag: "int" | "real";
        jsVal: number;
    };
    '+': (a: Value, b: Value) => {
        tag: "int" | "real";
        jsVal: number;
    };
    '-': (a: Value, b: Value) => {
        tag: "int" | "real";
        jsVal: number;
    };
    '^': (a: Value, b: Value) => {
        tag: string;
        jsVal: string;
    };
    '::': (a: Value, b: Value) => {
        tag: string;
        jsVal: Value[];
    };
    '@': (a: Value, b: Value) => {
        tag: string;
        jsVal: Value[];
    };
    '=': (a: Value, b: Value) => {
        tag: string;
        jsVal: boolean;
    };
    '<>': (a: Value, b: Value) => {
        tag: string;
        jsVal: boolean;
    };
    '<': (a: Value, b: Value) => {
        tag: string;
        jsVal: boolean;
    };
    '>': (a: Value, b: Value) => {
        tag: string;
        jsVal: boolean;
    };
    '<=': (a: Value, b: Value) => {
        tag: string;
        jsVal: boolean;
    };
    '>=': (a: Value, b: Value) => {
        tag: string;
        jsVal: boolean;
    };
};
export declare const builtinFns: Array<BuiltinFn>;
