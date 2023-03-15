import { BuiltinFn, Value } from './types';
export declare const valueToString: (sml_val: Value) => string;
export declare const builtinBinOperators: {
    '/': (a: Value, b: Value) => {
        tag: string;
        js_val: number;
    };
    div: (a: Value, b: Value) => {
        tag: string;
        js_val: number;
    };
    mod: (a: Value, b: Value) => {
        tag: string;
        js_val: number;
    };
    '*': (a: Value, b: Value) => {
        tag: "int" | "real";
        js_val: number;
    };
    '+': (a: Value, b: Value) => {
        tag: "int" | "real";
        js_val: number;
    };
    '-': (a: Value, b: Value) => {
        tag: "int" | "real";
        js_val: number;
    };
    '^': (a: Value, b: Value) => {
        tag: string;
        js_val: string;
    };
    '=': (a: Value, b: Value) => {
        tag: string;
        js_val: boolean;
    };
    '<>': (a: Value, b: Value) => {
        tag: string;
        js_val: boolean;
    };
    '<': (a: Value, b: Value) => {
        tag: string;
        js_val: boolean;
    };
    '>': (a: Value, b: Value) => {
        tag: string;
        js_val: boolean;
    };
    '<=': (a: Value, b: Value) => {
        tag: string;
        js_val: boolean;
    };
    '>=': (a: Value, b: Value) => {
        tag: string;
        js_val: boolean;
    };
    andalso: (a: Value, b: Value) => {
        tag: string;
        js_val: boolean;
    };
    orelse: (a: Value, b: Value) => {
        tag: string;
        js_val: boolean;
    };
};
export declare const builtinFns: Array<BuiltinFn>;
