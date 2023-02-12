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
		"ESC", "SAFECODEPOINT", "ASCII",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WHITESPACE", "INT", "FLOAT", "CHAR", "STRING",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07M\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x06" +
		"\x02\x1B\n\x02\r\x02\x0E\x02\x1C\x03\x02\x03\x02\x03\x03\x05\x03\"\n\x03" +
		"\x03\x03\x03\x03\x03\x04\x05\x04\'\n\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x07\x06" +
		"5\n\x06\f\x06\x0E\x068\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x06" +
		"\b?\n\b\r\b\x0E\b@\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03" +
		"\f\x05\fL\n\f\x02\x02\x02\r\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
		"\x06\v\x02\x07\r\x02\x02\x0F\x02\x02\x11\x02\x02\x13\x02\x02\x15\x02\x02" +
		"\x17\x02\x02\x03\x02\x07\x05\x02\v\f\x0F\x0F\"\"\x03\x022;\x04\x02C\\" +
		"c|\n\x02$$11^^ddhhppttvv\x05\x02\x02!$$^^\x02L\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x03\x1A\x03\x02\x02\x02\x05!\x03\x02\x02\x02\x07" +
		"&\x03\x02\x02\x02\t,\x03\x02\x02\x02\v2\x03\x02\x02\x02\r;\x03\x02\x02" +
		"\x02\x0F>\x03\x02\x02\x02\x11B\x03\x02\x02\x02\x13D\x03\x02\x02\x02\x15" +
		"G\x03\x02\x02\x02\x17K\x03\x02\x02\x02\x19\x1B\t\x02\x02\x02\x1A\x19\x03" +
		"\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x1C\x1D\x03" +
		"\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x1F\b\x02\x02\x02\x1F\x04\x03" +
		"\x02\x02\x02 \"\x07\x80\x02\x02! \x03\x02\x02\x02!\"\x03\x02\x02\x02\"" +
		"#\x03\x02\x02\x02#$\x05\x0F\b\x02$\x06\x03\x02\x02\x02%\'\x07\x80\x02" +
		"\x02&%\x03\x02\x02\x02&\'\x03\x02\x02\x02\'(\x03\x02\x02\x02()\x05\x0F" +
		"\b\x02)*\x070\x02\x02*+\x05\x0F\b\x02+\b\x03\x02\x02\x02,-\x07%\x02\x02" +
		"-.\x07$\x02\x02./\x03\x02\x02\x02/0\x05\x17\f\x0201\x07$\x02\x021\n\x03" +
		"\x02\x02\x0226\x07$\x02\x0235\x05\x17\f\x0243\x03\x02\x02\x0258\x03\x02" +
		"\x02\x0264\x03\x02\x02\x0267\x03\x02\x02\x0279\x03\x02\x02\x0286\x03\x02" +
		"\x02\x029:\x07$\x02\x02:\f\x03\x02\x02\x02;<\t\x03\x02\x02<\x0E\x03\x02" +
		"\x02\x02=?\x05\r\x07\x02>=\x03\x02\x02\x02?@\x03\x02\x02\x02@>\x03\x02" +
		"\x02\x02@A\x03\x02\x02\x02A\x10\x03\x02\x02\x02BC\t\x04\x02\x02C\x12\x03" +
		"\x02\x02\x02DE\x07^\x02\x02EF\t\x05\x02\x02F\x14\x03\x02\x02\x02GH\n\x06" +
		"\x02\x02H\x16\x03\x02\x02\x02IL\x05\x13\n\x02JL\x05\x15\v\x02KI\x03\x02" +
		"\x02\x02KJ\x03\x02\x02\x02L\x18\x03\x02\x02\x02\t\x02\x1C!&6@K\x03\b\x02" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SmlLexer.__ATN) {
			SmlLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SmlLexer._serializedATN));
		}

		return SmlLexer.__ATN;
	}

}

