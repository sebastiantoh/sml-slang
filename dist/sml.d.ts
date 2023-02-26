export type Value = Int | Real | String | Char | Bool;
export interface Int {
    type: 'int';
    js_val: number;
}
export interface Real {
    type: 'real';
    js_val: number;
}
export interface String {
    type: 'string';
    js_val: string;
}
export interface Char {
    type: 'char';
    js_val: string;
}
export interface Bool {
    type: 'bool';
    js_val: boolean;
}
export declare const valueToString: (sml_val: Value) => string;
export declare const builtinBinOperators: {
    '/': (a: Value, b: Value) => {
        type: string;
        js_val: number;
    };
    div: (a: Value, b: Value) => {
        type: string;
        js_val: number;
    };
    mod: (a: Value, b: Value) => {
        type: string;
        js_val: number;
    };
    '*': (a: Value, b: Value) => {
        type: "int" | "real";
        js_val: number;
    };
    '+': (a: Value, b: Value) => {
        type: "int" | "real";
        js_val: number;
    };
    '-': (a: Value, b: Value) => {
        type: "int" | "real";
        js_val: number;
    };
    '^': (a: Value, b: Value) => {
        type: string;
        js_val: string;
    };
    '=': (a: Value, b: Value) => {
        type: string;
        js_val: boolean;
    };
    '<>': (a: Value, b: Value) => {
        type: string;
        js_val: boolean;
    };
    '<': (a: Value, b: Value) => {
        type: string;
        js_val: boolean;
    };
    '>': (a: Value, b: Value) => {
        type: string;
        js_val: boolean;
    };
    '<=': (a: Value, b: Value) => {
        type: string;
        js_val: boolean;
    };
    '>=': (a: Value, b: Value) => {
        type: string;
        js_val: boolean;
    };
};
