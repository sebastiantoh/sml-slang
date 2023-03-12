/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream, ParserRuleContext } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { SmlLexer } from '../lang/SmlLexer'
import {
  ApplicationContext,
  BooleanContext,
  CharacterContext,
  ConditionalContext,
  ConjunctionContext,
  ConstantContext,
  DecContext,
  DecSequenceContext,
  DisjunctionContext,
  ExpContext,
  ExpVariableContext,
  FloatingPointContext,
  FunbindContext,
  FunctionContext,
  FunDeclContext,
  InfixApplicationContext,
  IntegerContext,
  LetExpressionContext,
  LocalDeclContext,
  MatchesContext,
  ParenthesesContext,
  PatConstantContext,
  PatmatchContext,
  PatUnitContext,
  PatVariableContext,
  ProgContext,
  SmlParser,
  StringContext,
  UnitContext,
  ValbindContext,
  ValueDeclContext
} from '../lang/SmlParser'
import { SmlVisitor } from '../lang/SmlVisitor'
import {
  Application,
  BinaryLogicalOperator,
  BoolConstant,
  CharConstant,
  ConditionalExpression,
  Constant,
  Declaration,
  DeclarationSequence,
  Expression,
  FloatConstant,
  Function,
  InfixApplication,
  IntConstant,
  LetExpression,
  LocalDeclaration,
  Match,
  Matches,
  Node,
  Pattern,
  Program,
  StringConstant,
  UnitConstant,
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
  visitBoolean(ctx: BooleanContext): BoolConstant {
    return {
      tag: 'BoolConstant',
      val: ctx.TRUE() !== undefined ? true : false
    }
  }
  visitUnit(_ctx: UnitContext): UnitConstant {
    return {
      tag: 'UnitConstant'
    }
  }

  /**
   * Expressions
   */
  visitConstant(ctx: ConstantContext): Constant {
    return this.visit(ctx.con()) as Constant
  }
  visitExpVariable(ctx: ExpVariableContext): Variable {
    return { tag: 'Variable', id: ctx._id.text! }
  }
  visitApplication(ctx: ApplicationContext): Application {
    return {
      tag: 'Application',
      fn: this.visit(ctx._fn) as Expression,
      arg: this.visit(ctx._arg) as Expression
    }
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
      decSequence: this.visit(ctx.decSequence()) as DeclarationSequence,
      exps: ctx.exp().map((ec: ExpContext) => this.visit(ec) as Expression)
    }
  }
  visitConjunction(ctx: ConjunctionContext): BinaryLogicalOperator {
    return {
      tag: 'BinaryLogicalOperator',
      operand1: this.visit(ctx._op1) as Expression,
      operand2: this.visit(ctx._op2) as Expression,
      id: ctx.ANDALSO().text as 'andalso'
    }
  }
  visitDisjunction(ctx: DisjunctionContext): BinaryLogicalOperator {
    return {
      tag: 'BinaryLogicalOperator',
      operand1: this.visit(ctx._op1) as Expression,
      operand2: this.visit(ctx._op2) as Expression,
      id: ctx.ORELSE().text as 'orelse'
    }
  }
  visitConditional(ctx: ConditionalContext): ConditionalExpression {
    return {
      tag: 'ConditionalExpression',
      pred: this.visit(ctx._pred) as Expression,
      consequent: this.visit(ctx._cons) as Expression,
      alternative: this.visit(ctx._alt) as Expression
    }
  }
  visitFunction(ctx: FunctionContext): Function {
    return {
      tag: 'Function',
      matches: this.visit(ctx.matches()) as Matches
    }
  }

  /**
   * Match
   */
  visitPatmatch(ctx: PatmatchContext): Match {
    return {
      tag: 'Match',
      pat: this.visit(ctx.pat()) as Pattern,
      exp: this.visit(ctx.exp()) as Expression
    }
  }
  visitMatches(ctx: MatchesContext): Matches {
    return {
      tag: 'Matches',
      matches: ctx.patmatch().map((m: PatmatchContext) => this.visit(m) as Match)
    }
  }

  /**
   * Patterns
   */
  visitPatConstant(ctx: PatConstantContext): Constant {
    return this.visit(ctx.con()) as Constant
  }
  visitPatUnit(_ctx: PatUnitContext): UnitConstant {
    return {
      tag: 'UnitConstant'
    }
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
  visitFunDecl(ctx: FunDeclContext): ValueDeclaration {
    // function declarations are syntatic sugar for value declarations:
    // (see Page 90 of https://smlfamily.github.io/sml90-defn.pdf, Figure 17)
    return {
      tag: 'ValueDeclaration',
      valbinds: ctx.funbind().map((fb: FunbindContext) => this.visit(fb) as Valbind)
    }
  }
  visitLocalDecl(ctx: LocalDeclContext): LocalDeclaration {
    return {
      tag: 'LocalDeclaration',
      localDecs: this.visit(ctx._localDecs) as DeclarationSequence,
      decs: this.visit(ctx._decs) as DeclarationSequence
    }
  }
  visitDecSequence(ctx: DecSequenceContext): DeclarationSequence {
    return {
      tag: 'DeclarationSequence',
      decs: ctx.dec().map((d: DecContext) => this.visit(d) as Declaration)
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
   * Funbind
   */
  visitFunbind(ctx: FunbindContext): Valbind {
    // Desugar funbind into valbind
    // (see Page 90 of https://smlfamily.github.io/sml90-defn.pdf, Figure 17)

    const funMatches = ctx.funmatches().funmatch()
    const fnName = funMatches[0].ID().text
    const nParams = funMatches[0].pat().length
    const matches: Array<Match> = []

    // TODO: delete this specific case once multiple cases have been supported
    if (funMatches.length === 1) {
      const funMatch = funMatches[0]
      const params = funMatch.pat().map(p => this.visit(p) as Pattern)
      let exp = this.visit(funMatch.exp()) as Expression

      // Exclude first param, iterate in reverse, and reconstruct the full curried function
      params
        .slice(1)
        .reverse()
        .forEach(p => {
          const fn = {
            tag: 'Function',
            matches: { tag: 'Matches', matches: [{ tag: 'Match', pat: p, exp }] }
          } as Function
          exp = fn
        })

      const match = {
        tag: 'Match',
        pat: params[0],
        exp: exp
      } as Match
      matches.push(match)
    } else {
      // Each funmatch correspond to a separate case. Each case can contain >= 1 parameter (or patterns)
      for (const funMatch of funMatches) {
        const id = funMatch.ID().text
        const tmpNumParams = funMatch.pat().length

        // across each case, the function name and number of parameters
        // must be the same
        if (funMatch.ID().text !== fnName) {
          /*
          Example where function names are different:
          fun f 1 = 2
            | x 2 = 3
          */
          throw new Error(`Different function names in different cases ("${fnName}" vs. "${id}")`)
        } else if (tmpNumParams !== nParams) {
          /*
          Example where number of params are different:
          fun f 1 = 2
            | f = 3
          */
          throw new Error(`Different number of params in different cases`)
        }

        throw new Error(
          "TODO: multiple cases for functions not yet implemented. Implement this once 'case (...) of ...' has been implemeneted"
        )
      }
    }

    return {
      tag: 'Valbind',
      is_rec: true,
      pat: { tag: 'Variable', id: fnName },
      exp: { tag: 'Function', matches: { tag: 'Matches', matches } }
    }
  }

  /**
   * Program
   */
  visitProg(ctx: ProgContext): Program {
    return {
      tag: 'Program',
      body: this.visit(ctx.decSequence()) as DeclarationSequence
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
