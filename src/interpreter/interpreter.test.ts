import { parse } from '../parser/parser'
import { evaluate } from './interpreter'

const parse_and_evaluate = (src: string) => {
  const node = parse(src)
  // pass in a dummy context
  const res = evaluate(node, { a: null }).next().value
  return res
}

// Constants
test('Constants: Positive integer constant', () => expect(parse_and_evaluate('2')).toBe(2))
test('Constants: Negative integer constant', () => expect(parse_and_evaluate('~2')).toBe(-2))
test('Constants: Positive float constant', () => expect(parse_and_evaluate('2.1')).toBe(2.1))
test('Constants: Negative float constant', () => expect(parse_and_evaluate('~2.1')).toBe(-2.1))
test('Constants: Character constant', () => expect(parse_and_evaluate(`#"a"`)).toBe('a'))
test('Constants: String constant', () => expect(parse_and_evaluate(`"abc"`)).toBe('abc'))

// Infix Applications
test('Infix Applications: float / float', () => expect(parse_and_evaluate(`1.0 / 2.0`)).toBe(0.5))
test('Infix Applications: int div int', () => expect(parse_and_evaluate(`5 div 2`)).toBe(2))
test('Infix Applications: posInt mod posInt', () => expect(parse_and_evaluate(`5 mod 2`)).toBe(1))
test('Infix Applications: posInt mod negInt', () => expect(parse_and_evaluate(`5 mod ~2`)).toBe(-1))
test('Infix Applications: negInt mod posInt', () => expect(parse_and_evaluate(`~5 mod 2`)).toBe(1))
test('Infix Applications: negInt mod negInt', () =>
  expect(parse_and_evaluate(`~5 mod ~2`)).toBe(-1))
test('Infix Applications: int + int', () => expect(parse_and_evaluate(`1 + 2`)).toBe(3))
test('Infix Applications: int - int', () => expect(parse_and_evaluate(`1 - 2`)).toBe(-1))
test('Infix Applications: precendence of builtin operators', () =>
  expect(parse_and_evaluate(`2 + 6 * 3 div 2 - 10 div 2`)).toBe(6))
// TODO: add more test cases for other builtin stuff
