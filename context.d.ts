import { Context } from './types';
declare const createContext: <T>(externalSymbols?: string[], externalContext?: T | undefined) => Context;
export default createContext;
