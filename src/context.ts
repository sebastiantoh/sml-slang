import { INIT_ENV } from './typechecker'
import { Context } from './types'

const createEmptyRuntime = (): Context['runtime'] => ({
  isRunning: false,
  environments: [],
  value: undefined,
  nodes: []
})

const createEmptyContext = <T>(externalSymbols: string[], externalContext?: T): Context<T> => {
  return {
    externalSymbols,
    externalContext,
    runtime: createEmptyRuntime(),
    numberOfOuterEnvironments: 1,
    prelude: null,
    typeEnvironments: INIT_ENV
  }
}

// currently used by the frontend, can update the way its called
const createContext = <T>(externalSymbols: string[] = [], externalContext?: T): Context => {
  return createEmptyContext(externalSymbols, externalContext)
}

export default createContext
