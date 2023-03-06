import { ATN } from "antlr4ts/atn/ATN";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { Vocabulary } from "antlr4ts/Vocabulary";
export declare class SmlLexer extends Lexer {
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
    static readonly WHITESPACE = 12;
    static readonly COMMENT = 13;
    static readonly INT = 14;
    static readonly FLOAT = 15;
    static readonly CHAR = 16;
    static readonly STRING = 17;
    static readonly TRUE = 18;
    static readonly FALSE = 19;
    static readonly LPAREN = 20;
    static readonly RPAREN = 21;
    static readonly REC = 22;
    static readonly AND = 23;
    static readonly SEMICOLON = 24;
    static readonly UNIT = 25;
    static readonly SLASH = 26;
    static readonly DIV = 27;
    static readonly MOD = 28;
    static readonly STAR = 29;
    static readonly PLUS = 30;
    static readonly MINUS = 31;
    static readonly CARET = 32;
    static readonly CONS = 33;
    static readonly AT = 34;
    static readonly EQ = 35;
    static readonly NEQ = 36;
    static readonly LT = 37;
    static readonly GT = 38;
    static readonly LTE = 39;
    static readonly GTE = 40;
    static readonly ANDALSO = 41;
    static readonly ORELSE = 42;
    static readonly ID = 43;
    static readonly channelNames: string[];
    static readonly modeNames: string[];
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    constructor(input: CharStream);
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    get channelNames(): string[];
    get modeNames(): string[];
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
