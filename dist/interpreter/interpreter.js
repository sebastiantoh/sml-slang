"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluate = void 0;
const assert = require("assert");
const Sml = require("../sml");
let A = [];
let S = [];
let E = { frame: {}, parent: undefined };
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
const exec_microcode = (cmd) => {
    switch (cmd.tag) {
        /**
         * Node Tags
         */
        case 'IntConstant':
            S.push({
                type: 'int',
                js_val: cmd.val
            });
            break;
        case 'FloatConstant':
            S.push({
                type: 'real',
                js_val: cmd.val
            });
            break;
        case 'CharConstant':
            S.push({
                type: 'char',
                js_val: cmd.val
            });
            break;
        case 'StringConstant':
            S.push({
                type: 'string',
                js_val: cmd.val
            });
            break;
        case 'InfixApplication':
            A.push({
                tag: 'BinOpI',
                id: cmd.id
            }, cmd.operand2, cmd.operand1);
            break;
        case 'LetExpression':
            A.push({ tag: 'RestoreEnvI', env: E });
            rev_push(A, interleave(cmd.exps, { tag: 'PopI' }));
            A.push(cmd.decSequence);
            break;
        case 'ConditionalExpression':
            A.push({ tag: 'BranchI', consequent: cmd.consequent, alternative: cmd.alternative }, cmd.pred);
            break;
        case 'Variable':
            S.push(lookup_env(E, cmd.id));
            break;
        case 'DeclarationSequence':
            rev_push(A, cmd.decs);
            break;
        case 'ValueDeclaration':
            rev_push(A, cmd.valbinds);
            break;
        case 'FunctionDeclaration':
            // TODO
            break;
        case 'Valbind':
            // https://www.cs.cornell.edu/courses/cs312/2004fa/lectures/rec21.html
            // Each declaration are in their own env frame
            if (cmd.is_rec) {
                // TODO: add error checking. is_rec is only valid if RHS is a closure
                // evaluate RHS in new env
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
        case 'Program':
            rev_push(A, cmd.body);
            break;
        /**
         * Instruction Tags
         */
        case 'PopI':
            S.pop();
            break;
        case 'BranchI':
            const pred_res = S.pop();
            assert(pred_res !== undefined && pred_res.type === 'bool');
            if (pred_res.js_val) {
                A.push(cmd.consequent);
            }
            else {
                A.push(cmd.alternative);
            }
            break;
        case 'BinOpI':
            const snd = S.pop();
            const fst = S.pop();
            // TODO: should first lookup context first, before looking up builtin operators
            // Or we can add builtin operators to context.
            S.push(Sml.builtinBinOperators[cmd.id](fst, snd));
            break;
        case 'RestoreEnvI':
            E = cmd.env;
            break;
        case 'AssignI':
            const rhs = S.pop();
            if (cmd.pat.tag === 'IntConstant' ||
                cmd.pat.tag === 'FloatConstant' ||
                cmd.pat.tag === 'CharConstant' ||
                cmd.pat.tag === 'StringConstant') {
                if (cmd.pat.val !== rhs.js_val) {
                    throw new Error(`cannot bind ${cmd.pat.val} to ${rhs}. can only bind ${cmd.pat.val} to itself`);
                }
            }
            else if (cmd.pat.tag === 'Variable') {
                assign_in_env(E, cmd.pat.id, rhs);
            }
            else {
                // TODO: handle more complicated patterns here.
                // e.g. if pat is a::b, then assign a=head(rhs), b=tail(rhs) (after checking the types of rhs)
            }
            break;
        default:
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: The following line will throw a compile error if all the
            // case statements are implemented (i.e. this branch is never taken).
            throw new Error(`unknown microcode: ${cmd.tag}`);
    }
};
function evaluate(node) {
    A = [node];
    S = [];
    // TODO: init env
    E = { frame: {}, parent: undefined };
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