export type Node = Declaration | Expression | Program | Statement

interface BaseNode {
  tag: string
}

export interface Program extends BaseNode {
  tag: 'Program'
  body: Array<Statement>
}

export type Statement = Declaration

type Declaration = ValueDeclaration

export interface ValueDeclaration extends BaseNode {
  tag: 'Declaration'
  // TODO: replace anys with proper type
  sym: any
  valbind: any
}

export type Expression = Constant | InfixApplication

/**
 * Constants
 */
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
