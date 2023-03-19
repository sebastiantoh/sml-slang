import { Matches } from './parser/ast'
import { TypeEnvironment } from './typechecker/environment'

export type Value = Int | Real | String | Char | Bool | Unit | Fn | BuiltinFn | List

// TODO: eventually these types can be removed?
// ast typechecking wld have ensure type safety alr
// so shd be fine to remove all types here and all
// type assertions in the interpreter
export interface Int {
  tag: 'int'
  js_val: Readonly<number>
}

export interface Real {
  tag: 'real'
  js_val: Readonly<number>
}

export interface String {
  tag: 'string'
  js_val: Readonly<string>
}

export interface Char {
  tag: 'char'
  js_val: Readonly<string>
}

export interface Bool {
  tag: 'bool'
  js_val: Readonly<boolean>
}

export interface Unit {
  tag: 'unit'
}

export interface List {
  tag: 'list'
  js_val: Readonly<Value[]>
}

export interface Fn {
  tag: 'fn'
  matches: Matches
  env: Environment
}

export interface BuiltinFn {
  tag: 'builtin_fn'
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
    environments: EnvironmentTemp[]
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

  typeEnvironments: TypeEnvironment
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
