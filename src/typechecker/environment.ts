import { Type } from './types'

export interface TypeEnvironment {
  types: Map<string, Type | Type[]>
}
