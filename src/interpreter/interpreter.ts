import { Constant, InfixApplication, Node } from '../parser/ast'
import { Context } from '../types'

// TODO: replace any with some Value class or something
type Evaluator = (node: Node, context: Context) => any

// TODO: handle precedence of diff infix operators
// Full list of builtins along with precedence can be found on
// Page 98 of https://smlfamily.github.io/sml90-defn.pdf
const builtin_infix_operators = {
  // TODO: handle div by 0?
  '/': (a: any, b: any) => a / b,
  // TODO: handle div by 0?
  div: (a: any, b: any) => Math.floor(a / b),
  mod: (a: any, b: any) => ((a % b) + b) % b,
  '*': (a: any, b: any) => a * b,
  '+': (a: any, b: any) => a + b,
  '-': (a: any, b: any) => a - b
}

const evaluators: { [nodeType: string]: Evaluator } = {
  Constant: function* (node: Constant, _context: Context) {
    return node.val
  },
  InfixApplication: function* (node: InfixApplication, context: Context) {
    // TODO: should first lookup context first, before looking up builtin operators
    // Or we can add builtin operators to context.
    const operator = builtin_infix_operators[node.id]
    const op1 = yield* evaluate(node.operand1, context)
    const op2 = yield* evaluate(node.operand2, context)
    return operator(op1, op2)
  }
}

export function* evaluate(node: Node, context: Context) {
  const result = yield* evaluators[node.type](node, context)
  return result
}
