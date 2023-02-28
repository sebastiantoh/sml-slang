import * as es from 'estree'

// Represents a JS value and annotates it with its SML type
// Should have a "type" field, denoting the SML type
export type Value = Int | Real | String | Char | Bool

export interface Int {
  type: 'int'
  js_val: number
}

export interface Real {
  type: 'real'
  js_val: number
}

export interface String {
  type: 'string'
  js_val: string
}

export interface Char {
  type: 'char'
  js_val: string
}

// Technically, bool is a builtin datatype defined with datatype bool = true | false;
// TODO: see if we need to fix this
export interface Bool {
  type: 'bool'
  js_val: boolean
}

export enum ErrorType {
  SYNTAX = 'Syntax',
  TYPE = 'Type',
  RUNTIME = 'Runtime'
}

export enum ErrorSeverity {
  WARNING = 'Warning',
  ERROR = 'Error'
}

// any and all errors ultimately implement this interface. as such, changes to this will affect every type of error.
export interface SourceError {
  type: ErrorType
  severity: ErrorSeverity
  location: es.SourceLocation
  explain(): string
  elaborate(): string
}

export interface Context<T = any> {
  /** All the errors gathered */
  errors: SourceError[]

  /** Runtime Sepecific state */
  runtime: {
    break: boolean
    debuggerOn: boolean
    isRunning: boolean
    // TODO: add types for env
    // environmentTree: EnvTree
    // environments: Environment[]
    nodes: es.Node[]
  }
}
