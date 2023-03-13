import { parseAndEvaluateExp } from './utils'

test('multiple declarations', () =>
  expect(
    parseAndEvaluateExp(`
let
   val a = 1
   val 1 = 1
   val b = 2
in
   a + b
end
`)
  ).toBe(`3`))

test('nested declarations', () =>
  expect(
    parseAndEvaluateExp(`
let
   val a = 1
in
   let
      val b = 2
   in
      a + b
   end
end
`)
  ).toBe(`3`))

test('accessing variable in inner declarations from outer', () =>
  expect(() =>
    parseAndEvaluateExp(`
let
   val a = let val b = 1 in b end
in
   b
end
`)
  ).toThrow(/b not found in env/))

test('multiple declarations with shadowing', () =>
  expect(
    parseAndEvaluateExp(`
let
   val x = 1
   val x = x + 1
in
   x + x
end
`)
  ).toBe(`4`))

test('nested declarations with shadowing', () =>
  expect(
    parseAndEvaluateExp(`
let
   val x = 1
in
   let
      val x = x + 1
   in
      x + x
   end
end
`)
  ).toBe(`4`))

test('nested declarations with shadowing and other bindings', () =>
  expect(
    parseAndEvaluateExp(`
let
   val x = 1
in
   let
      val x = x + 1
   in
      let
         val y = x + 2
      in
         x + y
      end
   end
end
`)
  ).toBe(`6`))

test('shadowed function calling function with same name in body', () =>
  expect(
    parseAndEvaluateExp(`
let
  val f = fn n => n + 1
  val f = fn n => f (f n)
in
  f 3
end
`)
  ).toBe(`5`))

test('rec function without rec keyword', () =>
  expect(() =>
    parseAndEvaluateExp(`
let
  val f = fn n => if n = 0 then 1 else n * f (n - 1)
in
  f 3
end
`)
  ).toThrow(/f not found in env/))

test('rec function with rec keyword', () =>
  expect(
    parseAndEvaluateExp(`
let
  val rec f = fn n => if n = 0 then 1 else n * f (n - 1)
in
  f(3)
end
`)
  ).toEqual(`6`))

test('rec binding on a non-function', () =>
  expect(() =>
    parseAndEvaluateExp(`
let
  val rec f = 2
in
  f
end
`)
  ).toThrow(/using rec requires binding a function/))

test('function with multiple matches and function application arg matches with >1 of these patterns - should match with first possible match', () =>
  expect(
    parseAndEvaluateExp(`
let
  val add_one_if_two = fn 2 => 3 | x => x
in
  add_one_if_two 2
end
`)
  ).toEqual(`3`))

test('function with multiple matches and function application arg only matches with 1 of these patterns', () =>
  expect(
    parseAndEvaluateExp(`
let
  val add_one_if_two = fn 2 => 3 | x => x
in
  add_one_if_two 10
end
`)
  ).toEqual(`10`))

test('env is properly restored outside scope of function', () =>
  expect(
    parseAndEvaluateExp(`
let
  val duplicate_name = 1000
  val add_one = fn duplicate_name => duplicate_name + 1
in
  (add_one 2) + duplicate_name
end
`)
  ).toEqual(`1003`))

test('local declarations are accessible in subsequent declarations', () =>
  expect(
    parseAndEvaluateExp(`
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
    parseAndEvaluateExp(`
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
    parseAndEvaluateExp(`
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
    parseAndEvaluateExp(`
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

test('funbind with multiple params', () =>
  expect(
    parseAndEvaluateExp(`
let
  fun add x y = x + y
in
  add 2 3
end
`)
  ).toBe(`5`))

test('funbind with multiple params and partial application', () =>
  expect(
    parseAndEvaluateExp(`
let
  fun add x y = x + y
  val add_two = add 2
  val add_three = add 3
in
  add_two (add_three 3)
end
`)
  ).toBe(`8`))

test('tail recursive function', () =>
  expect(
    parseAndEvaluateExp(`
let
  fun add x y = x + y
  fun fact n acc =
    if n = 0 then
      acc
    else
      fact (n - 1) (acc * n)
in
  (add 2 (fact 5 1))
end
`)
  ).toBe(`122`))

test('tail recursive function - env is properly restored', () =>
  expect(() =>
    parseAndEvaluateExp(`
let
  fun add x y = x + y
  fun fact n acc =
    if n = 0 then
      acc
    else
      fact (n - 1) (acc * n)
in
  (fact 5 1) + acc
end
`)
  ).toThrow(/acc not found in env/))