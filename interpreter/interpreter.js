"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluate = void 0;
const assert = require("assert");
const Sml = require("../sml");
let A = [];
let S = [];
let E = { frame: {}, parent: undefined };
const init_env = () => {
    const env = { frame: {}, parent: undefined };
    for (const fn of Sml.builtinFns) {
        assign_in_env(env, fn.id, fn);
    }
    return env;
};
const extend_env = (env) => {
    return { frame: {}, parent: env };
};
const lookup_env = (env, k) => {
    if (env === undefined) {
        throw new Error(`${k} not found in env`);
    }
    if (env.frame[k] === undefined) {
        return lookup_env(env.parent, k);
    }
    return env.frame[k];
};
const assign_in_env = (env, k, v) => {
    // Bindings are immutable, though shadowing is possible.
    // So we simply overwrite what ever value was stored (if any).
    // Bindings in parent frames cannot be modified.
    env.frame[k] = v;
};
// Returns a reverse of the input array without mutating the original
const reverse = (arr) => {
    const copy = arr.slice();
    copy.reverse();
    return copy;
};
const rev_push = (stack, items) => {
    stack.push(...reverse(items));
};
const interleave = (microcodes, instruction) => {
    const ret = [];
    for (const mc of microcodes) {
        ret.push(mc);
        ret.push(instruction);
    }
    // remove last added instruction
    ret.pop();
    return ret;
};
// All the case statements are wrapped in a { }. This is to prevent scopes
// from interfering with each other (we don't want fallthroughs anyways).
// Without this wrapping, the declaration of a const x in one case, would prevent
// the declaration of the same const x in another disjoint case
const exec_microcode = (cmd) => {
    switch (cmd.tag) {
        /**
         * Node Tags
         */
        case 'IntConstant': {
            S.push({
                type: 'int',
                js_val: cmd.val
            });
            break;
        }
        case 'FloatConstant': {
            S.push({
                type: 'real',
                js_val: cmd.val
            });
            break;
        }
        case 'CharConstant': {
            S.push({
                type: 'char',
                js_val: cmd.val
            });
            break;
        }
        case 'StringConstant': {
            S.push({
                type: 'string',
                js_val: cmd.val
            });
            break;
        }
        case 'BoolConstant': {
            S.push({
                type: 'bool',
                js_val: cmd.val
            });
            break;
        }
        case 'UnitConstant': {
            S.push({
                type: 'unit'
            });
            break;
        }
        case 'Application': {
            A.push({ tag: 'ApplicationI' }, cmd.arg, cmd.fn);
            break;
        }
        case 'InfixApplication': {
            A.push({
                tag: 'BinOpI',
                id: cmd.id
            }, cmd.operand2, cmd.operand1);
            break;
        }
        case 'LetExpression': {
            A.push({ tag: 'RestoreEnvI', env: E });
            rev_push(A, interleave(cmd.exps, { tag: 'PopI' }));
            A.push(cmd.decSequence);
            break;
        }
        case 'BinaryLogicalOperator': {
            A.push({
                tag: 'BinLogicalOpI',
                id: cmd.id,
                op2: cmd.operand2
            }, cmd.operand1);
            break;
        }
        case 'ConditionalExpression': {
            A.push({ tag: 'BranchI', consequent: cmd.consequent, alternative: cmd.alternative }, cmd.pred);
            break;
        }
        case 'Function': {
            S.push({
                type: 'fn',
                matches: cmd.matches,
                env: E
            });
            break;
        }
        case 'Match': {
            throw new Error('TODO');
            break;
        }
        case 'Matches': {
            throw new Error('TODO');
            break;
        }
        case 'Variable': {
            S.push(lookup_env(E, cmd.id));
            break;
        }
        case 'DeclarationSequence': {
            rev_push(A, cmd.decs);
            break;
        }
        case 'ValueDeclaration': {
            rev_push(A, cmd.valbinds);
            break;
        }
        case 'Valbind': {
            // https://www.cs.cornell.edu/courses/cs312/2004fa/lectures/rec21.html
            // Each declaration are in their own env frame
            if (cmd.is_rec) {
                if (cmd.exp.tag !== 'Function') {
                    throw new Error('using rec requires binding a function');
                }
                E = extend_env(E);
                A.push({ tag: 'AssignI', pat: cmd.pat }, cmd.exp);
            }
            else {
                // Need to evaluate RHS in prev env
                const prevEnv = E;
                E = extend_env(E);
                A.push({ tag: 'AssignI', pat: cmd.pat }, { tag: 'RestoreEnvI', env: E }, cmd.exp, {
                    tag: 'RestoreEnvI',
                    env: prevEnv
                });
            }
            break;
        }
        case 'Program': {
            rev_push(A, cmd.body.decs);
            break;
        }
        /**
         * Instruction Tags
         */
        case 'PopI': {
            S.pop();
            break;
        }
        case 'BranchI': {
            const pred_res = S.pop();
            assert(pred_res !== undefined && pred_res.type === 'bool');
            if (pred_res.js_val) {
                A.push(cmd.consequent);
            }
            else {
                A.push(cmd.alternative);
            }
            break;
        }
        case 'BinOpI': {
            const snd = S.pop();
            const fst = S.pop();
            // We do not allow users to define custom infix / binary operators
            // So we directly look up builtinBinOperators instead of looking up
            // the env
            S.push(Sml.builtinBinOperators[cmd.id](fst, snd));
            break;
        }
        case 'BinLogicalOpI': {
            const fst = S.pop();
            if (fst.type !== 'bool') {
                throw new Error('invalid types');
            }
            // Perform shortcircuiting if possible
            if (cmd.id === 'orelse' && fst.js_val) {
                S.push({
                    type: 'bool',
                    js_val: true
                });
            }
            else if (cmd.id === 'andalso' && !fst.js_val) {
                S.push({
                    type: 'bool',
                    js_val: false
                });
            }
            else {
                // no shortcircuiting possible, so we push first operand back on stack
                // then evaluate normally as if it's a binary op
                S.push(fst);
                A.push({
                    tag: 'BinOpI',
                    id: cmd.id
                }, cmd.op2);
            }
            break;
        }
        case 'RestoreEnvI': {
            E = cmd.env;
            break;
        }
        case 'AssignI': {
            const rhs = S.pop();
            // If pat is a constant, then we don't perform env assignment.
            // But we check if the pat and the RHS are valid
            // Examples of valid constant assignment: 1=1, true=true, ()=()
            // Examples of non-valid constant assignment: 1=2, true=false
            if (cmd.pat.tag === 'UnitConstant') {
                if (rhs.type !== 'unit') {
                    throw new Error(`cannot bind () to ${rhs}. can only bind () to itself`);
                }
            }
            else if (cmd.pat.tag === 'IntConstant' ||
                cmd.pat.tag === 'FloatConstant' ||
                cmd.pat.tag === 'CharConstant' ||
                cmd.pat.tag === 'StringConstant' ||
                cmd.pat.tag === 'BoolConstant') {
                if ((rhs.type !== 'int' &&
                    rhs.type !== 'real' &&
                    rhs.type !== 'char' &&
                    rhs.type !== 'string' &&
                    rhs.type !== 'bool') ||
                    // For constants containing values (non-unit), the values must be equal.
                    // Otherwise, we throw error
                    cmd.pat.val !== rhs.js_val) {
                    throw new Error(`cannot bind ${cmd.pat.val} to ${rhs}. can only bind ${cmd.pat.val} to itself`);
                }
            }
            else if (cmd.pat.tag === 'Variable') {
                assign_in_env(E, cmd.pat.id, rhs);
            }
            else {
                // TODO: handle more complicated patterns here.
                // e.g. if pat is a::b, then assign a=head(rhs), b=tail(rhs) (after checking the types of rhs)
                throw new Error(`TODO: unimplemented ${cmd.pat}`);
            }
            break;
        }
        case 'ApplicationI': {
            // TODO: handle tail calls
            const arg = S.pop();
            const fn = S.pop();
            if (fn.type === 'builtin_fn') {
                S.push(fn.apply(arg));
                break;
            }
            assert(fn.type === 'fn');
            A.push({ tag: 'RestoreEnvI', env: E });
            E = extend_env(fn.env);
            let found_match = false;
            for (const { pat, exp } of fn.matches.matches) {
                // Find the first pattern that matches the given arg, then
                // perform relevant bindings, and evaluate the associated expression
                if ((pat.tag === 'IntConstant' && arg.type === 'int') ||
                    (pat.tag === 'FloatConstant' && arg.type === 'real') ||
                    (pat.tag === 'CharConstant' && arg.type === 'char') ||
                    (pat.tag === 'StringConstant' && arg.type === 'string')) {
                    const is_match = pat.val === arg.js_val;
                    if (is_match) {
                        // Don't need to extend env here since both pat and args are constant
                        A.push(exp);
                        found_match = true;
                    }
                }
                else if (pat.tag === 'Variable') {
                    // variables match the arg by default
                    assign_in_env(E, pat.id, arg);
                    A.push(exp);
                    found_match = true;
                }
                else {
                    throw new Error(`TODO: unimplemented ${pat}`);
                }
                if (found_match) {
                    break;
                }
            }
            if (!found_match) {
                throw new Error(`no match found for ${arg}`);
            }
            break;
        }
        default: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: The following line will throw a compile error if all the
            // case statements are implemented (i.e. this branch is never taken).
            throw new Error(`unknown microcode: ${cmd.tag}`);
        }
    }
};
function evaluate(node) {
    A = [node];
    S = [];
    E = init_env();
    const step_limit = 1000000;
    let i = 0;
    while (i < step_limit) {
        if (A.length === 0)
            break;
        const cmd = A.pop();
        exec_microcode(cmd);
        i++;
    }
    if (i === step_limit) {
        throw new Error(`step limit ${step_limit} exceeded`);
    }
    if (S.length != 1) {
        throw new Error(`internal error: stash must be singleton but is: ${S}`);
    }
    return S[0];
}
exports.evaluate = evaluate;
//# sourceMappingURL=interpreter.js.map