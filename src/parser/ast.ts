export type Node = Declaration | Expression | Program | Statement

// TODO: grammar online doesn't seem to include booleans?
export type Primitive = number | string | boolean

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

export interface Constant extends BaseNode {
  type: 'Constant'
  val: Primitive
}

export interface InfixApplication extends BaseNode {
  type: 'InfixApplication'
  operand1: Expression
  operand2: Expression
  id: string
}
