/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { SmlLexer } from '../lang/SmlLexer'
import {
  CharacterContext,
  ConstantContext,
  ExpContext,
  FloatingPointContext,
  InfixApplicationContext,
  IntegerContext,
  SmlParser,
  StringContext
} from '../lang/SmlParser'
import { SmlVisitor } from '../lang/SmlVisitor'
import {
  CharConstant,
  Constant,
  Expression,
  FloatConstant,
  InfixApplication,
  IntConstant,
  Node,
  StringConstant
} from './ast'

class NodeGenerator implements SmlVisitor<Node> {
  visitInteger(ctx: IntegerContext): IntConstant {
    const isNeg = ctx.text.startsWith('~')
    const val = isNeg ? parseInt(ctx.text.slice(1)) * -1 : parseInt(ctx.text)
    return {
      type: 'IntConstant',
      val: val
    }
  }
  visitFloatingPoint(ctx: FloatingPointContext): FloatConstant {
    const isNeg = ctx.text.startsWith('~')
    const val = isNeg ? parseFloat(ctx.text.slice(1)) * -1 : parseFloat(ctx.text)
    return {
      type: 'FloatConstant',
      val: val
    }
  }
  visitCharacter(ctx: CharacterContext): CharConstant {
    return {
      type: 'CharConstant',
      // remove leading hash and double quote, and also trailing double quotes
      val: ctx.text.slice(2, ctx.text.length - 1)
    }
  }
  visitString(ctx: StringContext): StringConstant {
    return {
      type: 'StringConstant',
      // remove leading and trailing double quotes
      val: ctx.text.slice(1, ctx.text.length - 1)
    }
  }

  visitConstant(ctx: ConstantContext): Constant {
    return this.visit(ctx.con()) as Constant
  }
  visitInfixApplication(ctx: InfixApplicationContext): InfixApplication {
    return {
      type: 'InfixApplication',
      operand1: this.visit(ctx._op1) as Expression,
      operand2: this.visit(ctx._op2) as Expression,
      id: ctx._id.text!
    }
  }

  visit(tree: ParseTree): Node {
    return tree.accept(this)
  }
  visitChildren(_node: RuleNode): Node {
    throw new Error('Method not implemented.')
  }
  visitTerminal(_node: TerminalNode): Node {
    throw new Error('Method not implemented.')
  }
  visitErrorNode(_node: ErrorNode): Node {
    throw new Error('Method not implemented.')
  }
}

// TODO: replace exp with entire program
function convertSource(exp: ExpContext): Node {
  const generator = new NodeGenerator()
  return generator.visit(exp)
}

export function parse(source: string): Node {
  const inputStream = CharStreams.fromString(source)
  const lexer = new SmlLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new SmlParser(tokenStream)
  parser.buildParseTree = true

  // TODO: replace exp with prog once prog has been added to grammar
  const tree = parser.exp()
  return convertSource(tree)
}
