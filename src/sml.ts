import { Value } from './types'

export const valueToString = (sml_val: Value) => {
  switch (sml_val.type) {
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
  }
}

// Full list of builtins along with precedence can be found on
// Page 98 of https://smlfamily.github.io/sml90-defn.pdf
export const builtinBinOperators = {
  '/': (a: Value, b: Value) => {
    if (a.type === 'real' && b.type === 'real') {
      return {
        type: 'real',
        // TODO: handle div by 0?
        js_val: a.js_val / b.js_val
      }
    }
    throw new Error('invalid types')
  },
  div: (a: Value, b: Value) => {
    if (a.type === 'int' && b.type === 'int') {
      return {
        type: 'int',
        // TODO: handle div by 0?
        js_val: Math.floor(a.js_val / b.js_val)
      }
    }
    throw new Error('invalid types')
  },
  mod: (a: Value, b: Value) => {
    if (a.type === 'int' && b.type === 'int') {
      return {
        type: 'int',
        js_val: ((a.js_val % b.js_val) + b.js_val) % b.js_val
      }
    }
    throw new Error('invalid types')
  },
  '*': (a: Value, b: Value) => {
    if ((a.type === 'int' && b.type === 'int') || (a.type === 'real' && b.type === 'real')) {
      return {
        type: a.type,
        js_val: a.js_val * b.js_val
      }
    }
    throw new Error('invalid types')
  },
  '+': (a: Value, b: Value) => {
    if ((a.type === 'int' && b.type === 'int') || (a.type === 'real' && b.type === 'real')) {
      return {
        type: a.type,
        js_val: a.js_val + b.js_val
      }
    }
    throw new Error('invalid types')
  },
  '-': (a: Value, b: Value) => {
    if ((a.type === 'int' && b.type === 'int') || (a.type === 'real' && b.type === 'real')) {
      return {
        type: a.type,
        js_val: a.js_val - b.js_val
      }
    }
    throw new Error('invalid types')
  },
  '^': (a: Value, b: Value) => {
    if (a.type === 'string' && b.type === 'string') {
      return {
        type: 'string',
        js_val: a.js_val.concat(b.js_val)
      }
    }
    throw new Error('invalid types')
  },
  '=': (a: Value, b: Value) => {
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
  '<>': (a: Value, b: Value) => {
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
  '<': (a: Value, b: Value) => {
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
  '>': (a: Value, b: Value) => {
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
  '<=': (a: Value, b: Value) => {
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
  '>=': (a: Value, b: Value) => {
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
  },
  andalso: (a: Value, b: Value) => {
    if (a.type === 'bool' && b.type === 'bool') {
      return {
        type: 'bool',
        js_val: a.js_val && b.js_val
      }
    }
    throw new Error('invalid types')
  },
  orelse: (a: Value, b: Value) => {
    if (a.type === 'bool' && b.type === 'bool') {
      return {
        type: 'bool',
        js_val: a.js_val || b.js_val
      }
    }
    throw new Error('invalid types')
  }
}
