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
    test('let expression with infix construction patterns', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
  val a::b = [1,2,3]
in
  b
end;
  `)).toBe(`int list`));
    test('let expression with list literal patterns', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
  val [a,b,c] =[[1,2],[3,4],[5,6]]
in
  a
end;
  `)).toBe(`int list`));
    test('type inference with valid constant valbind - should not throw', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
  val 1 = 1 + 3
in
  "ABC"
end
`)).toBe(`string`));
    test('type inference with invalid constant valbind - should throw', () => expect(() => (0, utils_1.parseAndTypeCheckExp)(`
let
  val 1 = "abc"
in
  "ABC"
end
`)).toThrow(/Invalid constant binding. Expected type int, got string./));
});
describe('Function', () => {
    test('function with type variables in parameter and return type', () => expect((0, utils_1.parseAndTypeCheckExp)('fn x => x')).toBe(`'a -> 'a`));
    test('function with no type variables in parameter and return type', () => expect((0, utils_1.parseAndTypeCheckExp)('fn 3 => 3 | x => x')).toBe('int -> int'));
    test('function with type variables in parameter type, but not return type', () => expect((0, utils_1.parseAndTypeCheckExp)('fn [] => 1 | [x] => 2 | x => 3')).toBe(`'a list -> int`));
    test('function that requires inference from multiple matches', () => expect((0, utils_1.parseAndTypeCheckExp)(`fn (hd::tl) => [hd] | [x] => [1,2,3]`)).toBe(`int list -> int list`));
    test('nested function types', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
  fun compose f g x = f (g x)
in
  compose
end
`)).toBe(`('a -> 'b) -> ('c -> 'a) -> 'c -> 'b`));
    test('function type inferred from :: operator', () => expect((0, utils_1.parseAndTypeCheckExp)(`fn lists_of_list => [1,2,3]::[4,5,6]::lists_of_list`)).toBe(`int list list -> int list list`));
    test('function type inferred from :: operator in pattern', () => expect((0, utils_1.parseAndTypeCheckExp)(`fn fst::snd::tl => (fst+snd)::tl`)).toBe(`int list -> int list`));
    test('function type inferred from :: operator in pattern with type variable in param and return type', () => expect((0, utils_1.parseAndTypeCheckExp)(`fn fst::snd::tl => fst::tl`)).toBe(`'a list -> 'a list`));
    test('function type inferred from @ operator', () => expect((0, utils_1.parseAndTypeCheckExp)(`fn lists_of_list => lists_of_list @ [[1,2,3],[4,5,6]]`)).toBe(`int list list -> int list list`));
    test('type inference of recursive functions', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
  fun loop acc lst =
    case lst of [] => acc | x::xs => loop (acc + 1) (xs)
in
  loop 0 [2,3,4]
end
`)).toBe(`int`));
    test('type inference of builtin "print" function', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
  val () = print 5
in
  print 2
end
`)).toBe(`unit`));
    test('type inference of builtin "size" function', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
  val a = size "ABC"
in
  a
end
`)).toBe(`int`));
    test('type inference of builtin "not" function', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
  val a = not true
in
  a
end
`)).toBe(`bool`));
    test('type inference with elements from multiple lists from multiple functions', () => expect((0, utils_1.parseAndTypeCheckExp)(`
let
  val take_heads = fn hd1::tl2 => fn hd2::tl2 => [hd1, hd2]
in
  take_heads
end
`)).toBe(`'a list -> 'a list -> 'a list`));
});
//# sourceMappingURL=expressions.js.map