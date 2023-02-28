import { Context } from './types';
import { SourceError, Value } from './types';
export declare function run(code: string, context: Context): Value;
export declare function parseError(errors: SourceError[]): string;
