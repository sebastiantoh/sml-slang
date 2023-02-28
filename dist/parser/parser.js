"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseExp = exports.parseProg = void 0;
/* tslint:disable:max-classes-per-file */
const antlr4ts_1 = require("antlr4ts");
const SmlLexer_1 = require("../lang/SmlLexer");
const SmlParser_1 = require("../lang/SmlParser");
class NodeGenerator {
    /**
     * Constants
     */
    visitInteger(ctx) {
        const isNeg = ctx.text.startsWith('~');
        const val = isNeg ? parseInt(ctx.text.slice(1)) * -1 : parseInt(ctx.text);
        return {
            tag: 'IntConstant',
            val: val
        };
    }
    visitFloatingPoint(ctx) {
        const isNeg = ctx.text.startsWith('~');
        const val = isNeg ? parseFloat(ctx.text.slice(1)) * -1 : parseFloat(ctx.text);
        return {
            tag: 'FloatConstant',
            val: val
        };
    }
    visitCharacter(ctx) {
        return {
            tag: 'CharConstant',
            // remove leading hash and double quote, and also trailing double quotes
            val: ctx.text.slice(2, ctx.text.length - 1)
        };
    }
    visitString(ctx) {
        return {
            tag: 'StringConstant',
            // remove leading and trailing double quotes
            val: ctx.text.slice(1, ctx.text.length - 1)
        };
    }
    /**
     * Expressions
     */
    visitConstant(ctx) {
        return this.visit(ctx.con());
    }
    visitExpVariable(ctx) {
        return { tag: 'Variable', id: ctx._id.text };
    }
    visitInfixApplication(ctx) {
        return {
            tag: 'InfixApplication',
            operand1: this.visit(ctx._op1),
            operand2: this.visit(ctx._op2),
            id: ctx._id.text
        };
    }
    visitParentheses(ctx) {
        return this.visit(ctx.exp());
    }
    visitLetExpression(ctx) {
        return {
            tag: 'LetExpression',
            decSequence: this.visit(ctx.decSequence()),
            exps: ctx.exp().map((ec) => this.visit(ec))
        };
    }
    visitConditional(ctx) {
        return {
            tag: 'ConditionalExpression',
            pred: this.visit(ctx._pred),
            consequent: this.visit(ctx._cons),
            alternative: this.visit(ctx._alt)
        };
    }
    /**
     * Patterns
     */
    visitPatConstant(ctx) {
        return this.visit(ctx.con());
    }
    visitPatVariable(ctx) {
        return {
            tag: 'Variable',
            id: ctx._id.text
        };
    }
    /**
     * Declarations
     */
    visitValueDecl(ctx) {
        return {
            tag: 'ValueDeclaration',
            valbinds: ctx.valbind().map((vb) => this.visit(vb))
        };
    }
    visitDecSequence(ctx) {
        return {
            tag: 'DeclarationSequence',
            decs: ctx.dec().map((d) => this.visit(d))
        };
    }
    /**
     * Valbind
     */
    visitValbind(ctx) {
        return {
            tag: 'Valbind',
            is_rec: ctx.REC() !== undefined,
            pat: this.visit(ctx.pat()),
            exp: this.visit(ctx.exp())
        };
    }
    /**
     * Program
     */
    visitProg(ctx) {
        return {
            tag: 'Program',
            body: ctx.dec().map((d) => this.visit(d))
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