import { parseAndEvaluateExp } from './utils'

describe('InfixConstruction', () => {
  test('infix construction pattern matching', () =>
    expect(
      parseAndEvaluateExp(`
let
  fun begins_with_one lst =
    case lst of
     1::_ => true
    | _ => false
in
  begins_with_one [1,2,3]
end
`)
    ).toBe(`true`))

  test('multiple infix construction pattern matching', () =>
    expect(
      parseAndEvaluateExp(`
let
  fun begins_with_one_and_two lst =
    case lst of
     1::2::_ => true
    | _ => false
in
  begins_with_one_and_two [1,2,3]
end
`)
    ).toBe(`true`))

  test('infix construction pattern matching with variable', () =>
    expect(
      parseAndEvaluateExp(`
let
  fun hd lst =
    case lst of
      x::xs => x
    | _ => 0
in
  hd [123, 456]
end
`)
    ).toBe(`123`))
})

describe('ListPattern', () => {
  test('list pattern matching with variables', () =>
    expect(
      parseAndEvaluateExp(`
let
  fun mylsfun xs = 
    case xs of
      [x,y,z] => x + y + z
    | _ => 0
in
  mylsfun [1,2,3]
end
`)
    ).toBe(`6`))

  test('list pattern matching with constants', () =>
    expect(
      parseAndEvaluateExp(`
  let
    fun mylsfun xs = 
      case xs of
        [1,2,3] => 6
      | _ => 0
  in
    mylsfun [1,2,3]
  end
  `)
    ).toBe(`6`))

  test('list pattern matching with constants and variables', () =>
    expect(
      parseAndEvaluateExp(`
let
  fun mylsfun xs = 
    case xs of
      [1,y,3] => y
    | _ => 0
in
  mylsfun [1,2,3]
end
`)
    ).toBe(`2`))

  test('list pattern matching with more than one identical variable', () =>
    expect(
      parseAndEvaluateExp(`
let
  fun mylsfun xs = 
    case xs of
      [1,x,x] => x
    | _ => 0
in
  mylsfun [1,2,3]
end
`)
    ).toBe(`0`))
})
