// Generated from ../Expression.g4 by ANTLR 4.6-SNAPSHOT


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


export class ExpressionLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly NUMBER = 24;
	public static readonly WHITESPACE = 25;
	public static readonly IDENTIFIER = 26;
	public static readonly NEWLINE = 27;
	public static readonly STRING = 28;
	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "LETTER", "DIGIT", 
		"NUMBER", "WHITESPACE", "IDENTIFIER", "NEWLINE", "STRING",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'!'", "'-'", "'+'", "'^'", "'*'", "'/'", "'%'", "'=='", "'!='", 
		"'<>'", "'&'", "'<'", "'<='", "'>'", "'>='", "'&&'", "'||'", "'('", "')'", 
		"'.'", "'['", "']'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "NUMBER", "WHITESPACE", "IDENTIFIER", 
		"NEWLINE", "STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ExpressionLexer._LITERAL_NAMES, ExpressionLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ExpressionLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ExpressionLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Expression.g4"; }

	// @Override
	public get ruleNames(): string[] { return ExpressionLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ExpressionLexer._serializedATN; }

	// @Override
	public get modeNames(): string[] { return ExpressionLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x1E\xAE\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x06\x1Bz\n\x1B\r" +
		"\x1B\x0E\x1B{\x03\x1B\x03\x1B\x06\x1B\x80\n\x1B\r\x1B\x0E\x1B\x81\x05" +
		"\x1B\x84\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x05\x1D" +
		"\x8C\n\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\x91\n\x1D\f\x1D\x0E\x1D\x94" +
		"\v\x1D\x03\x1E\x05\x1E\x97\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x07\x1F\x9F\n\x1F\f\x1F\x0E\x1F\xA2\v\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x07\x1F\xA7\n\x1F\f\x1F\x0E\x1F\xAA\v\x1F\x03\x1F\x05\x1F\xAD\n\x1F" +
		"\x02\x02\x02 \x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
		"\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E" +
		"\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02" +
		"\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x023\x02\x025\x02\x1A7\x02" +
		"\x1B9\x02\x1C;\x02\x1D=\x02\x1E\x03\x02\t\x04\x02C\\c|\x03\x022;\x04\x02" +
		"\v\v\"\"\x05\x02%&BBaa\x04\x02//aa\x03\x02))\x03\x02$$\xB6\x02\x03\x03" +
		"\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03" +
		"\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02" +
		"\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02" +
		"\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02" +
		"\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02" +
		"\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03" +
		"\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02" +
		"\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x03?\x03\x02\x02\x02\x05" +
		"A\x03\x02\x02\x02\x07C\x03\x02\x02\x02\tE\x03\x02\x02\x02\vG\x03\x02\x02" +
		"\x02\rI\x03\x02\x02\x02\x0FK\x03\x02\x02\x02\x11M\x03\x02\x02\x02\x13" +
		"P\x03\x02\x02\x02\x15S\x03\x02\x02\x02\x17V\x03\x02\x02\x02\x19X\x03\x02" +
		"\x02\x02\x1BZ\x03\x02\x02\x02\x1D]\x03\x02\x02\x02\x1F_\x03\x02\x02\x02" +
		"!b\x03\x02\x02\x02#e\x03\x02\x02\x02%h\x03\x02\x02\x02\'j\x03\x02\x02" +
		"\x02)l\x03\x02\x02\x02+n\x03\x02\x02\x02-p\x03\x02\x02\x02/r\x03\x02\x02" +
		"\x021t\x03\x02\x02\x023v\x03\x02\x02\x025y\x03\x02\x02\x027\x85\x03\x02" +
		"\x02\x029\x8B\x03\x02\x02\x02;\x96\x03\x02\x02\x02=\xAC\x03\x02\x02\x02" +
		"?@\x07#\x02\x02@\x04\x03\x02\x02\x02AB\x07/\x02\x02B\x06\x03\x02\x02\x02" +
		"CD\x07-\x02\x02D\b\x03\x02\x02\x02EF\x07`\x02\x02F\n\x03\x02\x02\x02G" +
		"H\x07,\x02\x02H\f\x03\x02\x02\x02IJ\x071\x02\x02J\x0E\x03\x02\x02\x02" +
		"KL\x07\'\x02\x02L\x10\x03\x02\x02\x02MN\x07?\x02\x02NO\x07?\x02\x02O\x12" +
		"\x03\x02\x02\x02PQ\x07#\x02\x02QR\x07?\x02\x02R\x14\x03\x02\x02\x02ST" +
		"\x07>\x02\x02TU\x07@\x02\x02U\x16\x03\x02\x02\x02VW\x07(\x02\x02W\x18" +
		"\x03\x02\x02\x02XY\x07>\x02\x02Y\x1A\x03\x02\x02\x02Z[\x07>\x02\x02[\\" +
		"\x07?\x02\x02\\\x1C\x03\x02\x02\x02]^\x07@\x02\x02^\x1E\x03\x02\x02\x02" +
		"_`\x07@\x02\x02`a\x07?\x02\x02a \x03\x02\x02\x02bc\x07(\x02\x02cd\x07" +
		"(\x02\x02d\"\x03\x02\x02\x02ef\x07~\x02\x02fg\x07~\x02\x02g$\x03\x02\x02" +
		"\x02hi\x07*\x02\x02i&\x03\x02\x02\x02jk\x07+\x02\x02k(\x03\x02\x02\x02" +
		"lm\x070\x02\x02m*\x03\x02\x02\x02no\x07]\x02\x02o,\x03\x02\x02\x02pq\x07" +
		"_\x02\x02q.\x03\x02\x02\x02rs\x07.\x02\x02s0\x03\x02\x02\x02tu\t\x02\x02" +
		"\x02u2\x03\x02\x02\x02vw\t\x03\x02\x02w4\x03\x02\x02\x02xz\x053\x1A\x02" +
		"yx\x03\x02\x02\x02z{\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02" +
		"|\x83\x03\x02\x02\x02}\x7F\x070\x02\x02~\x80\x053\x1A\x02\x7F~\x03\x02" +
		"\x02\x02\x80\x81\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02" +
		"\x02\x02\x82\x84\x03\x02\x02\x02\x83}\x03\x02\x02\x02\x83\x84\x03\x02" +
		"\x02\x02\x846\x03\x02\x02\x02\x85\x86\t\x04\x02\x02\x86\x87\x03\x02\x02" +
		"\x02\x87\x88\b\x1C\x02\x02\x888\x03\x02\x02\x02\x89\x8C\x051\x19\x02\x8A" +
		"\x8C\t\x05\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8A\x03\x02\x02\x02\x8C" +
		"\x92\x03\x02\x02\x02\x8D\x91\x051\x19\x02\x8E\x91\x053\x1A\x02\x8F\x91" +
		"\t\x06\x02\x02\x90\x8D\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x8F" +
		"\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93" +
		"\x03\x02\x02\x02\x93:\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x97" +
		"\x07\x0F\x02\x02\x96\x95\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x98" +
		"\x03\x02\x02\x02\x98\x99\x07\f\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B" +
		"\b\x1E\x02\x02\x9B<\x03\x02\x02\x02\x9C\xA0\x07)\x02\x02\x9D\x9F\n\x07" +
		"\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03\x02" +
		"\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\xA0\x03\x02" +
		"\x02\x02\xA3\xAD\x07)\x02\x02\xA4\xA8\x07$\x02\x02\xA5\xA7\n\b\x02\x02" +
		"\xA6\xA5\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02" +
		"\xA8\xA9\x03\x02\x02\x02\xA9\xAB\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02" +
		"\xAB\xAD\x07$\x02\x02\xAC\x9C\x03\x02\x02\x02\xAC\xA4\x03\x02\x02\x02" +
		"\xAD>\x03\x02\x02\x02\r\x02{\x81\x83\x8B\x90\x92\x96\xA0\xA8\xAC\x03\b" +
		"\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ExpressionLexer.__ATN) {
			ExpressionLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ExpressionLexer._serializedATN));
		}

		return ExpressionLexer.__ATN;
	}

}

