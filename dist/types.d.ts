import * as es from 'estree';
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
    /** Runtime Sepecific state */
    runtime: {
        break: boolean;
        debuggerOn: boolean;
        isRunning: boolean;
        nodes: es.Node[];
    };
}
