import { Context, Variant } from './types'

// TODO: cleanup this function.
// currently used by the frontend, can update the way its called
const createContext = <T>(
  variant: Variant = Variant.DEFAULT,
  externalSymbols: string[] = [],
  externalContext?: T
): Context => {
  return {
    errors: []
  }
}

export default createContext
