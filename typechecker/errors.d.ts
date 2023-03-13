import { Node } from '../parser/ast';
import { ErrorSeverity, ErrorType, SourceError, SourceLocation } from '../types';
export declare class TypeError implements SourceError {
    node: Node;
    type: ErrorType;
    severity: ErrorSeverity;
    constructor(node: Node);
    get location(): SourceLocation;
    explain(): string;
    elaborate(): string;
}
