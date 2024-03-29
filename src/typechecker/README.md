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
```
env |- e1 op e2 : t3 -| C1, C2, t1 = t4, t2 = t5
    if op = t1 -> t2 -> t3
    and env |- e1 : t4 -| C1
    and env |- e2 : t5 -| C2
```

Since we dont allow user defined infix applications, it suffices to ensure that our type env starts with the types of all our built in infix operators.
```
/ : real -> real -> real
div : int -> int -> int
mod : int -> int -> int
* : int -> int -> int
*. : real -> real -> real
+ : int -> int -> int
+. : real -> real -> real
- : int -> int -> int
-. : real -> real -> real
^ : string -> string -> string
= : 'a . 'a -> 'a -> 'a
<> : 'a . 'a -> 'a -> 'a
< : 'a . 'a -> 'a -> 'a
> : 'a . 'a -> 'a -> 'a
<= : 'a . 'a -> 'a -> 'a
>= : 'a . 'a -> 'a -> 'a
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
`extend_env(env, dec)` takes in an env and a set of declarations and extends it with the generalizations of the types defined (see Declarations below for more info)

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
env |- fn p1 => e1 | p2 => e2 | ... | pn => en : 'param -> 'ret -| P_C1, P_C2, ..., P_Cn, p_t1 = 'param, p_t2 = 'param, ..., p_tn = 'param
                                                                 C1, C2, ..., Cn, t1 = 'ret, t2 = 'ret, ..., tn = 'ret
    if fresh 'param,
    and fresh 'ret,
    and env |- p1 : p_t1 -| P_C1
    and env |- p2 : p_t2 -| P_C2
    ...
    and env |- pn : p_tn -| P_Cn
    and extend_env(env, p1, p_t1) |- e1 : t1 -| C1
    and extend_env(env, p2, p_t2) |- e2 : t2 -| C2
    ...
    and extend_env(env, pn, p_tn) |- en : tn -| Cn
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
env |- p1::p2 : 't list -| C1, C2, t1 = 't, t2 = 't list
    if fresh 't
    and env |- p1 : t1 -| C1
    and env |- p2 : t2 -| C2
```

e.g.
- `fun f (hd::tl) = [1,2,3]` has a pattern of type `'a . 'a list`

### List
```
env |- [p1, p2,..., pn] : 't list -| C1, C2, ..., Cn, 't = t1, 't = t2, ..., 't = tn
    if fresh 't
    and env |- p1 : t1 -| C1
    and env |- p2 : t2 -| C2
    ...
    and env |- pn : tn -| Cn
```
e.g.
- `fun f [x,y] = [2,3] | f [1] = [3]` has a pattern of type `int list`
- `fun f [x,y] = [2,3]` has a pattern of type `'a . 'a list`
- `fun f [[2,3],y] = [2,3]` has a pattern of type `int list list`

-----------------------------------------------------------------------------------

## Declarations
For declarations, it suffices to extend the type environment (there is no type to return). We define a function `extend_env(env, dec)` that returns an environment extended with the declarations in `dec`.

### Value
If pattern is of type 'a (type variable) and not wildcard (if wildcard, we do not have to extend the environment):
```
extend_env(env, val p1 = e1) -> generalize(C1, env, p1 : t1)
    if env |- e1 : t1 -| C1
```

If pattern is of type primitive, it suffices to test that expression is of the same type (no extension of env needed):
```
extend_env(env, val p1 = e1) -> env
    if env |- e1 : t1 -| C1

    assert(p1 = t1)
```

If pattern is of type list, it suffices to recursively extend type env with the elements of the pattern. `extend_env_from_pat` is defined below.
```
extend_env(env, val [p1, p2, ..., pn] = e1) -> extend_env_from_pat(env, [p1, p2, ..., pn], t1)
    if env |- e1 : t1 -| C1
```

If pattern is of infix construction type, we similarly recursively extend type env with elements of pattern.
```
extend_env(env, val p1::p2 = e1) -> extend_env_from_pat(env, p1::p2, t1)
    if env |- e1 : t1 -| C1
```

> #### `extend_env_from_pat(env, p1, t1)`
> If pattern is of primitive type or wildcard, we do nothing.
> If pattern is of type 'a (type variable), we extend environment with  the specified type.
> ```
> extend_env_from_pat(env, p1, t1) -> { ...env, p1: t1 }
> ```
> If pattern is of type list pattern, we recursively extend types of the elements. Specified type must be a list type.
> ```
> extend_env_from_pat(env, [p1, p2,..., pn], t1 list) -> extend_env_from_pat(.....extend_env_from_pat(extend_env_from_pat(env, p1, t1), p2, t1), pn, t1)
> ```
> If pattern is of infix construction type, we similarly recursively extend types of the elements. Specified type must be a list type.
> ```
> extend_env_from_pat(env, p1::p2, t1 list) -> { p1: t1, ...extend_env_from_pat(env, p2, t1 list) }
> ```

### Sequence
```
extend_env(env, dec1 ; dec2 ; ... ; decn) -> extend_env(extend_env(......extend_env(extend_env(env, dec1), dec2), ....., decn-1), decn)
```

### Local
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
```
extend_env(env, prog1 ; prog2 ; ... ; progn) -> extend_env(env, prog1) ; extend_env(env, prog1) ; .... ; extend_env(env, progn)
```
