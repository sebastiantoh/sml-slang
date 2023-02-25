/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream, ParserRuleContext } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { SmlLexer } from '../lang/SmlLexer'
import {
  CharacterContext,
  ConstantContext,
  DecContext,
  ExpContext,
  FloatingPointContext,
  InfixApplicationContext,
  IntegerContext,
  LetExpressionContext,
  ParenthesesContext,
  PatConstantContext,
  PatVariableContext,
  ProgContext,
  SmlParser,
  StringContext,
  ValbindContext,
  ValueDeclContext
} from '../lang/SmlParser'
import { SmlVisitor } from '../lang/SmlVisitor'
import {
  CharConstant,
  Constant,
  Declaration,
  Expression,
  FloatConstant,
  InfixApplication,
  IntConstant,
  LetExpression,
  Node,
  Pattern,
  Program,
  StringConstant,
  Valbind,
  ValueDeclaration,
  Variable
} from './ast'

class NodeGenerator implements SmlVisitor<Node> {
  /**
   * Constants
   */
  visitInteger(ctx: IntegerContext): IntConstant {
    const isNeg = ctx.text.startsWith('~')
    const val = isNeg ? parseInt(ctx.text.slice(1)) * -1 : parseInt(ctx.text)
    return {
      tag: 'IntConstant',
      val: val
    }
  }
  visitFloatingPoint(ctx: FloatingPointContext): FloatConstant {
    const isNeg = ctx.text.startsWith('~')
    const val = isNeg ? parseFloat(ctx.text.slice(1)) * -1 : parseFloat(ctx.text)
    return {
      tag: 'FloatConstant',
      val: val
    }
  }
  visitCharacter(ctx: CharacterContext): CharConstant {
    return {
      tag: 'CharConstant',
      // remove leading hash and double quote, and also trailing double quotes
      val: ctx.text.slice(2, ctx.text.length - 1)
    }
  }
  visitString(ctx: StringContext): StringConstant {
    return {
      tag: 'StringConstant',
      // remove leading and trailing double quotes
      val: ctx.text.slice(1, ctx.text.length - 1)
    }
  }

  /**
   * Expressions
   */
  visitConstant(ctx: ConstantContext): Constant {
    return this.visit(ctx.con()) as Constant
  }
  visitInfixApplication(ctx: InfixApplicationContext): InfixApplication {
    return {
      tag: 'InfixApplication',
      operand1: this.visit(ctx._op1) as Expression,
      operand2: this.visit(ctx._op2) as Expression,
      id: ctx._id.text!
    }
  }
  visitParentheses(ctx: ParenthesesContext): Expression {
    return this.visit(ctx.exp()) as Expression
  }
  visitLetExpression(ctx: LetExpressionContext): LetExpression {
    return {
      tag: 'LetExpression',
      dec: this.visit(ctx.dec()) as Declaration,
      exps: ctx.exp().map((ec: ExpContext) => this.visit(ec) as Expression)
    }
  }

  /**
   * Patterns
   */
  visitPatConstant(ctx: PatConstantContext): Constant {
    return this.visit(ctx.con()) as Constant
  }
  visitPatVariable(ctx: PatVariableContext): Variable {
    return {
      tag: 'Variable',
      id: ctx._id.text!
    }
  }

  /**
   * Declarations
   */
  visitValueDecl(ctx: ValueDeclContext): ValueDeclaration {
    return {
      tag: 'ValueDeclaration',
      valbinds: ctx.valbind().map((vb: ValbindContext) => this.visit(vb) as Valbind)
    }
  }

  /**
   * Valbind
   */
  visitValbind(ctx: ValbindContext): Valbind {
    return {
      tag: 'Valbind',
      is_rec: ctx.REC() !== undefined,
      pat: this.visit(ctx.pat()) as Pattern,
      exp: this.visit(ctx.exp()) as Expression
    }
  }

  /**
   * Program
   */
  visitProg(ctx: ProgContext): Program {
    return {
      tag: 'Program',
      body: ctx.dec().map((d: DecContext) => this.visit(d) as Declaration)
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

function parse(source: string, f: (parser: SmlParser) => ParserRuleContext): Node {
  const inputStream = CharStreams.fromString(source)
  const lexer = new SmlLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new SmlParser(tokenStream)
  parser.buildParseTree = true

  const tree = f(parser)
  const generator = new NodeGenerator()
  return generator.visit(tree)
}

export function parseProg(source: string): Node {
  return parse(source, (parser: SmlParser) => parser.prog())
}

export function parseExp(source: string): Node {
  return parse(source, (parser: SmlParser) => parser.exp())
}
