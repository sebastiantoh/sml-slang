import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { SmlListener } from "./SmlListener";
import { SmlVisitor } from "./SmlVisitor";
export declare class SmlParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly T__4 = 5;
    static readonly T__5 = 6;
    static readonly T__6 = 7;
    static readonly WHITESPACE = 8;
    static readonly INT = 9;
    static readonly FLOAT = 10;
    static readonly CHAR = 11;
    static readonly STRING = 12;
    static readonly LPAREN = 13;
    static readonly RPAREN = 14;
    static readonly REC = 15;
    static readonly AND = 16;
    static readonly SEMICOLON = 17;
    static readonly SLASH = 18;
    static readonly DIV = 19;
    static readonly MOD = 20;
    static readonly STAR = 21;
    static readonly PLUS = 22;
    static readonly MINUS = 23;
    static readonly CARET = 24;
    static readonly CONS = 25;
    static readonly AT = 26;
    static readonly EQ = 27;
    static readonly NEQ = 28;
    static readonly LT = 29;
    static readonly GT = 30;
    static readonly LTE = 31;
    static readonly GTE = 32;
    static readonly ID = 33;
    static readonly RULE_con = 0;
    static readonly RULE_exp = 1;
    static readonly RULE_pat = 2;
    static readonly RULE_dec = 3;
    static readonly RULE_decSequence = 4;
    static readonly RULE_valbind = 5;
    static readonly RULE_prog = 6;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    con(): ConContext;
    exp(): ExpContext;
    exp(_p: number): ExpContext;
    pat(): PatContext;
    dec(): DecContext;
    decSequence(): DecSequenceContext;
    valbind(): ValbindContext;
    prog(): ProgContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private exp_sempred;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class ConContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ConContext): void;
}
export declare class IntegerContext extends ConContext {
    INT(): TerminalNode;
    constructor(ctx: ConContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class FloatingPointContext extends ConContext {
    FLOAT(): TerminalNode;
    constructor(ctx: ConContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class CharacterContext extends ConContext {
    CHAR(): TerminalNode;
    constructor(ctx: ConContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class StringContext extends ConContext {
    STRING(): TerminalNode;
    constructor(ctx: ConContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class ExpContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpContext): void;
}
export declare class ConstantContext extends ExpContext {
    con(): ConContext;
    constructor(ctx: ExpContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class ExpVariableContext extends ExpContext {
    _id: Token;
    ID(): TerminalNode;
    constructor(ctx: ExpContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class InfixApplicationContext extends ExpContext {
    _op1: ExpContext;
    _id: Token;
    _op2: ExpContext;
    exp(): ExpContext[];
    exp(i: number): ExpContext;
    SLASH(): TerminalNode | undefined;
    DIV(): TerminalNode | undefined;
    MOD(): TerminalNode | undefined;
    STAR(): TerminalNode | undefined;
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    CARET(): TerminalNode | undefined;
    CONS(): TerminalNode | undefined;
    AT(): TerminalNode | undefined;
    EQ(): TerminalNode | undefined;
    NEQ(): TerminalNode | undefined;
    LT(): TerminalNode | undefined;
    GT(): TerminalNode | undefined;
    LTE(): TerminalNode | undefined;
    GTE(): TerminalNode | undefined;
    ID(): TerminalNode | undefined;
    constructor(ctx: ExpContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class ParenthesesContext extends ExpContext {
    LPAREN(): TerminalNode;
    exp(): ExpContext;
    RPAREN(): TerminalNode;
    constructor(ctx: ExpContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class LetExpressionContext extends ExpContext {
    decSequence(): DecSequenceContext;
    exp(): ExpContext[];
    exp(i: number): ExpContext;
    SEMICOLON(): TerminalNode[];
    SEMICOLON(i: number): TerminalNode;
    constructor(ctx: ExpContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class ConditionalContext extends ExpContext {
    _pred: ExpContext;
    _cons: ExpContext;
    _alt: ExpContext;
    exp(): ExpContext[];
    exp(i: number): ExpContext;
    constructor(ctx: ExpContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class PatContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PatContext): void;
}
export declare class PatConstantContext extends PatContext {
    con(): ConContext;
    constructor(ctx: PatContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class PatVariableContext extends PatContext {
    _id: Token;
    ID(): TerminalNode;
    constructor(ctx: PatContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class DecContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: DecContext): void;
}
export declare class ValueDeclContext extends DecContext {
    valbind(): ValbindContext[];
    valbind(i: number): ValbindContext;
    AND(): TerminalNode[];
    AND(i: number): TerminalNode;
    constructor(ctx: DecContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class DecSequenceContext extends ParserRuleContext {
    dec(): DecContext[];
    dec(i: number): DecContext;
    SEMICOLON(): TerminalNode[];
    SEMICOLON(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class ValbindContext extends ParserRuleContext {
    pat(): PatContext;
    EQ(): TerminalNode;
    exp(): ExpContext;
    REC(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class ProgContext extends ParserRuleContext {
    dec(): DecContext[];
    dec(i: number): DecContext;
    SEMICOLON(): TerminalNode[];
    SEMICOLON(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
