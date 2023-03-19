"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateProg = exports.evaluateExp = exports.evaluate = exports.stdout = void 0;
const assert = require("assert");
const lodash_1 = require("lodash");
const Sml = require("../sml");
// TODO: integrate this with frontend's output
exports.stdout = [];
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
function peek(stack) {
    if (stack.length === 0) {
        return undefined;
    }
    return stack[-1];
}
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
    var _a, _b;
    switch (cmd.tag) {
        /**
         * Node Tags
         */
        case 'IntConstant': {
            S.push({
                tag: 'int',
                js_val: cmd.val
            });
            break;
        }
        case 'RealConstant': {
            S.push({
                tag: 'real',
                js_val: cmd.val
            });
            break;
        }
        case 'CharConstant': {
            S.push({
                tag: 'char',
                js_val: cmd.val
            });
            break;
        }
        case 'StringConstant': {
            S.push({
                tag: 'string',
                js_val: cmd.val
            });
            break;
        }
        case 'BoolConstant': {
            S.push({
                tag: 'bool',
                js_val: cmd.val
            });
            break;
        }
        case 'UnitConstant': {
            S.push({
                tag: 'unit'
            });
            break;
        }
        case 'ListLiteral': {
            A.push({ tag: 'ListI', arity: cmd.arity }, ...reverse(cmd.elements));
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
        case 'ExpSequence': {
            rev_push(A, interleave(cmd.exps, { tag: 'PopI' }));
            break;
        }
        case 'LetExpression': {
            A.push({ tag: 'RestoreEnvI', env: E });
            rev_push(A, interleave(cmd.exps, { tag: 'PopI' }));
            A.push(cmd.decSequence);
            break;
        }
        case 'ConditionalExpression': {
            A.push({ tag: 'BranchI', consequent: cmd.consequent, alternative: cmd.alternative }, cmd.pred);
            break;
        }
        case 'Function': {
            S.push({
                tag: 'fn',
                matches: cmd.matches,
                // note: we create a copy of this env since the env may be mutated, e.g:
                // in a local declaration, the parent of E will be mutated
                // TODO: deep copy needed?
                env: Object.assign({}, E)
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
        case 'LocalDeclaration': {
            // Each dec will create their own env:
            // currEnv <- localDec1 <- ... <- localDecN <- dec1 <- ... <- decM
            // We want to set the parent of dec1 to point to the currEnv
            // after all the declarations have been completed
            // {tag: "DecsAfterLocalDecsI", decs, envBeforeLocalDecs=currEnv}
            // - Will be executed when E=localDecN
            // - Will push a {tag: "SetEnvParentI", oldParent: localDecN, newParent: currEnv}
            //   after declarations have been executed
            //
            // {tag: "SetEnvParentI", oldParent: localDecN, newParent: currEnv}
            // - Will be executed when E=decM
            // - Will traverse up from env=decM until env.parent === oldParent (or localDecN),
            //   before setting env.parent = newParent (currEnv)
            // TODO: is there a better way to do this?
            rev_push(A, [
                ...cmd.localDecs.decs,
                {
                    tag: 'DecsAfterLocalDecsI',
                    decs: cmd.decs.decs,
                    envBeforeLocalDecs: E
                }
            ]);
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
            assert(pred_res.tag === 'bool');
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
        case 'RestoreEnvI': {
            E = cmd.env;
            break;
        }
        case 'SetEnvParentI': {
            let tmp = E;
            while (tmp && tmp.parent !== cmd.oldParent) {
                tmp = tmp.parent;
            }
            assert(tmp !== undefined);
            tmp.parent = cmd.newParent;
            break;
        }
        case 'AssignI': {
            const rhs = S.pop();
            // If pat is a constant, then we don't perform env assignment.
            // But we check if the pat and the RHS are valid
            // Examples of valid constant assignment: 1=1, true=true, ()=()
            // Examples of non-valid constant assignment: 1=2, true=false
            if (cmd.pat.tag === 'UnitConstant') {
                if (rhs.tag !== 'unit') {
                    throw new Error(`cannot bind () to ${rhs}. can only bind () to itself`);
                }
            }
            else if (cmd.pat.tag === 'IntConstant' ||
                cmd.pat.tag === 'RealConstant' ||
                cmd.pat.tag === 'CharConstant' ||
                cmd.pat.tag === 'StringConstant' ||
                cmd.pat.tag === 'BoolConstant') {
                if ((rhs.tag !== 'int' &&
                    rhs.tag !== 'real' &&
                    rhs.tag !== 'char' &&
                    rhs.tag !== 'string' &&
                    rhs.tag !== 'bool') ||
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
        case 'DecsAfterLocalDecsI': {
            rev_push(A, [
                ...cmd.decs,
                { tag: 'SetEnvParentI', oldParent: E, newParent: cmd.envBeforeLocalDecs }
            ]);
            break;
        }
        case 'ListI': {
            const arity = cmd.arity;
            const lst = (0, lodash_1.takeRight)(S, arity);
            S = (0, lodash_1.take)(S, S.length - arity);
            S.push({ tag: 'list', js_val: lst });
            break;
        }
        case 'ApplicationI': {
            const arg = S.pop();
            const fn = S.pop();
            if (fn.tag === 'builtin_fn') {
                S.push(fn.apply(arg));
                break;
            }
            assert(fn.tag === 'fn');
            if (A.length === 0 || ((_a = peek(A)) === null || _a === void 0 ? void 0 : _a.tag) === 'RestoreEnvI') {
                // Implies no more agenda items that needs to be evaluated with the current env.
                // Just push mark, and not RestoreEnvI
                A.push({ tag: 'MarkEndOfFnBodyI' });
            }
            else if (((_b = peek(A)) === null || _b === void 0 ? void 0 : _b.tag) === 'MarkEndOfFnBodyI') {
                // The current 'ApplicationI' is a tail call since this
                // ApplicationI is the last thing that has to be evaluated before reaching
                // the end of the caller function body (the one that pushed the MarkEndOfFnbodyI)
                // We don't need to:
                // - push RestoreEnvI since we have nothing else to evaluate under the current env
                // - push MarkEndOfFnBodyI since it's already on the top of the agenda
                // i.e. we do nothing in this block
            }
            else {
                A.push({ tag: 'RestoreEnvI', env: E }, { tag: 'MarkEndOfFnBodyI' });
            }
            E = extend_env(fn.env);
            // Bind params (if necessary) and evaluate function body
            let found_match = false;
            for (const { pat, exp } of fn.matches.matches) {
                // Find the first pattern that matches the given arg, then
                // perform relevant bindings, and evaluate the associated expression
                if ((pat.tag === 'IntConstant' && arg.tag === 'int') ||
                    (pat.tag === 'RealConstant' && arg.tag === 'real') ||
                    (pat.tag === 'CharConstant' && arg.tag === 'char') ||
                    (pat.tag === 'StringConstant' && arg.tag === 'string')) {
                    const is_match = pat.val === arg.js_val;
                    if (is_match) {
                        // Don't need to assign in env here since both pat and args are constant
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
        case 'MarkEndOfFnBodyI': {
            // do nothing
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
    exports.stdout = [];
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
}
exports.evaluate = evaluate;
function evaluateExp(exp) {
    evaluate(exp);
    if (S.length !== 1) {
        throw new Error(`internal error: stash must be singleton but is: ${S}`);
    }
    return S[0];
}
exports.evaluateExp = evaluateExp;
function evaluateProg(prog) {
    evaluate(prog);
    if (S.length !== 0) {
        throw new Error(`internal error: stash must be empty but is: ${S}`);
    }
    return exports.stdout.join('');
}
exports.evaluateProg = evaluateProg;
//# sourceMappingURL=interpreter.js.map