import { CustomSourceError } from '../errors'
import { parseAndTypeCheckExp } from './utils'

describe('Constant', () => {
  describe('IntConstant', () => {
    test('Valid Annotation', () => expect(parseAndTypeCheckExp('1:int')).toBe('int'))
    test('Invalid Annotation', () =>
      expect(() => parseAndTypeCheckExp('1:real')).toThrow(CustomSourceError))
    test('Invalid Annotation', () =>
      expect(() => parseAndTypeCheckExp(`1:'a`)).toThrow(CustomSourceError))
  })
  describe('RealConstant', () => {
    test('Valid Annotation', () => expect(parseAndTypeCheckExp('1.0:real')).toBe('real'))
    test('Invalid Annotation', () =>
      expect(() => parseAndTypeCheckExp('1.0:int')).toThrow(CustomSourceError))
  })
  describe('StringConstant', () => {
    test('Valid Annotation', () => expect(parseAndTypeCheckExp('"str":string')).toBe('string'))
    test('Invalid Annotation', () =>
      expect(() => parseAndTypeCheckExp('"str":char')).toThrow(CustomSourceError))
  })
  describe('CharConstant', () => {
    test('Valid Annotation', () => expect(parseAndTypeCheckExp('#"a":char')).toBe('char'))
    test('Invalid Annotation', () =>
      expect(() => parseAndTypeCheckExp('#"a":string')).toThrow(CustomSourceError))
  })
  describe('BoolConstant', () => {
    test('Valid Annotation', () => expect(parseAndTypeCheckExp('true:bool')).toBe('bool'))
    test('Invalid Annotation', () =>
      expect(() => parseAndTypeCheckExp('false:int')).toThrow(CustomSourceError))
  })
  describe('UnitConstant', () => {
    test('Valid Annotation', () => expect(parseAndTypeCheckExp('():unit')).toBe('unit'))
    test('Invalid Annotation', () =>
      expect(() => parseAndTypeCheckExp('():bool')).toThrow(CustomSourceError))
  })
})

describe('Variable', () => {
  test('simple val dec', () =>
    expect(
      parseAndTypeCheckExp(`
let
  val x = true
in
  x:bool
end
  `)
    ).toBe(`bool`))

  test('simple val dec', () =>
    expect(() =>
      parseAndTypeCheckExp(`
let
  val x = true
in
  x:int
end
  `)
    ).toThrow(CustomSourceError))
})

describe('Infix Application', () => {
  test('Valid annotation', () =>
    expect(
      parseAndTypeCheckExp(`
(1 + 1):int
  `)
    ).toBe(`int`))

  test('Valid annotation', () =>
    expect(
      parseAndTypeCheckExp(`
(1 :: []: 'a list): int list
  `)
    ).toBe(`int list`))

  test('Invalid annotation', () =>
    expect(() =>
      parseAndTypeCheckExp(`
(1 :: []): string list
  `)
    ).toThrow(CustomSourceError))

  test('Invalid Annotation', () =>
    expect(() =>
      parseAndTypeCheckExp(`
(1.0 +. 1.0):string
  `)
    ).toThrow(CustomSourceError))
})

describe('List', () => {
  test('Valid annotation', () =>
    expect(
      parseAndTypeCheckExp(`
[1:int, 2, 3]: int list
  `)
    ).toBe(`int list`))

  test('Invalid annotation', () =>
    expect(() =>
      parseAndTypeCheckExp(`
[1:int, 2, 3]: string list
  `)
    ).toThrow(CustomSourceError))

  test('Invalid annotation', () =>
    expect(() =>
      parseAndTypeCheckExp(`
[1:int, 2:string, 3]: int list
  `)
    ).toThrow(CustomSourceError))
})

describe('Function', () => {
  test('Valid annotation', () =>
    expect(
      parseAndTypeCheckExp(`
(fn x => x): int -> int
  `)
    ).toBe(`int -> int`))

  test('Invalid annotation', () =>
    expect(() =>
      parseAndTypeCheckExp(`
(fn x => x): string -> int
  `)
    ).toThrow(CustomSourceError))
})

describe('Let Expression', () => {
  test('Valid annotation', () =>
    expect(
      parseAndTypeCheckExp(`
let
      val x = 1
in
  true
end : bool
  `)
    ).toBe(`bool`))

  test('Invalid annotation', () =>
    expect(() =>
      parseAndTypeCheckExp(`
let
  val x = 1
in
  true
end : int
  `)
    ).toThrow(CustomSourceError))
})

test('Invalid annotation', () =>
  expect(() =>
    parseAndTypeCheckExp(`
let
  fun id x : int = x
in
  id "A"
end
`)
  ).toThrow(CustomSourceError))

describe('Pattern', () => {
  test('Valid annotation', () =>
    expect(
      parseAndTypeCheckExp(`
case 1 of
  x: int => 1
  `)
    ).toBe(`int`))
  test('Valid annotation', () =>
    expect(
      parseAndTypeCheckExp(`
case [1,2,3] of
  [x,y,z:int] => 1
  `)
    ).toBe(`int`))

  test('Invalid annotation', () =>
    expect(() =>
      parseAndTypeCheckExp(`
case [1,2,3] of
  [x:string, y, z] => 1
  `)
    ).toThrow(CustomSourceError))
})
