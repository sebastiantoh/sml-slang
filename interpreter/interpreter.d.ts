import { Expression, Node, Program } from '../parser/ast';
import { Value } from '../types';
export declare let stdout: Array<String>;
export declare function evaluate(node: Node): void;
export declare function evaluateExp(exp: Expression): Value;
export declare function evaluateProg(prog: Program): string;
