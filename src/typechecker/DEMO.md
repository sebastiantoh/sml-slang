# Hindley Milner Type Reconstruction Algorithm

## Generating Set of Type Constraints

The algorithm takes in expression `e`, in a type environment `env`, and produces
a type `t` and a set of type constraints `C`, each of the form `t0 = t1`.

```
env |- e : t -| C
```

For example,
```
{} |- 1 : int -| []
```
or,
```
{} |- if true then 1 else 2 : 't -| ['t = t2, 't = t3, t1 = bool, t2 = int, t3 = int]
    {} |- true : t1 -| [t1 = bool]
    {} |- 1 : t2 -| [t2 = int]
    {} |- 2 : t3 -| [t3 = int]
```

Once we get a type and set of type constraints, we first try to solve the set of type constraints (also known as unifying the set of constraints) to generate a list of substitutions. There is no valid type for a particular expression if and only if there is no valid solution to unification of type constraints.

## Unifying Set of Type Constraints

For example, consider the output of hindley milner for the following:
```
{ '+': int -> int -> int } |- fn f => fn x => f (x + 1) : 'a -> 'b -> 'e -| ['a = 'd -> 'e, 'c = int -> 'd, int -> int -> int = 'b -> 'c]
```
In particular, the type of `fn f => fn x => f (x + 1)` is `'a -> 'b -> 'e` and the list of type constraints obtained is `['a = 'd -> 'e, 'c = int -> 'd, int -> int -> int = 'b -> 'c]`.

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

Thus we have successfully unified the set of type constraints to get the list of type substitutions `{('d -> 'e) / 'a}; {(int -> 'd) / 'c}; {int / 'b}; {int / 'd}`. Notice that if we had gotten a type constraint that is inconsistent (e.g. `int = bool` or `t1 -> t2 = t1 list` then we would throw a type error!)

All thats left is to apply the set of substitutions to the generated type to successfully infer the type of `fn f => fn x => f (x + 1)`.

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

We have thus successfully inferred the type (correctly) to be `(int -> 'e) -> int -> 'e`. To aid readability, we have further downcasted type variables obtained to the lowest type variables to finally give us `(int -> 'a) -> int -> 'a`.

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
Then, following the original algorithm, if we consider id to be of type `'a -> 'a` and run into `id 3`, then we will add the constraint that `'a = int`. However, when evaluating `id true`, we will also add the constraint that `'a = bool`, which causes as inconsistency in our unification algorithm as `int != bool`.

The solution is simple, instead of considering types of variables that have been declared in our program, we consider their type schemes. For example, the type scheme of `id` would be `'a . 'a -> 'a` which reads, for all `'a`, id has a type `'a -> 'a`.

This solves the original problem as whenever we apply (or instantiate) the variable `id`, we create a new version of its type scheme. This when evaluating `id 3`, we instantiate a new copy of the type scheme `'a . 'a -> 'a`, giving us `'b -> 'b`, and adding the constraint that `'b = int`. Similarly, when evaluation `id true`, we instantiate a type `'c -> 'c` and add the constraint `'c = bool` in our set of type constraints. Notice we thus have no inconsistencies! Furthermore, the type scheme of `id` remains as `'a . 'a -> 'a` as intended.

## Overview of Rules

Let us look at an example of type inference for conditional expressions in greater detail.
```
env |- if e1 then e2 else e3 : 't -| C1, C2, C3, t1 = bool, 't = t2, 't = t3
    if fresh 't
    and env |- e1 : t1 -| C1
    and env |- e2 : t2 -| C2
    and env |- e3 : t3 -| C3
```
Here, we create a fresh 't, which denotes a new type variable that has not been used thus far in the algorithm, and return it as the type of the conditional. Additionally, we evaluate the types of e1, e2, e3 to get t1, t2, t3 respectively. Then, the set of type constriants returned is simply a concatenation of constraints returned from the evaluations of the subexpressions, along with the constraint that t1 must be a bool and that t2 and t3 must be equal!

A comprehensive list of rules used in our algorithm can be found [here](README.md).

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
```
let
    val b = true
    fun f0 x = x + 1
    fun f x = (if b then f0 else fn y => x y)
    fun f x = (if b then f else fn y => x y)
    fun f x = (if b then f else fn y => x y)
    fun f x = (if b then f else fn y => x y)
    fun f x = (if b then f else fn y => x y)
    fun f x = (if b then f else fn y => x y)
    fun f x = (if b then f else fn y => x y)
    fun f x = (if b then f else fn y => x y)
    fun f x = (if b then f else fn y => x y)
    fun f x = (if b then f else fn y => x y)
    fun f x = (if b then f else fn y => x y)
in
    f
end;
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
