import { parseAndEvaluate } from './utils'

test.skip('true pred', () =>
  expect(parseAndEvaluate('if true then "then" else "else"')).toBe('then'))

test.skip('nested conditionals', () =>
  expect(parseAndEvaluate('if false then if true then 1 else 2 else if false then 3 else 4')).toBe(
    4
  ))

test.skip('else branch is not evaluated when pred is true', () =>
  expect(parseAndEvaluate('if true then 2 else 37 div 0')).toBe(2))

test.skip('then branch is not evaluated when pred is false', () =>
  expect(parseAndEvaluate('if false then 37 div 0 else 3')).toBe(3))

test.skip('non-constant expression as pred', () =>
  expect(parseAndEvaluate('if 1=2 then 3 else 4')).toBe(4))
