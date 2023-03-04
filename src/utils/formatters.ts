import { Finished } from '../types'

// TODO: update formatter
export function formatFinishedForRepl(result: Finished): string {
  return result.value.toString()
}
