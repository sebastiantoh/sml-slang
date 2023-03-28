import { parseAndEvaluateExp } from './utils'

describe('InfixConstruction', () => {
  test('infix construction pattern matching in value binding', () =>
    expect(
      parseAndEvaluateExp(`
let
  val fst::snd::tl = [1,2,3]
in
  [fst,snd]
end
`)
    ).toBe(`[1,2]`))

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

  test('infix construction pattern matching with partial match', () =>
    expect(
      parseAndEvaluateExp(`
let
  fun f lst =
    case lst of
      x::[1,2,3] => x
    | _ => 0
in
  f [1,2,3,4]
end
`)
    ).toBe(`0`))
})

describe('ListPattern', () => {
  test('list pattern matching in value binding', () =>
    expect(
      parseAndEvaluateExp(`
let
  val [a, b, c] = [[1,2,3],[4,5,6],[7,8]]
in
  a @ b
end
`)
    ).toBe(`[1,2,3,4,5,6]`))

  test('list pattern matching with variables', () =>
    expect(
      parseAndEvaluateExp(`
let
  fun length_three xs =
    case xs of
      [x] => 1
    | [x,y] => 2
    | [x,y,z] => 3
    | _ => 0
in
  length_three [1,2,3]
end
`)
    ).toBe(`3`))

  test('list pattern matching with matching constants', () =>
    expect(
      parseAndEvaluateExp(`
  let
    fun one_two_three xs =
      case xs of
        [1,2,3] => 6
      | _ => 0
  in
    one_two_three [1,2,3]
  end
  `)
    ).toBe(`6`))

  test('list pattern matching with non-matching constants', () =>
    expect(
      parseAndEvaluateExp(`
  let
    fun one_two_five xs =
      case xs of
        [1,2,3] => 3
      | [1,2,5] => 5
      | _ => 0
  in
    one_two_five [1,2,5]
  end
  `)
    ).toBe(`5`))

  test('list pattern matching with constants and variables', () =>
    expect(
      parseAndEvaluateExp(`
let
  fun one_var_three xs =
    case xs of
      [1,y,3] => y
    | _ => 0
in
  one_var_three [1,5,3]
end
`)
    ).toBe(`5`))

  test('list pattern matching with an identical variable', () =>
    expect(() =>
      parseAndEvaluateExp(`
let
  fun one_x_x xs =
    case xs of
      [1,x,x] => x
    | _ => 0
in
  one_x_x [1,2,3]
end
`)
    ).toThrow('Cannot have two of the same variable in one list pattern'))

  test('list pattern matching with infix construction', () =>
    expect(
      parseAndEvaluateExp(`
let
  fun inner_lists_head xs =
    case xs of
      [x::xs,y::ys] => x + y
    | _ => 0
in
  inner_lists_head [[1,2],[3,4]]
end
`)
    ).toBe(`4`))

  test('list pattern matching with infix construction', () =>
    expect(
      parseAndEvaluateExp(`
let
  fun inner_list_tail xs =
    case xs of
      [x::xs,y::ys] => ys
    | _ => []
in
  inner_list_tail [[1,2],[3,4]]
end
`)
    ).toBe(`[4]`))

  test('list pattern matching with nested list', () =>
    expect(
      parseAndEvaluateExp(`
let
  fun nested_list xs =
    case xs of
      [[1], [2,3,4]] => false
    | [[1,2], [3,4]] => true
    | _ => false
in
  nested_list [[1,2],[3,4]]
end
`)
    ).toBe(`true`))
})
