"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
describe('Constant', () => {
    describe('IntConstant', () => {
        test('evaluate to themselves', () => expect((0, utils_1.parseAndEvaluateExp)('2')).toBe('2'));
        test('unary negation', () => expect((0, utils_1.parseAndEvaluateExp)('~2')).toBe('~2'));
    });
    describe('RealConstant', () => {
        test('evaluate to themselves', () => expect((0, utils_1.parseAndEvaluateExp)('2.1')).toBe('2.1'));
        test('unary negation', () => expect((0, utils_1.parseAndEvaluateExp)('~2.1')).toBe('~2.1'));
    });
    describe('StringConstant', () => {
        test('evaluate to themselves', () => expect((0, utils_1.parseAndEvaluateExp)(`"abc"`)).toBe(`"abc"`));
        test('evaluate to themselves - empty string', () => expect((0, utils_1.parseAndEvaluateExp)(`""`)).toBe(`""`));
    });
    describe('CharConstant', () => {
        test('evaluate to themselves', () => expect((0, utils_1.parseAndEvaluateExp)(`#"a"`)).toBe(`#"a"`));
    });
    describe('BoolConstant', () => {
        test('true evaluates to itself', () => expect((0, utils_1.parseAndEvaluateExp)('true')).toBe('true'));
        test('false evaluates to itself', () => expect((0, utils_1.parseAndEvaluateExp)('false')).toBe('false'));
    });
    describe('UnitConstant', () => {
        test('unit: evaluate to themselves', () => expect((0, utils_1.parseAndEvaluateExp)('()')).toBe('()'));
    });
});
describe('Application', () => {
    describe('Builtin Functions', () => {
        test('size', () => expect((0, utils_1.parseAndEvaluateExp)(`size "abc"`)).toBe('3'));
        test('size of empty string', () => expect((0, utils_1.parseAndEvaluateExp)(`size ""`)).toBe('0'));
        test('negation of true', () => expect((0, utils_1.parseAndEvaluateExp)('not true')).toBe('false'));
        test('negation of false', () => expect((0, utils_1.parseAndEvaluateExp)('not false')).toBe('true'));
        test('double negation of true', () => expect((0, utils_1.parseAndEvaluateExp)('not (not true)')).toBe('true'));
        test('double negation of false', () => expect((0, utils_1.parseAndEvaluateExp)('not (not false)')).toBe('false'));
    });
});
describe('InfixApplication', () => {
    describe('/', () => {
        test('real numbers: nonzero / nonzero', () => expect((0, utils_1.parseAndEvaluateExp)(`1.0 / 2.0`)).toBe('0.5'));
        test('real numbers: zero / nonzero', () => expect((0, utils_1.parseAndEvaluateExp)(`0.0 / 2.0`)).toBe('0'));
        test('real numbers: nonzero / zero', () => expect(() => (0, utils_1.parseAndEvaluateExp)(`1.0 / 0.0`)).toThrow(/division by zero/));
    });
    describe('div', () => {
        test('integers: division', () => expect((0, utils_1.parseAndEvaluateExp)('5 div 2')).toBe('2'));
        test('integers: division by zero', () => expect(() => (0, utils_1.parseAndEvaluateExp)('5 div 0')).toThrow(/division by zero/));
    });
    describe('mod', () => {
        test('posInt mod posInt', () => expect((0, utils_1.parseAndEvaluateExp)(`5 mod 2`)).toBe('1'));
        test('posInt mod negInt', () => expect((0, utils_1.parseAndEvaluateExp)(`5 mod ~2`)).toBe('~1'));
        test('negInt mod posInt', () => expect((0, utils_1.parseAndEvaluateExp)(`~5 mod 2`)).toBe('1'));
        test('negInt mod negInt', () => expect((0, utils_1.parseAndEvaluateExp)(`~5 mod ~2`)).toBe('~1'));
    });
    describe('*', () => {
        test('integers: multiplication', () => expect((0, utils_1.parseAndEvaluateExp)('6 * 7')).toBe('42'));
        test('real numbers: multiplication', () => expect((0, utils_1.parseAndEvaluateExp)('1.2 * 3.4')).toBe('4.08'));
    });
    describe('+', () => {
        test('integers: addition', () => expect((0, utils_1.parseAndEvaluateExp)('1 + 2')).toBe('3'));
        test('real numbers: addition', () => expect((0, utils_1.parseAndEvaluateExp)('1.2 + 3.4')).toBe('4.6'));
    });
    describe('-', () => {
        test('integers: subtraction', () => expect((0, utils_1.parseAndEvaluateExp)('4 - 5')).toBe('~1'));
        test('real numbers: subtraction', () => expect((0, utils_1.parseAndEvaluateExp)('1.2 - 3.4')).toBe('~2.2'));
    });
    describe('^', () => {
        test('nonempty concat nonempty', () => expect((0, utils_1.parseAndEvaluateExp)(`"abc" ^ "def"`)).toBe(`"abcdef"`));
        test('nonempty concat empty', () => expect((0, utils_1.parseAndEvaluateExp)(`"abc" ^ ""`)).toBe(`"abc"`));
        test('empty concat nonempty', () => expect((0, utils_1.parseAndEvaluateExp)(`"" ^ "def"`)).toBe(`"def"`));
        test('empty concat empty', () => expect((0, utils_1.parseAndEvaluateExp)(`"" ^ ""`)).toBe(`""`));
    });
    describe('::', () => {
        test('lists: hd::[]', () => expect((0, utils_1.parseAndEvaluateExp)('1::[]')).toBe('[1]'));
        test('lists: hd::tl', () => expect((0, utils_1.parseAndEvaluateExp)('1::[2,3,4]')).toBe('[1,2,3,4]'));
        test('lists: :: with nested lists', () => expect((0, utils_1.parseAndEvaluateExp)('[1,2,3]::[[4,5,6]]]')).toBe('[[1,2,3],[4,5,6]]'));
        test('lists: right associativity of :: operator', () => expect((0, utils_1.parseAndEvaluateExp)('1::2::3::4::[]')).toBe('[1,2,3,4]'));
    });
    describe('@', () => {
        test('lists: [] @ []', () => expect((0, utils_1.parseAndEvaluateExp)('[] @ []')).toBe('[]'));
        test('lists: l1 @ [] ', () => expect((0, utils_1.parseAndEvaluateExp)('[1,2,3] @ []')).toBe('[1,2,3]'));
        test('lists: [] @ l1 ', () => expect((0, utils_1.parseAndEvaluateExp)('[] @ [4,5,6]')).toBe('[4,5,6]'));
        test('lists: @ with nested lists', () => expect((0, utils_1.parseAndEvaluateExp)('[[1,2,3]]@[[4,5,6]]]')).toBe('[[1,2,3],[4,5,6]]'));
        test('lists: right associativity of @ operator []', () => expect((0, utils_1.parseAndEvaluateExp)('[1,2,3] @ 4::[5,6] @ [7,8,9]')).toBe('[1,2,3,4,5,6,7,8,9]'));
    });
    describe('=', () => {
        test('int1 = int1', () => expect((0, utils_1.parseAndEvaluateExp)(`1 = 1`)).toBe('true'));
        test('int1 = int2', () => expect((0, utils_1.parseAndEvaluateExp)(`1 = 2`)).toBe('false'));
        test('string1 = string1', () => expect((0, utils_1.parseAndEvaluateExp)(`"ab" = "ab"`)).toBe('true'));
        test('string1 = string2', () => expect((0, utils_1.parseAndEvaluateExp)(`"ab" = "ba"`)).toBe('false'));
        test('char1 = char1', () => expect((0, utils_1.parseAndEvaluateExp)(`#"a" = #"a"`)).toBe('true'));
        test('char1 = char2', () => expect((0, utils_1.parseAndEvaluateExp)(`#"a" = #"b"`)).toBe('false'));
        test('unit: unit = unit', () => expect((0, utils_1.parseAndEvaluateExp)('() = ()')).toBe('true'));
        test('lists: empty list = empty list', () => expect((0, utils_1.parseAndEvaluateExp)('[] = []')).toBe('true'));
        test('lists: empty list = non-empty list', () => expect((0, utils_1.parseAndEvaluateExp)('[] = [1]')).toBe('false'));
        test('lists: l1 = l1', () => expect((0, utils_1.parseAndEvaluateExp)('[1,2,3] = [1,2,3]')).toBe('true'));
        test('lists: l1 = l2', () => expect((0, utils_1.parseAndEvaluateExp)('[1,2,3] = [1,2,3,4]')).toBe('false'));
        test('lists: = with nested lists', () => expect((0, utils_1.parseAndEvaluateExp)('[[1,2,3],[4,5,6]] = [[1,2,3],[4,5,6]]')).toBe('true'));
    });
    describe('<>', () => {
        test('int1 <> int1', () => expect((0, utils_1.parseAndEvaluateExp)(`1 <> 1`)).toBe('false'));
        test('int1 <> int2', () => expect((0, utils_1.parseAndEvaluateExp)(`1 <> 2`)).toBe('true'));
        test('string1 <> string1', () => expect((0, utils_1.parseAndEvaluateExp)(`"ab" <> "ab"`)).toBe('false'));
        test('string1 <> string2', () => expect((0, utils_1.parseAndEvaluateExp)(`"ab" <> "ba"`)).toBe('true'));
        test('char1 <> char1', () => expect((0, utils_1.parseAndEvaluateExp)(`#"a" <> #"a"`)).toBe('false'));
        test('char1 <> char2', () => expect((0, utils_1.parseAndEvaluateExp)(`#"a" <> #"b"`)).toBe('true'));
        test('lists: empty list <> empty list', () => expect((0, utils_1.parseAndEvaluateExp)('[] <> []')).toBe('false'));
        test('lists: empty list <> non-empty list', () => expect((0, utils_1.parseAndEvaluateExp)('[] <> [1]')).toBe('true'));
        test('lists: l1 <> l1', () => expect((0, utils_1.parseAndEvaluateExp)('[1,2,3] <> [1,2,3]')).toBe('false'));
        test('lists: l1 <> l2', () => expect((0, utils_1.parseAndEvaluateExp)('[1,2,3] <> [1,2,3,4]')).toBe('true'));
        test('lists: <> with nested lists', () => expect((0, utils_1.parseAndEvaluateExp)('[[1,2,3],[4,5,6]] <> [[1,2,3],[4,5,6]]')).toBe('false'));
    });
    describe('<', () => {
        test('int1 < int1', () => expect((0, utils_1.parseAndEvaluateExp)(`1 < 1`)).toBe('false'));
        test('int1 < int2', () => expect((0, utils_1.parseAndEvaluateExp)(`1 < 2`)).toBe('true'));
        test('string1 < string1', () => expect((0, utils_1.parseAndEvaluateExp)(`"ab" < "ab"`)).toBe('false'));
        test('string1 < string2', () => expect((0, utils_1.parseAndEvaluateExp)(`"ab" < "ba"`)).toBe('true'));
        test('char1 < char1', () => expect((0, utils_1.parseAndEvaluateExp)(`#"a" < #"a"`)).toBe('false'));
        test('char1 < char2', () => expect((0, utils_1.parseAndEvaluateExp)(`#"a" < #"b"`)).toBe('true'));
    });
    describe('>', () => {
        test('int1 > int1', () => expect((0, utils_1.parseAndEvaluateExp)(`1 > 1`)).toBe('false'));
        test('int1 > int2', () => expect((0, utils_1.parseAndEvaluateExp)(`1 > 2`)).toBe('false'));
        test('string1 > string1', () => expect((0, utils_1.parseAndEvaluateExp)(`"ab" > "ab"`)).toBe('false'));
        test('string1 > string2', () => expect((0, utils_1.parseAndEvaluateExp)(`"ab" > "ba"`)).toBe('false'));
        test('char1 > char1', () => expect((0, utils_1.parseAndEvaluateExp)(`#"a" > #"a"`)).toBe('false'));
        test('char1 > char2', () => expect((0, utils_1.parseAndEvaluateExp)(`#"a" > #"b"`)).toBe('false'));
    });
    describe('<=', () => {
        test('int1 <= int1', () => expect((0, utils_1.parseAndEvaluateExp)(`1 <= 1`)).toBe('true'));
        test('int1 <= int2', () => expect((0, utils_1.parseAndEvaluateExp)(`1 <= 2`)).toBe('true'));
        test('string1 <= string1', () => expect((0, utils_1.parseAndEvaluateExp)(`"ab" <= "ab"`)).toBe('true'));
        test('string1 <= string2', () => expect((0, utils_1.parseAndEvaluateExp)(`"ab" <= "ba"`)).toBe('true'));
        test('char1 <= char1', () => expect((0, utils_1.parseAndEvaluateExp)(`#"a" <= #"a"`)).toBe('true'));
        test('char1 <= char2', () => expect((0, utils_1.parseAndEvaluateExp)(`#"a" <= #"b"`)).toBe('true'));
    });
    describe('>=', () => {
        test('int1 >= int1', () => expect((0, utils_1.parseAndEvaluateExp)(`1 >= 1`)).toBe('true'));
        test('int1 >= int2', () => expect((0, utils_1.parseAndEvaluateExp)(`1 >= 2`)).toBe('false'));
        test('string1 >= string1', () => expect((0, utils_1.parseAndEvaluateExp)(`"ab" >= "ab"`)).toBe('true'));
        test('string1 >= string2', () => expect((0, utils_1.parseAndEvaluateExp)(`"ab" >= "ba"`)).toBe('false'));
        test('char1 >= char1', () => expect((0, utils_1.parseAndEvaluateExp)(`#"a" >= #"a"`)).toBe('true'));
        test('char1 >= char2', () => expect((0, utils_1.parseAndEvaluateExp)(`#"a" >= #"b"`)).toBe('false'));
    });
    describe('logical operators', () => {
        test('disjunction', () => expect((0, utils_1.parseAndEvaluateExp)('2=2 orelse 37 div 0 = 5')).toBe('true'));
        test('conjunction', () => expect((0, utils_1.parseAndEvaluateExp)('2=0 andalso 37 div 0 = 5')).toBe('false'));
        test('precedence of logical operators', () => expect((0, utils_1.parseAndEvaluateExp)('true orelse false andalso false')).toBe('true'));
        test('override precedence of logical operators with parentheses', () => expect((0, utils_1.parseAndEvaluateExp)('(true orelse false) andalso false')).toBe('false'));
    });
    test('precendence of builtin operators', () => expect((0, utils_1.parseAndEvaluateExp)(`2 + 6 * 3 div 2 - 10 div 2`)).toBe('6'));
    test('precendence of builtin operators with non-nested parentheses', () => expect((0, utils_1.parseAndEvaluateExp)(`(2 + 6) * 3`)).toBe('24'));
    test('precendence of builtin operators with nested parentheses', () => expect((0, utils_1.parseAndEvaluateExp)(`(((2 + 6) * 3) div 2) - (10 div 2)`)).toBe('7'));
});
describe('ListLiteral', () => {
    test('lists: evaluate to themselves', () => expect((0, utils_1.parseAndEvaluateExp)('[]')).toBe('[]'));
    test('lists: evaluate to themselves', () => expect((0, utils_1.parseAndEvaluateExp)('[1]')).toBe('[1]'));
    test('lists: evaluate to themselves', () => expect((0, utils_1.parseAndEvaluateExp)('[1,2,5]')).toBe('[1,2,5]'));
    test('lists: evaluate to themselves', () => expect((0, utils_1.parseAndEvaluateExp)('[[1,2,3],[4,5,6]]')).toBe('[[1,2,3],[4,5,6]]'));
});
describe('ExpSequence', () => { });
describe('LetExpression', () => {
    test('multiple declarations', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
   val a = 1
   val 1 = 1
   val b = 2
in
   a + b
end
`)).toBe(`3`));
    test('nested declarations', () => expect((0, utils_1.parseAndEvaluateExp)(`
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
    test('accessing variable in inner declarations from outer', () => expect(() => (0, utils_1.parseAndEvaluateExp)(`
let
   val a = let val b = 1 in b end
in
   b
end
`)).toThrow(/b not found in env/));
    test('multiple declarations with shadowing', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
   val x = 1
   val x = x + 1
in
   x + x
end
`)).toBe(`4`));
    test('nested declarations with shadowing', () => expect((0, utils_1.parseAndEvaluateExp)(`
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
    test('nested declarations with shadowing and other bindings', () => expect((0, utils_1.parseAndEvaluateExp)(`
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
    test('shadowed function calling function with same name in body', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
  val f = fn n => n + 1
  val f = fn n => f (f n)
in
  f 3
end
`)).toBe(`5`));
    test('rec function without rec keyword', () => expect(() => (0, utils_1.parseAndEvaluateExp)(`
let
  val f = fn n => if n = 0 then 1 else n * f (n - 1)
in
  f 3
end
`)).toThrow(/f not found in env/));
    test('rec function with rec keyword', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
  val rec f = fn n => if n = 0 then 1 else n * f (n - 1)
in
  f(3)
end
`)).toEqual(`6`));
    test('rec binding on a non-function', () => expect(() => (0, utils_1.parseAndEvaluateExp)(`
let
  val rec f = 2
in
  f
end
`)).toThrow(/using rec requires binding a function/));
    test('function with multiple matches and function application arg matches with >1 of these patterns - should match with first possible match', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
  val add_one_if_two = fn 2 => 3 | x => x
in
  add_one_if_two 2
end
`)).toEqual(`3`));
    test('function with multiple matches and function application arg only matches with 1 of these patterns', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
  val add_one_if_two = fn 2 => 3 | x => x
in
  add_one_if_two 10
end
`)).toEqual(`10`));
    test('env is properly restored outside scope of function', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
  val duplicate_name = 1000
  val add_one = fn duplicate_name => duplicate_name + 1
in
  (add_one 2) + duplicate_name
end
`)).toEqual(`1003`));
    test('local declarations are accessible in subsequent declarations', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
  local
    val x = 1
    val y = 2
  in
    val x = x + y
  end
in
  x
end
`)).toBe(`3`));
    test('local declaration - accessing variable outside of scope', () => expect(() => (0, utils_1.parseAndEvaluateExp)(`
let
  local
    val x = 1
    val y = 2
  in
    val x = x + y
  end
in
  y
end
`)).toThrow(/y not found in env/));
    test('nested local declarations', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
  local
    val x = 1
    val y = 2
  in
    local
      val z = x + y
    in
      val x = x + y + z
    end
    val x = x
  end
in
  x
end
`)).toBe(`6`));
    test('nested local declarations - accessing variable outside of scope', () => expect(() => (0, utils_1.parseAndEvaluateExp)(`
let
  local
    val x = 1
    val y = 2
  in
    local
      val z = x + y
    in
      val x = x + y + z
      val k = z
    end
    val x = z
  end
in
  x
end
`)).toThrow(/z not found in env/));
    test('funbind with multiple params', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
  fun add x y = x + y
in
  add 2 3
end
`)).toBe(`5`));
    test('funbind with multiple params and partial application', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
  fun add x y = x + y
  val add_two = add 2
  val add_three = add 3
in
  add_two (add_three 3)
end
`)).toBe(`8`));
    test('tail recursive function', () => expect((0, utils_1.parseAndEvaluateExp)(`
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
    test('tail recursive function - env is properly restored', () => expect(() => (0, utils_1.parseAndEvaluateExp)(`
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
`)).toThrow(/acc not found in env/));
    test('case analysis exp ', () => expect((0, utils_1.parseAndEvaluateExp)(`
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
    test('nested case analysis exp', () => expect((0, utils_1.parseAndEvaluateExp)(`
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
    test('case analysis exp with wildcard', () => expect((0, utils_1.parseAndEvaluateExp)(`
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
    test('infix construction pattern matching', () => expect((0, utils_1.parseAndEvaluateExp)(`
let
  fun begins_with_one lst =
    case lst of
     1::_ => true
    | _ => false
in
  begins_with_one [1,2,3]
end
`)).toBe(`true`));
});
describe('ConditionalExpression', () => {
    test('true literal as pred', () => expect((0, utils_1.parseAndEvaluateExp)('if true then "then" else "else"')).toBe(`"then"`));
    test('false literal as pred', () => expect((0, utils_1.parseAndEvaluateExp)('if false then "then" else "else"')).toBe(`"else"`));
    test('pred evaluating to true', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=1 then "then" else "else"')).toBe(`"then"`));
    test('pred evaluating to false', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=2 then "then" else "else"')).toBe(`"else"`));
    test('nested conditionals', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=2 then if 1=1 then 1 else 2 else if 1=2 then 3 else 4')).toBe('4'));
    test('else branch is not evaluated when pred is true', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=1 then 2 else 37 div 0')).toBe('2'));
    test('then branch is not evaluated when pred is false', () => expect((0, utils_1.parseAndEvaluateExp)('if 1=2 then 37 div 0 else 3')).toBe('3'));
    test('negated pred evaluating to true', () => expect((0, utils_1.parseAndEvaluateExp)('if not (1=2) then "then" else "else"')).toBe(`"then"`));
});
describe('Function', () => { });
//# sourceMappingURL=expression.js.map