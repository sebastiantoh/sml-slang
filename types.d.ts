import * as es from 'estree';
import { Matches } from './parser/ast';
export type Value = Int | Real | String | Char | Bool | Fn;
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
export interface Fn {
    type: 'fn';
    matches: Matches;
    env: Environment;
}
type EnvironmentFrame = {
    [k: string]: Value;
};
export interface Environment {
    frame: EnvironmentFrame;
    parent?: Environment;
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
    location: es.SourceLocation;
    explain(): string;
    elaborate(): string;
}
export interface Context<T = any> {
    /** All the errors gathered */
    errors: SourceError[];
}
export declare enum Chapter {
    SML_SLANG = 1
}
export declare enum Variant {
    DEFAULT = "sml-slang"
}
export interface Language {
    chapter: Chapter;
    variant: Variant;
}
export interface EnvVisualiseFrame {
    [name: string]: any;
}
export interface EnvVisualiserEnvironment {
    id: string;
    name: string;
    tail: EnvVisualiserEnvironment | null;
    callExpression?: es.CallExpression;
    head: EnvVisualiseFrame;
    thisContext?: any;
}
export {};
