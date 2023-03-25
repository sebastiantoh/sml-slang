"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
describe('Constant', () => {
    describe('IntConstant', () => {
        test('positive', () => expect((0, utils_1.parseAndTypeCheckExp)('1')).toBe('int'));
        test('negative', () => expect((0, utils_1.parseAndTypeCheckExp)('~1')).toBe('int'));
    });
    describe('RealConstant', () => {
        test('positive', () => expect((0, utils_1.parseAndTypeCheckExp)('1.0')).toBe('real'));
        test('negative', () => expect((0, utils_1.parseAndTypeCheckExp)('~1.0')).toBe('real'));
    });
    describe('StringConstant', () => {
        test('string', () => expect((0, utils_1.parseAndTypeCheckExp)('"str"')).toBe('string'));
    });
    describe('CharConstant', () => {
        test('char', () => expect((0, utils_1.parseAndTypeCheckExp)('#"a"')).toBe('char'));
    });
    describe('BoolConstant', () => {
        test('true', () => expect((0, utils_1.parseAndTypeCheckExp)('true')).toBe('bool'));
        test('false', () => expect((0, utils_1.parseAndTypeCheckExp)('false')).toBe('bool'));
    });
    describe('UnitConstant', () => {
        test('unit', () => expect((0, utils_1.parseAndTypeCheckExp)('()')).toBe('unit'));
    });
});
//# sourceMappingURL=expressions.js.map