import * as es from 'estree'

import { Matches } from './parser/ast'

export type Value = Int | Real | String | Char | Bool | Fn

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

type EnvironmentFrame = { [k: string]: Value }

export interface Environment {
  frame: EnvironmentFrame
  parent?: Environment
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
}

export enum Chapter {
  SML_SLANG = 1
}

export enum Variant {
  DEFAULT = 'sml-slang'
}

export interface Language {
  chapter: Chapter
  variant: Variant
}

// TODO: the following are to support the EnvVisualiser
// in the frontend. remove?
// tslint:disable:no-any
export interface EnvVisualiseFrame {
  [name: string]: any
}
export interface EnvVisualiserEnvironment {
  id: string
  name: string
  tail: EnvVisualiserEnvironment | null
  callExpression?: es.CallExpression
  head: EnvVisualiseFrame
  thisContext?: any
}
// tslint:enable:no-any
