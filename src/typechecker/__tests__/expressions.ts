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

  test('more complex nesting of lets and locals', () =>
    expect(
      parseAndTypeCheckExp(`
let
  val x =
    let
      local
        val x = 5
      in
        val y = x
      end
    in
      y
    end
  in
    x
  end;
  `)
    ).toBe(`int`))

  describe('Function', () => {
    test('function with type variables in parameter and return type', () =>
      expect(parseAndTypeCheckExp('fn x => x')).toBe('t9 -> t9'))

    test('function with no type variables in parameter and return type', () =>
      expect(parseAndTypeCheckExp('fn 3 => 3 | x => x')).toBe('int -> int'))

    // TODO: uncomment these test case once list patterns have been merged
    // test('function with type variables in parameter type, but not return type', () => expect(parseAndTypeCheckExp('fn [] => 1 | [x] => 2 | x => 3')).toBe('t1 list -> int'))

    // test('function that requires inference from multiple matches', () => expect(
    //   parseAndTypeCheckExp(`fn (hd::tl) => [hd] | [x] => [1,2,3]`)).toBe(`int list -> int list`))
  })
})
