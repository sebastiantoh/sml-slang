export type Node = Declaration | Expression | Program | Statement

interface BaseNode {
  type: string
}

export interface Program extends BaseNode {
  type: 'Program'
  body: Array<Statement>
}

export type Statement = Declaration

type Declaration = ValueDeclaration

export interface ValueDeclaration extends BaseNode {
  type: 'Declaration'
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
  type: 'IntConstant'
  val: number
}
export interface FloatConstant extends BaseNode {
  type: 'FloatConstant'
  val: number
}
export interface StringConstant extends BaseNode {
  type: 'StringConstant'
  val: string
}
export interface CharConstant extends BaseNode {
  type: 'CharConstant'
  val: string
}

export interface InfixApplication extends BaseNode {
  type: 'InfixApplication'
  operand1: Expression
  operand2: Expression
  id: string
}
