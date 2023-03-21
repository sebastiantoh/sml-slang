"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
describe('InfixConstruction', () => {
    test('infix construction pattern matching', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
  fun begins_with_one lst =
    case lst of
     1::_ => true
    | _ => false
in
  begins_with_one [1,2,3]
end
`)).toBe(`true`));
    test('multiple infix construction pattern matching', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
  fun begins_with_one_and_two lst =
    case lst of
     1::2::_ => true
    | _ => false
in
  begins_with_one_and_two [1,2,3]
end
`)).toBe(`true`));
    test('infix construction pattern matching with variable', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
  fun hd lst =
    case lst of
      x::xs => x
    | _ => 0
in
  hd [123, 456]
end
`)).toBe(`123`));
});
//# sourceMappingURL=pattern.js.map