"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
test('no whitespace between tokens', () => expect((0, utils_1.parseAndEvaluateExp)('2+3')).toBe('5'));
test('multiple spaces between tokens', () => expect((0, utils_1.parseAndEvaluateExp)('2    + 3')).toBe('5'));
test('new line between tokens', () => expect((0, utils_1.parseAndEvaluateExp)(`2
+
3`)).toBe('5'));
test('comments are ignored', () => expect((0, utils_1.parseAndEvaluateExp)(`(* this is a comment *) 2 + (*this is another comment*) 3`)).toBe('5'));
//# sourceMappingURL=format.js.map