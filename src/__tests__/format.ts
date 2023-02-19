import { parseAndEvaluate } from './utils'

test('no whitespace between tokens', () => expect(parseAndEvaluate('2+3')).toBe(5))

test('multiple spaces between tokens', () => expect(parseAndEvaluate('2    + 3')).toBe(5))

test('new line between tokens', () =>
  expect(
    parseAndEvaluate(`2
+
3`)
  ).toBe(5))
