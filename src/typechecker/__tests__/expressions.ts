import { parseAndTypeCheckExp } from './utils'

describe('Constant', () => {
  describe('IntConstant', () => {
    test('positive', () => expect(parseAndTypeCheckExp('1')).toBe('int'))
    test('negative', () => expect(parseAndTypeCheckExp('~1')).toBe('int'))
  })
  describe('RealConstant', () => {
    test('positive', () => expect(parseAndTypeCheckExp('1.0')).toBe('real'))
    test('negative', () => expect(parseAndTypeCheckExp('~1.0')).toBe('real'))
  })
  describe('StringConstant', () => {
    test('string', () => expect(parseAndTypeCheckExp('"str"')).toBe('string'))
  })
  describe('CharConstant', () => {
    test('char', () => expect(parseAndTypeCheckExp('#"a"')).toBe('char'))
  })
  describe('BoolConstant', () => {
    test('true', () => expect(parseAndTypeCheckExp('true')).toBe('bool'))
    test('false', () => expect(parseAndTypeCheckExp('false')).toBe('bool'))
  })
  describe('UnitConstant', () => {
    test('unit', () => expect(parseAndTypeCheckExp('()')).toBe('unit'))
  })
})

describe('LetExpression', () => {
  test('simple val dec', () =>
    expect(
      parseAndTypeCheckExp(`
let
  val x = true
in
  x
end
  `)
    ).toBe(`bool`))

  test('simple val dec with infix operator evaluation', () =>
    expect(
      parseAndTypeCheckExp(`
let
  val x = 2 + 3
in
  x
end
  `)
    ).toBe(`int`))

  test('valid sequence in let expr', () =>
    expect(
      parseAndTypeCheckExp(`
let
  val x = 2 + 3
in
  x + 2;
  "hi";
  true
end
  `)
    ).toBe(`bool`))

  test('invalid sequence in let expr', () =>
    expect(() => {
      parseAndTypeCheckExp(`
let
  val x = true + 2
in
  x
end
  `)
    }).toThrow(/Failed to unify type constraint int = bool./))
})
