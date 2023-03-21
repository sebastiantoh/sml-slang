"use strict";
// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmlLexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class SmlLexer extends Lexer_1.Lexer {
    // @Override
    // @NotNull
    get vocabulary() {
        return SmlLexer.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(SmlLexer._ATN, this);
    }
    // @Override
    get grammarFileName() { return "Sml.g4"; }
    // @Override
    get ruleNames() { return SmlLexer.ruleNames; }
    // @Override
    get serializedATN() { return SmlLexer._serializedATN; }
    // @Override
    get channelNames() { return SmlLexer.channelNames; }
    // @Override
    get modeNames() { return SmlLexer.modeNames; }
    static get _ATN() {
        if (!SmlLexer.__ATN) {
            SmlLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SmlLexer._serializedATN));
        }
        return SmlLexer.__ATN;
    }
}
exports.SmlLexer = SmlLexer;
SmlLexer.T__0 = 1;
SmlLexer.T__1 = 2;
SmlLexer.T__2 = 3;
SmlLexer.T__3 = 4;
SmlLexer.T__4 = 5;
SmlLexer.T__5 = 6;
SmlLexer.T__6 = 7;
SmlLexer.T__7 = 8;
SmlLexer.T__8 = 9;
SmlLexer.T__9 = 10;
SmlLexer.T__10 = 11;
SmlLexer.T__11 = 12;
SmlLexer.T__12 = 13;
SmlLexer.T__13 = 14;
SmlLexer.T__14 = 15;
SmlLexer.WHITESPACE = 16;
SmlLexer.COMMENT = 17;
SmlLexer.INT = 18;
SmlLexer.REAL = 19;
SmlLexer.CHAR = 20;
SmlLexer.STRING = 21;
SmlLexer.TRUE = 22;
SmlLexer.FALSE = 23;
SmlLexer.LPAREN = 24;
SmlLexer.RPAREN = 25;
SmlLexer.LSQUARE = 26;
SmlLexer.RSQUARE = 27;
SmlLexer.REC = 28;
SmlLexer.AND = 29;
SmlLexer.SEMICOLON = 30;
SmlLexer.COMMA = 31;
SmlLexer.UNIT = 32;
SmlLexer.UNDERSCORE = 33;
SmlLexer.SLASH = 34;
SmlLexer.DIV = 35;
SmlLexer.MOD = 36;
SmlLexer.STAR = 37;
SmlLexer.PLUS = 38;
SmlLexer.MINUS = 39;
SmlLexer.CARET = 40;
SmlLexer.CONS = 41;
SmlLexer.AT = 42;
SmlLexer.EQ = 43;
SmlLexer.NEQ = 44;
SmlLexer.LT = 45;
SmlLexer.GT = 46;
SmlLexer.LTE = 47;
SmlLexer.GTE = 48;
SmlLexer.ANDALSO = 49;
SmlLexer.ORELSE = 50;
SmlLexer.QUOTE = 51;
SmlLexer.ID = 52;
SmlLexer.VAR = 53;
// tslint:disable:no-trailing-whitespace
SmlLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
SmlLexer.modeNames = [
    "DEFAULT_MODE",
];
SmlLexer.ruleNames = [
    "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
    "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "WHITESPACE", "COMMENT",
    "INT", "REAL", "CHAR", "STRING", "DIGIT", "NUM", "LETTER", "ESC", "SAFECODEPOINT",
    "ASCII", "TRUE", "FALSE", "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "REC",
    "AND", "SEMICOLON", "COMMA", "UNIT", "UNDERSCORE", "SLASH", "DIV", "MOD",
    "STAR", "PLUS", "MINUS", "CARET", "CONS", "AT", "EQ", "NEQ", "LT", "GT",
    "LTE", "GTE", "ANDALSO", "ORELSE", "QUOTE", "ID", "VAR",
];
SmlLexer._LITERAL_NAMES = [
    undefined, "'let'", "'in'", "'end'", "'if'", "'then'", "'else'", "'case'",
    "'of'", "'fn'", "'=>'", "'|'", "'->'", "'val'", "'fun'", "'local'", undefined,
    undefined, undefined, undefined, undefined, undefined, "'true'", "'false'",
    "'('", "')'", "'['", "']'", "'rec'", "'and'", "';'", "','", "'()'", "'_'",
    "'/'", "'div'", "'mod'", "'*'", "'+'", "'-'", "'^'", "'::'", "'@'", "'='",
    "'<>'", "'<'", "'>'", "'<='", "'>='", "'andalso'", "'orelse'", "'''",
];
SmlLexer._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, "WHITESPACE", "COMMENT", "INT", "REAL", "CHAR",
    "STRING", "TRUE", "FALSE", "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "REC",
    "AND", "SEMICOLON", "COMMA", "UNIT", "UNDERSCORE", "SLASH", "DIV", "MOD",
    "STAR", "PLUS", "MINUS", "CARET", "CONS", "AT", "EQ", "NEQ", "LT", "GT",
    "LTE", "GTE", "ANDALSO", "ORELSE", "QUOTE", "ID", "VAR",
];
SmlLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SmlLexer._LITERAL_NAMES, SmlLexer._SYMBOLIC_NAMES, []);
SmlLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x027\u0176\b\x01" +
    "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
    "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
    "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
    "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
    "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
    "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
    "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x03" +
    "\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
    "\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
    "\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
    "\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x06\x11" +
    "\xB4\n\x11\r\x11\x0E\x11\xB5\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
    "\x12\x07\x12\xBE\n\x12\f\x12\x0E\x12\xC1\v\x12\x03\x12\x03\x12\x03\x12" +
    "\x03\x12\x03\x12\x03\x13\x05\x13\xC9\n\x13\x03\x13\x03\x13\x03\x14\x05" +
    "\x14\xCE\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
    "\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x07\x16\xDC\n\x16\f\x16\x0E\x16" +
    "\xDF\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x06\x18\xE6\n\x18\r" +
    "\x18\x0E\x18\xE7\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
    "\x03\x1C\x03\x1C\x05\x1C\xF3\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
    "\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
    " \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03" +
    "%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03*" +
    "\x03*\x03+\x03+\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x03" +
    "0\x030\x030\x031\x031\x032\x032\x033\x033\x033\x034\x034\x035\x035\x03" +
    "6\x036\x036\x037\x037\x037\x038\x038\x038\x038\x038\x038\x038\x038\x03" +
    "9\x039\x039\x039\x039\x039\x039\x03:\x03:\x03;\x03;\x03;\x03;\x07;\u0154" +
    "\n;\f;\x0E;\u0157\v;\x03;\x06;\u015A\n;\r;\x0E;\u015B\x05;\u015E\n;\x03" +
    "<\x03<\x03<\x03<\x03<\x07<\u0165\n<\f<\x0E<\u0168\v<\x03<\x03<\x03<\x03" +
    "<\x03<\x03<\x07<\u0170\n<\f<\x0E<\u0173\v<\x05<\u0175\n<\x03\xBF\x02\x02" +
    "=\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F" +
    "\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F" +
    "\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16" +
    "+\x02\x17-\x02\x02/\x02\x021\x02\x023\x02\x025\x02\x027\x02\x029\x02\x18" +
    ";\x02\x19=\x02\x1A?\x02\x1BA\x02\x1CC\x02\x1DE\x02\x1EG\x02\x1FI\x02 " +
    "K\x02!M\x02\"O\x02#Q\x02$S\x02%U\x02&W\x02\'Y\x02([\x02)]\x02*_\x02+a" +
    "\x02,c\x02-e\x02.g\x02/i\x020k\x021m\x022o\x023q\x024s\x025u\x026w\x02" +
    "7\x03\x02\t\x05\x02\v\f\x0F\x0F\"\"\x03\x022;\x04\x02C\\c|\n\x02$$11^" +
    "^ddhhppttvv\x05\x02\x02!$$^^\x04\x02))aa\x0E\x02##%(,-//11<<>B^^``bb~" +
    "~\x80\x80\x02\u0184\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02" +
    "\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r" +
    "\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13" +
    "\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19" +
    "\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F" +
    "\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02" +
    "\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02" +
    "\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03" +
    "\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02" +
    "\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02" +
    "M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02" +
    "\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02" +
    "\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03" +
    "\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02" +
    "\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02" +
    "o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02" +
    "\x02\x02\x02w\x03\x02\x02\x02\x03y\x03\x02\x02\x02\x05}\x03\x02\x02\x02" +
    "\x07\x80\x03\x02\x02\x02\t\x84\x03\x02\x02\x02\v\x87\x03\x02\x02\x02\r" +
    "\x8C\x03\x02\x02\x02\x0F\x91\x03\x02\x02\x02\x11\x96\x03\x02\x02\x02\x13" +
    "\x99\x03\x02\x02\x02\x15\x9C\x03\x02\x02\x02\x17\x9F\x03\x02\x02\x02\x19" +
    "\xA1\x03\x02\x02\x02\x1B\xA4\x03\x02\x02\x02\x1D\xA8\x03\x02\x02\x02\x1F" +
    "\xAC\x03\x02\x02\x02!\xB3\x03\x02\x02\x02#\xB9\x03\x02\x02\x02%\xC8\x03" +
    "\x02\x02\x02\'\xCD\x03\x02\x02\x02)\xD3\x03\x02\x02\x02+\xD9\x03\x02\x02" +
    "\x02-\xE2\x03\x02\x02\x02/\xE5\x03\x02\x02\x021\xE9\x03\x02\x02\x023\xEB" +
    "\x03\x02\x02\x025\xEE\x03\x02\x02\x027\xF2\x03\x02\x02\x029\xF4\x03\x02" +
    "\x02\x02;\xF9\x03\x02\x02\x02=\xFF\x03\x02\x02\x02?\u0101\x03\x02\x02" +
    "\x02A\u0103\x03\x02\x02\x02C\u0105\x03\x02\x02\x02E\u0107\x03\x02\x02" +
    "\x02G\u010B\x03\x02\x02\x02I\u010F\x03\x02\x02\x02K\u0111\x03\x02\x02" +
    "\x02M\u0113\x03\x02\x02\x02O\u0116\x03\x02\x02\x02Q\u0118\x03\x02\x02" +
    "\x02S\u011A\x03\x02\x02\x02U\u011E\x03\x02\x02\x02W\u0122\x03\x02\x02" +
    "\x02Y\u0124\x03\x02\x02\x02[\u0126\x03\x02\x02\x02]\u0128\x03\x02\x02" +
    "\x02_\u012A\x03\x02\x02\x02a\u012D\x03\x02\x02\x02c\u012F\x03\x02\x02" +
    "\x02e\u0131\x03\x02\x02\x02g\u0134\x03\x02\x02\x02i\u0136\x03\x02\x02" +
    "\x02k\u0138\x03\x02\x02\x02m\u013B\x03\x02\x02\x02o\u013E\x03\x02\x02" +
    "\x02q\u0146\x03\x02\x02\x02s\u014D\x03\x02\x02\x02u\u015D\x03\x02\x02" +
    "\x02w\u0174\x03\x02\x02\x02yz\x07n\x02\x02z{\x07g\x02\x02{|\x07v\x02\x02" +
    "|\x04\x03\x02\x02\x02}~\x07k\x02\x02~\x7F\x07p\x02\x02\x7F\x06\x03\x02" +
    "\x02\x02\x80\x81\x07g\x02\x02\x81\x82\x07p\x02\x02\x82\x83\x07f\x02\x02" +
    "\x83\b\x03\x02\x02\x02\x84\x85\x07k\x02\x02\x85\x86\x07h\x02\x02\x86\n" +
    "\x03\x02\x02\x02\x87\x88\x07v\x02\x02\x88\x89\x07j\x02\x02\x89\x8A\x07" +
    "g\x02\x02\x8A\x8B\x07p\x02\x02\x8B\f\x03\x02\x02\x02\x8C\x8D\x07g\x02" +
    "\x02\x8D\x8E\x07n\x02\x02\x8E\x8F\x07u\x02\x02\x8F\x90\x07g\x02\x02\x90" +
    "\x0E\x03\x02\x02\x02\x91\x92\x07e\x02\x02\x92\x93\x07c\x02\x02\x93\x94" +
    "\x07u\x02\x02\x94\x95\x07g\x02\x02\x95\x10\x03\x02\x02\x02\x96\x97\x07" +
    "q\x02\x02\x97\x98\x07h\x02\x02\x98\x12\x03\x02\x02\x02\x99\x9A\x07h\x02" +
    "\x02\x9A\x9B\x07p\x02\x02\x9B\x14\x03\x02\x02\x02\x9C\x9D\x07?\x02\x02" +
    "\x9D\x9E\x07@\x02\x02\x9E\x16\x03\x02\x02\x02\x9F\xA0\x07~\x02\x02\xA0" +
    "\x18\x03\x02\x02\x02\xA1\xA2\x07/\x02\x02\xA2\xA3\x07@\x02\x02\xA3\x1A" +
    "\x03\x02\x02\x02\xA4\xA5\x07x\x02\x02\xA5\xA6\x07c\x02\x02\xA6\xA7\x07" +
    "n\x02\x02\xA7\x1C\x03\x02\x02\x02\xA8\xA9\x07h\x02\x02\xA9\xAA\x07w\x02" +
    "\x02\xAA\xAB\x07p\x02\x02\xAB\x1E\x03\x02\x02\x02\xAC\xAD\x07n\x02\x02" +
    "\xAD\xAE\x07q\x02\x02\xAE\xAF\x07e\x02\x02\xAF\xB0\x07c\x02\x02\xB0\xB1" +
    "\x07n\x02\x02\xB1 \x03\x02\x02\x02\xB2\xB4\t\x02\x02\x02\xB3\xB2\x03\x02" +
    "\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02" +
    "\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\b\x11\x02\x02\xB8\"\x03\x02\x02" +
    "\x02\xB9\xBA\x07*\x02\x02\xBA\xBB\x07,\x02\x02\xBB\xBF\x03\x02\x02\x02" +
    "\xBC\xBE\v\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE\xC1\x03\x02\x02\x02" +
    "\xBF\xC0\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xC0\xC2\x03\x02\x02\x02" +
    "\xC1\xBF\x03\x02\x02\x02\xC2\xC3\x07,\x02\x02\xC3\xC4\x07+\x02\x02\xC4" +
    "\xC5\x03\x02\x02\x02\xC5\xC6\b\x12\x02\x02\xC6$\x03\x02\x02\x02\xC7\xC9" +
    "\x07\x80\x02\x02\xC8\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA" +
    "\x03\x02\x02\x02\xCA\xCB\x05/\x18\x02\xCB&\x03\x02\x02\x02\xCC\xCE\x07" +
    "\x80\x02\x02\xCD\xCC\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x03" +
    "\x02\x02\x02\xCF\xD0\x05/\x18\x02\xD0\xD1\x070\x02\x02\xD1\xD2\x05/\x18" +
    "\x02\xD2(\x03\x02\x02\x02\xD3\xD4\x07%\x02\x02\xD4\xD5\x07$\x02\x02\xD5" +
    "\xD6\x03\x02\x02\x02\xD6\xD7\x057\x1C\x02\xD7\xD8\x07$\x02\x02\xD8*\x03" +
    "\x02\x02\x02\xD9\xDD\x07$\x02\x02\xDA\xDC\x057\x1C\x02\xDB\xDA\x03\x02" +
    "\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02" +
    "\x02\x02\xDE\xE0\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE1\x07$" +
    "\x02\x02\xE1,\x03\x02\x02\x02\xE2\xE3\t\x03\x02\x02\xE3.\x03\x02\x02\x02" +
    "\xE4\xE6\x05-\x17\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02" +
    "\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE80\x03\x02\x02\x02" +
    "\xE9\xEA\t\x04\x02\x02\xEA2\x03\x02\x02\x02\xEB\xEC\x07^\x02\x02\xEC\xED" +
    "\t\x05\x02\x02\xED4\x03\x02\x02\x02\xEE\xEF\n\x06\x02\x02\xEF6\x03\x02" +
    "\x02\x02\xF0\xF3\x053\x1A\x02\xF1\xF3\x055\x1B\x02\xF2\xF0\x03\x02\x02" +
    "\x02\xF2\xF1\x03\x02\x02\x02\xF38\x03\x02\x02\x02\xF4\xF5\x07v\x02\x02" +
    "\xF5\xF6\x07t\x02\x02\xF6\xF7\x07w\x02\x02\xF7\xF8\x07g\x02\x02\xF8:\x03" +
    "\x02\x02\x02\xF9\xFA\x07h\x02\x02\xFA\xFB\x07c\x02\x02\xFB\xFC\x07n\x02" +
    "\x02\xFC\xFD\x07u\x02\x02\xFD\xFE\x07g\x02\x02\xFE<\x03\x02\x02\x02\xFF" +
    "\u0100\x07*\x02\x02\u0100>\x03\x02\x02\x02\u0101\u0102\x07+\x02\x02\u0102" +
    "@\x03\x02\x02\x02\u0103\u0104\x07]\x02\x02\u0104B\x03\x02\x02\x02\u0105" +
    "\u0106\x07_\x02\x02\u0106D\x03\x02\x02\x02\u0107\u0108\x07t\x02\x02\u0108" +
    "\u0109\x07g\x02\x02\u0109\u010A\x07e\x02\x02\u010AF\x03\x02\x02\x02\u010B" +
    "\u010C\x07c\x02\x02\u010C\u010D\x07p\x02\x02\u010D\u010E\x07f\x02\x02" +
    "\u010EH\x03\x02\x02\x02\u010F\u0110\x07=\x02\x02\u0110J\x03\x02\x02\x02" +
    "\u0111\u0112\x07.\x02\x02\u0112L\x03\x02\x02\x02\u0113\u0114\x07*\x02" +
    "\x02\u0114\u0115\x07+\x02\x02\u0115N\x03\x02\x02\x02\u0116\u0117\x07a" +
    "\x02\x02\u0117P\x03\x02\x02\x02\u0118\u0119\x071\x02\x02\u0119R\x03\x02" +
    "\x02\x02\u011A\u011B\x07f\x02\x02\u011B\u011C\x07k\x02\x02\u011C\u011D" +
    "\x07x\x02\x02\u011DT\x03\x02\x02\x02\u011E\u011F\x07o\x02\x02\u011F\u0120" +
    "\x07q\x02\x02\u0120\u0121\x07f\x02\x02\u0121V\x03\x02\x02\x02\u0122\u0123" +
    "\x07,\x02\x02\u0123X\x03\x02\x02\x02\u0124\u0125\x07-\x02\x02\u0125Z\x03" +
    "\x02\x02\x02\u0126\u0127\x07/\x02\x02\u0127\\\x03\x02\x02\x02\u0128\u0129" +
    "\x07`\x02\x02\u0129^\x03\x02\x02\x02\u012A\u012B\x07<\x02\x02\u012B\u012C" +
    "\x07<\x02\x02\u012C`\x03\x02\x02\x02\u012D\u012E\x07B\x02\x02\u012Eb\x03" +
    "\x02\x02\x02\u012F\u0130\x07?\x02\x02\u0130d\x03\x02\x02\x02\u0131\u0132" +
    "\x07>\x02\x02\u0132\u0133\x07@\x02\x02\u0133f\x03\x02\x02\x02\u0134\u0135" +
    "\x07>\x02\x02\u0135h\x03\x02\x02\x02\u0136\u0137\x07@\x02\x02\u0137j\x03" +
    "\x02\x02\x02\u0138\u0139\x07>\x02\x02\u0139\u013A\x07?\x02\x02\u013Al" +
    "\x03\x02\x02\x02\u013B\u013C\x07@\x02\x02\u013C\u013D\x07?\x02\x02\u013D" +
    "n\x03\x02\x02\x02\u013E\u013F\x07c\x02\x02\u013F\u0140\x07p\x02\x02\u0140" +
    "\u0141\x07f\x02\x02\u0141\u0142\x07c\x02\x02\u0142\u0143\x07n\x02\x02" +
    "\u0143\u0144\x07u\x02\x02\u0144\u0145\x07q\x02\x02\u0145p\x03\x02\x02" +
    "\x02\u0146\u0147\x07q\x02\x02\u0147\u0148\x07t\x02\x02\u0148\u0149\x07" +
    "g\x02\x02\u0149\u014A\x07n\x02\x02\u014A\u014B\x07u\x02\x02\u014B\u014C" +
    "\x07g\x02\x02\u014Cr\x03\x02\x02\x02\u014D\u014E\x07)\x02\x02\u014Et\x03" +
    "\x02\x02\x02\u014F\u0155\x051\x19\x02\u0150\u0154\x051\x19\x02\u0151\u0154" +
    "\x05-\x17\x02\u0152\u0154\t\x07\x02\x02\u0153\u0150\x03\x02\x02\x02\u0153" +
    "\u0151\x03\x02\x02\x02\u0153\u0152\x03\x02\x02\x02\u0154\u0157\x03\x02" +
    "\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156" +
    "\u015E\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0158\u015A\t\b\x02" +
    "\x02\u0159\u0158\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u0159" +
    "\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015E\x03\x02\x02\x02" +
    "\u015D\u014F\x03\x02\x02\x02\u015D\u0159\x03\x02\x02\x02\u015Ev\x03\x02" +
    "\x02\x02\u015F\u0166\x05s:\x02\u0160\u0165\x051\x19\x02\u0161\u0165\x05" +
    "-\x17\x02\u0162\u0165\x05s:\x02\u0163\u0165\x05O(\x02\u0164\u0160\x03" +
    "\x02\x02\x02\u0164\u0161\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0164" +
    "\u0163\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02" +
    "\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0175\x03\x02\x02\x02\u0168" +
    "\u0166\x03\x02\x02\x02\u0169\u016A\x05s:\x02\u016A\u0171\x05s:\x02\u016B" +
    "\u0170\x051\x19\x02\u016C\u0170\x05-\x17\x02\u016D\u0170\x05s:\x02\u016E" +
    "\u0170\x05O(\x02\u016F\u016B\x03\x02\x02\x02\u016F\u016C\x03\x02\x02\x02" +
    "\u016F\u016D\x03\x02\x02\x02\u016F\u016E\x03\x02\x02\x02\u0170\u0173\x03" +
    "\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172" +
    "\u0175\x03\x02\x02\x02\u0173\u0171\x03\x02\x02\x02\u0174\u015F\x03\x02" +
    "\x02\x02\u0174\u0169\x03\x02\x02\x02\u0175x\x03\x02\x02\x02\x13\x02\xB5" +
    "\xBF\xC8\xCD\xDD\xE7\xF2\u0153\u0155\u015B\u015D\u0164\u0166\u016F\u0171" +
    "\u0174\x03\b\x02\x02";
//# sourceMappingURL=SmlLexer.js.map