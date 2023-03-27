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
describe('LetExpression', () => {
    test('simple val dec', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
  val x = true
in
  x
end
  `)).toBe(`bool`));
    test('simple val dec with infix operator evaluation', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
  val x = 2 + 3
in
  x
end
  `)).toBe(`int`));
    test('valid sequence in let expr', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
  val x = 2 + 3
in
  x + 2;
  "hi";
  true
end
  `)).toBe(`bool`));
    test('invalid sequence in let expr', () => expect(() => {
        (0, utils_1.parseAndTypeCheckExp)(`
let
  val x = true + 2
in
  x
end
  `);
    }).toThrow(/Failed to unify type constraint int = bool./));
    test('more complex nesting of lets and locals', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
  val x =
    let
      local
        val x = 5
      in
        val y = x
      end 
    in
      y 
    end
  in
    x
  end;
  `)).toBe(`int`));
});
//# sourceMappingURL=expressions.js.map