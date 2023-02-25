export type Node = Expression | Pattern | Declaration | Valbind | Program;
interface BaseNode {
    tag: string;
}
/**
 * Expressions
 */
export type Expression = Constant | InfixApplication;
export type Constant = IntConstant | FloatConstant | StringConstant | CharConstant;
export interface IntConstant extends BaseNode {
    tag: 'IntConstant';
    val: number;
}
export interface FloatConstant extends BaseNode {
    tag: 'FloatConstant';
    val: number;
}
export interface StringConstant extends BaseNode {
    tag: 'StringConstant';
    val: string;
}
export interface CharConstant extends BaseNode {
    tag: 'CharConstant';
    val: string;
}
export interface InfixApplication extends BaseNode {
    tag: 'InfixApplication';
    operand1: Expression;
    operand2: Expression;
    id: string;
}
/**
 * Patterns
 */
export type Pattern = Constant | Variable;
export interface Variable extends BaseNode {
    tag: 'Variable';
    id: string;
}
/**
 * Declarations
 */
export type Declaration = ValueDeclaration | FunctionDeclaration;
export interface ValueDeclaration extends BaseNode {
    tag: 'ValueDeclaration';
    valbinds: Array<Valbind>;
}
export interface FunctionDeclaration extends BaseNode {
    tag: 'FunctionDeclaration';
    funbind: any;
}
export interface Valbind extends BaseNode {
    tag: 'Valbind';
    is_rec: boolean;
    pat: Pattern;
    exp: Expression;
}
/**
 * Program
 */
export interface Program extends BaseNode {
    tag: 'Program';
    body: Array<Declaration>;
}
export {};
