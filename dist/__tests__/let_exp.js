"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
test('multiple declarations', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
   val a = 1
   val 1 = 1
   val b = 2
in
   a + b
end
`)).toBe(`3`));
test('nested declarations', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
   val a = 1
in
   let
      val b = 2
   in
      a + b
   end
end
`)).toBe(`3`));
test('accessing variable in inner declarations from outer', () => expect(() => (0, utils_1.parseAndEvaluateExp)(`
let
   val a = let val b = 1 in b end
in
   b
end
`)).toThrow(/b not found in env/));
test('multiple declarations with shadowing', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
   val x = 1
   val x = x + 1
in
   x + x
end
`)).toBe(`4`));
test('nested declarations with shadowing', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
   val x = 1
in
   let
      val x = x + 1
   in
      x + x
   end
end
`)).toBe(`4`));
test('nested declarations with shadowing and other bindings', () => expect((0, utils_1.parseAndEvaluateExp)(`
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
`)).toBe(`6`));
test.skip('rec function without rec keyword', () => expect(() => (0, utils_1.parseAndEvaluateExp)(`
let
  val f = fn n => if n = 0 then 1 else n * f (n - 1)
in
  f(3)
end
`)).toThrow()); // TODO: add more specific error
test.skip('rec function with rec keyword', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
  val rec f = fn n => if n = 0 then 1 else n * f (n - 1)
in
  f(3)
end
`)).toEqual(`6`));
//# sourceMappingURL=let_exp.js.map