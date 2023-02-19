import { parseAndEvaluate } from './utils'

// TODO: fix tests that are skipped
// TODO: update parseAndEvaluate such that it returns an SML value, e.g. -2.2 should be returned as ~2.2
// TODO: add semicolon to all tests inputs

/**
 * Integers
 */
test('integers: evaluate to themselves', () => expect(parseAndEvaluate('2')).toBe(2))

test('integers: unary negation', () => expect(parseAndEvaluate('~2')).toBe(-2))

test('integers: addition', () => expect(parseAndEvaluate('1 + 2')).toBe(3))

test('integers: subtraction', () => expect(parseAndEvaluate('4 - 5')).toBe(-1))

test('integers: multiplication', () => expect(parseAndEvaluate('6 * 7')).toBe(42))

test('integers: division', () => expect(parseAndEvaluate('5 div 2')).toBe(2))

test('integers: posInt mod posInt', () => expect(parseAndEvaluate(`5 mod 2`)).toBe(1))
test('integers: posInt mod negInt', () => expect(parseAndEvaluate(`5 mod ~2`)).toBe(-1))
test('integers: negInt mod posInt', () => expect(parseAndEvaluate(`~5 mod 2`)).toBe(1))
test('integers: negInt mod negInt', () => expect(parseAndEvaluate(`~5 mod ~2`)).toBe(-1))

test('integers: int1 = int1', () => expect(parseAndEvaluate(`1 = 1`)).toBe(true))
test('integers: int1 = int2', () => expect(parseAndEvaluate(`1 = 2`)).toBe(false))

test('integers: int1 <> int1', () => expect(parseAndEvaluate(`1 <> 1`)).toBe(false))
test('integers: int1 <> int2', () => expect(parseAndEvaluate(`1 <> 2`)).toBe(true))

test('integers: int1 < int1', () => expect(parseAndEvaluate(`1 < 1`)).toBe(false))
test('integers: int1 < int2', () => expect(parseAndEvaluate(`1 < 2`)).toBe(true))

test('integers: int1 > int1', () => expect(parseAndEvaluate(`1 > 1`)).toBe(false))
test('integers: int1 > int2', () => expect(parseAndEvaluate(`1 > 2`)).toBe(false))

test('integers: int1 <= int1', () => expect(parseAndEvaluate(`1 <= 1`)).toBe(true))
test('integers: int1 <= int2', () => expect(parseAndEvaluate(`1 <= 2`)).toBe(true))

test('integers: int1 >= int1', () => expect(parseAndEvaluate(`1 >= 1`)).toBe(true))
test('integers: int1 >= int2', () => expect(parseAndEvaluate(`1 >= 2`)).toBe(false))

test('integers: precendence of builtin operators', () =>
  expect(parseAndEvaluate(`2 + 6 * 3 div 2 - 10 div 2`)).toBe(6))

/**
 * Strings
 */

test('strings: evaluate to themselves', () => expect(parseAndEvaluate(`"abc"`)).toBe('abc'))

test('strings: string1 = string1', () => expect(parseAndEvaluate(`"ab" = "ab"`)).toBe(true))
test('strings: string1 = string2', () => expect(parseAndEvaluate(`"ab" = "ba"`)).toBe(false))

test('strings: string1 <> string1', () => expect(parseAndEvaluate(`"ab" <> "ab"`)).toBe(false))
test('strings: string1 <> string2', () => expect(parseAndEvaluate(`"ab" <> "ba"`)).toBe(true))

test('strings: string1 < string1', () => expect(parseAndEvaluate(`"ab" < "ab"`)).toBe(false))
test('strings: string1 < string2', () => expect(parseAndEvaluate(`"ab" < "ba"`)).toBe(true))

test('strings: string1 > string1', () => expect(parseAndEvaluate(`"ab" > "ab"`)).toBe(false))
test('strings: string1 > string2', () => expect(parseAndEvaluate(`"ab" > "ba"`)).toBe(false))

test('strings: string1 <= string1', () => expect(parseAndEvaluate(`"ab" <= "ab"`)).toBe(true))
test('strings: string1 <= string2', () => expect(parseAndEvaluate(`"ab" <= "ba"`)).toBe(true))

test('strings: string1 >= string1', () => expect(parseAndEvaluate(`"ab" >= "ab"`)).toBe(true))
test('strings: string1 >= string2', () => expect(parseAndEvaluate(`"ab" >= "ba"`)).toBe(false))

test('strings: nonempty concat nonempty', () =>
  expect(parseAndEvaluate(`"abc" ^ "def"`)).toBe('abcdef'))
test('strings: nonempty concat empty', () => expect(parseAndEvaluate(`"abc" ^ ""`)).toBe('abc'))
test('strings: empty concat nonempty', () => expect(parseAndEvaluate(`"" ^ "def"`)).toBe('def'))
test('strings: empty concat empty', () => expect(parseAndEvaluate(`"" ^ ""`)).toBe(''))

test.skip('strings: size', () => expect(parseAndEvaluate(`size "abc"`)).toBe(3))
test.skip('strings: size of empty string', () => expect(parseAndEvaluate(`size ""`)).toBe(0))

/**
 * Character
 */
test('characters: evaluate to themselves', () => expect(parseAndEvaluate(`#"a"`)).toBe('a'))

test('characters: char1 = char1', () => expect(parseAndEvaluate(`#"a" = #"a"`)).toBe(true))
test('characters: char1 = char2', () => expect(parseAndEvaluate(`#"a" = #"b"`)).toBe(false))

test('characters: char1 <> char1', () => expect(parseAndEvaluate(`#"a" <> #"a"`)).toBe(false))
test('characters: char1 <> char2', () => expect(parseAndEvaluate(`#"a" <> #"b"`)).toBe(true))

test('characters: char1 < char1', () => expect(parseAndEvaluate(`#"a" < #"a"`)).toBe(false))
test('characters: char1 < char2', () => expect(parseAndEvaluate(`#"a" < #"b"`)).toBe(true))

test('characters: char1 > char1', () => expect(parseAndEvaluate(`#"a" > #"a"`)).toBe(false))
test('characters: char1 > char2', () => expect(parseAndEvaluate(`#"a" > #"b"`)).toBe(false))

test('characters: char1 <= char1', () => expect(parseAndEvaluate(`#"a" <= #"a"`)).toBe(true))
test('characters: char1 <= char2', () => expect(parseAndEvaluate(`#"a" <= #"b"`)).toBe(true))

test('characters: char1 >= char1', () => expect(parseAndEvaluate(`#"a" >= #"a"`)).toBe(true))
test('characters: char1 >= char2', () => expect(parseAndEvaluate(`#"a" >= #"b"`)).toBe(false))

/**
 * Booleans
 */
test.skip('booleans: true evaluates to itself', () => expect(parseAndEvaluate('true')).toBe(true))
test.skip('booleans: false evaluates to itself', () =>
  expect(parseAndEvaluate('false')).toBe(false))

test.skip('booleans: negation of true', () => expect(parseAndEvaluate('not true')).toBe(false))
test.skip('booleans: negation of false', () => expect(parseAndEvaluate('not false')).toBe(false))

test.skip('booleans: disjunction', () =>
  expect(parseAndEvaluate('2=2 orelse 37 div 0 = 5')).toBe(true))
test.skip('booleans: conjunction', () =>
  expect(parseAndEvaluate('2=0 andalso 37 div 0 = 5')).toBe(false))

/**
 * Real numbers
 */
test('real numbers: evaluate to themselves', () => expect(parseAndEvaluate('2.1')).toBe(2.1))

test('real numbers: unary negation', () => expect(parseAndEvaluate('~2.1')).toBe(-2.1))

test('real numbers: addition', () => expect(parseAndEvaluate('1.2 + 3.4')).toBe(4.6))

test('real numbers: subtraction', () => expect(parseAndEvaluate('1.2 - 3.4')).toBe(-2.2))

test('real numbers: multiplication', () => expect(parseAndEvaluate('1.2 * 3.4')).toBe(4.08))

test('real numbers: nonzero / nonzero', () => expect(parseAndEvaluate(`1.0 / 2.0`)).toBe(0.5))
test('real numbers: zero / nonzero', () => expect(parseAndEvaluate(`0 / 2.0`)).toBe(0))
test.skip('real numbers: nonzero / zero', () => expect(parseAndEvaluate(`1.0 / 0`)).toThrow())

/**
 * Unit
 */
test.skip('unit: evaluate to themselves', () => expect(parseAndEvaluate('()')).toBe(undefined))
