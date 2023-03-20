import { isEqual } from 'lodash'

import { stdout } from './interpreter/interpreter'
import { BuiltinFn, Value } from './types'

export const valueToString = (sml_val: Value): string => {
  switch (sml_val.tag) {
    case 'int':
      if (sml_val.js_val < 0) {
        return `~${Math.abs(sml_val.js_val)}`
      }
      return sml_val.js_val.toString()
    case 'real':
      if (sml_val.js_val < 0) {
        return `~${Math.abs(sml_val.js_val)}`
      }
      return sml_val.js_val.toString()
    case 'string':
      return `"${sml_val.js_val}"`
    case 'char':
      return `#"${sml_val.js_val}"`
    case 'bool':
      return sml_val.js_val.toString()
    case 'unit':
      return '()'
    case 'list':
      return `[${sml_val.js_val.map(e => valueToString(e)).toString()}]`
    case 'fn':
      // TODO: once we have a typechecker, we can
      // include more info in the string repr, e.g param types and return types
      return 'fn'
    case 'builtin_fn':
      return `${sml_val.id}: builtin_fn`
  }
}

// Full list of builtins along with precedence can be found on
// Page 98 of https://smlfamily.github.io/sml90-defn.pdf
export const builtinBinOperators = {
  '/': (a: Value, b: Value) => {
    if (a.tag === 'real' && b.tag === 'real') {
      if (b.js_val === 0) {
        throw new Error('division by zero')
      }
      return {
        tag: 'real',
        js_val: a.js_val / b.js_val
      }
    }
    throw new Error(`invalid types - received ${a.tag} and ${b.tag}`)
  },
  div: (a: Value, b: Value) => {
    if (a.tag === 'int' && b.tag === 'int') {
      if (b.js_val === 0) {
        throw new Error('division by zero')
      }
      return {
        tag: 'int',
        js_val: Math.floor(a.js_val / b.js_val)
      }
    }
    throw new Error(`invalid types - received ${a.tag} and ${b.tag}`)
  },
  mod: (a: Value, b: Value) => {
    if (a.tag === 'int' && b.tag === 'int') {
      return {
        tag: 'int',
        js_val: ((a.js_val % b.js_val) + b.js_val) % b.js_val
      }
    }
    throw new Error(`invalid types - received ${a.tag} and ${b.tag}`)
  },
  '*': (a: Value, b: Value) => {
    if ((a.tag === 'int' && b.tag === 'int') || (a.tag === 'real' && b.tag === 'real')) {
      return {
        tag: a.tag,
        js_val: a.js_val * b.js_val
      }
    }
    throw new Error(`invalid types - received ${a.tag} and ${b.tag}`)
  },
  '+': (a: Value, b: Value) => {
    if ((a.tag === 'int' && b.tag === 'int') || (a.tag === 'real' && b.tag === 'real')) {
      return {
        tag: a.tag,
        js_val: a.js_val + b.js_val
      }
    }
    throw new Error(`invalid types - received ${a.tag} and ${b.tag}`)
  },
  '-': (a: Value, b: Value) => {
    if ((a.tag === 'int' && b.tag === 'int') || (a.tag === 'real' && b.tag === 'real')) {
      return {
        tag: a.tag,
        js_val: a.js_val - b.js_val
      }
    }
    throw new Error(`invalid types - received ${a.tag} and ${b.tag}`)
  },
  '^': (a: Value, b: Value) => {
    if (a.tag === 'string' && b.tag === 'string') {
      return {
        tag: 'string',
        js_val: a.js_val.concat(b.js_val)
      }
    }
    throw new Error(`invalid types - received ${a.tag} and ${b.tag}`)
  },
  '::': (a: Value, b: Value) => {
    if (b.tag === 'list') {
      return {
        tag: 'list',
        // type checker should have ensured that a has proper type
        js_val: [a, ...b.js_val]
      }
    }
    throw new Error(`invalid types - received ${a.tag} and ${b.tag}`)
  },
  '@': (a: Value, b: Value) => {
    if (a.tag === 'list' && b.tag === 'list') {
      return {
        tag: 'list',
        // type checker should have ensured that a has proper type
        js_val: [...a.js_val, ...b.js_val]
      }
    }
    throw new Error(`invalid types - received ${a.tag} and ${b.tag}`)
  },
  '=': (a: Value, b: Value) => {
    if (
      (a.tag === 'int' && b.tag === 'int') ||
      (a.tag === 'real' && b.tag === 'real') ||
      (a.tag === 'string' && b.tag === 'string') ||
      (a.tag === 'char' && b.tag === 'char') ||
      (a.tag === 'bool' && b.tag === 'bool') ||
      (a.tag === 'list' && b.tag === 'list')
      // TODO: add more tags, e.g. lists
    ) {
      return {
        tag: 'bool',
        // isEqual supports list (structural) equality, which javascript's builtin == or === does not
        js_val: isEqual(a.js_val, b.js_val)
      }
    } else if (a.tag === 'unit' && b.tag === 'unit') {
      return {
        tag: 'bool',
        js_val: true
      }
    }
    throw new Error(`invalid types - received ${a.tag} and ${b.tag}`)
  },
  '<>': (a: Value, b: Value) => {
    const isEq = builtinBinOperators['='](a, b)
    return {
      tag: 'bool',
      js_val: !isEq.js_val
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
        js_val: a.js_val < b.js_val
      }
    }
    throw new Error(`invalid types - received ${a.tag} and ${b.tag}`)
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
        js_val: a.js_val > b.js_val
      }
    }
    throw new Error(`invalid types - received ${a.tag} and ${b.tag}`)
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
        js_val: a.js_val <= b.js_val
      }
    }
    throw new Error(`invalid types - received ${a.tag} and ${b.tag}`)
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
        js_val: a.js_val >= b.js_val
      }
    }
    throw new Error(`invalid types - received ${a.tag} and ${b.tag}`)
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
          js_val: arg.js_val.length
        }
      }
      throw new Error(`invalid types - received ${arg.tag}`)
    }
  },
  {
    tag: 'builtin_fn',
    id: 'not',
    apply: (arg: Value) => {
      if (arg.tag === 'bool') {
        return {
          tag: 'bool',
          js_val: !arg.js_val
        }
      }
      throw new Error(`invalid types - received ${arg.tag}`)
    }
  }
]
