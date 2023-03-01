// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class SmlLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly WHITESPACE = 8;
	public static readonly INT = 9;
	public static readonly FLOAT = 10;
	public static readonly CHAR = 11;
	public static readonly STRING = 12;
	public static readonly TRUE = 13;
	public static readonly FALSE = 14;
	public static readonly LPAREN = 15;
	public static readonly RPAREN = 16;
	public static readonly REC = 17;
	public static readonly AND = 18;
	public static readonly SEMICOLON = 19;
	public static readonly SLASH = 20;
	public static readonly DIV = 21;
	public static readonly MOD = 22;
	public static readonly STAR = 23;
	public static readonly PLUS = 24;
	public static readonly MINUS = 25;
	public static readonly CARET = 26;
	public static readonly CONS = 27;
	public static readonly AT = 28;
	public static readonly EQ = 29;
	public static readonly NEQ = 30;
	public static readonly LT = 31;
	public static readonly GT = 32;
	public static readonly LTE = 33;
	public static readonly GTE = 34;
	public static readonly ID = 35;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "WHITESPACE", 
		"INT", "FLOAT", "CHAR", "STRING", "DIGIT", "NUM", "LETTER", "ESC", "SAFECODEPOINT", 
		"ASCII", "TRUE", "FALSE", "LPAREN", "RPAREN", "REC", "AND", "SEMICOLON", 
		"SLASH", "DIV", "MOD", "STAR", "PLUS", "MINUS", "CARET", "CONS", "AT", 
		"EQ", "NEQ", "LT", "GT", "LTE", "GTE", "ID",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'let'", "'in'", "'end'", "'if'", "'then'", "'else'", "'val'", 
		undefined, undefined, undefined, undefined, undefined, "'true'", "'false'", 
		"'('", "')'", "'rec'", "'and'", "';'", "'/'", "'div'", "'mod'", "'*'", 
		"'+'", "'-'", "'^'", "'::'", "'@'", "'='", "'<>'", "'<'", "'>'", "'<='", 
		"'>='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "WHITESPACE", "INT", "FLOAT", "CHAR", "STRING", "TRUE", "FALSE", 
		"LPAREN", "RPAREN", "REC", "AND", "SEMICOLON", "SLASH", "DIV", "MOD", 
		"STAR", "PLUS", "MINUS", "CARET", "CONS", "AT", "EQ", "NEQ", "LT", "GT", 
		"LTE", "GTE", "ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SmlLexer._LITERAL_NAMES, SmlLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SmlLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SmlLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Sml.g4"; }

	// @Override
	public get ruleNames(): string[] { return SmlLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SmlLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return SmlLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return SmlLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02%\xF4\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t" +
		"\x06\ts\n\t\r\t\x0E\tt\x03\t\x03\t\x03\n\x05\nz\n\n\x03\n\x03\n\x03\v" +
		"\x05\v\x7F\n\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x07\r\x8D\n\r\f\r\x0E\r\x90\v\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0F\x06\x0F\x97\n\x0F\r\x0F\x0E\x0F\x98\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13\xA4\n\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03\"\x03#\x03#\x03" +
		"$\x03$\x03%\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x03)\x03)\x03" +
		")\x03*\x03*\x03*\x03*\x07*\xE9\n*\f*\x0E*\xEC\v*\x03*\x06*\xEF\n*\r*\x0E" +
		"*\xF0\x05*\xF3\n*\x02\x02\x02+\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
		"\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02" +
		"\r\x19\x02\x0E\x1B\x02\x02\x1D\x02\x02\x1F\x02\x02!\x02\x02#\x02\x02%" +
		"\x02\x02\'\x02\x0F)\x02\x10+\x02\x11-\x02\x12/\x02\x131\x02\x143\x02\x15" +
		"5\x02\x167\x02\x179\x02\x18;\x02\x19=\x02\x1A?\x02\x1BA\x02\x1CC\x02\x1D" +
		"E\x02\x1EG\x02\x1FI\x02 K\x02!M\x02\"O\x02#Q\x02$S\x02%\x03\x02\t\x05" +
		"\x02\v\f\x0F\x0F\"\"\x03\x022;\x04\x02C\\c|\n\x02$$11^^ddhhppttvv\x05" +
		"\x02\x02!$$^^\x04\x02))aa\x0E\x02##%(,-//11<<>B^^``bb~~\x80\x80\x02\xF8" +
		"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02" +
		"\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02" +
		"\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02" +
		"\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02" +
		"\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03" +
		"\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02" +
		"\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02" +
		";\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02" +
		"\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02" +
		"\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03" +
		"\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x03U\x03\x02\x02" +
		"\x02\x05Y\x03\x02\x02\x02\x07\\\x03\x02\x02\x02\t`\x03\x02\x02\x02\vc" +
		"\x03\x02\x02\x02\rh\x03\x02\x02\x02\x0Fm\x03\x02\x02\x02\x11r\x03\x02" +
		"\x02\x02\x13y\x03\x02\x02\x02\x15~\x03\x02\x02\x02\x17\x84\x03\x02\x02" +
		"\x02\x19\x8A\x03\x02\x02\x02\x1B\x93\x03\x02\x02\x02\x1D\x96\x03\x02\x02" +
		"\x02\x1F\x9A\x03\x02\x02\x02!\x9C\x03\x02\x02\x02#\x9F\x03\x02\x02\x02" +
		"%\xA3\x03\x02\x02\x02\'\xA5\x03\x02\x02\x02)\xAA\x03\x02\x02\x02+\xB0" +
		"\x03\x02\x02\x02-\xB2\x03\x02\x02\x02/\xB4\x03\x02\x02\x021\xB8\x03\x02" +
		"\x02\x023\xBC\x03\x02\x02\x025\xBE\x03\x02\x02\x027\xC0\x03\x02\x02\x02" +
		"9\xC4\x03\x02\x02\x02;\xC8\x03\x02\x02\x02=\xCA\x03\x02\x02\x02?\xCC\x03" +
		"\x02\x02\x02A\xCE\x03\x02\x02\x02C\xD0\x03\x02\x02\x02E\xD3\x03\x02\x02" +
		"\x02G\xD5\x03\x02\x02\x02I\xD7\x03\x02\x02\x02K\xDA\x03\x02\x02\x02M\xDC" +
		"\x03\x02\x02\x02O\xDE\x03\x02\x02\x02Q\xE1\x03\x02\x02\x02S\xF2\x03\x02" +
		"\x02\x02UV\x07n\x02\x02VW\x07g\x02\x02WX\x07v\x02\x02X\x04\x03\x02\x02" +
		"\x02YZ\x07k\x02\x02Z[\x07p\x02\x02[\x06\x03\x02\x02\x02\\]\x07g\x02\x02" +
		"]^\x07p\x02\x02^_\x07f\x02\x02_\b\x03\x02\x02\x02`a\x07k\x02\x02ab\x07" +
		"h\x02\x02b\n\x03\x02\x02\x02cd\x07v\x02\x02de\x07j\x02\x02ef\x07g\x02" +
		"\x02fg\x07p\x02\x02g\f\x03\x02\x02\x02hi\x07g\x02\x02ij\x07n\x02\x02j" +
		"k\x07u\x02\x02kl\x07g\x02\x02l\x0E\x03\x02\x02\x02mn\x07x\x02\x02no\x07" +
		"c\x02\x02op\x07n\x02\x02p\x10\x03\x02\x02\x02qs\t\x02\x02\x02rq\x03\x02" +
		"\x02\x02st\x03\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x03\x02" +
		"\x02\x02vw\b\t\x02\x02w\x12\x03\x02\x02\x02xz\x07\x80\x02\x02yx\x03\x02" +
		"\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x05\x1D\x0F\x02|\x14\x03" +
		"\x02\x02\x02}\x7F\x07\x80\x02\x02~}\x03\x02\x02\x02~\x7F\x03\x02\x02\x02" +
		"\x7F\x80\x03\x02\x02\x02\x80\x81\x05\x1D\x0F\x02\x81\x82\x070\x02\x02" +
		"\x82\x83\x05\x1D\x0F\x02\x83\x16\x03\x02\x02\x02\x84\x85\x07%\x02\x02" +
		"\x85\x86\x07$\x02\x02\x86\x87\x03\x02\x02\x02\x87\x88\x05%\x13\x02\x88" +
		"\x89\x07$\x02\x02\x89\x18\x03\x02\x02\x02\x8A\x8E\x07$\x02\x02\x8B\x8D" +
		"\x05%\x13\x02\x8C\x8B\x03\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C" +
		"\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x91\x03\x02\x02\x02\x90\x8E" +
		"\x03\x02\x02\x02\x91\x92\x07$\x02\x02\x92\x1A\x03\x02\x02\x02\x93\x94" +
		"\t\x03\x02\x02\x94\x1C\x03\x02\x02\x02\x95\x97\x05\x1B\x0E\x02\x96\x95" +
		"\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99" +
		"\x03\x02\x02\x02\x99\x1E\x03\x02\x02\x02\x9A\x9B\t\x04\x02\x02\x9B \x03" +
		"\x02\x02\x02\x9C\x9D\x07^\x02\x02\x9D\x9E\t\x05\x02\x02\x9E\"\x03\x02" +
		"\x02\x02\x9F\xA0\n\x06\x02\x02\xA0$\x03\x02\x02\x02\xA1\xA4\x05!\x11\x02" +
		"\xA2\xA4\x05#\x12\x02\xA3\xA1\x03\x02\x02\x02\xA3\xA2\x03\x02\x02\x02" +
		"\xA4&\x03\x02\x02\x02\xA5\xA6\x07v\x02\x02\xA6\xA7\x07t\x02\x02\xA7\xA8" +
		"\x07w\x02\x02\xA8\xA9\x07g\x02\x02\xA9(\x03\x02\x02\x02\xAA\xAB\x07h\x02" +
		"\x02\xAB\xAC\x07c\x02\x02\xAC\xAD\x07n\x02\x02\xAD\xAE\x07u\x02\x02\xAE" +
		"\xAF\x07g\x02\x02\xAF*\x03\x02\x02\x02\xB0\xB1\x07*\x02\x02\xB1,\x03\x02" +
		"\x02\x02\xB2\xB3\x07+\x02\x02\xB3.\x03\x02\x02\x02\xB4\xB5\x07t\x02\x02" +
		"\xB5\xB6\x07g\x02\x02\xB6\xB7\x07e\x02\x02\xB70\x03\x02\x02\x02\xB8\xB9" +
		"\x07c\x02\x02\xB9\xBA\x07p\x02\x02\xBA\xBB\x07f\x02\x02\xBB2\x03\x02\x02" +
		"\x02\xBC\xBD\x07=\x02\x02\xBD4\x03\x02\x02\x02\xBE\xBF\x071\x02\x02\xBF" +
		"6\x03\x02\x02\x02\xC0\xC1\x07f\x02\x02\xC1\xC2\x07k\x02\x02\xC2\xC3\x07" +
		"x\x02\x02\xC38\x03\x02\x02\x02\xC4\xC5\x07o\x02\x02\xC5\xC6\x07q\x02\x02" +
		"\xC6\xC7\x07f\x02\x02\xC7:\x03\x02\x02\x02\xC8\xC9\x07,\x02\x02\xC9<\x03" +
		"\x02\x02\x02\xCA\xCB\x07-\x02\x02\xCB>\x03\x02\x02\x02\xCC\xCD\x07/\x02" +
		"\x02\xCD@\x03\x02\x02\x02\xCE\xCF\x07`\x02\x02\xCFB\x03\x02\x02\x02\xD0" +
		"\xD1\x07<\x02\x02\xD1\xD2\x07<\x02\x02\xD2D\x03\x02\x02\x02\xD3\xD4\x07" +
		"B\x02\x02\xD4F\x03\x02\x02\x02\xD5\xD6\x07?\x02\x02\xD6H\x03\x02\x02\x02" +
		"\xD7\xD8\x07>\x02\x02\xD8\xD9\x07@\x02\x02\xD9J\x03\x02\x02\x02\xDA\xDB" +
		"\x07>\x02\x02\xDBL\x03\x02\x02\x02\xDC\xDD\x07@\x02\x02\xDDN\x03\x02\x02" +
		"\x02\xDE\xDF\x07>\x02\x02\xDF\xE0\x07?\x02\x02\xE0P\x03\x02\x02\x02\xE1" +
		"\xE2\x07@\x02\x02\xE2\xE3\x07?\x02\x02\xE3R\x03\x02\x02\x02\xE4\xEA\x05" +
		"\x1F\x10\x02\xE5\xE9\x05\x1F\x10\x02\xE6\xE9\x05\x1B\x0E\x02\xE7\xE9\t" +
		"\x07\x02\x02\xE8\xE5\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE7\x03" +
		"\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03" +
		"\x02\x02\x02\xEB\xF3\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xED\xEF\t" +
		"\b\x02\x02\xEE\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xEE\x03" +
		"\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xE4\x03" +
		"\x02\x02\x02\xF2\xEE\x03\x02\x02\x02\xF3T\x03\x02\x02\x02\r\x02ty~\x8E" +
		"\x98\xA3\xE8\xEA\xF0\xF2\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SmlLexer.__ATN) {
			SmlLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SmlLexer._serializedATN));
		}

		return SmlLexer.__ATN;
	}

}

