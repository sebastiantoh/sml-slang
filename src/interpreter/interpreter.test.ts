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
