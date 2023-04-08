# Hindley Milner Type Reconstruction Algorithm

## Generating Set of Type Constraints

The algorithm takes in expression `e`, in a type environment `env`, and produces
a type `t` and a set of type constraints `C`, each of the form `t0 = t1`.

```
env |- e : t -| C
```

The idea is that we find type constraints from the given expression and try to solve (unify) it in the hopes of finding a valid value for the type of the expression.

For example,
```
env |- if e1 then e2 else e3 : 't -| C1, C2, C3, t1 = bool, 't = t2, 't = t3
    if env |- e1 : t1 -| C1
    and env |- e2 : t2 -| C2
    and env |- e3 : t3 -| C3
```

A comprehensive list of rules used in our algorithm can be found [here](README.md).

## Unifying Set of Type Constraints

For example, consider inferring the type of
```
fn f => fn x => f (x + 1)
```

Hindley Milner gives us the type `'a -> 'b -> 'e` along with the set of type constraints:
```
['a = 'd -> 'e, 'c = int -> 'd, int -> int -> int = 'b -> 'c]
```

Let us try to unify it! The algorithm to solve a set of constraints is fairly simple, we try and eliminate complex terms as much as possible by breaking up complex constraints and using substitutions whenever we can.

```
unify('a = 'd -> 'e, 'c = int -> 'd, int -> int -> int = 'b -> 'c)
```

Notice the first constraint can be used to substitute 'a in our other constraints. We record down this substitution, substition 'a in all other constraints, and recurse on the remainder:
```
...
=
{('d -> 'e) / 'a}; unify(('c = int -> 'd, int -> int -> int = 'b -> 'c) {('d -> 'e) / 'a})
=
{('d -> 'e) / 'a}; unify('c = int -> 'd, int -> int -> int = 'b -> 'c)
```
Now we do a similar process for the constraint `'c = int -> 'd`.
```
...
=
{('d -> 'e) / 'a}; {(int -> 'd) / 'c}; unify((int -> int -> int = 'b -> 'c) {(int -> 'd) / 'c})
=
{('d -> 'e) / 'a}; {(int -> 'd) / 'c}; unify(int -> int -> int = 'b -> int -> 'd)
```
Now we run into a constraint which compares functions. We simply break down the complex function equality into 2 eqalities, noting the fact that if `f1 = f2` then type of `f1.params = f2.params` and type of `f1.return = f2.return`.
```
...
=
{('d -> 'e) / 'a}; {(int -> 'd) / 'c}; unify(int = 'b, int -> int = int -> 'd)
```
More substitutions:
```
...
=
{('d -> 'e) / 'a}; {(int -> 'd) / 'c}; {int / 'b}; unify((int -> int = int -> 'd) {int / 'b})
=
{('d -> 'e) / 'a}; {(int -> 'd) / 'c}; {int / 'b}; unify(int -> int = int -> 'd)
```
Breaking down functions similarly:
```
...
=
{('d -> 'e) / 'a}; {(int -> 'd) / 'c}; {int / 'b}; unify(int = int, int = 'd)
```
Ignoring trivial constraints as they add no value:
```
...
=
{('d -> 'e) / 'a}; {(int -> 'd) / 'c}; {int / 'b}; unify(int = 'd)
```
More substitutions:
```
=
{('d -> 'e) / 'a}; {(int -> 'd) / 'c}; {int / 'b}; {int / 'd}
```


Success! If we had gotten an inconsistent constraint, we would simply return type error instead. Some examples of inconsistent constraints:
```
int = bool
'a -> 'b = 'c list
```

## Applying Substitutions to Generated Type

Recall that `fn f => fn x => f (x + 1)` returned a type `'a -> 'b -> 'e`. Let us apply the set of substitutions to the type.

```
('a -> 'b -> 'e) {('d -> 'e) / 'a}; {(int -> 'd) / 'c}; {int / 'b}; {int / 'd}
=
(('d -> 'e) -> 'b -> 'e) {(int -> 'd) / 'c}; {int / 'b}; {int / 'd}
=
(('d -> 'e) -> 'b -> 'e) {int / 'b}; {int / 'd}
=
(('d -> 'e) -> int -> 'e) {int / 'd}
=
(int -> 'e) -> int -> 'e
```

To aid readability, we have further downcasted type variables obtained to the lowest type variables to finally give us `(int -> 'a) -> int -> 'a`.

Feel free to [try it yourself](https://rohit0718.github.io/sml-slang-frontend/)!

## Let Polymorphism

In the above algorithm, if we allow for let statements in our programming language, we will run into an issue. Suppose we have the following statments.
```
let
    val id = fn x => x
in
    id 3;
    id true
end
```
Notice that if we run the algorithm from above we infer the following types and generate the following constraints:
```
let
    val id = fn x => x      (* 'a -> 'a *)
in
    id 3;                   (* 'a = int *)
    id true                 (* 'a = bool *)
end
```

This ins inconsistent - unify produces `int = bool`!

The solution is simple, instead of considering types of variables that have been declared in our program, we consider their type schemes. For example, the type scheme of `id` would be `'a . 'a -> 'a` which reads, for all `'a`, id has a type `'a -> 'a`.

The above example now becomes:
```
let
    val id = fn x => x      (* 'a . 'a -> 'a *)
in
    id 3;                   (* 'b = int, where id is instantiated as 'b -> 'b *)
    id true                 (* 'c = bool, where id is instantiated as 'c -> 'c *)
end
```

## Interesting Examples

### Let Polymorphism
```
let
    val id = fn x => x
in
    id 3;
    id true;
    id #"a";
    id "hello";
    id ()
end
```

### Lists
```
let
    val bool_list = [true, true, false]
    val empty_list = []
    val is_list_empty = fn [] => print "empty" | hd::tl => print "nonempty"
    val concat_lists = fn l1 => fn l2 => l1 @ l2
    val take_heads = fn hd1::tl1 => fn hd2::tl2 => [hd1,hd2]
    val take_tails = fn hd1::tl1 => fn hd2::tl2 => tl1 @ tl2
    val take_head_or_default = fn [x] => [1,2,3] | hd::tl => [hd]
    val list_to_int = fn [] => 1 | [x] => 2 | x => 3
    val list_of_lists_to_lists = fn [l1,l2] => l1 @ l2
    val add_two_heads = fn fst::snd::tl => (fst+snd)::tl
in
    ()
end
```

### Functions
```
let
    val id = fn x => x
    val bool_to_true = fn x => x | y => true
    val abc_a_b_c = fn a => fn b => fn c => a b c
    val is_equal = fn a => fn b => a = b
    val func_to_int = fn f1 => f1 1 | f2 => f2 2 | f3 => f3 3
    val compose = fn f => fn g => fn x => f (g x)

    (* (int -> int) -> int vs int -> int -> int *)
    val intint_int = fn f => (f 3) + 3
    val int_int_int = fn a => fn b => a + b
    
    val many_vars = fn a => fn b => fn c => fn d => fn e => fn f => fn g => fn h => fn i => fn j => fn k => fn l => fn m => fn n => fn o => fn p => fn q => fn r => fn s => fn t => fn u => fn v => fn w => fn x => fn y => fn z => fn aa => aa
in
    ()
end
```

#### Speed comparison with OCaml

##### SML
```
let
    val b = true
    val f0 = fn x => x + 1
    val f = fn x => (if b then f0 else fn y => x y)
    val f = fn x => (if b then f else fn y => x y)
    val f = fn x => (if b then f else fn y => x y)
    val f = fn x => (if b then f else fn y => x y)
    val f = fn x => (if b then f else fn y => x y)
    val f = fn x => (if b then f else fn y => x y)
    val f = fn x => (if b then f else fn y => x y)
    val f = fn x => (if b then f else fn y => x y)
    val f = fn x => (if b then f else fn y => x y)
    val f = fn x => (if b then f else fn y => x y)
    val f = fn x => (if b then f else fn y => x y)
    val f = fn x => (if b then f else fn y => x y)
    val f = fn x => (if b then f else fn y => x y)
    val f = fn x => (if b then f else fn y => x y)
in
    f
end;
```

##### OCaml
```
let b = true;;
let f0 x = x + 1;;
let f x = (if b then f0 else fun y -> x y);;
let f x = (if b then f else fun y -> x y);;
let f x = (if b then f else fun y -> x y);;
let f x = (if b then f else fun y -> x y);;
...
```

### Lets and Locals
```
let
  val x = 2 + 3
in
  x + 2;
  "hi";
  true
end
```
```
let
  val a::b = [1,2,3]
in
  b
end;
```
```
let
  val [a,b,c] =[[1,2],[3,4],[5,6]]
in
  a
end;
```

## Extensions
1. Equality type variables
2. Supporting mutable vars (refs) in language
- Weakly polymorphic types
3. Algebraic data types
- Sum and Union types
