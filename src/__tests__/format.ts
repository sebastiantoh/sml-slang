import { parseTypeCheckAndEvaluateExpToString } from './utils'

test('no whitespace between tokens', () =>
  expect(parseTypeCheckAndEvaluateExpToString('2+3')).toBe('5'))

test('multiple spaces between tokens', () =>
  expect(parseTypeCheckAndEvaluateExpToString('2    + 3')).toBe('5'))

test('new line between tokens', () =>
  expect(
    parseTypeCheckAndEvaluateExpToString(`2
+
3`)
  ).toBe('5'))

test('comments are ignored', () =>
  expect(
    parseTypeCheckAndEvaluateExpToString(
      `(* this is a comment *) 2 + (*this is another comment*) 3`
    )
  ).toBe('5'))
