import { Node } from '../parser/ast';
import { ErrorSeverity, ErrorType, SourceError, SourceLocation } from '../types';
import { Type } from './types';
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
