import { parseAndEvaluateExp } from './utils'

test('true literal as pred', () =>
  expect(parseAndEvaluateExp('if true then "then" else "else"')).toBe(`"then"`))

test('false literal as pred', () =>
  expect(parseAndEvaluateExp('if false then "then" else "else"')).toBe(`"else"`))

test('pred evaluating to true', () =>
  expect(parseAndEvaluateExp('if 1=1 then "then" else "else"')).toBe(`"then"`))

test('pred evaluating to false', () =>
  expect(parseAndEvaluateExp('if 1=2 then "then" else "else"')).toBe(`"else"`))

test('nested conditionals', () =>
  expect(parseAndEvaluateExp('if 1=2 then if 1=1 then 1 else 2 else if 1=2 then 3 else 4')).toBe(
    '4'
  ))

test('else branch is not evaluated when pred is true', () =>
  expect(parseAndEvaluateExp('if 1=1 then 2 else 37 div 0')).toBe('2'))

test('then branch is not evaluated when pred is false', () =>
  expect(parseAndEvaluateExp('if 1=2 then 37 div 0 else 3')).toBe('3'))
