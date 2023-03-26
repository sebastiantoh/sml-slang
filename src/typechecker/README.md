# Hindley Milner Type Reconstruction
Takes in expression `e`, in a type environment `env`, and produces
a type `t` and a set of type constraints `C`.

```
env |- e : t -| C
```

`C` is a set of type constraints, each of the form `t0 = t1`.

We unify the set of constraints to solve for `t`, outputting type error if a unifying type is unavailable.

`if fresh 't` refers to initialisation of a new type variable that has not been used before.

# Rules

## Expressions

### Constant
```
env |- i : int -| {}
env |- r : real -| {}
env |- s : string -| {}
env |- c : char -| {}
env |- b : bool -| {}
env |- u : unit -| {}
```

### Variable
`instantiate` takes a type scheme `env(n)` like 'a . 'a -> 'a and instantiates it into a new type with fresh type variables.
```
env |- n : instantiate(env(n)) -| {}
```

### Application
```
env |- e1 e2 : 't -| C1, C2, t1 = t2 -> 't
    if fresh 't
    and env |- e1 : t1 -| C1
    and env |- e2 : t2 -| C2
```

### Infix Application
Since we dont allow user defined infix applications, it suffices to ensure that our type env starts with the types of all our built in infix operators.
```
/ : real -> real -> real
div : int -> int -> int
mod : int -> int -> int
* : int -> int -> int
+ : int -> int -> int
- : int -> int -> int
^ : string -> string -> string
= : 'a . 'a -> 'a -> 'a
<> : 'a . 'a -> 'a -> 'a
< : 'a . 'a -> 'a -> 'a
> : 'a . 'a -> 'a -> 'a
<= : 'a . 'a -> 'a -> 'a
>= : 'a . 'a -> 'a -> 'a
print : 'a . 'a -> unit
```

NOTE: Previously we had the following:
```
* : 'a Є { int, real } . 'a -> 'a -> 'a
+ : 'a Є { int, real } . 'a -> 'a -> 'a
- : 'a Є { int, real } . 'a -> 'a -> 'a
```
We decided to remove this as it would complicate type reconstruction, these are the only functions that are partially parametric polymorphic - which would require type instantiations to further check that 'a is of type int or real only just for these functions.

### List
```
env |- [e1, e2, ... en] : 't list -| C1, C2, .. Cn, 't = t1, 't = t2, ... 't = tn
    if fresh 't
    and env |- e1 : t1 -| C1
    and env |- e2 : t2 -| C2
    and env |- e3 : t3 -| C3
    ...
    and env |- en : tn -| Cn
```

### Let Expression
extend_env(env, dec) takes in an env and a set of declarations and extends it with the generalizations of the types defined (see Declarations below for more info)

TODO: are any of the constraints C1 .. Cn-1 needed?
```
env |- let dec in e1; e2; ...; en end: tn -| Cn
    if extend_env(env, dec) |- e1 : t1 -| C1
    and extend_env(env, dec) |- e2 : t2 -| C2
    and extend_env(env, dec) |- e3 : t3 -| C3
    ...
    and extend_env(env, dec) |- en : tn -| Cn
```
e.g.
- `let val x = 2 in x + 2; "hi"; true end;` returns `bool`
- `let val x = 2 in x + 2; "hi" + 4; true end;` returns type error
- `val x = let local val x = 5 in val y = x end in y end` returns `int`

### Expression Sequence
```
env |- (e1; e2; ...; en) : tn -| Cn
    if env |- e1 : t1 -| C1
    and env |- e2 : t2 -| C2
    and env |- e3 : t3 -| C3
    ...
    and env |- en : tn -| Cn
```
e.g.
- `(x + 2; "hi"; true)` returns `bool`
- `(x + 2; "hi" + 1; true)` returns type error

### Conditional
```
env |- if e1 then e2 else e3 : 't -| C1, C2, C3, t1 = bool, 't = t2, 't = t3
    if fresh 't
    and env |- e1 : t1 -| C1
    and env |- e2 : t2 -| C2
    and env |- e3 : t3 -| C3
```

### Case Analysis
This is desugared to function application, so we do not need to handle this.

### Function
```
env |- fn p1 => e1 | p2 => e2 | ... | pn => en : 't -> t1 -| P_C1, P_C2, ..., P_Cn, p_t1 = 't, p_t2 = 't, ..., p_tn = 't
                                                             C1, C2, ..., Cn, t1 = t2, t1 = t3, ..., t1 = tn
    if fresh 't,
    and env |- p1 : p_t1 -| P_C1
    and env |- p2 : p_t2 -| P_C2
    ...
    and env |- pn : p_tn -| P_Cn
    and extend_env(p1) |- e1 : t1 -| C1
    and extend_env(p2) |- e2 : t2 -| C2
    and extend_env(p3) |- e3 : t3 -| C3
    ...
    and extend_env(pn) |- en : tn -| Cn
```

e.g.
- `fn [] => 1 | [x] => 2 | x => 3` returns `'a . 'a list -> int`
- `fn 3 => 3 | x => x` returns `int -> int`
- `fn (hd::tl) => [hd] | [x] => [1,2,3]` returns `int list -> int list`

-----------------------------------------------------------------------------------

## Patterns

### Constant
```
env |- i : int -| {}
env |- r : real -| {}
env |- s : string -| {}
env |- c : char -| {}
env |- b : bool -| {}
env |- u : unit -| {}
```

### Wildcard
TODO: check if its sufficient to consider the wildcard to be a type variable
```
env |- _ : 't -| {}
    if fresh 't
```
e.g.
- `fun f 1 = 2 | f 3 = 3 | f _ = 4` has a pattern of type `int`
- `f _ = 4` has a pattern of type `'a . 'a`

### Variable
```
env |- v : 't -| {}
    if fresh 't
```

### Infix Construction
```
env |- hd::tl : 't list -| C1, C2, t1 = 't, t2 = 't list
    if fresh 't
    and env |- hd : t1 -| C1
    and env |- tl : t2 -| C2
```

e.g.
- `fun f (hd::tl) = [1,2,3]` has a pattern of type `'a . 'a list`

### List
Go through patterns and check we can unify it to a specific type.

The logic for (specific) unifying types of patterns (type of 't) can be simply:
```
    get types t1, t2,..., tn of patterns p1, p2,..., pn
    any primitive (p) defined?
        are there 2 different primitive types or list types defined? type error!
        type is p list
    any type variable ('a) defined?
        are there any list types defined? type error!
        type is 'a list
    any conflicting list types (t)? type error!
    type is t list
```
```
env |- [p1, p2,..., pn] : 't list -| {}
    if fresh 't, where 't = is the most specific unification of all types of p1, p2, ... pn (if exists)
```
e.g.
- `fun f [x,y] = [2,3] | f [1] = [3]` has a pattern of type `int list`
- `fun f [x,y] = [2,3]` has a pattern of type `'a . 'a list`
- `fun f [[2,3],y] = [2,3]` has a pattern of type `int list list`

-----------------------------------------------------------------------------------

## Declarations
For declarations, it suffices to extend the type environment (there is no type to return). We define a function `extend_env(env, dec)` that returns an environment extended with the declarations in `dec`.

### Value
If patterns are of type 'a (type variable):
```
extend_env(env, val p1 = e1 and p2 = e2 .... and pn = en) -> generalize(Cn, generalize(...., generalize(C2, generalize(C1, env, p1 : t1), p2 : t2), ...), pn : tn)
    if env |- e1 : t1 -| C1
    and env |- e2 : t2 -| C2
    ...
    and env |- en : tn -| Cn
```

If patterns are of type p (primitive), it suffices to test that expression is of the same type (no extension of env needed):
```
extend_env(env, val p1 = e1 and p2 = e2 .... and pn = en) -> env
    if env |- e1 : t1 -| C1
    and env |- e2 : t2 -| C2
    ...
    and env |- en : tn -| Cn

    assert(p1 = t1, p2 = t2,..., pn = tn)
```

TODO: handle infix construction and list (just a matter of evaluating e1s type and assigning the types to the vars in the pattern)

### Sequence
```
extend_env(env, dec1 ; dec2 ; ... ; decn) -> extend_env(extend_env(......extend_env(extend_env(env, dec1), dec2), ....., decn-1), decn)
```

### Local
TODO: update this. this is incorrect! we dont want decs in dec1 to show up in our final env.
```
extend_env(env, local dec1 in dec2 end) -> extend_env(extend_env(env, dec1), dec2)
```

-----------------------------------------------------------------------------------

## Programs

### Core Declaration
```
extend_env(env, prog) -> extend_env(env, dec1 ; dec2 ; ... ; decn) -> extend_env(extend_env(......extend_env(extend_env(env, dec1), dec2), ....., decn-1), decn)
```

### Sequence
TODO: do the programs affect each others env?
```
extend_env(env, prog1 ; prog2 ; ... ; progn) -> extend_env(env, prog1) ; extend_env(env, prog1) ; .... ; extend_env(env, progn)
```
