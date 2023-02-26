"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
test.skip('multiple declarations', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
   val a = 1
   val 1 = 1
   val b = 2
in
   a + b
end
`)).toBe(`"3"`));
test.skip('nested declarations', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
   val a = 1
in
   let
      val b = 2
   in
      a + b
   end
end
`)).toBe(`"3"`));
test.skip('multiple declarations with shadowing', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
   val x = 1
   val x = x + 1
in
   x + x
end
`)).toBe(`"4"`));
test.skip('nested declarations with shadowing', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
   val x = 1
in
   let
      val x = x + 1
   in
      x + x
   end
end
`)).toBe(`"4"`));
test.skip('nested declarations with shadowing and other bindings', () => expect((0, utils_1.parseAndEvaluateExp)(`
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
`)).toBe(`"6"`));
//# sourceMappingURL=let_exp.js.map