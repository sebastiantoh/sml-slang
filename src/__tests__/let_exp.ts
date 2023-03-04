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
  ).toThrow(/f not found in env/)) // TODO: add more specific error

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
