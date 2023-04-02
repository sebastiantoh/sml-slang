import { parseTypeCheckAndEvaluateExp, parseTypeCheckAndEvaluateProg } from '..'
import { resToString } from '../utils/formatters'

export const parseTypeCheckAndEvaluateExpToString = (
  exp: string,
  outputWithType: boolean = false
) => {
  const res = parseTypeCheckAndEvaluateExp(exp, outputWithType)
  return resToString(res)
}

export const parseTypeCheckAndEvaluateProgToString = (prog: string) => {
  const res = parseTypeCheckAndEvaluateProg(prog)
  return resToString(res)
}
