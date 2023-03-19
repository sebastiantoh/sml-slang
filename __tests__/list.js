"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
/**
 * Lists
 */
test('lists: evaluate to themselves', () => expect((0, utils_1.parseAndEvaluateExp)('[]')).toBe('[]'));
test('lists: evaluate to themselves', () => expect((0, utils_1.parseAndEvaluateExp)('[1]')).toBe('[1]'));
test('lists: evaluate to themselves', () => expect((0, utils_1.parseAndEvaluateExp)('[1,2,5]')).toBe('[1,2,5]'));
//# sourceMappingURL=list.js.map