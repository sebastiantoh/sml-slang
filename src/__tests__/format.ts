import { parseTypeCheckAndEvaluateExp } from './utils'

test('no whitespace between tokens', () => expect(parseTypeCheckAndEvaluateExp('2+3')).toBe('5'))

test('multiple spaces between tokens', () =>
  expect(parseTypeCheckAndEvaluateExp('2    + 3')).toBe('5'))

test('new line between tokens', () =>
  expect(
    parseTypeCheckAndEvaluateExp(`2
+
3`)
  ).toBe('5'))

test('comments are ignored', () =>
  expect(
    parseTypeCheckAndEvaluateExp(`(* this is a comment *) 2 + (*this is another comment*) 3`)
  ).toBe('5'))
