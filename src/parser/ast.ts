export type Node =
  | Expression
  | Match
  | Matches
  | Pattern
  | Declaration
  | DeclarationSequence
  | Valbind
  | Program

interface BaseNode {
  tag: string
}

/**
 * Expressions
 */
export type Expression =
  | Constant
  | InfixApplication
  | LetExpression
  | BinaryLogicalOperator
  | ConditionalExpression
  | Function

export type Constant = IntConstant | FloatConstant | StringConstant | CharConstant | BoolConstant
export interface IntConstant extends BaseNode {
  tag: 'IntConstant'
  val: number
}
export interface FloatConstant extends BaseNode {
  tag: 'FloatConstant'
  val: number
}
export interface StringConstant extends BaseNode {
  tag: 'StringConstant'
  val: string
}
export interface CharConstant extends BaseNode {
  tag: 'CharConstant'
  val: string
}
export interface BoolConstant extends BaseNode {
  tag: 'BoolConstant'
  val: boolean
}

export interface InfixApplication extends BaseNode {
  tag: 'InfixApplication'
  operand1: Expression
  operand2: Expression
  id: string
}

export interface LetExpression extends BaseNode {
  tag: 'LetExpression'
  decSequence: DeclarationSequence
  exps: Array<Expression>
}

export interface BinaryLogicalOperator extends BaseNode {
  tag: 'BinaryLogicalOperator'
  operand1: Expression
  operand2: Expression
  id: 'andalso' | 'orelse'
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
export type Pattern = Constant | Variable

export interface Variable extends BaseNode {
  tag: 'Variable'
  id: string
}

/**
 * Declarations
 */
export interface DeclarationSequence extends BaseNode {
  tag: 'DeclarationSequence'
  decs: Array<Declaration>
}
export type Declaration = ValueDeclaration | FunctionDeclaration

export interface ValueDeclaration extends BaseNode {
  tag: 'ValueDeclaration'
  valbinds: Array<Valbind>
}

export interface FunctionDeclaration extends BaseNode {
  tag: 'FunctionDeclaration'
  funbind: any // TODO: replace this with proper type
}

export interface Valbind extends BaseNode {
  tag: 'Valbind'
  is_rec: boolean
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
