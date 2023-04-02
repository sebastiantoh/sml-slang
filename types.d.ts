import { Match } from './parser/ast';
import { TypeEnvironment } from './typechecker/environment';
import { Type } from './typechecker/types';
export type Value = Int | Real | String | Char | Bool | Unit | Fn | BuiltinFn | List;
export interface Int {
    tag: 'int';
    jsVal: Readonly<number>;
}
export interface Real {
    tag: 'real';
    jsVal: Readonly<number>;
}
export interface String {
    tag: 'string';
    jsVal: Readonly<string>;
}
export interface Char {
    tag: 'char';
    jsVal: Readonly<string>;
}
export interface Bool {
    tag: 'bool';
    jsVal: Readonly<boolean>;
}
export interface Unit {
    tag: 'unit';
}
export interface List {
    tag: 'list';
    jsVal: Readonly<Value[]>;
}
export interface Fn {
    tag: 'fn';
    matches: Match[];
    env: Environment;
}
export interface BuiltinFn {
    tag: 'builtin_fn';
    id: string;
    apply: (arg: Value) => Value;
}
type EnvironmentFrame = {
    [k: string]: Value;
};
export interface Environment {
    frame: EnvironmentFrame;
    parent?: Environment;
}
export interface Errored {
    status: 'errored';
    error: SourceError;
}
export interface Finished {
    status: 'finished';
    stdout: string[];
    value?: Value;
    type?: Type;
    name?: string;
}
export type Result = Finished | Errored;
export type RuntimeResult = Omit<Finished, 'status'>;
export interface Context<T = any> {
    /** The external symbols that exist in the Context. */
    externalSymbols: string[];
    /** Runtime specific state */
    runtime: {
        isRunning: boolean;
        environments: Environment[];
        value: any;
        nodes: Node[];
    };
    numberOfOuterEnvironments: number;
    prelude: string | null;
    /**
     * Used for storing external properties.
     * For e.g, this can be used to store some application-related
     * context for use in your own built-in functions (like `display(a)`)
     */
    externalContext?: T;
    typeEnvironments: TypeEnvironment;
}
export interface Position {
    line: number;
    column: number;
}
export interface SourceLocation {
    source?: string | null;
    start: Position;
    end: Position;
}
export declare enum ErrorType {
    SYNTAX = "Syntax",
    TYPE = "Type",
    RUNTIME = "Runtime"
}
export declare enum ErrorSeverity {
    WARNING = "Warning",
    ERROR = "Error"
}
export interface SourceError {
    type: ErrorType;
    severity: ErrorSeverity;
    location: SourceLocation;
    explain(): string;
    elaborate(): string;
}
export {};
