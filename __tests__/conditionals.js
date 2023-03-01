"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
// TODO: add tests where the pred is simply the constant true or false
// Right now, parser can't parse true / false. Idk if we should add it as a constant
// even though it doens't appear in the grammar...
test('true pred', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=1 then "then" else "else"')).toBe(`"then"`));
test('false pred', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=2 then "then" else "else"')).toBe(`"else"`));
test('nested conditionals', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=2 then if 1=1 then 1 else 2 else if 1=2 then 3 else 4')).toBe('4'));
test('else branch is not evaluated when pred is true', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=1 then 2 else 37 div 0')).toBe('2'));
test('then branch is not evaluated when pred is false', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=2 then 37 div 0 else 3')).toBe('3'));
//# sourceMappingURL=conditionals.js.map