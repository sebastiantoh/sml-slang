"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
test('no whitespace between tokens', () => expect((0, __1.parseTypeCheckAndEvaluateExp)('2+3')).toBe('5'));
test('multiple spaces between tokens', () => expect((0, __1.parseTypeCheckAndEvaluateExp)('2    + 3')).toBe('5'));
test('new line between tokens', () => expect((0, __1.parseTypeCheckAndEvaluateExp)(`2
+
3`)).toBe('5'));
test('comments are ignored', () => expect((0, __1.parseTypeCheckAndEvaluateExp)(`(* this is a comment *) 2 + (*this is another comment*) 3`)).toBe('5'));
//# sourceMappingURL=format.js.map