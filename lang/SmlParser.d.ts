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
    static readonly T__7 = 8;
    static readonly T__8 = 9;
    static readonly T__9 = 10;
    static readonly T__10 = 11;
    static readonly T__11 = 12;
    static readonly WHITESPACE = 13;
    static readonly COMMENT = 14;
    static readonly INT = 15;
    static readonly REAL = 16;
    static readonly CHAR = 17;
    static readonly STRING = 18;
    static readonly TRUE = 19;
    static readonly FALSE = 20;
    static readonly LPAREN = 21;
    static readonly RPAREN = 22;
    static readonly LSQUARE = 23;
    static readonly RSQUARE = 24;
    static readonly REC = 25;
    static readonly AND = 26;
    static readonly SEMICOLON = 27;
    static readonly COMMA = 28;
    static readonly UNIT = 29;
    static readonly SLASH = 30;
    static readonly DIV = 31;
    static readonly MOD = 32;
    static readonly STAR = 33;
    static readonly PLUS = 34;
    static readonly MINUS = 35;
    static readonly CARET = 36;
    static readonly CONS = 37;
    static readonly AT = 38;
    static readonly EQ = 39;
    static readonly NEQ = 40;
    static readonly LT = 41;
    static readonly GT = 42;
    static readonly LTE = 43;
    static readonly GTE = 44;
    static readonly ANDALSO = 45;
    static readonly ORELSE = 46;
    static readonly ID = 47;
    static readonly RULE_con = 0;
    static readonly RULE_exp = 1;
    static readonly RULE_patmatch = 2;
    static readonly RULE_matches = 3;
    static readonly RULE_pat = 4;
    static readonly RULE_dec = 5;
    static readonly RULE_decSequence = 6;
    static readonly RULE_valbind = 7;
    static readonly RULE_funbind = 8;
    static readonly RULE_funmatches = 9;
    static readonly RULE_funmatch = 10;
    static readonly RULE_prog = 11;
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
    patmatch(): PatmatchContext;
    matches(): MatchesContext;
    pat(): PatContext;
    dec(): DecContext;
    decSequence(): DecSequenceContext;
    valbind(): ValbindContext;
    funbind(): FunbindContext;
    funmatches(): FunmatchesContext;
    funmatch(): FunmatchContext;
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
export declare class RealContext extends ConContext {
    REAL(): TerminalNode;
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
export declare class BooleanContext extends ConContext {
    TRUE(): TerminalNode | undefined;
    FALSE(): TerminalNode | undefined;
    constructor(ctx: ConContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class UnitContext extends ConContext {
    UNIT(): TerminalNode;
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
export declare class ApplicationContext extends ExpContext {
    _fn: ExpContext;
    _arg: ExpContext;
    exp(): ExpContext[];
    exp(i: number): ExpContext;
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
export declare class ExpSequenceContext extends ExpContext {
    LPAREN(): TerminalNode;
    exp(): ExpContext[];
    exp(i: number): ExpContext;
    RPAREN(): TerminalNode;
    SEMICOLON(): TerminalNode[];
    SEMICOLON(i: number): TerminalNode;
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
export declare class ConjunctionContext extends ExpContext {
    _op1: ExpContext;
    _op2: ExpContext;
    ANDALSO(): TerminalNode;
    exp(): ExpContext[];
    exp(i: number): ExpContext;
    constructor(ctx: ExpContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class DisjunctionContext extends ExpContext {
    _op1: ExpContext;
    _op2: ExpContext;
    ORELSE(): TerminalNode;
    exp(): ExpContext[];
    exp(i: number): ExpContext;
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
export declare class FunctionContext extends ExpContext {
    matches(): MatchesContext;
    constructor(ctx: ExpContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class ListContext extends ExpContext {
    LSQUARE(): TerminalNode;
    RSQUARE(): TerminalNode;
    exp(): ExpContext[];
    exp(i: number): ExpContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: ExpContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class PatmatchContext extends ParserRuleContext {
    pat(): PatContext;
    exp(): ExpContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class MatchesContext extends ParserRuleContext {
    patmatch(): PatmatchContext[];
    patmatch(i: number): PatmatchContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
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
export declare class PatUnitContext extends PatContext {
    UNIT(): TerminalNode;
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
export declare class FunDeclContext extends DecContext {
    funbind(): FunbindContext[];
    funbind(i: number): FunbindContext;
    AND(): TerminalNode[];
    AND(i: number): TerminalNode;
    constructor(ctx: DecContext);
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class LocalDeclContext extends DecContext {
    _localDecs: DecSequenceContext;
    _decs: DecSequenceContext;
    decSequence(): DecSequenceContext[];
    decSequence(i: number): DecSequenceContext;
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
export declare class FunbindContext extends ParserRuleContext {
    funmatches(): FunmatchesContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class FunmatchesContext extends ParserRuleContext {
    funmatch(): FunmatchContext[];
    funmatch(i: number): FunmatchContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class FunmatchContext extends ParserRuleContext {
    _id: Token;
    pat(): PatContext[];
    pat(i: number): PatContext;
    EQ(): TerminalNode;
    exp(): ExpContext;
    ID(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
export declare class ProgContext extends ParserRuleContext {
    decSequence(): DecSequenceContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
