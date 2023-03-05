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
    static readonly WHITESPACE = 11;
    static readonly INT = 12;
    static readonly FLOAT = 13;
    static readonly CHAR = 14;
    static readonly STRING = 15;
    static readonly TRUE = 16;
    static readonly FALSE = 17;
    static readonly LPAREN = 18;
    static readonly RPAREN = 19;
    static readonly REC = 20;
    static readonly AND = 21;
    static readonly SEMICOLON = 22;
    static readonly UNIT = 23;
    static readonly SLASH = 24;
    static readonly DIV = 25;
    static readonly MOD = 26;
    static readonly STAR = 27;
    static readonly PLUS = 28;
    static readonly MINUS = 29;
    static readonly CARET = 30;
    static readonly CONS = 31;
    static readonly AT = 32;
    static readonly EQ = 33;
    static readonly NEQ = 34;
    static readonly LT = 35;
    static readonly GT = 36;
    static readonly LTE = 37;
    static readonly GTE = 38;
    static readonly ANDALSO = 39;
    static readonly ORELSE = 40;
    static readonly ID = 41;
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