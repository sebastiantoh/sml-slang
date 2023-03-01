import { parseAndEvaluateExp } from './utils'

// TODO: fix tests that are skipped

/**
 * Integers
 */
test('integers: evaluate to themselves', () => expect(parseAndEvaluateExp('2')).toBe('2'))

test('integers: unary negation', () => expect(parseAndEvaluateExp('~2')).toBe('~2'))

test('integers: addition', () => expect(parseAndEvaluateExp('1 + 2')).toBe('3'))

test('integers: subtraction', () => expect(parseAndEvaluateExp('4 - 5')).toBe('~1'))

test('integers: multiplication', () => expect(parseAndEvaluateExp('6 * 7')).toBe('42'))

test('integers: division', () => expect(parseAndEvaluateExp('5 div 2')).toBe('2'))

test('integers: posInt mod posInt', () => expect(parseAndEvaluateExp(`5 mod 2`)).toBe('1'))
test('integers: posInt mod negInt', () => expect(parseAndEvaluateExp(`5 mod ~2`)).toBe('~1'))
test('integers: negInt mod posInt', () => expect(parseAndEvaluateExp(`~5 mod 2`)).toBe('1'))
test('integers: negInt mod negInt', () => expect(parseAndEvaluateExp(`~5 mod ~2`)).toBe('~1'))

test('integers: int1 = int1', () => expect(parseAndEvaluateExp(`1 = 1`)).toBe('true'))
test('integers: int1 = int2', () => expect(parseAndEvaluateExp(`1 = 2`)).toBe('false'))

test('integers: int1 <> int1', () => expect(parseAndEvaluateExp(`1 <> 1`)).toBe('false'))
test('integers: int1 <> int2', () => expect(parseAndEvaluateExp(`1 <> 2`)).toBe('true'))

test('integers: int1 < int1', () => expect(parseAndEvaluateExp(`1 < 1`)).toBe('false'))
test('integers: int1 < int2', () => expect(parseAndEvaluateExp(`1 < 2`)).toBe('true'))

test('integers: int1 > int1', () => expect(parseAndEvaluateExp(`1 > 1`)).toBe('false'))
test('integers: int1 > int2', () => expect(parseAndEvaluateExp(`1 > 2`)).toBe('false'))

test('integers: int1 <= int1', () => expect(parseAndEvaluateExp(`1 <= 1`)).toBe('true'))
test('integers: int1 <= int2', () => expect(parseAndEvaluateExp(`1 <= 2`)).toBe('true'))

test('integers: int1 >= int1', () => expect(parseAndEvaluateExp(`1 >= 1`)).toBe('true'))
test('integers: int1 >= int2', () => expect(parseAndEvaluateExp(`1 >= 2`)).toBe('false'))

test('integers: precendence of builtin operators', () =>
  expect(parseAndEvaluateExp(`2 + 6 * 3 div 2 - 10 div 2`)).toBe('6'))
test('integers: precendence of builtin operators with non-nested parentheses', () =>
  expect(parseAndEvaluateExp(`(2 + 6) * 3`)).toBe('24'))
test('integers: precendence of builtin operators with nested parentheses', () =>
  expect(parseAndEvaluateExp(`(((2 + 6) * 3) div 2) - (10 div 2)`)).toBe('7'))

/**
 * Strings
 */

test('strings: evaluate to themselves', () => expect(parseAndEvaluateExp(`"abc"`)).toBe(`"abc"`))

test('strings: string1 = string1', () => expect(parseAndEvaluateExp(`"ab" = "ab"`)).toBe('true'))
test('strings: string1 = string2', () => expect(parseAndEvaluateExp(`"ab" = "ba"`)).toBe('false'))

test('strings: string1 <> string1', () => expect(parseAndEvaluateExp(`"ab" <> "ab"`)).toBe('false'))
test('strings: string1 <> string2', () => expect(parseAndEvaluateExp(`"ab" <> "ba"`)).toBe('true'))

test('strings: string1 < string1', () => expect(parseAndEvaluateExp(`"ab" < "ab"`)).toBe('false'))
test('strings: string1 < string2', () => expect(parseAndEvaluateExp(`"ab" < "ba"`)).toBe('true'))

test('strings: string1 > string1', () => expect(parseAndEvaluateExp(`"ab" > "ab"`)).toBe('false'))
test('strings: string1 > string2', () => expect(parseAndEvaluateExp(`"ab" > "ba"`)).toBe('false'))

test('strings: string1 <= string1', () => expect(parseAndEvaluateExp(`"ab" <= "ab"`)).toBe('true'))
test('strings: string1 <= string2', () => expect(parseAndEvaluateExp(`"ab" <= "ba"`)).toBe('true'))

test('strings: string1 >= string1', () => expect(parseAndEvaluateExp(`"ab" >= "ab"`)).toBe('true'))
test('strings: string1 >= string2', () => expect(parseAndEvaluateExp(`"ab" >= "ba"`)).toBe('false'))

test('strings: nonempty concat nonempty', () =>
  expect(parseAndEvaluateExp(`"abc" ^ "def"`)).toBe(`"abcdef"`))
test('strings: nonempty concat empty', () =>
  expect(parseAndEvaluateExp(`"abc" ^ ""`)).toBe(`"abc"`))
test('strings: empty concat nonempty', () =>
  expect(parseAndEvaluateExp(`"" ^ "def"`)).toBe(`"def"`))
test('strings: empty concat empty', () => expect(parseAndEvaluateExp(`"" ^ ""`)).toBe(`""`))

test.skip('strings: size', () => expect(parseAndEvaluateExp(`size "abc"`)).toBe('3'))
test.skip('strings: size of empty string', () => expect(parseAndEvaluateExp(`size ""`)).toBe('0'))

/**
 * Character
 */
test('characters: evaluate to themselves', () => expect(parseAndEvaluateExp(`#"a"`)).toBe(`#"a"`))

test('characters: char1 = char1', () => expect(parseAndEvaluateExp(`#"a" = #"a"`)).toBe('true'))
test('characters: char1 = char2', () => expect(parseAndEvaluateExp(`#"a" = #"b"`)).toBe('false'))

test('characters: char1 <> char1', () => expect(parseAndEvaluateExp(`#"a" <> #"a"`)).toBe('false'))
test('characters: char1 <> char2', () => expect(parseAndEvaluateExp(`#"a" <> #"b"`)).toBe('true'))

test('characters: char1 < char1', () => expect(parseAndEvaluateExp(`#"a" < #"a"`)).toBe('false'))
test('characters: char1 < char2', () => expect(parseAndEvaluateExp(`#"a" < #"b"`)).toBe('true'))

test('characters: char1 > char1', () => expect(parseAndEvaluateExp(`#"a" > #"a"`)).toBe('false'))
test('characters: char1 > char2', () => expect(parseAndEvaluateExp(`#"a" > #"b"`)).toBe('false'))

test('characters: char1 <= char1', () => expect(parseAndEvaluateExp(`#"a" <= #"a"`)).toBe('true'))
test('characters: char1 <= char2', () => expect(parseAndEvaluateExp(`#"a" <= #"b"`)).toBe('true'))

test('characters: char1 >= char1', () => expect(parseAndEvaluateExp(`#"a" >= #"a"`)).toBe('true'))
test('characters: char1 >= char2', () => expect(parseAndEvaluateExp(`#"a" >= #"b"`)).toBe('false'))

/**
 * Booleans
 */
test('booleans: true evaluates to itself', () => expect(parseAndEvaluateExp('true')).toBe('true'))
test('booleans: false evaluates to itself', () =>
  expect(parseAndEvaluateExp('false')).toBe('false'))

test.skip('booleans: negation of true', () => expect(parseAndEvaluateExp('not true')).toBe('false'))
test.skip('booleans: negation of false', () =>
  expect(parseAndEvaluateExp('not false')).toBe('false'))

test('booleans: disjunction', () =>
  expect(parseAndEvaluateExp('2=2 orelse 37 div 0 = 5')).toBe('true'))
test('booleans: conjunction', () =>
  expect(parseAndEvaluateExp('2=0 andalso 37 div 0 = 5')).toBe('false'))
test('booleans: precedence of logical operators', () =>
  expect(parseAndEvaluateExp('true orelse false andalso false')).toBe('true'))
test('booleans: override precedence of logical operators with parentheses', () =>
  expect(parseAndEvaluateExp('(true orelse false) andalso false')).toBe('false'))

/**
 * Real numbers
 */
test('real numbers: evaluate to themselves', () => expect(parseAndEvaluateExp('2.1')).toBe('2.1'))

test('real numbers: unary negation', () => expect(parseAndEvaluateExp('~2.1')).toBe('~2.1'))

test('real numbers: addition', () => expect(parseAndEvaluateExp('1.2 + 3.4')).toBe('4.6'))

test('real numbers: subtraction', () => expect(parseAndEvaluateExp('1.2 - 3.4')).toBe('~2.2'))

test('real numbers: multiplication', () => expect(parseAndEvaluateExp('1.2 * 3.4')).toBe('4.08'))

test('real numbers: nonzero / nonzero', () => expect(parseAndEvaluateExp(`1.0 / 2.0`)).toBe('0.5'))
test('real numbers: zero / nonzero', () => expect(parseAndEvaluateExp(`0.0 / 2.0`)).toBe('0'))
test.skip('real numbers: nonzero / zero', () =>
  expect(() => parseAndEvaluateExp(`1.0 / 0`)).toThrow()) // TODO: add more specific error

/**
 * Unit
 */
test.skip('unit: evaluate to themselves', () => expect(parseAndEvaluateExp('()')).toBe('()'))
