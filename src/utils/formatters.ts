import * as Sml from '../sml'
import { stringifyType } from '../typechecker/utils'
import { Finished, Result } from '../types'

export function resToString(result: Result): string {
  if (result.status === 'errored') {
    return result.error.explain()
  } else {
    return formatFinishedForRepl(result)
  }
}

export function formatFinishedForRepl(result: Finished): string {
  const stdout = result.stdout.join('')
  if (result.value === undefined) {
    return stdout
  }
  const val = Sml.valueToString(result.value)
  if (result.type === undefined) {
    return `${stdout}${val}`
  }
  const type = stringifyType(result.type)
  return `${stdout}${val} : ${type}`
}
