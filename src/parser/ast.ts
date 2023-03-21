import { Type } from '../typechecker/types'
import { SourceLocation } from '../types'

export type Node =
  | Expression
  | Match
  | Matches
  | Pattern
  | TypeAstNode
  | Declaration
  | DeclarationSequence
  | Valbind
  | Program

interface BaseNode {
  tag: string
  // TODO: shd this be compulsory?
  // imo maybe dont need cause we only need to know where some things are?
  // like we dont rly care where the constants are?
  loc?: SourceLocation
}

/**
 * Expressions
 */
export type Expression =
  | Constant
  | Application
  | InfixApplication
  | ExpSequence
  | LetExpression
  | ConditionalExpression
  | Function
  | ListLiteral

export type Constant =
  | IntConstant
  | RealConstant
  | StringConstant
  | CharConstant
  | BoolConstant
  | UnitConstant
export interface IntConstant extends BaseNode {
  tag: 'IntConstant'
  val: number
  type: 'int'
}
export interface RealConstant extends BaseNode {
  tag: 'RealConstant'
  val: number
  type: 'real'
}
export interface StringConstant extends BaseNode {
  tag: 'StringConstant'
  val: string
  type: 'string'
}
export interface CharConstant extends BaseNode {
  tag: 'CharConstant'
  val: string
  type: 'char'
}
export interface BoolConstant extends BaseNode {
  tag: 'BoolConstant'
  val: boolean
  type: 'bool'
}
export interface UnitConstant extends BaseNode {
  tag: 'UnitConstant'
  type: 'unit'
}

export interface Application extends BaseNode {
  tag: 'Application'
  fn: Expression
  arg: Expression
}

export interface InfixApplication extends BaseNode {
  tag: 'InfixApplication'
  operand1: Expression
  operand2: Expression
  id: string
}

export interface ExpSequence extends BaseNode {
  tag: 'ExpSequence'
  exps: Array<Expression>
}

export interface LetExpression extends BaseNode {
  tag: 'LetExpression'
  decSequence: DeclarationSequence
  exps: Array<Expression>
}

export interface ConditionalExpression extends BaseNode {
  tag: 'ConditionalExpression'
  pred: Expression
  consequent: Expression
  alternative: Expression
}

export interface Function extends BaseNode {
  tag: 'Function'
  matches: Matches
}

export interface ListLiteral extends BaseNode {
  tag: 'ListLiteral'
  elements: Expression[]
  arity: number
}

/**
 * Match
 */
export interface Match extends BaseNode {
  tag: 'Match'
  pat: Pattern
  exp: Expression
}
export interface Matches extends BaseNode {
  tag: 'Matches'
  matches: Array<Match>
}

/**
 * Patterns
 */
export type Pattern = Constant | Wildcard | Variable | InfixConstruction

export interface Wildcard extends BaseNode {
  tag: 'Wildcard'
}
export interface Variable extends BaseNode {
  tag: 'Variable'
  id: string
}
export interface InfixConstruction extends BaseNode {
  tag: 'InfixConstruction'
  pat1: Pattern
  pat2: Pattern
  id: string
}

/**
 * Types
 */
export type TypeAstNode = TypeVariable | TypeConstructor | TypeFunction

export interface TypeVariable extends BaseNode {
  tag: 'TypeVariable'
  id: string
}

export interface TypeConstructor extends BaseNode {
  tag: 'TypeConstructor'
  typeParameters: TypeVariable[]
  id: string
}

export interface TypeFunction extends BaseNode {
  tag: 'TypeFunction'
  argTy: TypeAstNode
  retTy: TypeAstNode
}

/**
 * Declarations
 */
export interface DeclarationSequence extends BaseNode {
  tag: 'DeclarationSequence'
  decs: Array<Declaration>
}

export type Declaration = ValueDeclaration | LocalDeclaration

export interface ValueDeclaration extends BaseNode {
  tag: 'ValueDeclaration'
  valbinds: Array<Valbind>
}

export interface LocalDeclaration extends BaseNode {
  tag: 'LocalDeclaration'
  localDecs: DeclarationSequence
  decs: DeclarationSequence
}

export interface Valbind extends BaseNode {
  tag: 'Valbind'
  isRec: boolean
  pat: Pattern
  exp: Expression
}
/**
 * Program
 */
export interface Program extends BaseNode {
  tag: 'Program'
  body: DeclarationSequence
}
