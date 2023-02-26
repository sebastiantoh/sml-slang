"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
test.skip('single valbind with constant as pattern', () => expect((0, utils_1.parseAndEvaluateExp)('val 1 = 1')).toBe(`"TODO`));
test.skip('single valbind with variable as pattern', () => expect((0, utils_1.parseAndEvaluateExp)('val a = 1')).toBe(`"TODO"`));
test.skip('multiple valbinds', () => expect((0, utils_1.parseAndEvaluateExp)('val a = 1 and b = 2 and c = 3 and 1 = 1')).toBe(`"TODO"`));
//# sourceMappingURL=declarations.js.map