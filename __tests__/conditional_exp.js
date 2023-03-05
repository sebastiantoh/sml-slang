"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
test('true literal as pred', () => expect((0, utils_1.parseAndEvaluateExp)('if true then "then" else "else"')).toBe(`"then"`));
test('false literal as pred', () => expect((0, utils_1.parseAndEvaluateExp)('if false then "then" else "else"')).toBe(`"else"`));
test('pred evaluating to true', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=1 then "then" else "else"')).toBe(`"then"`));
test('pred evaluating to false', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=2 then "then" else "else"')).toBe(`"else"`));
test('nested conditionals', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=2 then if 1=1 then 1 else 2 else if 1=2 then 3 else 4')).toBe('4'));
test('else branch is not evaluated when pred is true', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=1 then 2 else 37 div 0')).toBe('2'));
test('then branch is not evaluated when pred is false', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=2 then 37 div 0 else 3')).toBe('3'));
test('negated pred evaluating to true', () => expect((0, utils_1.parseAndEvaluateExp)('if not (1=2) then "then" else "else"')).toBe(`"then"`));
//# sourceMappingURL=conditional_exp.js.map