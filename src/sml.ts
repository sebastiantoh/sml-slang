import * as assert from 'assert'
import { isEqual } from 'lodash'

import { stdout } from './interpreter/interpreter'
import { parseProg } from './parser/parser'
import { RuntimeError } from './typechecker/errors'
import { BuiltinFn, Value } from './types'

export const valueToString = (val: Value): string => {
  switch (val.tag) {
    case 'int':
      if (val.jsVal < 0) {
        return `~${Math.abs(val.jsVal)}`
      }
      return val.jsVal.toString()
    case 'real':
      if (val.jsVal < 0) {
        return `~${Math.abs(val.jsVal)}`
      }
      return val.jsVal.toString()
    case 'string':
      return `"${val.jsVal}"`
    case 'char':
      return `#"${val.jsVal}"`
    case 'bool':
      return val.jsVal.toString()
    case 'unit':
      return '()'
    case 'list':
      return `[${val.jsVal.map(e => valueToString(e)).toString()}]`
    case 'fn':
      return 'fn'
    case 'builtin_fn':
      return `${val.id}: builtin_fn`
  }
}

// Full list of builtins along with precedence can be found on
// Page 98 of https://smlfamily.github.io/sml90-defn.pdf
export const builtinBinOperators = {
  '/': (a: Value, b: Value) => {
    if (a.tag === 'real' && b.tag === 'real') {
      if (b.jsVal === 0) {
        throw new RuntimeError(`division by zero - ${a.jsVal} / ${b.jsVal}`)
      }
      return {
        tag: 'real',
        jsVal: a.jsVal / b.jsVal
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  div: (a: Value, b: Value) => {
    if (a.tag === 'int' && b.tag === 'int') {
      if (b.jsVal === 0) {
        throw new RuntimeError(`division by zero - ${a.jsVal} div ${b.jsVal}`)
      }
      return {
        tag: 'int',
        jsVal: Math.floor(a.jsVal / b.jsVal)
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  mod: (a: Value, b: Value) => {
    if (a.tag === 'int' && b.tag === 'int') {
      return {
        tag: 'int',
        jsVal: ((a.jsVal % b.jsVal) + b.jsVal) % b.jsVal
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  '*': (a: Value, b: Value) => {
    if (a.tag === 'int' && b.tag === 'int') {
      return {
        tag: a.tag,
        jsVal: a.jsVal * b.jsVal
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  '*.': (a: Value, b: Value) => {
    if (a.tag === 'real' && b.tag === 'real') {
      return {
        tag: a.tag,
        jsVal: a.jsVal * b.jsVal
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  '+': (a: Value, b: Value) => {
    if (a.tag === 'int' && b.tag === 'int') {
      return {
        tag: a.tag,
        jsVal: a.jsVal + b.jsVal
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  '+.': (a: Value, b: Value) => {
    if (a.tag === 'real' && b.tag === 'real') {
      return {
        tag: a.tag,
        jsVal: a.jsVal + b.jsVal
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  '-': (a: Value, b: Value) => {
    if (a.tag === 'int' && b.tag === 'int') {
      return {
        tag: a.tag,
        jsVal: a.jsVal - b.jsVal
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  '-.': (a: Value, b: Value) => {
    if (a.tag === 'real' && b.tag === 'real') {
      return {
        tag: a.tag,
        jsVal: a.jsVal - b.jsVal
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  '^': (a: Value, b: Value) => {
    if (a.tag === 'string' && b.tag === 'string') {
      return {
        tag: 'string',
        jsVal: a.jsVal.concat(b.jsVal)
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  '::': (a: Value, b: Value) => {
    if (b.tag === 'list') {
      return {
        tag: 'list',
        // type checker should have ensured that a has proper type
        jsVal: [a, ...b.jsVal]
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  '@': (a: Value, b: Value) => {
    if (a.tag === 'list' && b.tag === 'list') {
      return {
        tag: 'list',
        // type checker should have ensured that a has proper type
        jsVal: [...a.jsVal, ...b.jsVal]
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  '=': (a: Value, b: Value) => {
    if (
      (a.tag === 'int' && b.tag === 'int') ||
      (a.tag === 'real' && b.tag === 'real') ||
      (a.tag === 'string' && b.tag === 'string') ||
      (a.tag === 'char' && b.tag === 'char') ||
      (a.tag === 'bool' && b.tag === 'bool') ||
      (a.tag === 'list' && b.tag === 'list')
    ) {
      return {
        tag: 'bool',
        // isEqual supports list (structural) equality, which javascript's builtin == or === does not
        jsVal: isEqual(a.jsVal, b.jsVal)
      }
    } else if (a.tag === 'unit' && b.tag === 'unit') {
      return {
        tag: 'bool',
        jsVal: true
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  '<>': (a: Value, b: Value) => {
    const isEq = builtinBinOperators['='](a, b)
    return {
      tag: 'bool',
      jsVal: !isEq.jsVal
    }
  },
  '<': (a: Value, b: Value) => {
    if (
      (a.tag === 'int' && b.tag === 'int') ||
      (a.tag === 'real' && b.tag === 'real') ||
      (a.tag === 'string' && b.tag === 'string') ||
      (a.tag === 'char' && b.tag === 'char')
    ) {
      return {
        tag: 'bool',
        jsVal: a.jsVal < b.jsVal
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  '>': (a: Value, b: Value) => {
    if (
      (a.tag === 'int' && b.tag === 'int') ||
      (a.tag === 'real' && b.tag === 'real') ||
      (a.tag === 'string' && b.tag === 'string') ||
      (a.tag === 'char' && b.tag === 'char')
    ) {
      return {
        tag: 'bool',
        jsVal: a.jsVal > b.jsVal
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  '<=': (a: Value, b: Value) => {
    if (
      (a.tag === 'int' && b.tag === 'int') ||
      (a.tag === 'real' && b.tag === 'real') ||
      (a.tag === 'string' && b.tag === 'string') ||
      (a.tag === 'char' && b.tag === 'char')
    ) {
      return {
        tag: 'bool',
        jsVal: a.jsVal <= b.jsVal
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  },
  '>=': (a: Value, b: Value) => {
    if (
      (a.tag === 'int' && b.tag === 'int') ||
      (a.tag === 'real' && b.tag === 'real') ||
      (a.tag === 'string' && b.tag === 'string') ||
      (a.tag === 'char' && b.tag === 'char')
    ) {
      return {
        tag: 'bool',
        jsVal: a.jsVal >= b.jsVal
      }
    }
    assert(false, `invalid types - received ${a.tag} and ${b.tag}`)
  }
}

export const builtinFns: Array<BuiltinFn> = [
  {
    tag: 'builtin_fn',
    id: 'print',
    apply: (arg: Value) => {
      stdout.push(valueToString(arg) + '\n')
      return {
        tag: 'unit'
      }
    }
  },
  {
    tag: 'builtin_fn',
    id: 'size',
    apply: (arg: Value) => {
      if (arg.tag === 'string') {
        return {
          tag: 'int',
          jsVal: arg.jsVal.length
        }
      }
      assert(false, `invalid types - received ${arg.tag}`)
    }
  },
  {
    tag: 'builtin_fn',
    id: 'not',
    apply: (arg: Value) => {
      if (arg.tag === 'bool') {
        return {
          tag: 'bool',
          jsVal: !arg.jsVal
        }
      }
      assert(false, `invalid types - received ${arg.tag}`)
    }
  }
]

export const STDLIB = parseProg(`
fun hd lst = case lst of x::xs => x

fun tl lst = case lst of x::xs => xs

fun length lst =
  let
    fun loop acc lst =
      case lst of [] => acc | x::xs => loop (acc + 1) (xs)
  in
    loop 0 lst
end

fun rev lst =
  let
    fun loop acc lst =
      case lst of [] => acc | x::xs => loop (x::acc) (xs)
  in
    loop [] lst
end

fun map f lst =
  let
    fun loop acc lst =
      case lst of [] => rev acc | x::xs => loop (f x::acc) (xs)
  in
    loop [] lst
end
`)
