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
SmlLexer.COLON = 31;
SmlLexer.COMMA = 32;
SmlLexer.UNIT = 33;
SmlLexer.UNDERSCORE = 34;
SmlLexer.SLASH = 35;
SmlLexer.DIV = 36;
SmlLexer.MOD = 37;
SmlLexer.STARDOT = 38;
SmlLexer.STAR = 39;
SmlLexer.PLUSDOT = 40;
SmlLexer.PLUS = 41;
SmlLexer.MINUSDOT = 42;
SmlLexer.MINUS = 43;
SmlLexer.CARET = 44;
SmlLexer.CONS = 45;
SmlLexer.AT = 46;
SmlLexer.EQ = 47;
SmlLexer.NEQ = 48;
SmlLexer.LT = 49;
SmlLexer.GT = 50;
SmlLexer.LTE = 51;
SmlLexer.GTE = 52;
SmlLexer.ANDALSO = 53;
SmlLexer.ORELSE = 54;
SmlLexer.QUOTE = 55;
SmlLexer.ID = 56;
SmlLexer.VAR = 57;
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
    "AND", "SEMICOLON", "COLON", "COMMA", "UNIT", "UNDERSCORE", "SLASH", "DIV",
    "MOD", "STARDOT", "STAR", "PLUSDOT", "PLUS", "MINUSDOT", "MINUS", "CARET",
    "CONS", "AT", "EQ", "NEQ", "LT", "GT", "LTE", "GTE", "ANDALSO", "ORELSE",
    "QUOTE", "ID", "VAR",
];
SmlLexer._LITERAL_NAMES = [
    undefined, "'let'", "'in'", "'end'", "'if'", "'then'", "'else'", "'case'",
    "'of'", "'fn'", "'=>'", "'|'", "'->'", "'val'", "'fun'", "'local'", undefined,
    undefined, undefined, undefined, undefined, undefined, "'true'", "'false'",
    "'('", "')'", "'['", "']'", "'rec'", "'and'", "';'", "':'", "','", "'()'",
    "'_'", "'/'", "'div'", "'mod'", "'*.'", "'*'", "'+.'", "'+'", "'-.'",
    "'-'", "'^'", "'::'", "'@'", "'='", "'<>'", "'<'", "'>'", "'<='", "'>='",
    "'andalso'", "'orelse'", "'''",
];
SmlLexer._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, "WHITESPACE", "COMMENT", "INT", "REAL", "CHAR",
    "STRING", "TRUE", "FALSE", "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "REC",
    "AND", "SEMICOLON", "COLON", "COMMA", "UNIT", "UNDERSCORE", "SLASH", "DIV",
    "MOD", "STARDOT", "STAR", "PLUSDOT", "PLUS", "MINUSDOT", "MINUS", "CARET",
    "CONS", "AT", "EQ", "NEQ", "LT", "GT", "LTE", "GTE", "ANDALSO", "ORELSE",
    "QUOTE", "ID", "VAR",
];
SmlLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SmlLexer._LITERAL_NAMES, SmlLexer._SYMBOLIC_NAMES, []);
SmlLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02;\u0189\b\x01" +
    "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
    "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
    "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
    "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
    "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
    "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
    "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
    "\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
    "\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n" +
    "\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
    "\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
    "\x03\x10\x03\x10\x03\x11\x06\x11\xBC\n\x11\r\x11\x0E\x11\xBD\x03\x11\x03" +
    "\x11\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xC6\n\x12\f\x12\x0E\x12\xC9" +
    "\v\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x05\x13\xD1\n\x13" +
    "\x03\x13\x03\x13\x03\x14\x05\x14\xD6\n\x14\x03\x14\x03\x14\x03\x14\x03" +
    "\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x07" +
    "\x16\xE4\n\x16\f\x16\x0E\x16\xE7\v\x16\x03\x16\x03\x16\x03\x17\x03\x17" +
    "\x03\x18\x06\x18\xEE\n\x18\r\x18\x0E\x18\xEF\x03\x19\x03\x19\x03\x1A\x03" +
    "\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C\xFB\n\x1C\x03\x1D" +
    "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
    "\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03" +
    "#\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03" +
    "(\x03)\x03)\x03*\x03*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03-\x03" +
    "-\x03-\x03.\x03.\x03/\x03/\x03/\x030\x030\x031\x031\x031\x032\x032\x03" +
    "3\x033\x034\x034\x034\x035\x035\x036\x036\x037\x037\x037\x038\x038\x03" +
    "9\x039\x03:\x03:\x03:\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03" +
    "<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x03?\x03?\x03?\x03" +
    "?\x07?\u0167\n?\f?\x0E?\u016A\v?\x03?\x06?\u016D\n?\r?\x0E?\u016E\x05" +
    "?\u0171\n?\x03@\x03@\x03@\x03@\x03@\x07@\u0178\n@\f@\x0E@\u017B\v@\x03" +
    "@\x03@\x03@\x03@\x03@\x03@\x07@\u0183\n@\f@\x0E@\u0186\v@\x05@\u0188\n" +
    "@\x03\xC7\x02\x02A\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02" +
    "\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02" +
    "\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'" +
    "\x02\x15)\x02\x16+\x02\x17-\x02\x02/\x02\x021\x02\x023\x02\x025\x02\x02" +
    "7\x02\x029\x02\x18;\x02\x19=\x02\x1A?\x02\x1BA\x02\x1CC\x02\x1DE\x02\x1E" +
    "G\x02\x1FI\x02 K\x02!M\x02\"O\x02#Q\x02$S\x02%U\x02&W\x02\'Y\x02([\x02" +
    ")]\x02*_\x02+a\x02,c\x02-e\x02.g\x02/i\x020k\x021m\x022o\x023q\x024s\x02" +
    "5u\x026w\x027y\x028{\x029}\x02:\x7F\x02;\x03\x02\t\x05\x02\v\f\x0F\x0F" +
    "\"\"\x03\x022;\x04\x02C\\c|\n\x02$$11^^ddhhppttvv\x05\x02\x02!$$^^\x04" +
    "\x02))aa\x0E\x02##%(,-//11<<>B^^``bb~~\x80\x80\x02\u0197\x02\x03\x03\x02" +
    "\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
    "\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
    "\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
    "\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02" +
    "\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02" +
    "\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02" +
    ")\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02" +
    "\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02" +
    "\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03" +
    "\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02" +
    "\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02" +
    "W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02" +
    "\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02" +
    "\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03" +
    "\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02" +
    "\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02" +
    "y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03" +
    "\x02\x02\x02\x03\x81\x03\x02\x02\x02\x05\x85\x03\x02\x02\x02\x07\x88\x03" +
    "\x02\x02\x02\t\x8C\x03\x02\x02\x02\v\x8F\x03\x02\x02\x02\r\x94\x03\x02" +
    "\x02\x02\x0F\x99\x03\x02\x02\x02\x11\x9E\x03\x02\x02\x02\x13\xA1\x03\x02" +
    "\x02\x02\x15\xA4\x03\x02\x02\x02\x17\xA7\x03\x02\x02\x02\x19\xA9\x03\x02" +
    "\x02\x02\x1B\xAC\x03\x02\x02\x02\x1D\xB0\x03\x02\x02\x02\x1F\xB4\x03\x02" +
    "\x02\x02!\xBB\x03\x02\x02\x02#\xC1\x03\x02\x02\x02%\xD0\x03\x02\x02\x02" +
    "\'\xD5\x03\x02\x02\x02)\xDB\x03\x02\x02\x02+\xE1\x03\x02\x02\x02-\xEA" +
    "\x03\x02\x02\x02/\xED\x03\x02\x02\x021\xF1\x03\x02\x02\x023\xF3\x03\x02" +
    "\x02\x025\xF6\x03\x02\x02\x027\xFA\x03\x02\x02\x029\xFC\x03\x02\x02\x02" +
    ";\u0101\x03\x02\x02\x02=\u0107\x03\x02\x02\x02?\u0109\x03\x02\x02\x02" +
    "A\u010B\x03\x02\x02\x02C\u010D\x03\x02\x02\x02E\u010F\x03\x02\x02\x02" +
    "G\u0113\x03\x02\x02\x02I\u0117\x03\x02\x02\x02K\u0119\x03\x02\x02\x02" +
    "M\u011B\x03\x02\x02\x02O\u011D\x03\x02\x02\x02Q\u0120\x03\x02\x02\x02" +
    "S\u0122\x03\x02\x02\x02U\u0124\x03\x02\x02\x02W\u0128\x03\x02\x02\x02" +
    "Y\u012C\x03\x02\x02\x02[\u012F\x03\x02\x02\x02]\u0131\x03\x02\x02\x02" +
    "_\u0134\x03\x02\x02\x02a\u0136\x03\x02\x02\x02c\u0139\x03\x02\x02\x02" +
    "e\u013B\x03\x02\x02\x02g\u013D\x03\x02\x02\x02i\u0140\x03\x02\x02\x02" +
    "k\u0142\x03\x02\x02\x02m\u0144\x03\x02\x02\x02o\u0147\x03\x02\x02\x02" +
    "q\u0149\x03\x02\x02\x02s\u014B\x03\x02\x02\x02u\u014E\x03\x02\x02\x02" +
    "w\u0151\x03\x02\x02\x02y\u0159\x03\x02\x02\x02{\u0160\x03\x02\x02\x02" +
    "}\u0170\x03\x02\x02\x02\x7F\u0187\x03\x02\x02\x02\x81\x82\x07n\x02\x02" +
    "\x82\x83\x07g\x02\x02\x83\x84\x07v\x02\x02\x84\x04\x03\x02\x02\x02\x85" +
    "\x86\x07k\x02\x02\x86\x87\x07p\x02\x02\x87\x06\x03\x02\x02\x02\x88\x89" +
    "\x07g\x02\x02\x89\x8A\x07p\x02\x02\x8A\x8B\x07f\x02\x02\x8B\b\x03\x02" +
    "\x02\x02\x8C\x8D\x07k\x02\x02\x8D\x8E\x07h\x02\x02\x8E\n\x03\x02\x02\x02" +
    "\x8F\x90\x07v\x02\x02\x90\x91\x07j\x02\x02\x91\x92\x07g\x02\x02\x92\x93" +
    "\x07p\x02\x02\x93\f\x03\x02\x02\x02\x94\x95\x07g\x02\x02\x95\x96\x07n" +
    "\x02\x02\x96\x97\x07u\x02\x02\x97\x98\x07g\x02\x02\x98\x0E\x03\x02\x02" +
    "\x02\x99\x9A\x07e\x02\x02\x9A\x9B\x07c\x02\x02\x9B\x9C\x07u\x02\x02\x9C" +
    "\x9D\x07g\x02\x02\x9D\x10\x03\x02\x02\x02\x9E\x9F\x07q\x02\x02\x9F\xA0" +
    "\x07h\x02\x02\xA0\x12\x03\x02\x02\x02\xA1\xA2\x07h\x02\x02\xA2\xA3\x07" +
    "p\x02\x02\xA3\x14\x03\x02\x02\x02\xA4\xA5\x07?\x02\x02\xA5\xA6\x07@\x02" +
    "\x02\xA6\x16\x03\x02\x02\x02\xA7\xA8\x07~\x02\x02\xA8\x18\x03\x02\x02" +
    "\x02\xA9\xAA\x07/\x02\x02\xAA\xAB\x07@\x02\x02\xAB\x1A\x03\x02\x02\x02" +
    "\xAC\xAD\x07x\x02\x02\xAD\xAE\x07c\x02\x02\xAE\xAF\x07n\x02\x02\xAF\x1C" +
    "\x03\x02\x02\x02\xB0\xB1\x07h\x02\x02\xB1\xB2\x07w\x02\x02\xB2\xB3\x07" +
    "p\x02\x02\xB3\x1E\x03\x02\x02\x02\xB4\xB5\x07n\x02\x02\xB5\xB6\x07q\x02" +
    "\x02\xB6\xB7\x07e\x02\x02\xB7\xB8\x07c\x02\x02\xB8\xB9\x07n\x02\x02\xB9" +
    " \x03\x02\x02\x02\xBA\xBC\t\x02\x02\x02\xBB\xBA\x03\x02\x02\x02\xBC\xBD" +
    "\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF" +
    "\x03\x02\x02\x02\xBF\xC0\b\x11\x02\x02\xC0\"\x03\x02\x02\x02\xC1\xC2\x07" +
    "*\x02\x02\xC2\xC3\x07,\x02\x02\xC3\xC7\x03\x02\x02\x02\xC4\xC6\v\x02\x02" +
    "\x02\xC5\xC4\x03\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC8\x03\x02\x02" +
    "\x02\xC7\xC5\x03\x02\x02\x02\xC8\xCA\x03\x02\x02\x02\xC9\xC7\x03\x02\x02" +
    "\x02\xCA\xCB\x07,\x02\x02\xCB\xCC\x07+\x02\x02\xCC\xCD\x03\x02\x02\x02" +
    "\xCD\xCE\b\x12\x02\x02\xCE$\x03\x02\x02\x02\xCF\xD1\x07\x80\x02\x02\xD0" +
    "\xCF\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2" +
    "\xD3\x05/\x18\x02\xD3&\x03\x02\x02\x02\xD4\xD6\x07\x80\x02\x02\xD5\xD4" +
    "\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8" +
    "\x05/\x18\x02\xD8\xD9\x070\x02\x02\xD9\xDA\x05/\x18\x02\xDA(\x03\x02\x02" +
    "\x02\xDB\xDC\x07%\x02\x02\xDC\xDD\x07$\x02\x02\xDD\xDE\x03\x02\x02\x02" +
    "\xDE\xDF\x057\x1C\x02\xDF\xE0\x07$\x02\x02\xE0*\x03\x02\x02\x02\xE1\xE5" +
    "\x07$\x02\x02\xE2\xE4\x057\x1C\x02\xE3\xE2\x03\x02\x02\x02\xE4\xE7\x03" +
    "\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE8\x03" +
    "\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xE9\x07$\x02\x02\xE9,\x03\x02" +
    "\x02\x02\xEA\xEB\t\x03\x02\x02\xEB.\x03\x02\x02\x02\xEC\xEE\x05-\x17\x02" +
    "\xED\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02" +
    "\xEF\xF0\x03\x02\x02\x02\xF00\x03\x02\x02\x02\xF1\xF2\t\x04\x02\x02\xF2" +
    "2\x03\x02\x02\x02\xF3\xF4\x07^\x02\x02\xF4\xF5\t\x05\x02\x02\xF54\x03" +
    "\x02\x02\x02\xF6\xF7\n\x06\x02\x02\xF76\x03\x02\x02\x02\xF8\xFB\x053\x1A" +
    "\x02\xF9\xFB\x055\x1B\x02\xFA\xF8\x03\x02\x02\x02\xFA\xF9\x03\x02\x02" +
    "\x02\xFB8\x03\x02\x02\x02\xFC\xFD\x07v\x02\x02\xFD\xFE\x07t\x02\x02\xFE" +
    "\xFF\x07w\x02\x02\xFF\u0100\x07g\x02\x02\u0100:\x03\x02\x02\x02\u0101" +
    "\u0102\x07h\x02\x02\u0102\u0103\x07c\x02\x02\u0103\u0104\x07n\x02\x02" +
    "\u0104\u0105\x07u\x02\x02\u0105\u0106\x07g\x02\x02\u0106<\x03\x02\x02" +
    "\x02\u0107\u0108\x07*\x02\x02\u0108>\x03\x02\x02\x02\u0109\u010A\x07+" +
    "\x02\x02\u010A@\x03\x02\x02\x02\u010B\u010C\x07]\x02\x02\u010CB\x03\x02" +
    "\x02\x02\u010D\u010E\x07_\x02\x02\u010ED\x03\x02\x02\x02\u010F\u0110\x07" +
    "t\x02\x02\u0110\u0111\x07g\x02\x02\u0111\u0112\x07e\x02\x02\u0112F\x03" +
    "\x02\x02\x02\u0113\u0114\x07c\x02\x02\u0114\u0115\x07p\x02\x02\u0115\u0116" +
    "\x07f\x02\x02\u0116H\x03\x02\x02\x02\u0117\u0118\x07=\x02\x02\u0118J\x03" +
    "\x02\x02\x02\u0119\u011A\x07<\x02\x02\u011AL\x03\x02\x02\x02\u011B\u011C" +
    "\x07.\x02\x02\u011CN\x03\x02\x02\x02\u011D\u011E\x07*\x02\x02\u011E\u011F" +
    "\x07+\x02\x02\u011FP\x03\x02\x02\x02\u0120\u0121\x07a\x02\x02\u0121R\x03" +
    "\x02\x02\x02\u0122\u0123\x071\x02\x02\u0123T\x03\x02\x02\x02\u0124\u0125" +
    "\x07f\x02\x02\u0125\u0126\x07k\x02\x02\u0126\u0127\x07x\x02\x02\u0127" +
    "V\x03\x02\x02\x02\u0128\u0129\x07o\x02\x02\u0129\u012A\x07q\x02\x02\u012A" +
    "\u012B\x07f\x02\x02\u012BX\x03\x02\x02\x02\u012C\u012D\x07,\x02\x02\u012D" +
    "\u012E\x070\x02\x02\u012EZ\x03\x02\x02\x02\u012F\u0130\x07,\x02\x02\u0130" +
    "\\\x03\x02\x02\x02\u0131\u0132\x07-\x02\x02\u0132\u0133\x070\x02\x02\u0133" +
    "^\x03\x02\x02\x02\u0134\u0135\x07-\x02\x02\u0135`\x03\x02\x02\x02\u0136" +
    "\u0137\x07/\x02\x02\u0137\u0138\x070\x02\x02\u0138b\x03\x02\x02\x02\u0139" +
    "\u013A\x07/\x02\x02\u013Ad\x03\x02\x02\x02\u013B\u013C\x07`\x02\x02\u013C" +
    "f\x03\x02\x02\x02\u013D\u013E\x07<\x02\x02\u013E\u013F\x07<\x02\x02\u013F" +
    "h\x03\x02\x02\x02\u0140\u0141\x07B\x02\x02\u0141j\x03\x02\x02\x02\u0142" +
    "\u0143\x07?\x02\x02\u0143l\x03\x02\x02\x02\u0144\u0145\x07>\x02\x02\u0145" +
    "\u0146\x07@\x02\x02\u0146n\x03\x02\x02\x02\u0147\u0148\x07>\x02\x02\u0148" +
    "p\x03\x02\x02\x02\u0149\u014A\x07@\x02\x02\u014Ar\x03\x02\x02\x02\u014B" +
    "\u014C\x07>\x02\x02\u014C\u014D\x07?\x02\x02\u014Dt\x03\x02\x02\x02\u014E" +
    "\u014F\x07@\x02\x02\u014F\u0150\x07?\x02\x02\u0150v\x03\x02\x02\x02\u0151" +
    "\u0152\x07c\x02\x02\u0152\u0153\x07p\x02\x02\u0153\u0154\x07f\x02\x02" +
    "\u0154\u0155\x07c\x02\x02\u0155\u0156\x07n\x02\x02\u0156\u0157\x07u\x02" +
    "\x02\u0157\u0158\x07q\x02\x02\u0158x\x03\x02\x02\x02\u0159\u015A\x07q" +
    "\x02\x02\u015A\u015B\x07t\x02\x02\u015B\u015C\x07g\x02\x02\u015C\u015D" +
    "\x07n\x02\x02\u015D\u015E\x07u\x02\x02\u015E\u015F\x07g\x02\x02\u015F" +
    "z\x03\x02\x02\x02\u0160\u0161\x07)\x02\x02\u0161|\x03\x02\x02\x02\u0162" +
    "\u0168\x051\x19\x02\u0163\u0167\x051\x19\x02\u0164\u0167\x05-\x17\x02" +
    "\u0165\u0167\t\x07\x02\x02\u0166\u0163\x03\x02\x02\x02\u0166\u0164\x03" +
    "\x02\x02\x02\u0166\u0165\x03\x02\x02\x02\u0167\u016A\x03\x02\x02\x02\u0168" +
    "\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u0171\x03\x02" +
    "\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B\u016D\t\b\x02\x02\u016C\u016B" +
    "\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02" +
    "\u016E\u016F\x03\x02\x02\x02\u016F\u0171\x03\x02\x02\x02\u0170\u0162\x03" +
    "\x02\x02\x02\u0170\u016C\x03\x02\x02\x02\u0171~\x03\x02\x02\x02\u0172" +
    "\u0179\x05{>\x02\u0173\u0178\x051\x19\x02\u0174\u0178\x05-\x17\x02\u0175" +
    "\u0178\x05{>\x02\u0176\u0178\x05Q)\x02\u0177\u0173\x03\x02\x02\x02\u0177" +
    "\u0174\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0176\x03\x02" +
    "\x02\x02\u0178\u017B\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u0179" +
    "\u017A\x03\x02\x02\x02\u017A\u0188\x03\x02\x02\x02\u017B\u0179\x03\x02" +
    "\x02\x02\u017C\u017D\x05{>\x02\u017D\u0184\x05{>\x02\u017E\u0183\x051" +
    "\x19\x02\u017F\u0183\x05-\x17\x02\u0180\u0183\x05{>\x02\u0181\u0183\x05" +
    "Q)\x02\u0182\u017E\x03\x02\x02\x02\u0182\u017F\x03\x02\x02\x02\u0182\u0180" +
    "\x03\x02\x02\x02\u0182\u0181\x03\x02\x02\x02\u0183\u0186\x03\x02\x02\x02" +
    "\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0188\x03" +
    "\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187\u0172\x03\x02\x02\x02\u0187" +
    "\u017C\x03\x02\x02\x02\u0188\x80\x03\x02\x02\x02\x13\x02\xBD\xC7\xD0\xD5" +
    "\xE5\xEF\xFA\u0166\u0168\u016E\u0170\u0177\u0179\u0182\u0184\u0187\x03" +
    "\b\x02\x02";
//# sourceMappingURL=SmlLexer.js.map