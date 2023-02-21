import { Context } from '../context'
import {
  CharConstant,
  FloatConstant,
  InfixApplication,
  IntConstant,
  Node,
  StringConstant
} from '../parser/ast'
import * as Sml from '../sml'

type Evaluator = (node: Node, context: Context) => Sml.Value

// Full list of builtins along with precedence can be found on
// Page 98 of https://smlfamily.github.io/sml90-defn.pdf
const builtinInfixOperators = {
  '/': (a: Sml.Value, b: Sml.Value) => {
    if (a.type === 'real' && b.type === 'real') {
      return {
        type: 'real',
        // TODO: handle div by 0?
        js_val: a.js_val / b.js_val
      }
    }
    throw new Error('invalid types')
  },
  div: (a: Sml.Value, b: Sml.Value) => {
    if (a.type === 'int' && b.type === 'int') {
      return {
        type: 'int',
        // TODO: handle div by 0?
        js_val: Math.floor(a.js_val / b.js_val)
      }
    }
    throw new Error('invalid types')
  },
  mod: (a: Sml.Value, b: Sml.Value) => {
    if (a.type === 'int' && b.type === 'int') {
      return {
        type: 'int',
        js_val: ((a.js_val % b.js_val) + b.js_val) % b.js_val
      }
    }
    throw new Error('invalid types')
  },
  '*': (a: Sml.Value, b: Sml.Value) => {
    if ((a.type === 'int' && b.type === 'int') || (a.type === 'real' && b.type === 'real')) {
      return {
        type: a.type,
        js_val: a.js_val * b.js_val
      }
    }
    throw new Error('invalid types')
  },
  '+': (a: Sml.Value, b: Sml.Value) => {
    if ((a.type === 'int' && b.type === 'int') || (a.type === 'real' && b.type === 'real')) {
      return {
        type: a.type,
        js_val: a.js_val + b.js_val
      }
    }
    throw new Error('invalid types')
  },
  '-': (a: Sml.Value, b: Sml.Value) => {
    if ((a.type === 'int' && b.type === 'int') || (a.type === 'real' && b.type === 'real')) {
      return {
        type: a.type,
        js_val: a.js_val - b.js_val
      }
    }
    throw new Error('invalid types')
  },
  '^': (a: Sml.Value, b: Sml.Value) => {
    if (a.type === 'string' && b.type === 'string') {
      return {
        type: 'string',
        js_val: a.js_val.concat(b.js_val)
      }
    }
    throw new Error('invalid types')
  },
  '=': (a: Sml.Value, b: Sml.Value) => {
    if (
      (a.type === 'int' && b.type === 'int') ||
      (a.type === 'real' && b.type === 'real') ||
      (a.type === 'string' && b.type === 'string') ||
      (a.type === 'char' && b.type === 'char')
    ) {
      return {
        type: 'bool',
        js_val: a.js_val === b.js_val
      }
    }
    throw new Error('invalid types')
  },
  '<>': (a: Sml.Value, b: Sml.Value) => {
    if (
      (a.type === 'int' && b.type === 'int') ||
      (a.type === 'real' && b.type === 'real') ||
      (a.type === 'string' && b.type === 'string') ||
      (a.type === 'char' && b.type === 'char')
    ) {
      return {
        type: 'bool',
        js_val: a.js_val !== b.js_val
      }
    }
    throw new Error('invalid types')
  },
  '<': (a: Sml.Value, b: Sml.Value) => {
    if (
      (a.type === 'int' && b.type === 'int') ||
      (a.type === 'real' && b.type === 'real') ||
      (a.type === 'string' && b.type === 'string') ||
      (a.type === 'char' && b.type === 'char')
    ) {
      return {
        type: 'bool',
        js_val: a.js_val < b.js_val
      }
    }
    throw new Error('invalid types')
  },
  '>': (a: Sml.Value, b: Sml.Value) => {
    if (
      (a.type === 'int' && b.type === 'int') ||
      (a.type === 'real' && b.type === 'real') ||
      (a.type === 'string' && b.type === 'string') ||
      (a.type === 'char' && b.type === 'char')
    ) {
      return {
        type: 'bool',
        js_val: a.js_val > b.js_val
      }
    }
    throw new Error('invalid types')
  },
  '<=': (a: Sml.Value, b: Sml.Value) => {
    if (
      (a.type === 'int' && b.type === 'int') ||
      (a.type === 'real' && b.type === 'real') ||
      (a.type === 'string' && b.type === 'string') ||
      (a.type === 'char' && b.type === 'char')
    ) {
      return {
        type: 'bool',
        js_val: a.js_val <= b.js_val
      }
    }
    throw new Error('invalid types')
  },
  '>=': (a: Sml.Value, b: Sml.Value) => {
    if (
      (a.type === 'int' && b.type === 'int') ||
      (a.type === 'real' && b.type === 'real') ||
      (a.type === 'string' && b.type === 'string') ||
      (a.type === 'char' && b.type === 'char')
    ) {
      return {
        type: 'bool',
        js_val: a.js_val >= b.js_val
      }
    }
    throw new Error('invalid types')
  }
}

const evaluators: { [nodeType: string]: Evaluator } = {
  IntConstant: function (node: IntConstant, _context: Context) {
    return {
      type: 'int',
      js_val: node.val
    }
  },
  FloatConstant: function (node: FloatConstant, _context: Context) {
    return {
      type: 'real',
      js_val: node.val
    }
  },
  CharConstant: function (node: CharConstant, _context: Context) {
    return {
      type: 'char',
      js_val: node.val
    }
  },
  StringConstant: function (node: StringConstant, _context: Context) {
    return {
      type: 'string',
      js_val: node.val
    }
  },
  InfixApplication: function (node: InfixApplication, context: Context) {
    // TODO: should first lookup context first, before looking up builtin operators
    // Or we can add builtin operators to context.
    const operator = builtinInfixOperators[node.id]
    const op1 = evaluate(node.operand1, context)
    const op2 = evaluate(node.operand2, context)
    return operator(op1, op2)
  }
}

export function evaluate(node: Node, context: Context): Sml.Value {
  const result = evaluators[node.type](node, context)
  return result
}
