import { Node } from '../parser/ast';
import * as Sml from '../sml';
type EnvironmentFrame = {
    [k: string]: Sml.Value;
};
export interface Environment {
    frame: EnvironmentFrame;
    parent?: Environment;
}
export declare function evaluate(node: Node): Sml.Value;
export {};
