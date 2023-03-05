"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builtinFns = exports.builtinBinOperators = exports.valueToString = void 0;
const valueToString = (sml_val) => {
    switch (sml_val.type) {
        case 'int':
            if (sml_val.js_val < 0) {
                return `~${Math.abs(sml_val.js_val)}`;
            }
            return sml_val.js_val.toString();
        case 'real':
            if (sml_val.js_val < 0) {
                return `~${Math.abs(sml_val.js_val)}`;
            }
            return sml_val.js_val.toString();
        case 'string':
            return `"${sml_val.js_val}"`;
        case 'char':
            return `#"${sml_val.js_val}"`;
        case 'bool':
            return sml_val.js_val.toString();
        case 'unit':
            return '()';
        case 'fn':
            // TODO: once we have a typechecker, we can
            // include more info in the string repr, e.g param types and return types
            return 'fn';
        case 'builtin_fn':
            return `${sml_val.id}: builtin_fn`;
    }
};
exports.valueToString = valueToString;
// Full list of builtins along with precedence can be found on
// Page 98 of https://smlfamily.github.io/sml90-defn.pdf
exports.builtinBinOperators = {
    '/': (a, b) => {
        if (a.type === 'real' && b.type === 'real') {
            if (b.js_val === 0) {
                throw new Error('division by zero');
            }
            return {
                type: 'real',
                js_val: a.js_val / b.js_val
            };
        }
        throw new Error('invalid types');
    },
    div: (a, b) => {
        if (a.type === 'int' && b.type === 'int') {
            if (b.js_val === 0) {
                throw new Error('division by zero');
            }
            return {
                type: 'int',
                js_val: Math.floor(a.js_val / b.js_val)
            };
        }
        throw new Error('invalid types');
    },
    mod: (a, b) => {
        if (a.type === 'int' && b.type === 'int') {
            return {
                type: 'int',
                js_val: ((a.js_val % b.js_val) + b.js_val) % b.js_val
            };
        }
        throw new Error('invalid types');
    },
    '*': (a, b) => {
        if ((a.type === 'int' && b.type === 'int') || (a.type === 'real' && b.type === 'real')) {
            return {
                type: a.type,
                js_val: a.js_val * b.js_val
            };
        }
        throw new Error('invalid types');
    },
    '+': (a, b) => {
        if ((a.type === 'int' && b.type === 'int') || (a.type === 'real' && b.type === 'real')) {
            return {
                type: a.type,
                js_val: a.js_val + b.js_val
            };
        }
        throw new Error('invalid types');
    },
    '-': (a, b) => {
        if ((a.type === 'int' && b.type === 'int') || (a.type === 'real' && b.type === 'real')) {
            return {
                type: a.type,
                js_val: a.js_val - b.js_val
            };
        }
        throw new Error('invalid types');
    },
    '^': (a, b) => {
        if (a.type === 'string' && b.type === 'string') {
            return {
                type: 'string',
                js_val: a.js_val.concat(b.js_val)
            };
        }
        throw new Error('invalid types');
    },
    '=': (a, b) => {
        if ((a.type === 'int' && b.type === 'int') ||
            (a.type === 'real' && b.type === 'real') ||
            (a.type === 'string' && b.type === 'string') ||
            (a.type === 'char' && b.type === 'char')) {
            return {
                type: 'bool',
                js_val: a.js_val === b.js_val
            };
        }
        throw new Error('invalid types');
    },
    '<>': (a, b) => {
        if ((a.type === 'int' && b.type === 'int') ||
            (a.type === 'real' && b.type === 'real') ||
            (a.type === 'string' && b.type === 'string') ||
            (a.type === 'char' && b.type === 'char')) {
            return {
                type: 'bool',
                js_val: a.js_val !== b.js_val
            };
        }
        throw new Error('invalid types');
    },
    '<': (a, b) => {
        if ((a.type === 'int' && b.type === 'int') ||
            (a.type === 'real' && b.type === 'real') ||
            (a.type === 'string' && b.type === 'string') ||
            (a.type === 'char' && b.type === 'char')) {
            return {
                type: 'bool',
                js_val: a.js_val < b.js_val
            };
        }
        throw new Error('invalid types');
    },
    '>': (a, b) => {
        if ((a.type === 'int' && b.type === 'int') ||
            (a.type === 'real' && b.type === 'real') ||
            (a.type === 'string' && b.type === 'string') ||
            (a.type === 'char' && b.type === 'char')) {
            return {
                type: 'bool',
                js_val: a.js_val > b.js_val
            };
        }
        throw new Error('invalid types');
    },
    '<=': (a, b) => {
        if ((a.type === 'int' && b.type === 'int') ||
            (a.type === 'real' && b.type === 'real') ||
            (a.type === 'string' && b.type === 'string') ||
            (a.type === 'char' && b.type === 'char')) {
            return {
                type: 'bool',
                js_val: a.js_val <= b.js_val
            };
        }
        throw new Error('invalid types');
    },
    '>=': (a, b) => {
        if ((a.type === 'int' && b.type === 'int') ||
            (a.type === 'real' && b.type === 'real') ||
            (a.type === 'string' && b.type === 'string') ||
            (a.type === 'char' && b.type === 'char')) {
            return {
                type: 'bool',
                js_val: a.js_val >= b.js_val
            };
        }
        throw new Error('invalid types');
    },
    andalso: (a, b) => {
        if (a.type === 'bool' && b.type === 'bool') {
            return {
                type: 'bool',
                js_val: a.js_val && b.js_val
            };
        }
        throw new Error('invalid types');
    },
    orelse: (a, b) => {
        if (a.type === 'bool' && b.type === 'bool') {
            return {
                type: 'bool',
                js_val: a.js_val || b.js_val
            };
        }
        throw new Error('invalid types');
    }
};
exports.builtinFns = [
    {
        type: 'builtin_fn',
        id: 'size',
        apply: (arg) => {
            if (arg.type === 'string') {
                return {
                    type: 'int',
                    js_val: arg.js_val.length
                };
            }
            throw new Error('invalid types');
        }
    },
    {
        type: 'builtin_fn',
        id: 'not',
        apply: (arg) => {
            if (arg.type === 'bool') {
                return {
                    type: 'bool',
                    js_val: !arg.js_val
                };
            }
            throw new Error('invalid types');
        }
    }
];
//# sourceMappingURL=sml.js.map