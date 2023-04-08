import { CustomSourceError } from '../errors'
import { parseAndTypeCheckExp } from './utils'

describe('Constant', () => {
  describe('IntConstant', () => {
    test('Valid Annotation', () => expect(parseAndTypeCheckExp('1:int')).toBe('int'))
    test('Invalid Annotation', () => expect(() => parseAndTypeCheckExp('1:real')).toThrow(CustomSourceError))
  })
  describe('RealConstant', () => {
    test('Valid Annotation', () => expect(parseAndTypeCheckExp('1.0:real')).toBe('real'))
    test('Invalid Annotation', () => expect(() => parseAndTypeCheckExp('1.0:int')).toThrow(CustomSourceError))
  })
  describe('StringConstant', () => {
    test('Valid Annotation', () => expect(parseAndTypeCheckExp('"str":string')).toBe('string'))
    test('Invalid Annotation', () => expect(() => parseAndTypeCheckExp('"str":char')).toThrow(CustomSourceError))
  })
  describe('CharConstant', () => {
    test('Valid Annotation', () => expect(parseAndTypeCheckExp('#"a":char')).toBe('char'))
    test('Invalid Annotation', () => expect(() => parseAndTypeCheckExp('#"a":string')).toThrow(CustomSourceError))
  })
  describe('BoolConstant', () => {
    test('Valid Annotation', () => expect(parseAndTypeCheckExp('true:bool')).toBe('bool'))
    test('Invalid Annotation', () => expect(() => parseAndTypeCheckExp('false:int')).toThrow(CustomSourceError))
  })
  describe('UnitConstant', () => {
    test('Valid Annotation', () => expect(parseAndTypeCheckExp('():unit')).toBe('unit'))
    test('Invalid Annotation', () => expect(() => parseAndTypeCheckExp('():bool')).toThrow(CustomSourceError))
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