import { Matches } from './parser/ast'

// Represents a JS value and annotates it with its SML type
// Should have a "type" field, denoting the SML type
export type Value = Int | Real | String | Char | Bool | Fn | BuiltinFn

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

export interface Bool {
  type: 'bool'
  js_val: boolean
}

export interface Fn {
  type: 'fn' // not a real sml type (function should be typed based on args and return value)
  matches: Matches
  env: Environment
}

export interface BuiltinFn {
  type: 'builtin_fn'
  id: string
  apply: (arg: Value) => Value
}

type EnvironmentFrame = { [k: string]: Value }

export interface Environment {
  frame: EnvironmentFrame
  parent?: Environment
}

export interface Errored {
  status: 'errored'
  error: SourceError
}

export interface Finished {
  status: 'finished'
  // TODO: update this to sml Value and Type
  value: any
  type: any
  name?: string
}

export type Result = Finished | Errored

// used for tracking non-finished results during runtime
export type RuntimeResult = Omit<Finished, 'status'>

// TODO: merge frame and env temp types with
// EnvironmentFrame and Environment respectively
export interface FrameTemp {
  [name: string]: RuntimeResult
}

export interface EnvironmentTemp {
  id: string
  name?: string
  tail: EnvironmentTemp | null
  head: FrameTemp
}

export interface Context<T = any> {
  /** The external symbols that exist in the Context. */
  externalSymbols: string[]

  /** Runtime specific state */
  runtime: {
    isRunning: boolean
    environments: Environment[]
    // TODO: udpate to sml value?
    value: any
    nodes: Node[]
  }

  numberOfOuterEnvironments: number

  prelude: string | null

  /**
   * Used for storing external properties.
   * For e.g, this can be used to store some application-related
   * context for use in your own built-in functions (like `display(a)`)
   */
  externalContext?: T

  // typeEnvironments: TypeEnvironment[];
  // contractEnvironments: ContractEnvironment[];
}

export interface Position {
  /* >= 1 */
  line: number
  /* >= 0 */
  column: number
}

export interface SourceLocation {
  source?: string | null
  start: Position
  end: Position
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
  location: SourceLocation
  explain(): string
  elaborate(): string
}
