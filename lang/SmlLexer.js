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
SmlLexer.WHITESPACE = 13;
SmlLexer.COMMENT = 14;
SmlLexer.INT = 15;
SmlLexer.FLOAT = 16;
SmlLexer.CHAR = 17;
SmlLexer.STRING = 18;
SmlLexer.TRUE = 19;
SmlLexer.FALSE = 20;
SmlLexer.LPAREN = 21;
SmlLexer.RPAREN = 22;
SmlLexer.REC = 23;
SmlLexer.AND = 24;
SmlLexer.SEMICOLON = 25;
SmlLexer.UNIT = 26;
SmlLexer.SLASH = 27;
SmlLexer.DIV = 28;
SmlLexer.MOD = 29;
SmlLexer.STAR = 30;
SmlLexer.PLUS = 31;
SmlLexer.MINUS = 32;
SmlLexer.CARET = 33;
SmlLexer.CONS = 34;
SmlLexer.AT = 35;
SmlLexer.EQ = 36;
SmlLexer.NEQ = 37;
SmlLexer.LT = 38;
SmlLexer.GT = 39;
SmlLexer.LTE = 40;
SmlLexer.GTE = 41;
SmlLexer.ANDALSO = 42;
SmlLexer.ORELSE = 43;
SmlLexer.ID = 44;
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
    "T__9", "T__10", "T__11", "WHITESPACE", "COMMENT", "INT", "FLOAT", "CHAR",
    "STRING", "DIGIT", "NUM", "LETTER", "ESC", "SAFECODEPOINT", "ASCII", "TRUE",
    "FALSE", "LPAREN", "RPAREN", "REC", "AND", "SEMICOLON", "UNIT", "SLASH",
    "DIV", "MOD", "STAR", "PLUS", "MINUS", "CARET", "CONS", "AT", "EQ", "NEQ",
    "LT", "GT", "LTE", "GTE", "ANDALSO", "ORELSE", "ID",
];
SmlLexer._LITERAL_NAMES = [
    undefined, "'let'", "'in'", "'end'", "'if'", "'then'", "'else'", "'fn'",
    "'=>'", "'|'", "'val'", "'fun'", "'local'", undefined, undefined, undefined,
    undefined, undefined, undefined, "'true'", "'false'", "'('", "')'", "'rec'",
    "'and'", "';'", "'()'", "'/'", "'div'", "'mod'", "'*'", "'+'", "'-'",
    "'^'", "'::'", "'@'", "'='", "'<>'", "'<'", "'>'", "'<='", "'>='", "'andalso'",
    "'orelse'",
];
SmlLexer._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, "WHITESPACE",
    "COMMENT", "INT", "FLOAT", "CHAR", "STRING", "TRUE", "FALSE", "LPAREN",
    "RPAREN", "REC", "AND", "SEMICOLON", "UNIT", "SLASH", "DIV", "MOD", "STAR",
    "PLUS", "MINUS", "CARET", "CONS", "AT", "EQ", "NEQ", "LT", "GT", "LTE",
    "GTE", "ANDALSO", "ORELSE", "ID",
];
SmlLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SmlLexer._LITERAL_NAMES, SmlLexer._SYMBOLIC_NAMES, []);
SmlLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02.\u0138\b\x01" +
    "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
    "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
    "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
    "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
    "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
    "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
    "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x03" +
    "\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
    "\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03" +
    "\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03" +
    "\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x06\x0E\x97\n\x0E\r\x0E\x0E\x0E" +
    "\x98\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xA1\n\x0F" +
    "\f\x0F\x0E\x0F\xA4\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10" +
    "\x05\x10\xAC\n\x10\x03\x10\x03\x10\x03\x11\x05\x11\xB1\n\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
    "\x13\x03\x13\x07\x13\xBF\n\x13\f\x13\x0E\x13\xC2\v\x13\x03\x13\x03\x13" +
    "\x03\x14\x03\x14\x03\x15\x06\x15\xC9\n\x15\r\x15\x0E\x15\xCA\x03\x16\x03" +
    "\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\xD6" +
    "\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
    "\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E" +
    "\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03" +
    "!\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x03&\x03" +
    "&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03" +
    ",\x03-\x03-\x03.\x03.\x03/\x03/\x03/\x030\x030\x030\x031\x031\x031\x03" +
    "1\x031\x031\x031\x031\x032\x032\x032\x032\x032\x032\x032\x033\x033\x03" +
    "3\x033\x073\u012D\n3\f3\x0E3\u0130\v3\x033\x063\u0133\n3\r3\x0E3\u0134" +
    "\x053\u0137\n3\x03\xA2\x02\x024\x03\x02\x03\x05\x02\x04\x07\x02\x05\t" +
    "\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
    "\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13" +
    "%\x02\x14\'\x02\x02)\x02\x02+\x02\x02-\x02\x02/\x02\x021\x02\x023\x02" +
    "\x155\x02\x167\x02\x179\x02\x18;\x02\x19=\x02\x1A?\x02\x1BA\x02\x1CC\x02" +
    "\x1DE\x02\x1EG\x02\x1FI\x02 K\x02!M\x02\"O\x02#Q\x02$S\x02%U\x02&W\x02" +
    "\'Y\x02([\x02)]\x02*_\x02+a\x02,c\x02-e\x02.\x03\x02\t\x05\x02\v\f\x0F" +
    "\x0F\"\"\x03\x022;\x04\x02C\\c|\n\x02$$11^^ddhhppttvv\x05\x02\x02!$$^" +
    "^\x04\x02))aa\x0E\x02##%(,-//11<<>B^^``bb~~\x80\x80\x02\u013D\x02\x03" +
    "\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t" +
    "\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03" +
    "\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03" +
    "\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03" +
    "\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03" +
    "\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x023\x03\x02\x02" +
    "\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02" +
    ";\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02" +
    "\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02" +
    "\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03" +
    "\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02" +
    "\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02" +
    "]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02" +
    "\x02\x02\x02e\x03\x02\x02\x02\x03g\x03\x02\x02\x02\x05k\x03\x02\x02\x02" +
    "\x07n\x03\x02\x02\x02\tr\x03\x02\x02\x02\vu\x03\x02\x02\x02\rz\x03\x02" +
    "\x02\x02\x0F\x7F\x03\x02\x02\x02\x11\x82\x03\x02\x02\x02\x13\x85\x03\x02" +
    "\x02\x02\x15\x87\x03\x02\x02\x02\x17\x8B\x03\x02\x02\x02\x19\x8F\x03\x02" +
    "\x02\x02\x1B\x96\x03\x02\x02\x02\x1D\x9C\x03\x02\x02\x02\x1F\xAB\x03\x02" +
    "\x02\x02!\xB0\x03\x02\x02\x02#\xB6\x03\x02\x02\x02%\xBC\x03\x02\x02\x02" +
    "\'\xC5\x03\x02\x02\x02)\xC8\x03\x02\x02\x02+\xCC\x03\x02\x02\x02-\xCE" +
    "\x03\x02\x02\x02/\xD1\x03\x02\x02\x021\xD5\x03\x02\x02\x023\xD7\x03\x02" +
    "\x02\x025\xDC\x03\x02\x02\x027\xE2\x03\x02\x02\x029\xE4\x03\x02\x02\x02" +
    ";\xE6\x03\x02\x02\x02=\xEA\x03\x02\x02\x02?\xEE\x03\x02\x02\x02A\xF0\x03" +
    "\x02\x02\x02C\xF3\x03\x02\x02\x02E\xF5\x03\x02\x02\x02G\xF9\x03\x02\x02" +
    "\x02I\xFD\x03\x02\x02\x02K\xFF\x03\x02\x02\x02M\u0101\x03\x02\x02\x02" +
    "O\u0103\x03\x02\x02\x02Q\u0105\x03\x02\x02\x02S\u0108\x03\x02\x02\x02" +
    "U\u010A\x03\x02\x02\x02W\u010C\x03\x02\x02\x02Y\u010F\x03\x02\x02\x02" +
    "[\u0111\x03\x02\x02\x02]\u0113\x03\x02\x02\x02_\u0116\x03\x02\x02\x02" +
    "a\u0119\x03\x02\x02\x02c\u0121\x03\x02\x02\x02e\u0136\x03\x02\x02\x02" +
    "gh\x07n\x02\x02hi\x07g\x02\x02ij\x07v\x02\x02j\x04\x03\x02\x02\x02kl\x07" +
    "k\x02\x02lm\x07p\x02\x02m\x06\x03\x02\x02\x02no\x07g\x02\x02op\x07p\x02" +
    "\x02pq\x07f\x02\x02q\b\x03\x02\x02\x02rs\x07k\x02\x02st\x07h\x02\x02t" +
    "\n\x03\x02\x02\x02uv\x07v\x02\x02vw\x07j\x02\x02wx\x07g\x02\x02xy\x07" +
    "p\x02\x02y\f\x03\x02\x02\x02z{\x07g\x02\x02{|\x07n\x02\x02|}\x07u\x02" +
    "\x02}~\x07g\x02\x02~\x0E\x03\x02\x02\x02\x7F\x80\x07h\x02\x02\x80\x81" +
    "\x07p\x02\x02\x81\x10\x03\x02\x02\x02\x82\x83\x07?\x02\x02\x83\x84\x07" +
    "@\x02\x02\x84\x12\x03\x02\x02\x02\x85\x86\x07~\x02\x02\x86\x14\x03\x02" +
    "\x02\x02\x87\x88\x07x\x02\x02\x88\x89\x07c\x02\x02\x89\x8A\x07n\x02\x02" +
    "\x8A\x16\x03\x02\x02\x02\x8B\x8C\x07h\x02\x02\x8C\x8D\x07w\x02\x02\x8D" +
    "\x8E\x07p\x02\x02\x8E\x18\x03\x02\x02\x02\x8F\x90\x07n\x02\x02\x90\x91" +
    "\x07q\x02\x02\x91\x92\x07e\x02\x02\x92\x93\x07c\x02\x02\x93\x94\x07n\x02" +
    "\x02\x94\x1A\x03\x02\x02\x02\x95\x97\t\x02\x02\x02\x96\x95\x03\x02\x02" +
    "\x02\x97\x98\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02" +
    "\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\b\x0E\x02\x02\x9B\x1C\x03\x02\x02" +
    "\x02\x9C\x9D\x07*\x02\x02\x9D\x9E\x07,\x02\x02\x9E\xA2\x03\x02\x02\x02" +
    "\x9F\xA1\v\x02\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1\xA4\x03\x02\x02\x02" +
    "\xA2\xA3\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA5\x03\x02\x02\x02" +
    "\xA4\xA2\x03\x02\x02\x02\xA5\xA6\x07,\x02\x02\xA6\xA7\x07+\x02\x02\xA7" +
    "\xA8\x03\x02\x02\x02\xA8\xA9\b\x0F\x02\x02\xA9\x1E\x03\x02\x02\x02\xAA" +
    "\xAC\x07\x80\x02\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC" +
    "\xAD\x03\x02\x02\x02\xAD\xAE\x05)\x15\x02\xAE \x03\x02\x02\x02\xAF\xB1" +
    "\x07\x80\x02\x02\xB0\xAF\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB2" +
    "\x03\x02\x02\x02\xB2\xB3\x05)\x15\x02\xB3\xB4\x070\x02\x02\xB4\xB5\x05" +
    ")\x15\x02\xB5\"\x03\x02\x02\x02\xB6\xB7\x07%\x02\x02\xB7\xB8\x07$\x02" +
    "\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBA\x051\x19\x02\xBA\xBB\x07$\x02\x02" +
    "\xBB$\x03\x02\x02\x02\xBC\xC0\x07$\x02\x02\xBD\xBF\x051\x19\x02\xBE\xBD" +
    "\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0\xC1" +
    "\x03\x02\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC4" +
    "\x07$\x02\x02\xC4&\x03\x02\x02\x02\xC5\xC6\t\x03\x02\x02\xC6(\x03\x02" +
    "\x02\x02\xC7\xC9\x05\'\x14\x02\xC8\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02" +
    "\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB*\x03\x02" +
    "\x02\x02\xCC\xCD\t\x04\x02\x02\xCD,\x03\x02\x02\x02\xCE\xCF\x07^\x02\x02" +
    "\xCF\xD0\t\x05\x02\x02\xD0.\x03\x02\x02\x02\xD1\xD2\n\x06\x02\x02\xD2" +
    "0\x03\x02\x02\x02\xD3\xD6\x05-\x17\x02\xD4\xD6\x05/\x18\x02\xD5\xD3\x03" +
    "\x02\x02\x02\xD5\xD4\x03\x02\x02\x02\xD62\x03\x02\x02\x02\xD7\xD8\x07" +
    "v\x02\x02\xD8\xD9\x07t\x02\x02\xD9\xDA\x07w\x02\x02\xDA\xDB\x07g\x02\x02" +
    "\xDB4\x03\x02\x02\x02\xDC\xDD\x07h\x02\x02\xDD\xDE\x07c\x02\x02\xDE\xDF" +
    "\x07n\x02\x02\xDF\xE0\x07u\x02\x02\xE0\xE1\x07g\x02\x02\xE16\x03\x02\x02" +
    "\x02\xE2\xE3\x07*\x02\x02\xE38\x03\x02\x02\x02\xE4\xE5\x07+\x02\x02\xE5" +
    ":\x03\x02\x02\x02\xE6\xE7\x07t\x02\x02\xE7\xE8\x07g\x02\x02\xE8\xE9\x07" +
    "e\x02\x02\xE9<\x03\x02\x02\x02\xEA\xEB\x07c\x02\x02\xEB\xEC\x07p\x02\x02" +
    "\xEC\xED\x07f\x02\x02\xED>\x03\x02\x02\x02\xEE\xEF\x07=\x02\x02\xEF@\x03" +
    "\x02\x02\x02\xF0\xF1\x07*\x02\x02\xF1\xF2\x07+\x02\x02\xF2B\x03\x02\x02" +
    "\x02\xF3\xF4\x071\x02\x02\xF4D\x03\x02\x02\x02\xF5\xF6\x07f\x02\x02\xF6" +
    "\xF7\x07k\x02\x02\xF7\xF8\x07x\x02\x02\xF8F\x03\x02\x02\x02\xF9\xFA\x07" +
    "o\x02\x02\xFA\xFB\x07q\x02\x02\xFB\xFC\x07f\x02\x02\xFCH\x03\x02\x02\x02" +
    "\xFD\xFE\x07,\x02\x02\xFEJ\x03\x02\x02\x02\xFF\u0100\x07-\x02\x02\u0100" +
    "L\x03\x02\x02\x02\u0101\u0102\x07/\x02\x02\u0102N\x03\x02\x02\x02\u0103" +
    "\u0104\x07`\x02\x02\u0104P\x03\x02\x02\x02\u0105\u0106\x07<\x02\x02\u0106" +
    "\u0107\x07<\x02\x02\u0107R\x03\x02\x02\x02\u0108\u0109\x07B\x02\x02\u0109" +
    "T\x03\x02\x02\x02\u010A\u010B\x07?\x02\x02\u010BV\x03\x02\x02\x02\u010C" +
    "\u010D\x07>\x02\x02\u010D\u010E\x07@\x02\x02\u010EX\x03\x02\x02\x02\u010F" +
    "\u0110\x07>\x02\x02\u0110Z\x03\x02\x02\x02\u0111\u0112\x07@\x02\x02\u0112" +
    "\\\x03\x02\x02\x02\u0113\u0114\x07>\x02\x02\u0114\u0115\x07?\x02\x02\u0115" +
    "^\x03\x02\x02\x02\u0116\u0117\x07@\x02\x02\u0117\u0118\x07?\x02\x02\u0118" +
    "`\x03\x02\x02\x02\u0119\u011A\x07c\x02\x02\u011A\u011B\x07p\x02\x02\u011B" +
    "\u011C\x07f\x02\x02\u011C\u011D\x07c\x02\x02\u011D\u011E\x07n\x02\x02" +
    "\u011E\u011F\x07u\x02\x02\u011F\u0120\x07q\x02\x02\u0120b\x03\x02\x02" +
    "\x02\u0121\u0122\x07q\x02\x02\u0122\u0123\x07t\x02\x02\u0123\u0124\x07" +
    "g\x02\x02\u0124\u0125\x07n\x02\x02\u0125\u0126\x07u\x02\x02\u0126\u0127" +
    "\x07g\x02\x02\u0127d\x03\x02\x02\x02\u0128\u012E\x05+\x16\x02\u0129\u012D" +
    "\x05+\x16\x02\u012A\u012D\x05\'\x14\x02\u012B\u012D\t\x07\x02\x02\u012C" +
    "\u0129\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012B\x03\x02" +
    "\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012E" +
    "\u012F\x03\x02\x02\x02\u012F\u0137\x03\x02\x02\x02\u0130\u012E\x03\x02" +
    "\x02\x02\u0131\u0133\t\b\x02\x02\u0132\u0131\x03\x02\x02\x02\u0133\u0134" +
    "\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02" +
    "\u0135\u0137\x03\x02\x02\x02\u0136\u0128\x03\x02\x02\x02\u0136\u0132\x03" +
    "\x02\x02\x02\u0137f\x03\x02\x02\x02\x0E\x02\x98\xA2\xAB\xB0\xC0\xCA\xD5" +
    "\u012C\u012E\u0134\u0136\x03\b\x02\x02";
//# sourceMappingURL=SmlLexer.js.map