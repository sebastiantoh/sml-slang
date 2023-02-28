import { Context, Variant } from './types';
declare const createContext: <T>(variant?: Variant, externalSymbols?: string[], externalContext?: T | undefined) => Context;
export default createContext;
