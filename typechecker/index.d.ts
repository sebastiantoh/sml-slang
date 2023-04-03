import { Node } from '../parser/ast';
import { TypeEnvironment } from './environment';
import { Type, TypeConstraint } from './types';
export declare const INIT_ENV: TypeEnvironment;
export declare function hindleyMilner(env: TypeEnvironment, node: Node): [Type, TypeConstraint[]];
export declare function typeCheck(node: Node): Type;
