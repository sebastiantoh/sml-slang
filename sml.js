"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builtinFns = exports.builtinBinOperators = exports.valueToString = void 0;
const interpreter_1 = require("./interpreter/interpreter");
const valueToString = (sml_val) => {
    switch (sml_val.tag) {
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
        if (a.tag === 'real' && b.tag === 'real') {
            if (b.js_val === 0) {
                throw new Error('division by zero');
            }
            return {
                tag: 'real',
                js_val: a.js_val / b.js_val
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    div: (a, b) => {
        if (a.tag === 'int' && b.tag === 'int') {
            if (b.js_val === 0) {
                throw new Error('division by zero');
            }
            return {
                tag: 'int',
                js_val: Math.floor(a.js_val / b.js_val)
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    mod: (a, b) => {
        if (a.tag === 'int' && b.tag === 'int') {
            return {
                tag: 'int',
                js_val: ((a.js_val % b.js_val) + b.js_val) % b.js_val
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '*': (a, b) => {
        if ((a.tag === 'int' && b.tag === 'int') || (a.tag === 'real' && b.tag === 'real')) {
            return {
                tag: a.tag,
                js_val: a.js_val * b.js_val
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '+': (a, b) => {
        if ((a.tag === 'int' && b.tag === 'int') || (a.tag === 'real' && b.tag === 'real')) {
            return {
                tag: a.tag,
                js_val: a.js_val + b.js_val
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '-': (a, b) => {
        if ((a.tag === 'int' && b.tag === 'int') || (a.tag === 'real' && b.tag === 'real')) {
            return {
                tag: a.tag,
                js_val: a.js_val - b.js_val
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '^': (a, b) => {
        if (a.tag === 'string' && b.tag === 'string') {
            return {
                tag: 'string',
                js_val: a.js_val.concat(b.js_val)
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '=': (a, b) => {
        if ((a.tag === 'int' && b.tag === 'int') ||
            (a.tag === 'real' && b.tag === 'real') ||
            (a.tag === 'string' && b.tag === 'string') ||
            (a.tag === 'char' && b.tag === 'char')
        // TODO: add more tags, e.g. lists
        ) {
            return {
                tag: 'bool',
                js_val: a.js_val === b.js_val
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '<>': (a, b) => {
        if ((a.tag === 'int' && b.tag === 'int') ||
            (a.tag === 'real' && b.tag === 'real') ||
            (a.tag === 'string' && b.tag === 'string') ||
            (a.tag === 'char' && b.tag === 'char')
        // TODO: add more tags, e.g. lists
        ) {
            return {
                tag: 'bool',
                js_val: a.js_val !== b.js_val
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '<': (a, b) => {
        if ((a.tag === 'int' && b.tag === 'int') ||
            (a.tag === 'real' && b.tag === 'real') ||
            (a.tag === 'string' && b.tag === 'string') ||
            (a.tag === 'char' && b.tag === 'char')) {
            return {
                tag: 'bool',
                js_val: a.js_val < b.js_val
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '>': (a, b) => {
        if ((a.tag === 'int' && b.tag === 'int') ||
            (a.tag === 'real' && b.tag === 'real') ||
            (a.tag === 'string' && b.tag === 'string') ||
            (a.tag === 'char' && b.tag === 'char')) {
            return {
                tag: 'bool',
                js_val: a.js_val > b.js_val
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '<=': (a, b) => {
        if ((a.tag === 'int' && b.tag === 'int') ||
            (a.tag === 'real' && b.tag === 'real') ||
            (a.tag === 'string' && b.tag === 'string') ||
            (a.tag === 'char' && b.tag === 'char')) {
            return {
                tag: 'bool',
                js_val: a.js_val <= b.js_val
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '>=': (a, b) => {
        if ((a.tag === 'int' && b.tag === 'int') ||
            (a.tag === 'real' && b.tag === 'real') ||
            (a.tag === 'string' && b.tag === 'string') ||
            (a.tag === 'char' && b.tag === 'char')) {
            return {
                tag: 'bool',
                js_val: a.js_val >= b.js_val
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    }
};
exports.builtinFns = [
    {
        tag: 'builtin_fn',
        id: 'print',
        apply: (arg) => {
            interpreter_1.stdout.push((0, exports.valueToString)(arg) + '\n');
            return {
                tag: 'unit'
            };
        }
    },
    {
        tag: 'builtin_fn',
        id: 'size',
        apply: (arg) => {
            if (arg.tag === 'string') {
                return {
                    tag: 'int',
                    js_val: arg.js_val.length
                };
            }
            throw new Error(`invalid types - received ${arg.tag}`);
        }
    },
    {
        tag: 'builtin_fn',
        id: 'not',
        apply: (arg) => {
            if (arg.tag === 'bool') {
                return {
                    tag: 'bool',
                    js_val: !arg.js_val
                };
            }
            throw new Error(`invalid types - received ${arg.tag}`);
        }
    }
];
//# sourceMappingURL=sml.js.map