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
});
//# sourceMappingURL=pattern.js.map