"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builtinFns = exports.builtinBinOperators = exports.valueToString = void 0;
const lodash_1 = require("lodash");
const interpreter_1 = require("./interpreter/interpreter");
const valueToString = (val) => {
    switch (val.tag) {
        case 'int':
            if (val.jsVal < 0) {
                return `~${Math.abs(val.jsVal)}`;
            }
            return val.jsVal.toString();
        case 'real':
            if (val.jsVal < 0) {
                return `~${Math.abs(val.jsVal)}`;
            }
            return val.jsVal.toString();
        case 'string':
            return `"${val.jsVal}"`;
        case 'char':
            return `#"${val.jsVal}"`;
        case 'bool':
            return val.jsVal.toString();
        case 'unit':
            return '()';
        case 'list':
            return `[${val.jsVal.map(e => (0, exports.valueToString)(e)).toString()}]`;
        case 'fn':
            // TODO: once we have a typechecker, we can
            // include more info in the string repr, e.g param types and return types
            return 'fn';
        case 'builtin_fn':
            return `${val.id}: builtin_fn`;
    }
};
exports.valueToString = valueToString;
// Full list of builtins along with precedence can be found on
// Page 98 of https://smlfamily.github.io/sml90-defn.pdf
exports.builtinBinOperators = {
    '/': (a, b) => {
        if (a.tag === 'real' && b.tag === 'real') {
            if (b.jsVal === 0) {
                throw new Error('division by zero');
            }
            return {
                tag: 'real',
                jsVal: a.jsVal / b.jsVal
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    div: (a, b) => {
        if (a.tag === 'int' && b.tag === 'int') {
            if (b.jsVal === 0) {
                throw new Error('division by zero');
            }
            return {
                tag: 'int',
                jsVal: Math.floor(a.jsVal / b.jsVal)
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    mod: (a, b) => {
        if (a.tag === 'int' && b.tag === 'int') {
            return {
                tag: 'int',
                jsVal: ((a.jsVal % b.jsVal) + b.jsVal) % b.jsVal
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '*': (a, b) => {
        if ((a.tag === 'int' && b.tag === 'int') || (a.tag === 'real' && b.tag === 'real')) {
            return {
                tag: a.tag,
                jsVal: a.jsVal * b.jsVal
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '+': (a, b) => {
        if ((a.tag === 'int' && b.tag === 'int') || (a.tag === 'real' && b.tag === 'real')) {
            return {
                tag: a.tag,
                jsVal: a.jsVal + b.jsVal
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '-': (a, b) => {
        if ((a.tag === 'int' && b.tag === 'int') || (a.tag === 'real' && b.tag === 'real')) {
            return {
                tag: a.tag,
                jsVal: a.jsVal - b.jsVal
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '^': (a, b) => {
        if (a.tag === 'string' && b.tag === 'string') {
            return {
                tag: 'string',
                jsVal: a.jsVal.concat(b.jsVal)
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '::': (a, b) => {
        if (b.tag === 'list') {
            return {
                tag: 'list',
                // type checker should have ensured that a has proper type
                jsVal: [a, ...b.jsVal]
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '@': (a, b) => {
        if (a.tag === 'list' && b.tag === 'list') {
            return {
                tag: 'list',
                // type checker should have ensured that a has proper type
                jsVal: [...a.jsVal, ...b.jsVal]
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '=': (a, b) => {
        if ((a.tag === 'int' && b.tag === 'int') ||
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
                jsVal: (0, lodash_1.isEqual)(a.jsVal, b.jsVal)
            };
        }
        else if (a.tag === 'unit' && b.tag === 'unit') {
            return {
                tag: 'bool',
                jsVal: true
            };
        }
        throw new Error(`invalid types - received ${a.tag} and ${b.tag}`);
    },
    '<>': (a, b) => {
        const isEq = exports.builtinBinOperators['='](a, b);
        return {
            tag: 'bool',
            jsVal: !isEq.jsVal
        };
    },
    '<': (a, b) => {
        if ((a.tag === 'int' && b.tag === 'int') ||
            (a.tag === 'real' && b.tag === 'real') ||
            (a.tag === 'string' && b.tag === 'string') ||
            (a.tag === 'char' && b.tag === 'char')) {
            return {
                tag: 'bool',
                jsVal: a.jsVal < b.jsVal
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
                jsVal: a.jsVal > b.jsVal
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
                jsVal: a.jsVal <= b.jsVal
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
                jsVal: a.jsVal >= b.jsVal
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
                    jsVal: arg.jsVal.length
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
                    jsVal: !arg.jsVal
                };
            }
            throw new Error(`invalid types - received ${arg.tag}`);
        }
    }
];
//# sourceMappingURL=sml.js.map