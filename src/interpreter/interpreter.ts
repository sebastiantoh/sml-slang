import { Node } from '../parser/ast'
import * as Sml from '../sml'
import { Instruction } from './instructions'

type Microcode = Node | Instruction
let A: Array<Microcode> = []
let S: Array<Sml.Value> = []
let E = undefined

// Returns a reverse of the input array without mutating the original
const reverse = (arr: Array<any>) => {
  const copy = arr.slice()
  copy.reverse()
  return copy
}

const exec_microcode = (cmd: Microcode) => {
  switch (cmd.tag) {
    /**
     * Node Tags
     */
    case 'IntConstant':
      S.push({
        type: 'int',
        js_val: cmd.val
      })
      break
    case 'FloatConstant':
      S.push({
        type: 'real',
        js_val: cmd.val
      })
      break
    case 'CharConstant':
      S.push({
        type: 'char',
        js_val: cmd.val
      })
      break
    case 'StringConstant':
      S.push({
        type: 'string',
        js_val: cmd.val
      })
      break
    case 'InfixApplication':
      A.push(
        {
          tag: 'BinOpI',
          id: cmd.id
        },
        cmd.operand2,
        cmd.operand1
      )
      break
    case 'LetExpression':
      const exps_with_pop = []
      for (const e of cmd.exps) {
        exps_with_pop.push(e)
        exps_with_pop.push({ tag: 'PopI' })
      }
      // remove last pop instruction as return value of a let exp is the last exp
      exps_with_pop.pop()

      // TODO: need to enter new scope
      A.concat(reverse(exps_with_pop))
      A.push(cmd.dec)
      break
    case 'Variable':
      // TODO: lookup env, push to stack
      break
    case 'ValueDeclaration':
      A.concat(reverse(cmd.valbinds))
      break
    case 'FunctionDeclaration':
      // TODO
      break
    case 'Valbind':
      // TODO: add to env
      break
    case 'Program':
      A.concat(reverse(cmd.body))
      break

    /**
     * Instruction Tags
     */
    case 'PopI':
      S.pop()
      break
    case 'BinOpI':
      const snd = S.pop()
      const fst = S.pop()
      // TODO: should first lookup context first, before looking up builtin operators
      // Or we can add builtin operators to context.
      S.push(Sml.builtinBinOperators[cmd.id](fst, snd))
      break

    default:
      // @ts-ignore
      // The following line will throw a compile error if all the case statements are
      // implemented (i.e. this branch is never taken).
      throw new Error(`unknown microcode: ${cmd.tag}`)
  }
}

export function evaluate(node: Node): Sml.Value {
  A = [node]
  S = []
  // TODO: init env
  E = undefined

  const step_limit = 1000000
  let i = 0
  while (i < step_limit) {
    if (A.length === 0) break
    const cmd = A.pop()!
    exec_microcode(cmd)
    i++
  }
  if (i === step_limit) {
    throw new Error(`step limit ${step_limit} exceeded`)
  }
  if (S.length != 1) {
    throw new Error(`internal error: stash must be singleton but is: ${S}`)
  }
  return S[0]
}
