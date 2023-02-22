export type Node = Expression | Declaration | Program

interface BaseNode {
  tag: string
}

/**
 * Expressions
 */
export type Expression = Constant | InfixApplication

export type Constant = IntConstant | FloatConstant | StringConstant | CharConstant
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

export interface InfixApplication extends BaseNode {
  tag: 'InfixApplication'
  operand1: Expression
  operand2: Expression
  id: string
}

/**
 * Declarations
 */
type Declaration = ValueDeclaration | FunctionDeclaration

export interface ValueDeclaration extends BaseNode {
  tag: 'ValueDeclaration'
  valbind: any // TODO: replace this with proper type
}

export interface FunctionDeclaration extends BaseNode {
  tag: 'FunctionDeclaration'
  funbind: any // TODO: replace this with proper type
}

/**
 * Program
 */
export interface Program extends BaseNode {
  tag: 'Program'
  body: Array<Declaration>
}
