import { parseAndEvaluateExp } from './utils'

test.skip('single valbind with constant as pattern', () =>
  expect(parseAndEvaluateExp('val 1 = 1')).toBe(`"TODO`))

test.skip('single valbind with variable as pattern', () =>
  expect(parseAndEvaluateExp('val a = 1')).toBe(`"TODO"`))

test.skip('multiple valbinds', () =>
  expect(parseAndEvaluateExp('val a = 1 and b = 2 and c = 3 and 1 = 1')).toBe(`"TODO"`))
