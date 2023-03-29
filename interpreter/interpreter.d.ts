import { Expression, Node, Program } from '../parser/ast';
import { Result } from '../types';
export declare let stdout: Array<string>;
export declare function evaluate(node: Node): void;
export declare function evaluateExp(exp: Expression, outputWithType: boolean): Result;
export declare function evaluateProg(prog: Program): Result;
