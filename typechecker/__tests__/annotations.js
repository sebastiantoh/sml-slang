"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const utils_1 = require("./utils");
describe('Constant', () => {
    describe('IntConstant', () => {
        test('Valid Annotation', () => expect((0, utils_1.parseAndTypeCheckExp)('1:int')).toBe('int'));
        test('Invalid Annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)('1:real')).toThrow(errors_1.CustomSourceError));
        test('Invalid Annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)(`1:'a`)).toThrow(errors_1.CustomSourceError));
    });
    describe('RealConstant', () => {
        test('Valid Annotation', () => expect((0, utils_1.parseAndTypeCheckExp)('1.0:real')).toBe('real'));
        test('Invalid Annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)('1.0:int')).toThrow(errors_1.CustomSourceError));
    });
    describe('StringConstant', () => {
        test('Valid Annotation', () => expect((0, utils_1.parseAndTypeCheckExp)('"str":string')).toBe('string'));
        test('Invalid Annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)('"str":char')).toThrow(errors_1.CustomSourceError));
    });
    describe('CharConstant', () => {
        test('Valid Annotation', () => expect((0, utils_1.parseAndTypeCheckExp)('#"a":char')).toBe('char'));
        test('Invalid Annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)('#"a":string')).toThrow(errors_1.CustomSourceError));
    });
    describe('BoolConstant', () => {
        test('Valid Annotation', () => expect((0, utils_1.parseAndTypeCheckExp)('true:bool')).toBe('bool'));
        test('Invalid Annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)('false:int')).toThrow(errors_1.CustomSourceError));
    });
    describe('UnitConstant', () => {
        test('Valid Annotation', () => expect((0, utils_1.parseAndTypeCheckExp)('():unit')).toBe('unit'));
        test('Invalid Annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)('():bool')).toThrow(errors_1.CustomSourceError));
    });
});
describe('Variable', () => {
    test('simple val dec', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
  val x = true
in
  x:bool
end
  `)).toBe(`bool`));
    test('simple val dec', () => expect(() => (0, utils_1.parseAndTypeCheckExp)(`
let
  val x = true
in
  x:int
end
  `)).toThrow(errors_1.CustomSourceError));
});
describe('Infix Application', () => {
    test('Valid annotation', () => expect((0, utils_1.parseAndTypeCheckExp)(`
(1 + 1):int
  `)).toBe(`int`));
    test('Valid annotation', () => expect((0, utils_1.parseAndTypeCheckExp)(`
(1 :: []: 'a list): int list
  `)).toBe(`int list`));
    test('Invalid annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)(`
(1 :: []): string list
  `)).toThrow(errors_1.CustomSourceError));
    test('Invalid Annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)(`
(1.0 +. 1.0):string
  `)).toThrow(errors_1.CustomSourceError));
});
describe('List', () => {
    test('Valid annotation', () => expect((0, utils_1.parseAndTypeCheckExp)(`
[1:int, 2, 3]: int list
  `)).toBe(`int list`));
    test('Invalid annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)(`
[1:int, 2, 3]: string list
  `)).toThrow(errors_1.CustomSourceError));
    test('Invalid annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)(`
[1:int, 2:string, 3]: int list
  `)).toThrow(errors_1.CustomSourceError));
});
describe('Function', () => {
    test('Valid annotation', () => expect((0, utils_1.parseAndTypeCheckExp)(`
(fn x => x): int -> int
  `)).toBe(`int -> int`));
    test('Invalid annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)(`
(fn x => x): string -> int
  `)).toThrow(errors_1.CustomSourceError));
});
describe('Let Expression', () => {
    test('Valid annotation', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
      val x = 1
in
  true
end : bool
  `)).toBe(`bool`));
    test('Invalid annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)(`
let
  val x = 1
in
  true
end : int
  `)).toThrow(errors_1.CustomSourceError));
});
test('Invalid annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)(`
let
  fun id x : int = x
in
  id "A"
end
`)).toThrow(errors_1.CustomSourceError));
describe('Pattern', () => {
    test('Valid annotation', () => expect((0, utils_1.parseAndTypeCheckExp)(`
case 1 of
  x: int => 1
  `)).toBe(`int`));
    test('Valid annotation', () => expect((0, utils_1.parseAndTypeCheckExp)(`
case [1,2,3] of
  [x,y,z:int] => 1
  `)).toBe(`int`));
    test('Invalid annotation', () => expect(() => (0, utils_1.parseAndTypeCheckExp)(`
case [1,2,3] of
  [x:string, y, z] => 1
  `)).toThrow(errors_1.CustomSourceError));
});
//# sourceMappingURL=annotations.js.map