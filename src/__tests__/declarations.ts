import { parseTypeCheckAndEvaluateExpToString } from './utils'

describe('ValueDeclaration', () => {
  test('rec function without rec keyword', () =>
    expect(() =>
      parseTypeCheckAndEvaluateExpToString(`
let
  val f = fn n => if n = 0 then 1 else n * f (n - 1)
in
  f 3
end
`)
    ).toThrow(/Unbound value identifier \"f\"./))

  test('rec function with rec keyword', () =>
    expect(
      parseTypeCheckAndEvaluateExpToString(`
let
  val rec f = fn n => if n = 0 then 1 else n * f (n - 1)
in
  f(3)
end
`)
    ).toEqual(`6`))

  test('rec binding on a non-function', () =>
    expect(() =>
      parseTypeCheckAndEvaluateExpToString(`
let
  val rec f = 2
in
  f
end
`)
    ).toThrow(/using rec requires binding a function/))

  test('funbind with multiple params', () =>
    expect(
      parseTypeCheckAndEvaluateExpToString(`
let
  fun add x y = x + y
in
  add 2 3
end
`)
    ).toBe(`5`))

  test('funbind with multiple params and partial application', () =>
    expect(
      parseTypeCheckAndEvaluateExpToString(`
let
  fun add x y = x + y
  val add_two = add 2
  val add_three = add 3
in
  add_two (add_three 3)
end
`)
    ).toBe(`8`))
})

describe('LocalDeclaration', () => {
  test('local declarations are accessible in subsequent declarations', () =>
    expect(
      parseTypeCheckAndEvaluateExpToString(`
let
  local
    val x = 1
    val y = 2
  in
    val x = x + y
  end
in
  x
end
`)
    ).toBe(`3`))

  test('local declaration - accessing variable outside of scope', () =>
    expect(() =>
      parseTypeCheckAndEvaluateExpToString(`
let
  local
    val x = 1
    val y = 2
  in
    val x = x + y
  end
in
  y
end
`)
    ).toThrow(/y not found in env/))

  test('nested local declarations', () =>
    expect(
      parseTypeCheckAndEvaluateExpToString(`
let
  local
    val x = 1
    val y = 2
  in
    local
      val z = x + y
    in
      val x = x + y + z
    end
    val x = x
  end
in
  x
end
`)
    ).toBe(`6`))

  test('nested local declarations - accessing variable outside of scope', () =>
    expect(() =>
      parseTypeCheckAndEvaluateExpToString(`
let
  local
    val x = 1
    val y = 2
  in
    local
      val z = x + y
    in
      val x = x + y + z
      val k = z
    end
    val x = z
  end
in
  x
end
`)
    ).toThrow(/z not found in env/))
})
