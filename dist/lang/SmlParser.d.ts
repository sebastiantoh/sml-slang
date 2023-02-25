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
    static readonly WHITESPACE = 2;
    static readonly INT = 3;
    static readonly FLOAT = 4;
    static readonly CHAR = 5;
    static readonly STRING = 6;
    static readonly LPAREN = 7;
    static readonly RPAREN = 8;
    static readonly REC = 9;
    static readonly AND = 10;
    static readonly SLASH = 11;
    static readonly DIV = 12;
    static readonly MOD = 13;
    static readonly STAR = 14;
    static readonly PLUS = 15;
    static readonly MINUS = 16;
    static readonly CARET = 17;
    static readonly CONS = 18;
    static readonly AT = 19;
    static readonly EQ = 20;
    static readonly NEQ = 21;
    static readonly LT = 22;
    static readonly GT = 23;
    static readonly LTE = 24;
    static readonly GTE = 25;
    static readonly ID = 26;
    static readonly RULE_con = 0;
    static readonly RULE_exp = 1;
    static readonly RULE_pat = 2;
    static readonly RULE_dec = 3;
    static readonly RULE_valbind = 4;
    static readonly RULE_prog = 5;
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
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: SmlListener): void;
    exitRule(listener: SmlListener): void;
    accept<Result>(visitor: SmlVisitor<Result>): Result;
}
