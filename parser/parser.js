"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseExp = exports.parseProg = void 0;
/* tslint:disable:max-classes-per-file */
const antlr4ts_1 = require("antlr4ts");
const SmlLexer_1 = require("../lang/SmlLexer");
const SmlParser_1 = require("../lang/SmlParser");
// TODO: move to parser/utils.ts?
function contextToLocation(ctx) {
    return {
        start: {
            line: ctx.start.line,
            column: ctx.start.charPositionInLine
        },
        end: {
            line: ctx.stop ? ctx.stop.line : ctx.start.line,
            column: ctx.stop ? ctx.stop.charPositionInLine : ctx.start.charPositionInLine
        }
    };
}
class NodeGenerator {
    /**
     * Constants
     */
    visitInteger(ctx) {
        const isNeg = ctx.text.startsWith('~');
        const val = isNeg ? parseInt(ctx.text.slice(1)) * -1 : parseInt(ctx.text);
        return {
            tag: 'IntConstant',
            val: val,
            type: 'int'
        };
    }
    visitReal(ctx) {
        const isNeg = ctx.text.startsWith('~');
        const val = isNeg ? parseFloat(ctx.text.slice(1)) * -1 : parseFloat(ctx.text);
        return {
            tag: 'RealConstant',
            val: val,
            type: 'real'
        };
    }
    visitCharacter(ctx) {
        return {
            tag: 'CharConstant',
            // remove leading hash and double quote, and also trailing double quotes
            val: ctx.text.slice(2, ctx.text.length - 1),
            type: 'char'
        };
    }
    visitString(ctx) {
        return {
            tag: 'StringConstant',
            // remove leading and trailing double quotes
            val: ctx.text.slice(1, ctx.text.length - 1),
            type: 'string'
        };
    }
    visitBoolean(ctx) {
        return {
            tag: 'BoolConstant',
            val: ctx.TRUE() !== undefined ? true : false,
            type: 'bool'
        };
    }
    visitUnit(_ctx) {
        return {
            tag: 'UnitConstant',
            type: 'unit'
        };
    }
    /**
     * Expressions
     */
    visitConstant(ctx) {
        return this.visit(ctx.con());
    }
    visitExpVariable(ctx) {
        return {
            tag: 'Variable',
            id: ctx._id.text,
            loc: contextToLocation(ctx)
        };
    }
    visitApplication(ctx) {
        return {
            tag: 'Application',
            fn: this.visit(ctx._fn),
            arg: this.visit(ctx._arg),
            loc: contextToLocation(ctx)
        };
    }
    visitInfixApplication(ctx) {
        return {
            tag: 'InfixApplication',
            operand1: this.visit(ctx._op1),
            operand2: this.visit(ctx._op2),
            id: ctx._id.text,
            loc: contextToLocation(ctx)
        };
    }
    visitList(ctx) {
        const elements = ctx.exp();
        return {
            tag: 'ListLiteral',
            elements: elements.map(e => this.visit(e)),
            arity: elements.length
        };
    }
    visitExpSequence(ctx) {
        return {
            tag: 'ExpSequence',
            exps: ctx.exp().map((ec) => this.visit(ec))
        };
    }
    visitParentheses(ctx) {
        return this.visit(ctx.exp());
    }
    visitLetExpression(ctx) {
        return {
            tag: 'LetExpression',
            decSequence: this.visit(ctx.decSequence()),
            exps: ctx.exp().map((ec) => this.visit(ec)),
            loc: contextToLocation(ctx)
        };
    }
    visitConjunction(ctx) {
        // Rewrite derived form into equivalent form
        // See Figure 15 of https://smlfamily.github.io/sml90-defn.pdf (page 89)
        return {
            tag: 'ConditionalExpression',
            pred: this.visit(ctx._op1),
            consequent: this.visit(ctx._op2),
            alternative: {
                tag: 'BoolConstant',
                val: false,
                type: 'bool'
            },
            loc: contextToLocation(ctx)
        };
    }
    visitDisjunction(ctx) {
        // Rewrite derived form into equivalent form
        // See Figure 15 of https://smlfamily.github.io/sml90-defn.pdf (page 89)
        return {
            tag: 'ConditionalExpression',
            pred: this.visit(ctx._op1),
            consequent: {
                tag: 'BoolConstant',
                val: true,
                type: 'bool'
            },
            alternative: this.visit(ctx._op2),
            loc: contextToLocation(ctx)
        };
    }
    visitConditional(ctx) {
        return {
            tag: 'ConditionalExpression',
            pred: this.visit(ctx._pred),
            consequent: this.visit(ctx._cons),
            alternative: this.visit(ctx._alt),
            loc: contextToLocation(ctx)
        };
    }
    visitCaseAnalysis(ctx) {
        // Desugar into function application
        // (See page 89 of https://smlfamily.github.io/sml90-defn.pdf, Figure 15)
        return {
            tag: 'Application',
            fn: {
                tag: 'Function',
                matches: this.visit(ctx.matches()),
                loc: contextToLocation(ctx)
            },
            arg: this.visit(ctx.exp()),
            loc: contextToLocation(ctx)
        };
    }
    visitFunction(ctx) {
        return {
            tag: 'Function',
            matches: this.visit(ctx.matches()),
            loc: contextToLocation(ctx)
        };
    }
    /**
     * Match
     */
    visitPatmatch(ctx) {
        return {
            tag: 'Match',
            pat: this.visit(ctx.pat()),
            exp: this.visit(ctx.exp()),
            loc: contextToLocation(ctx)
        };
    }
    visitMatches(ctx) {
        return {
            tag: 'Matches',
            matches: ctx.patmatch().map((m) => this.visit(m)),
            loc: contextToLocation(ctx)
        };
    }
    /**
     * Patterns
     */
    visitPatConstant(ctx) {
        return this.visit(ctx.con());
    }
    visitPatWildcard(_ctx) {
        return {
            tag: 'Wildcard'
        };
    }
    visitPatUnit(_ctx) {
        return {
            tag: 'UnitConstant',
            type: 'unit'
        };
    }
    visitPatVariable(ctx) {
        return {
            tag: 'Variable',
            id: ctx._id.text,
            loc: contextToLocation(ctx)
        };
    }
    visitPatInfixConstruction(ctx) {
        return {
            tag: 'InfixConstruction',
            pat1: this.visit(ctx._pat1),
            pat2: this.visit(ctx._pat2),
            id: ctx.CONS().text,
            loc: contextToLocation(ctx)
        };
    }
    visitPatParentheses(ctx) {
        return this.visit(ctx.pat());
    }
    /**
     * Types
     */
    visitTypeVariable(ctx) {
        return {
            tag: 'TypeVariable',
            id: ctx.VAR().text
        };
    }
    visitTypeConstructor(ctx) {
        return {
            tag: 'TypeConstructor',
            typeParameters: ctx.VAR().map(varNode => {
                return {
                    tag: 'TypeVariable',
                    id: varNode.text
                };
            }),
            id: ctx.ID().text
        };
    }
    visitTypeFunction(ctx) {
        return {
            tag: 'TypeFunction',
            argTy: this.visit(ctx._argTy),
            retTy: this.visit(ctx._retTy)
        };
    }
    /**
     * Declarations
     */
    visitValueDecl(ctx) {
        return {
            tag: 'ValueDeclaration',
            valbinds: ctx.valbind().map((vb) => this.visit(vb)),
            loc: contextToLocation(ctx)
        };
    }
    visitFunDecl(ctx) {
        // function declarations are syntatic sugar for value declarations:
        // (see Page 90 of https://smlfamily.github.io/sml90-defn.pdf, Figure 17)
        // TODO: this desugaring doesn't work for mutually recursive function :'(
        // For more info: https://stackoverflow.com/questions/63428214/declaring-interdependent-values-and-functions-in-standard-ml
        return {
            tag: 'ValueDeclaration',
            valbinds: ctx.funbind().map((fb) => this.visit(fb)),
            loc: contextToLocation(ctx)
        };
    }
    visitLocalDecl(ctx) {
        return {
            tag: 'LocalDeclaration',
            localDecs: this.visit(ctx._localDecs),
            decs: this.visit(ctx._decs),
            loc: contextToLocation(ctx)
        };
    }
    visitDecSequence(ctx) {
        return {
            tag: 'DeclarationSequence',
            decs: ctx.dec().map((d) => this.visit(d)),
            loc: contextToLocation(ctx)
        };
    }
    /**
     * Valbind
     */
    visitValbind(ctx) {
        return {
            tag: 'Valbind',
            isRec: ctx.REC() !== undefined,
            pat: this.visit(ctx.pat()),
            exp: this.visit(ctx.exp()),
            loc: contextToLocation(ctx)
        };
    }
    /**
     * Funbind
     */
    visitFunbind(ctx) {
        // Desugar funbind into valbind
        // (see Page 90 of https://smlfamily.github.io/sml90-defn.pdf, Figure 17)
        const funMatches = ctx.funmatches().funmatch();
        const fnName = funMatches[0].ID().text;
        const nParams = funMatches[0].pat().length;
        const matches = [];
        // TODO: delete this specific case once multiple cases have been supported
        if (funMatches.length === 1) {
            const funMatch = funMatches[0];
            const params = funMatch.pat().map(p => this.visit(p));
            let exp = this.visit(funMatch.exp());
            // Exclude first param, iterate in reverse, and reconstruct the full curried function
            params
                .slice(1)
                .reverse()
                .forEach(p => {
                const fn = {
                    // TODO: do we want to keep track of the locations of each of these functions?
                    tag: 'Function',
                    matches: { tag: 'Matches', matches: [{ tag: 'Match', pat: p, exp }] }
                };
                exp = fn;
            });
            const match = {
                tag: 'Match',
                pat: params[0],
                exp: exp
            };
            matches.push(match);
        }
        else {
            // Each funmatch correspond to a separate case. Each case can contain >= 1 parameter (or patterns)
            for (const funMatch of funMatches) {
                const id = funMatch.ID().text;
                const tmpNumParams = funMatch.pat().length;
                // across each case, the function name and number of parameters
                // must be the same
                if (funMatch.ID().text !== fnName) {
                    /*
                    Example where function names are different:
                    fun f 1 = 2
                      | x 2 = 3
                    */
                    throw new Error(`Different function names in different cases ("${fnName}" vs. "${id}")`);
                }
                else if (tmpNumParams !== nParams) {
                    /*
                    Example where number of params are different:
                    fun f 1 = 2
                      | f = 3
                    */
                    throw new Error(`Different number of params in different cases`);
                }
                throw new Error("TODO: multiple cases for functions not yet implemented. Implement this once 'case (...) of ...' has been implemeneted");
            }
        }
        return {
            tag: 'Valbind',
            isRec: true,
            pat: { tag: 'Variable', id: fnName },
            exp: { tag: 'Function', matches: { tag: 'Matches', matches } },
            loc: contextToLocation(ctx)
        };
    }
    /**
     * Program
     */
    visitProg(ctx) {
        return {
            tag: 'Program',
            body: this.visit(ctx.decSequence())
        };
    }
    visit(tree) {
        return tree.accept(this);
    }
    visitChildren(_node) {
        throw new Error('Method not implemented.');
    }
    visitTerminal(_node) {
        throw new Error('Method not implemented.');
    }
    visitErrorNode(_node) {
        throw new Error('Method not implemented.');
    }
}
function parse(source, f) {
    const inputStream = antlr4ts_1.CharStreams.fromString(source);
    const lexer = new SmlLexer_1.SmlLexer(inputStream);
    const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new SmlParser_1.SmlParser(tokenStream);
    parser.buildParseTree = true;
    const tree = f(parser);
    const generator = new NodeGenerator();
    return generator.visit(tree);
}
function parseProg(source) {
    return parse(source, (parser) => parser.prog());
}
exports.parseProg = parseProg;
function parseExp(source) {
    return parse(source, (parser) => parser.exp());
}
exports.parseExp = parseExp;
//# sourceMappingURL=parser.js.map