"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
describe('Constant', () => {
    describe('IntConstant', () => {
        test('evaluate to themselves', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('2')).toBe('2'));
        test('unary negation', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('~2')).toBe('~2'));
    });
    describe('RealConstant', () => {
        test('evaluate to themselves', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('2.1')).toBe('2.1'));
        test('unary negation', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('~2.1')).toBe('~2.1'));
    });
    describe('StringConstant', () => {
        test('evaluate to themselves', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"abc"`)).toBe(`"abc"`));
        test('evaluate to themselves - empty string', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`""`)).toBe(`""`));
    });
    describe('CharConstant', () => {
        test('evaluate to themselves', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`#"a"`)).toBe(`#"a"`));
    });
    describe('BoolConstant', () => {
        test('true evaluates to itself', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('true')).toBe('true'));
        test('false evaluates to itself', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('false')).toBe('false'));
    });
    describe('UnitConstant', () => {
        test('unit: evaluate to themselves', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('()')).toBe('()'));
    });
});
describe('Application', () => {
    describe('Builtin Functions', () => {
        test('size', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`size "abc"`)).toBe('3'));
        test('size of empty string', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`size ""`)).toBe('0'));
        test('negation of true', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('not true')).toBe('false'));
        test('negation of false', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('not false')).toBe('true'));
        test('double negation of true', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('not (not true)')).toBe('true'));
        test('double negation of false', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('not (not false)')).toBe('false'));
    });
    test('function with multiple matches and function application arg matches with >1 of these patterns - should match with first possible match', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
  val add_one_if_two = fn 2 => 3 | x => x
in
  add_one_if_two 2
end
`)).toEqual(`3`));
    test('function with multiple matches and function application arg only matches with 1 of these patterns', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
  val add_one_if_two = fn 2 => 3 | x => x
in
  add_one_if_two 10
end
`)).toEqual(`10`));
    test('env is properly restored outside scope of function', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
  val duplicate_name = 1000
  val add_one = fn duplicate_name => duplicate_name + 1
in
  (add_one 2) + duplicate_name
end
`)).toEqual(`1003`));
    test('tail recursive function', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
  fun add x y = x + y
  fun fact n acc =
    if n = 0 then
      acc
    else
      fact (n - 1) (acc * n)
in
  (add 2 (fact 5 1))
end
`)).toBe(`122`));
    test('tail recursive function - env is properly restored', () => expect(() => (0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
  fun add x y = x + y
  fun fact n acc =
    if n = 0 then
      acc
    else
      fact (n - 1) (acc * n)
in
  (fact 5 1) + acc
end
`)).toThrow(/Unbound value identifier \"acc\"./));
    test('case analysis exp ', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
  val a = 0
  val a =
    case a of
      0 => 0
    | x => x + 1
in
  a
end
`)).toBe(`0`));
    test('nested case analysis exp', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
  val a = true
  val b = true
  val both_true =
    case a of
      false => false
    | true =>
    case b of
      false => false
    | true => true
in
  both_true
end
`)).toBe(`true`));
    test('case analysis exp with wildcard', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
  val x = 123
  val is_between_one_to_three =
    case x of
      1 => true
    | 2 => true
    | 3 => true
    | _ => false
in
  is_between_one_to_three
end
`)).toBe(`false`));
});
describe('InfixApplication', () => {
    describe('/', () => {
        test('real numbers: nonzero / nonzero', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`1.0 / 2.0`)).toBe('0.5'));
        test('real numbers: zero / nonzero', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`0.0 / 2.0`)).toBe('0'));
        test('real numbers: nonzero / zero', () => expect(() => (0, utils_1.parseTypeCheckAndEvaluateExpToString)(`1.0 / 0.0`)).toThrow(/division by zero/));
    });
    describe('div', () => {
        test('integers: division', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('5 div 2')).toBe('2'));
        test('integers: division by zero', () => expect(() => (0, utils_1.parseTypeCheckAndEvaluateExpToString)('5 div 0')).toThrow(/division by zero/));
    });
    describe('mod', () => {
        test('posInt mod posInt', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`5 mod 2`)).toBe('1'));
        test('posInt mod negInt', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`5 mod ~2`)).toBe('~1'));
        test('negInt mod posInt', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`~5 mod 2`)).toBe('1'));
        test('negInt mod negInt', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`~5 mod ~2`)).toBe('~1'));
    });
    describe('*', () => {
        test('integers: multiplication', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('6 * 7')).toBe('42'));
        test('real numbers: multiplication', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('1.2 *. 3.4')).toBe('4.08'));
    });
    describe('+', () => {
        test('integers: addition', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('1 + 2')).toBe('3'));
        test('real numbers: addition', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('1.2 +. 3.4')).toBe('4.6'));
    });
    describe('-', () => {
        test('integers: subtraction', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('4 - 5')).toBe('~1'));
        test('real numbers: subtraction', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('1.2 -. 3.4')).toBe('~2.2'));
    });
    describe('^', () => {
        test('nonempty concat nonempty', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"abc" ^ "def"`)).toBe(`"abcdef"`));
        test('nonempty concat empty', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"abc" ^ ""`)).toBe(`"abc"`));
        test('empty concat nonempty', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"" ^ "def"`)).toBe(`"def"`));
        test('empty concat empty', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"" ^ ""`)).toBe(`""`));
    });
    describe('::', () => {
        test('lists: hd::[]', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('1::[]')).toBe('[1]'));
        test('lists: hd::tl', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('1::[2,3,4]')).toBe('[1,2,3,4]'));
        test('lists: :: with nested lists', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[1,2,3]::[[4,5,6]]]')).toBe('[[1,2,3],[4,5,6]]'));
        test('lists: right associativity of :: operator', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('1::2::3::4::[]')).toBe('[1,2,3,4]'));
    });
    describe('@', () => {
        test('lists: [] @ []', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[] @ []')).toBe('[]'));
        test('lists: l1 @ [] ', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[1,2,3] @ []')).toBe('[1,2,3]'));
        test('lists: [] @ l1 ', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[] @ [4,5,6]')).toBe('[4,5,6]'));
        test('lists: @ with nested lists', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[[1,2,3]]@[[4,5,6]]]')).toBe('[[1,2,3],[4,5,6]]'));
        test('lists: right associativity of @ operator []', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[1,2,3] @ 4::[5,6] @ [7,8,9]')).toBe('[1,2,3,4,5,6,7,8,9]'));
    });
    describe('=', () => {
        test('int1 = int1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`1 = 1`)).toBe('true'));
        test('int1 = int2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`1 = 2`)).toBe('false'));
        test('string1 = string1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"ab" = "ab"`)).toBe('true'));
        test('string1 = string2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"ab" = "ba"`)).toBe('false'));
        test('char1 = char1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`#"a" = #"a"`)).toBe('true'));
        test('char1 = char2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`#"a" = #"b"`)).toBe('false'));
        test('unit: unit = unit', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('() = ()')).toBe('true'));
        test('lists: empty list = empty list', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[] = []')).toBe('true'));
        test('lists: empty list = non-empty list', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[] = [1]')).toBe('false'));
        test('lists: l1 = l1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[1,2,3] = [1,2,3]')).toBe('true'));
        test('lists: l1 = l2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[1,2,3] = [1,2,3,4]')).toBe('false'));
        test('lists: = with nested lists', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[[1,2,3],[4,5,6]] = [[1,2,3],[4,5,6]]')).toBe('true'));
    });
    describe('<>', () => {
        test('int1 <> int1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`1 <> 1`)).toBe('false'));
        test('int1 <> int2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`1 <> 2`)).toBe('true'));
        test('string1 <> string1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"ab" <> "ab"`)).toBe('false'));
        test('string1 <> string2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"ab" <> "ba"`)).toBe('true'));
        test('char1 <> char1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`#"a" <> #"a"`)).toBe('false'));
        test('char1 <> char2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`#"a" <> #"b"`)).toBe('true'));
        test('lists: empty list <> empty list', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[] <> []')).toBe('false'));
        test('lists: empty list <> non-empty list', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[] <> [1]')).toBe('true'));
        test('lists: l1 <> l1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[1,2,3] <> [1,2,3]')).toBe('false'));
        test('lists: l1 <> l2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[1,2,3] <> [1,2,3,4]')).toBe('true'));
        test('lists: <> with nested lists', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[[1,2,3],[4,5,6]] <> [[1,2,3],[4,5,6]]')).toBe('false'));
    });
    describe('<', () => {
        test('int1 < int1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`1 < 1`)).toBe('false'));
        test('int1 < int2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`1 < 2`)).toBe('true'));
        test('string1 < string1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"ab" < "ab"`)).toBe('false'));
        test('string1 < string2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"ab" < "ba"`)).toBe('true'));
        test('char1 < char1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`#"a" < #"a"`)).toBe('false'));
        test('char1 < char2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`#"a" < #"b"`)).toBe('true'));
    });
    describe('>', () => {
        test('int1 > int1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`1 > 1`)).toBe('false'));
        test('int1 > int2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`1 > 2`)).toBe('false'));
        test('string1 > string1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"ab" > "ab"`)).toBe('false'));
        test('string1 > string2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"ab" > "ba"`)).toBe('false'));
        test('char1 > char1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`#"a" > #"a"`)).toBe('false'));
        test('char1 > char2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`#"a" > #"b"`)).toBe('false'));
    });
    describe('<=', () => {
        test('int1 <= int1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`1 <= 1`)).toBe('true'));
        test('int1 <= int2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`1 <= 2`)).toBe('true'));
        test('string1 <= string1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"ab" <= "ab"`)).toBe('true'));
        test('string1 <= string2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"ab" <= "ba"`)).toBe('true'));
        test('char1 <= char1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`#"a" <= #"a"`)).toBe('true'));
        test('char1 <= char2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`#"a" <= #"b"`)).toBe('true'));
    });
    describe('>=', () => {
        test('int1 >= int1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`1 >= 1`)).toBe('true'));
        test('int1 >= int2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`1 >= 2`)).toBe('false'));
        test('string1 >= string1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"ab" >= "ab"`)).toBe('true'));
        test('string1 >= string2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`"ab" >= "ba"`)).toBe('false'));
        test('char1 >= char1', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`#"a" >= #"a"`)).toBe('true'));
        test('char1 >= char2', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`#"a" >= #"b"`)).toBe('false'));
    });
    describe('logical operators', () => {
        test('disjunction', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('2=2 orelse 37 div 0 = 5')).toBe('true'));
        test('conjunction', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('2=0 andalso 37 div 0 = 5')).toBe('false'));
        test('precedence of logical operators', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('true orelse false andalso false')).toBe('true'));
        test('override precedence of logical operators with parentheses', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('(true orelse false) andalso false')).toBe('false'));
    });
    test('precendence of builtin operators', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`2 + 6 * 3 div 2 - 10 div 2`)).toBe('6'));
    test('precendence of builtin operators with non-nested parentheses', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`(2 + 6) * 3`)).toBe('24'));
    test('precendence of builtin operators with nested parentheses', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`(((2 + 6) * 3) div 2) - (10 div 2)`)).toBe('7'));
});
describe('ListLiteral', () => {
    test('lists: evaluate to themselves', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[]')).toBe('[]'));
    test('lists: evaluate to themselves', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[1]')).toBe('[1]'));
    test('lists: evaluate to themselves', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[1,2,5]')).toBe('[1,2,5]'));
    test('lists: evaluate to themselves', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('[[1,2,3],[4,5,6]]')).toBe('[[1,2,3],[4,5,6]]'));
});
describe('LetExpression', () => {
    test('multiple declarations', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
   val a = 1
   val 1 = 1
   val b = 2
in
   a + b
end
`)).toBe(`3`));
    test('nested declarations', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
   val a = 1
in
   let
      val b = 2
   in
      a + b
   end
end
`)).toBe(`3`));
    test('accessing variable in inner declarations from outer', () => expect(() => (0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
   val a = let val b = 1 in b end
in
   b
end
`)).toThrow(/Unbound value identifier \"b\"./));
    test('multiple declarations with shadowing', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
   val x = 1
   val x = x + 1
in
   x + x
end
`)).toBe(`4`));
    test('nested declarations with shadowing', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
   val x = 1
in
   let
      val x = x + 1
   in
      x + x
   end
end
`)).toBe(`4`));
    test('nested declarations with shadowing and other bindings', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
   val x = 1
in
   let
      val x = x + 1
   in
      let
         val y = x + 2
      in
         x + y
      end
   end
end
`)).toBe(`6`));
    test('shadowed function calling function with same name in body', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)(`
let
  val f = fn n => n + 1
  val f = fn n => f (f n)
in
  f 3
end
`)).toBe(`5`));
});
describe('ConditionalExpression', () => {
    test('true literal as pred', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('if true then "then" else "else"')).toBe(`"then"`));
    test('false literal as pred', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('if false then "then" else "else"')).toBe(`"else"`));
    test('pred evaluating to true', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('if 1=1 then "then" else "else"')).toBe(`"then"`));
    test('pred evaluating to false', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('if 1=2 then "then" else "else"')).toBe(`"else"`));
    test('nested conditionals', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('if 1=2 then if 1=1 then 1 else 2 else if 1=2 then 3 else 4')).toBe('4'));
    test('else branch is not evaluated when pred is true', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('if 1=1 then 2 else 37 div 0')).toBe('2'));
    test('then branch is not evaluated when pred is false', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('if 1=2 then 37 div 0 else 3')).toBe('3'));
    test('negated pred evaluating to true', () => expect((0, utils_1.parseTypeCheckAndEvaluateExpToString)('if not (1=2) then "then" else "else"')).toBe(`"then"`));
});
//# sourceMappingURL=expression.js.map