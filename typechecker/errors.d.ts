import { Node } from '../parser/ast';
import { ErrorSeverity, ErrorType, SourceError, SourceLocation } from '../types';
import { Type } from './types';
export declare const UNKNOWN_LOCATION: SourceLocation;
export declare class TypeError implements SourceError {
    node: Node;
    type: ErrorType;
    severity: ErrorSeverity;
    constructor(node: Node);
    get location(): SourceLocation;
    explain(): string;
    elaborate(): string;
}
export declare class TypeMismatchError extends TypeError {
    node: Node;
    expected: Type;
    got: Type;
    constructor(node: Node, expected: Type, got: Type);
    explain(): string;
    elaborate(): string;
}
export declare class CustomSourceError implements SourceError {
    node: Node;
    message: string;
    type: ErrorType;
    severity: ErrorSeverity;
    constructor(node: Node, message: string);
    get location(): SourceLocation;
    explain(): string;
    elaborate(): string;
}
export declare class RuntimeError implements SourceError {
    message: string;
    type: ErrorType;
    severity: ErrorSeverity;
    constructor(message: string);
    get location(): SourceLocation;
    explain(): string;
    elaborate(): string;
}
export declare class ParseError implements SourceError {
    loc: SourceLocation;
    message: string;
    type: ErrorType;
    severity: ErrorSeverity;
    constructor(loc: SourceLocation, message: string);
    get location(): SourceLocation;
    explain(): string;
    elaborate(): string;
}
