import { parseAndEvaluateExp } from './utils'

test('no whitespace between tokens', () => expect(parseAndEvaluateExp('2+3')).toBe('5'))

test('multiple spaces between tokens', () => expect(parseAndEvaluateExp('2    + 3')).toBe('5'))

test('new line between tokens', () =>
  expect(
    parseAndEvaluateExp(`2
+
3`)
  ).toBe('5'))
