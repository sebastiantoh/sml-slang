// Represents a JS value and annotates it with its SML type
// Should have a "type" field, denoting the SML type
export type Value = Int | Real | String | Char | Bool

export interface Int {
  type: 'int'
  js_val: number
}

export interface Real {
  type: 'real'
  js_val: number
}

export interface String {
  type: 'string'
  js_val: string
}

export interface Char {
  type: 'char'
  js_val: string
}

// Technically, bool is a builtin datatype defined with datatype bool = true | false;
// TODO: see if we need to fix this
export interface Bool {
  type: 'bool'
  js_val: boolean
}

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
  }
}
