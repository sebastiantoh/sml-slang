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
	public static readonly WHITESPACE = 1;
	public static readonly INT = 2;
	public static readonly FLOAT = 3;
	public static readonly CHAR = 4;
	public static readonly STRING = 5;
	public static readonly SLASH = 6;
	public static readonly DIV = 7;
	public static readonly MOD = 8;
	public static readonly STAR = 9;
	public static readonly PLUS = 10;
	public static readonly MINUS = 11;
	public static readonly CARET = 12;
	public static readonly CONS = 13;
	public static readonly AT = 14;
	public static readonly EQ = 15;
	public static readonly NEQ = 16;
	public static readonly LT = 17;
	public static readonly GT = 18;
	public static readonly LTE = 19;
	public static readonly GTE = 20;
	public static readonly ID = 21;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"WHITESPACE", "INT", "FLOAT", "CHAR", "STRING", "DIGIT", "NUM", "LETTER", 
		"ESC", "SAFECODEPOINT", "ASCII", "SLASH", "DIV", "MOD", "STAR", "PLUS", 
		"MINUS", "CARET", "CONS", "AT", "EQ", "NEQ", "LT", "GT", "LTE", "GTE", 
		"ID",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "'/'", 
		"'div'", "'mod'", "'*'", "'+'", "'-'", "'^'", "'::'", "'@'", "'='", "'<>'", 
		"'<'", "'>'", "'<='", "'>='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WHITESPACE", "INT", "FLOAT", "CHAR", "STRING", "SLASH", "DIV", 
		"MOD", "STAR", "PLUS", "MINUS", "CARET", "CONS", "AT", "EQ", "NEQ", "LT", 
		"GT", "LTE", "GTE", "ID",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x17\xA3\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x03\x02\x06\x02;\n\x02\r\x02\x0E\x02<\x03\x02\x03\x02\x03\x03\x05" +
		"\x03B\n\x03\x03\x03\x03\x03\x03\x04\x05\x04G\n\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x07\x06U\n\x06\f\x06\x0E\x06X\v\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\b\x06\b_\n\b\r\b\x0E\b`\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v" +
		"\x03\f\x03\f\x05\fl\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07" +
		"\x1C\x98\n\x1C\f\x1C\x0E\x1C\x9B\v\x1C\x03\x1C\x06\x1C\x9E\n\x1C\r\x1C" +
		"\x0E\x1C\x9F\x05\x1C\xA2\n\x1C\x02\x02\x02\x1D\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\x02\x0F\x02\x02\x11\x02\x02\x13" +
		"\x02\x02\x15\x02\x02\x17\x02\x02\x19\x02\b\x1B\x02\t\x1D\x02\n\x1F\x02" +
		"\v!\x02\f#\x02\r%\x02\x0E\'\x02\x0F)\x02\x10+\x02\x11-\x02\x12/\x02\x13" +
		"1\x02\x143\x02\x155\x02\x167\x02\x17\x03\x02\t\x05\x02\v\f\x0F\x0F\"\"" +
		"\x03\x022;\x04\x02C\\c|\n\x02$$11^^ddhhppttvv\x05\x02\x02!$$^^\x04\x02" +
		"))aa\x0E\x02##%(,-//11<<>B^^``bb~~\x80\x80\x02\xA7\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02" +
		"\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02" +
		"\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02" +
		")\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x03:\x03\x02\x02\x02\x05A\x03\x02\x02\x02\x07F\x03" +
		"\x02\x02\x02\tL\x03\x02\x02\x02\vR\x03\x02\x02\x02\r[\x03\x02\x02\x02" +
		"\x0F^\x03\x02\x02\x02\x11b\x03\x02\x02\x02\x13d\x03\x02\x02\x02\x15g\x03" +
		"\x02\x02\x02\x17k\x03\x02\x02\x02\x19m\x03\x02\x02\x02\x1Bo\x03\x02\x02" +
		"\x02\x1Ds\x03\x02\x02\x02\x1Fw\x03\x02\x02\x02!y\x03\x02\x02\x02#{\x03" +
		"\x02\x02\x02%}\x03\x02\x02\x02\'\x7F\x03\x02\x02\x02)\x82\x03\x02\x02" +
		"\x02+\x84\x03\x02\x02\x02-\x86\x03\x02\x02\x02/\x89\x03\x02\x02\x021\x8B" +
		"\x03\x02\x02\x023\x8D\x03\x02\x02\x025\x90\x03\x02\x02\x027\xA1\x03\x02" +
		"\x02\x029;\t\x02\x02\x02:9\x03\x02\x02\x02;<\x03\x02\x02\x02<:\x03\x02" +
		"\x02\x02<=\x03\x02\x02\x02=>\x03\x02\x02\x02>?\b\x02\x02\x02?\x04\x03" +
		"\x02\x02\x02@B\x07\x80\x02\x02A@\x03\x02\x02\x02AB\x03\x02\x02\x02BC\x03" +
		"\x02\x02\x02CD\x05\x0F\b\x02D\x06\x03\x02\x02\x02EG\x07\x80\x02\x02FE" +
		"\x03\x02\x02\x02FG\x03\x02\x02\x02GH\x03\x02\x02\x02HI\x05\x0F\b\x02I" +
		"J\x070\x02\x02JK\x05\x0F\b\x02K\b\x03\x02\x02\x02LM\x07%\x02\x02MN\x07" +
		"$\x02\x02NO\x03\x02\x02\x02OP\x05\x17\f\x02PQ\x07$\x02\x02Q\n\x03\x02" +
		"\x02\x02RV\x07$\x02\x02SU\x05\x17\f\x02TS\x03\x02\x02\x02UX\x03\x02\x02" +
		"\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02WY\x03\x02\x02\x02XV\x03\x02\x02" +
		"\x02YZ\x07$\x02\x02Z\f\x03\x02\x02\x02[\\\t\x03\x02\x02\\\x0E\x03\x02" +
		"\x02\x02]_\x05\r\x07\x02^]\x03\x02\x02\x02_`\x03\x02\x02\x02`^\x03\x02" +
		"\x02\x02`a\x03\x02\x02\x02a\x10\x03\x02\x02\x02bc\t\x04\x02\x02c\x12\x03" +
		"\x02\x02\x02de\x07^\x02\x02ef\t\x05\x02\x02f\x14\x03\x02\x02\x02gh\n\x06" +
		"\x02\x02h\x16\x03\x02\x02\x02il\x05\x13\n\x02jl\x05\x15\v\x02ki\x03\x02" +
		"\x02\x02kj\x03\x02\x02\x02l\x18\x03\x02\x02\x02mn\x071\x02\x02n\x1A\x03" +
		"\x02\x02\x02op\x07f\x02\x02pq\x07k\x02\x02qr\x07x\x02\x02r\x1C\x03\x02" +
		"\x02\x02st\x07o\x02\x02tu\x07q\x02\x02uv\x07f\x02\x02v\x1E\x03\x02\x02" +
		"\x02wx\x07,\x02\x02x \x03\x02\x02\x02yz\x07-\x02\x02z\"\x03\x02\x02\x02" +
		"{|\x07/\x02\x02|$\x03\x02\x02\x02}~\x07`\x02\x02~&\x03\x02\x02\x02\x7F" +
		"\x80\x07<\x02\x02\x80\x81\x07<\x02\x02\x81(\x03\x02\x02\x02\x82\x83\x07" +
		"B\x02\x02\x83*\x03\x02\x02\x02\x84\x85\x07?\x02\x02\x85,\x03\x02\x02\x02" +
		"\x86\x87\x07>\x02\x02\x87\x88\x07@\x02\x02\x88.\x03\x02\x02\x02\x89\x8A" +
		"\x07>\x02\x02\x8A0\x03\x02\x02\x02\x8B\x8C\x07@\x02\x02\x8C2\x03\x02\x02" +
		"\x02\x8D\x8E\x07>\x02\x02\x8E\x8F\x07?\x02\x02\x8F4\x03\x02\x02\x02\x90" +
		"\x91\x07@\x02\x02\x91\x92\x07?\x02\x02\x926\x03\x02\x02\x02\x93\x99\x05" +
		"\x11\t\x02\x94\x98\x05\x11\t\x02\x95\x98\x05\r\x07\x02\x96\x98\t\x07\x02" +
		"\x02\x97\x94\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x96\x03\x02\x02" +
		"\x02\x98\x9B\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02" +
		"\x02\x9A\xA2\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\x9E\t\b\x02\x02" +
		"\x9D\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02" +
		"\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x03\x02\x02\x02\xA1\x93\x03\x02\x02\x02" +
		"\xA1\x9D\x03\x02\x02\x02\xA28\x03\x02\x02\x02\r\x02<AFV`k\x97\x99\x9F" +
		"\xA1\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SmlLexer.__ATN) {
			SmlLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SmlLexer._serializedATN));
		}

		return SmlLexer.__ATN;
	}

}

