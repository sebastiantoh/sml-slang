import * as assert from 'assert'
import { head, isEqual, tail, take, takeRight } from 'lodash'

import { Expression, Node, Pattern, Program } from '../parser/ast'
import * as Sml from '../sml'
import { hindleyMilner } from '../typechecker'
import { createInitialTypeEnvironment, unifyAndSubstitute } from '../typechecker/environment'
import { Environment, Result, Value } from '../types'
import { Instruction } from './instructions'

type Microcode = Node | Instruction

export let stdout: Array<string> = []
let A: Array<Microcode> = []
let S: Array<Value> = []
let E: Environment = { frame: {}, parent: undefined }

const initEnv = (): Environment => {
  const env = { frame: {}, parent: undefined }
  for (const fn of Sml.builtinFns) {
    assignInEnv(env, fn.id, fn)
  }
  return env
}

const extendEnv = (env: Environment): Environment => {
  return { frame: {}, parent: env }
}
const lookupEnv = (env: Environment | undefined, k: string): Value => {
  if (env === undefined) {
    throw new Error(`${k} not found in env`)
  }
  if (env.frame[k] === undefined) {
    return lookupEnv(env.parent, k)
  }
  return env.frame[k]
}
const assignInEnv = (env: Environment, k: string, v: Value) => {
  // Bindings are immutable, though shadowing is possible.
  // So we simply overwrite what ever value was stored (if any).
  // Bindings in parent frames cannot be modified.
  env.frame[k] = v
}

// Returns a reverse of the input array without mutating the original
const reverse = (arr: Array<any>) => {
  const copy = arr.slice()
  copy.reverse()
  return copy
}
function peek<T>(stack: Array<T>): T | undefined {
  if (stack.length === 0) {
    return undefined
  }
  return stack[-1]
}
const revPush = (stack: Array<any>, items: any[]) => {
  stack.push(...reverse(items))
}

const interleave = (microcodes: Array<Microcode>, instruction: Instruction) => {
  const ret = []
  for (const mc of microcodes) {
    ret.push(mc)
    ret.push(instruction)
  }
  // remove last added instruction
  ret.pop()
  return ret
}

// Checks if value can be matched against pattern, and
// if so, updates the environment with the proper bindings
// based on the pattern and value.
// Returns true if value was successfuly matched with pattern. False otherwise.
// e.g. case value of pat => ...
const tryMatch = (originalEnv: Environment, value: Value, pat: Pattern): [boolean, Environment] => {
  if (
    (pat.tag === 'IntConstant' && value.tag === 'int') ||
    (pat.tag === 'RealConstant' && value.tag === 'real') ||
    (pat.tag === 'CharConstant' && value.tag === 'char') ||
    (pat.tag === 'StringConstant' && value.tag === 'string') ||
    (pat.tag === 'BoolConstant' && value.tag === 'bool')
  ) {
    // Since both pat and value are constants, we don't need to update env
    // e.g. case 1 of 1 => ...
    return [isEqual(pat.val, value.jsVal), originalEnv]
  } else if (pat.tag === 'UnitConstant') {
    return [value.tag === 'unit', originalEnv]
  } else if (pat.tag === 'Wildcard') {
    // Wildcards result in a match by default.
    // Don't need to assign env since wildcard has no variables to
    // assign to
    // e.g. case 1 of _ => ...
    return [true, originalEnv]
  } else if (pat.tag === 'PatVariable') {
    // Variables result in a match by default
    // Need to bind value to the variable defined in the pattern
    // e.g. case 1 of x => ...

    // create a shallow copy
    const updatedEnv = { ...originalEnv }
    assignInEnv(updatedEnv, pat.id, value)
    return [true, updatedEnv]
  } else if (pat.tag === 'InfixConstruction') {
    // we only support ::
    if (pat.id !== '::') {
      throw new Error(`${pat.id} is not a supported constructor`)
    }

    // guaranteed by typechecker
    assert(value.tag === 'list')

    // Attempting to match something like
    // e.g. case value of hd::tl => ...

    // value must be a non-empty list for match to succeed
    if (value.jsVal.length === 0) {
      return [false, originalEnv]
    }
    const hd = head(value.jsVal)!
    const tl = {
      tag: 'list',
      jsVal: tail(value.jsVal)
    } as Value

    const updatedEnv = { ...originalEnv }
    const [matchedPat1, envWithPat1] = tryMatch(updatedEnv, hd, pat.pat1)
    const [matchedPat2, envWithPat1AndPat2] = tryMatch(envWithPat1, tl, pat.pat2)
    if (matchedPat1 && matchedPat2) {
      return [true, envWithPat1AndPat2]
    }
    return [false, originalEnv]
  } else if (pat.tag === 'ListPattern') {
    // List pattern does not match with non-list values
    if (value.tag !== 'list') {
      return [false, originalEnv]
    }

    const pats = pat.elements
    const vals = value.jsVal

    // Lists of different length does not match
    if (vals.length !== pats.length) {
      return [false, originalEnv]
    }

    // Cannot have two of the same variable in one list pattern
    const patVarSet = new Set()
    let numVars = 0
    pat.elements.forEach(e => {
      if (e.tag === 'PatVariable') {
        numVars++
        patVarSet.add(e.id)
      }
    })

    // Throw error if there is a duplicate variable
    // TODO: we might want to change this into a parsing error
    if (patVarSet.size !== numVars) {
      throw new Error('Cannot have two of the same variable in one list pattern')
    }

    let updatedEnv = { ...E }
    for (let i = 0; i < pat.arity; i++) {
      const [matched, env] = tryMatch(updatedEnv, vals[i], pats[i])
      if (!matched) {
        // If match fails on pattern, stop matching with later patterns a
        // and return original env
        return [false, originalEnv]
      }
      updatedEnv = env
    }

    return [true, updatedEnv]
  } else {
    // TODO: handle more complicated patterns here.
    throw new Error(`TODO: unimplemented ${pat}`)
  }
}

// All the case statements are wrapped in a { }. This is to prevent scopes
// from interfering with each other (we don't want fallthroughs anyways).
// Without this wrapping, the declaration of a const x in one case, would prevent
// the declaration of the same const x in another disjoint case
const execMicrocode = (cmd: Microcode) => {
  switch (cmd.tag) {
    /**
     * Node Tags
     */
    case 'IntConstant': {
      S.push({
        tag: 'int',
        jsVal: cmd.val
      })
      break
    }
    case 'RealConstant': {
      S.push({
        tag: 'real',
        jsVal: cmd.val
      })
      break
    }
    case 'CharConstant': {
      S.push({
        tag: 'char',
        jsVal: cmd.val
      })
      break
    }
    case 'StringConstant': {
      S.push({
        tag: 'string',
        jsVal: cmd.val
      })
      break
    }
    case 'BoolConstant': {
      S.push({
        tag: 'bool',
        jsVal: cmd.val
      })
      break
    }
    case 'UnitConstant': {
      S.push({
        tag: 'unit'
      })
      break
    }
    case 'ExpVariable': {
      S.push(lookupEnv(E, cmd.id))
      break
    }
    case 'ListLiteral': {
      A.push({ tag: 'ListI', arity: cmd.arity }, ...reverse(cmd.elements))
      break
    }
    case 'Application': {
      A.push({ tag: 'ApplicationI' }, cmd.arg, cmd.fn)
      break
    }
    case 'InfixApplication': {
      A.push(
        {
          tag: 'BinOpI',
          id: cmd.id
        },
        cmd.operand2,
        cmd.operand1
      )
      break
    }
    case 'ExpSequence': {
      revPush(A, interleave(cmd.exps, { tag: 'PopI' }))
      break
    }
    case 'LetExpression': {
      A.push({ tag: 'RestoreEnvI', env: E })
      revPush(A, interleave(cmd.exps, { tag: 'PopI' }))
      revPush(A, cmd.decs)
      break
    }
    case 'ConditionalExpression': {
      A.push({ tag: 'BranchI', consequent: cmd.consequent, alternative: cmd.alternative }, cmd.pred)
      break
    }
    case 'Function': {
      S.push({
        tag: 'fn',
        matches: cmd.matches,
        // note: we create a shallow copy of this env since the env may be mutated, e.g:
        // in a local declaration, the parent of E will be mutated
        // We create only a shallow copy instead of a deep copy because if the function
        // is recursive and is not anonymous, the env will be updated later with
        // a binding from the function name to the function
        env: { ...E }
      })
      break
    }
    case 'Match': {
      assert(false, 'Match node should never appear at the top of the agenda')
      break
    }
    case 'Matches': {
      assert(false, 'Matches node should never appear in the agenda')
      break
    }
    case 'DeclarationSequence': {
      assert(false, 'DeclarationSequence node should never appear in the agenda')
      break
    }
    case 'ValueDeclaration': {
      revPush(A, cmd.valbinds)
      break
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
      revPush(A, [
        ...cmd.localDecs,
        {
          tag: 'DecsAfterLocalDecsI',
          decs: cmd.decs,
          envBeforeLocalDecs: E
        }
      ])
      break
    }
    case 'Valbind': {
      // https://www.cs.cornell.edu/courses/cs312/2004fa/lectures/rec21.html
      // Each declaration are in their own env frame
      if (cmd.isRec) {
        if (cmd.exp.tag !== 'Function') {
          throw new Error('using rec requires binding a function')
        }
        E = extendEnv(E)
        A.push({ tag: 'AssignI', pat: cmd.pat }, cmd.exp)
      } else {
        // Need to evaluate RHS in prev env
        const prevEnv = E
        E = extendEnv(E)
        A.push({ tag: 'AssignI', pat: cmd.pat }, { tag: 'RestoreEnvI', env: E }, cmd.exp, {
          tag: 'RestoreEnvI',
          env: prevEnv
        })
      }
      break
    }
    case 'Program': {
      revPush(A, cmd.body)
      break
    }

    /**
     * Instruction Tags
     */
    case 'PopI': {
      S.pop()
      break
    }
    case 'BranchI': {
      const predRes = S.pop()!
      assert(predRes.tag === 'bool')

      if (predRes.jsVal) {
        A.push(cmd.consequent)
      } else {
        A.push(cmd.alternative)
      }

      break
    }
    case 'BinOpI': {
      const snd = S.pop()
      const fst = S.pop()
      // We do not allow users to define custom infix / binary operators
      // So we directly look up builtinBinOperators instead of looking up
      // the env
      S.push(Sml.builtinBinOperators[cmd.id](fst, snd))
      break
    }
    case 'RestoreEnvI': {
      E = cmd.env
      break
    }
    case 'SetEnvParentI': {
      let tmp: Environment | undefined = E
      while (tmp && !isEqual(tmp.parent, cmd.oldParent)) {
        tmp = tmp.parent
      }
      assert(tmp !== undefined)
      tmp.parent = cmd.newParent
      break
    }
    case 'AssignI': {
      const rhs = S.pop()!

      // If pat is a constant, then we don't perform env assignment.
      // But we check if the pat and the RHS are valid
      // Examples of valid constant assignment: 1=1, true=true, ()=()
      // Examples of non-valid constant assignment: 1=2, true=false
      const [matched, updatedEnv] = tryMatch(E, rhs, cmd.pat)
      if (!matched) {
        throw new Error(`cannot assign ${cmd.pat} to ${rhs}`)
      }
      E = updatedEnv
      break
    }
    case 'DecsAfterLocalDecsI': {
      revPush(A, [
        ...cmd.decs,
        { tag: 'SetEnvParentI', oldParent: E, newParent: cmd.envBeforeLocalDecs }
      ])
      break
    }
    case 'ListI': {
      const arity = cmd.arity
      const lst = takeRight(S, arity)
      S = take(S, S.length - arity)
      S.push({ tag: 'list', jsVal: lst })
      break
    }
    case 'ApplicationI': {
      const arg = S.pop()!
      const fn = S.pop()!

      if (fn.tag === 'builtin_fn') {
        S.push(fn.apply(arg))
        break
      }

      assert(fn.tag === 'fn', `received ${fn.tag} instead`)

      if (A.length === 0 || peek(A)?.tag === 'RestoreEnvI') {
        // Implies no more agenda items that needs to be evaluated with the current env.
        // Just push mark, and not RestoreEnvI
        A.push({ tag: 'MarkEndOfFnBodyI' })
      } else if (peek(A)?.tag === 'MarkEndOfFnBodyI') {
        // The current 'ApplicationI' is a tail call since this
        // ApplicationI is the last thing that has to be evaluated before reaching
        // the end of the caller function body (the one that pushed the MarkEndOfFnbodyI)
        // We don't need to:
        // - push RestoreEnvI since we have nothing else to evaluate under the current env
        // - push MarkEndOfFnBodyI since it's already on the top of the agenda
        // i.e. we do nothing in this block
      } else {
        A.push({ tag: 'RestoreEnvI', env: E }, { tag: 'MarkEndOfFnBodyI' })
      }
      E = extendEnv(fn.env)

      // Bind params (if necessary) and evaluate function body
      let foundMatch = false
      for (const { pat, exp } of fn.matches) {
        const [matched, updatedEnv] = tryMatch(E, arg, pat)
        if (matched) {
          // match found - evaluate the associated exp and stop finding futher matches
          foundMatch = true
          E = updatedEnv
          A.push(exp)
          break
        }
      }

      if (!foundMatch) {
        throw new Error(`no match found for ${arg}`)
      }

      break
    }
    case 'MarkEndOfFnBodyI': {
      // do nothing
      break
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: The following line will throw a compile error if all the
      // case statements are implemented (i.e. this branch is never taken).
      throw new Error(`unknown microcode: ${cmd.tag}`)
    }
  }
}

export function evaluate(node: Node) {
  A = [node]
  S = []
  E = initEnv()
  stdout = []

  const stepLimit = 1000000
  let i = 0
  while (i < stepLimit) {
    if (A.length === 0) break
    const cmd = A.pop()!
    execMicrocode(cmd)
    i++
  }
  if (i === stepLimit) {
    throw new Error(`step limit ${stepLimit} exceeded`)
  }
}

export function evaluateExp(exp: Expression, outputWithType: boolean): Result {
  evaluate(exp)
  if (S.length !== 1) {
    throw new Error(`internal error: stash must be singleton but is: ${S}`)
  }

  let type = undefined
  if (outputWithType) {
    const [unsolvedType, typeConstraints] = hindleyMilner(createInitialTypeEnvironment(), exp)
    type = unifyAndSubstitute(unsolvedType, typeConstraints)
  }

  return {
    status: 'finished',
    stdout: stdout,
    value: S[0],
    type: type
  }
}

export function evaluateProg(prog: Program): Result {
  evaluate(prog)
  if (S.length !== 0) {
    throw new Error(`internal error: stash must be empty but is: ${S}`)
  }

  return {
    status: 'finished',
    stdout: stdout
  }
}
