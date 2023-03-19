# Hindley Milner Type Reconstruction
Takes in expression `e`, in a type environment `env`, and produces
a type `t` and a set of type constraints `C`.

```
env |- e : t -| C
```

`C` is a set of type constraints, each of the form `t0 = t1`.

We unify the set of constraints to solve for `t`, outputting type error if a unifying type is unavailable.

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
* : 'a -> 'a -> 'a, where 'a = int or 'a = real on instantiation
+ : 'a -> 'a -> 'a, where 'a = int or 'a = real on instantiation
- : 'a -> 'a -> 'a, where 'a = int or 'a = real on instantiation
^ : string -> string -> string
= : 'a -> 'a -> 'a, where 'a = int or 'a = real or 'a = string or 'a = char on instantiation
<> : 'a -> 'a -> 'a, where 'a = int or 'a = real or 'a = string or 'a = char on instantiation
< : 'a -> 'a -> 'a, where 'a = int or 'a = real or 'a = string or 'a = char on instantiation
> : 'a -> 'a -> 'a, where 'a = int or 'a = real or 'a = string or 'a = char on instantiation
<= : 'a -> 'a -> 'a, where 'a = int or 'a = real or 'a = string or 'a = char on instantiation
>= : 'a -> 'a -> 'a, where 'a = int or 'a = real or 'a = string or 'a = char on instantiation
andalso : bool -> bool -> bool
orelse : bool -> bool -> bool
```

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

### Local Declaration
Note: there can be multiple x1 = e1 bindings, generalize for all.

Also by right the x is a pattern, so we need to typecheck x first.

If variable, we can continue as per normal. Else if its constant, we need to check that t1 is of the same type.

TODO: handle infix construction and list (just a matter of evaluating e1s type and assigning the types to the vars in the pattern)
```
env |- let val x = e1 in e2 end: t2 -| C1, C2
  if env |- e1 : t1 -| C1
  and generalize(C1, env, x : t1) |- e2 : t2 -| C2
```

### Conjunction
```
env |- e1 andalso e2 : 't -| t1 = bool, t2 = bool, 't = bool
    if fresh 't
    and env |- e1 : t1 -| C1
    and env |- e2 : t2 -| C2
```

### Disjunction
```
env |- e1 orelse e2 : 't -| t1 = bool, t2 = bool, 't = bool
    if fresh 't
    and env |- e1 : t1 -| C1
    and env |- e2 : t2 -| C2
```

### Conditional
```
env |- if e1 then e2 else e3 : 't -| C1, C2, C3, t1 = bool, 't = t2, 't = t3
    if fresh 't
    and env |- e1 : t1 -| C1
    and env |- e2 : t2 -| C2
    and env |- e3 : t3 -| C3
```

### Case Analysis
TODO

### Function
Type check all of the matches, ensuring that all patterns have same types and all expressions have same types.

Pattern type is one of: primitive, type variable, list.

First go through patterns and check if we have a type that works for all (so no conflicts like 2 diff types of primitives etc.)

The logic for unifying types of patterns (type of 't) can be simply:
    any list defined?
        any primitives (p) defined in any of the lists?
            are there 2 different primitives defined? type error!
            else 't = list[p]
        type is list['a]
    any type variable defined?
        do any of the patterns type to a primitive (p)?
            are there 2 different patterns typing to 2 different primitives? type error!
            else type is 't = p
        type is 't
    are there 2 different patterns typing to 2 different primitives? type error!
    else 't = p
```
env |- fun p1 => e1 | p2 => e2 | .. | pn => en : 't -> t1 -| C1, C2, ..., Cn, t1 = t2, t1 = t3, ..., t1 = tn
    if fresh 't, where 't = is the most generic unification of all types of p1, p2, ... pn (if exists)
    and env, p1 : 't |- e1 : t1 -| C1
    and env, p2 : 't |- e2 : t2 -| C2
    ...
    and env, pn : 't |- en : tn -| Cn
```
TODO: Check if type checker for Function works for :`fun f [] = 1 | f [x] = 2 | f x = 3`. Expected type scheme is: `'a . 'a list → int`

-----------------------------------------------------------------------------------

## Patterns

### Constant
Same as above rules for expression

### Wildcard
TODO

### Variable
```
env |- v : 't -| {}
    if fresh 't
```

### Infix Construction
TODO

-----------------------------------------------------------------------------------
## Declarations

### Value
// update this
```
env |- val x = e1 in e2 : t2 -| C1, C2
  if env |- e1 : t1 -| C1
  and generalize(C1, env, x : t1) |- e2 : t2 -| C2
```

## Anonymous Function (fun match)
```
env |- fun x => e : 't1 -> t2 -| C
    if fresh 't1
    and env, x : 't1 |- e : t2 -| C
```
