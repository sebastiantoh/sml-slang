import { Type } from './types';
type TypeEnvironmentFrame = {
    [k: string]: Type | Type[];
};
export interface TypeEnvironment {
    frame: TypeEnvironmentFrame;
    parent?: TypeEnvironment;
}
export declare function createInitialTypeEnvironments(): TypeEnvironment;
export {};
