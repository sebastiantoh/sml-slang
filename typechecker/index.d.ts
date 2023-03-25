import { Node } from '../parser/ast';
import { TypeEnvironment } from './environment';
import { Type, TypeConstraint } from './types';
export declare function hindleyMilner(env: TypeEnvironment, node: Node): [Type, TypeConstraint[]];
