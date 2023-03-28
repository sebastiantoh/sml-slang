"use strict";
// Generated from src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgContext = exports.FunmatchContext = exports.FunmatchesContext = exports.FunbindContext = exports.ValbindContext = exports.DecSequenceContext = exports.LocalDeclContext = exports.FunDeclContext = exports.ValueDeclContext = exports.DecContext = exports.TypeFunctionContext = exports.TypeParenthesesContext = exports.TypeConstructorContext = exports.TypeVariableContext = exports.TypContext = exports.PatTypeAnnotationContext = exports.PatListContext = exports.PatParenthesesContext = exports.PatInfixConstructionContext = exports.PatVariableContext = exports.PatUnitContext = exports.PatWildcardContext = exports.PatConstantContext = exports.PatContext = exports.MatchesContext = exports.PatmatchContext = exports.FunctionContext = exports.CaseAnalysisContext = exports.ConditionalContext = exports.DisjunctionContext = exports.ConjunctionContext = exports.ExpTypeAnnotationContext = exports.LetExpressionContext = exports.ExpSequenceContext = exports.ListContext = exports.ParenthesesContext = exports.InfixApplicationContext = exports.ApplicationContext = exports.ExpVariableContext = exports.ConstantContext = exports.ExpContext = exports.UnitContext = exports.BooleanContext = exports.StringContext = exports.CharacterContext = exports.RealContext = exports.IntegerContext = exports.ConContext = exports.SmlParser = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class SmlParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return SmlParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "Sml.g4"; }
    // @Override
    get ruleNames() { return SmlParser.ruleNames; }
    // @Override
    get serializedATN() { return SmlParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(SmlParser._ATN, this);
    }
    // @RuleVersion(0)
    con() {
        let _localctx = new ConContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SmlParser.RULE_con);
        let _la;
        try {
            this.state = 32;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SmlParser.INT:
                    _localctx = new IntegerContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 26;
                        this.match(SmlParser.INT);
                    }
                    break;
                case SmlParser.REAL:
                    _localctx = new RealContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 27;
                        this.match(SmlParser.REAL);
                    }
                    break;
                case SmlParser.CHAR:
                    _localctx = new CharacterContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 28;
                        this.match(SmlParser.CHAR);
                    }
                    break;
                case SmlParser.STRING:
                    _localctx = new StringContext(_localctx);
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 29;
                        this.match(SmlParser.STRING);
                    }
                    break;
                case SmlParser.TRUE:
                case SmlParser.FALSE:
                    _localctx = new BooleanContext(_localctx);
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 30;
                        _la = this._input.LA(1);
                        if (!(_la === SmlParser.TRUE || _la === SmlParser.FALSE)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                    break;
                case SmlParser.UNIT:
                    _localctx = new UnitContext(_localctx);
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 31;
                        this.match(SmlParser.UNIT);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 2;
        this.enterRecursionRule(_localctx, 2, SmlParser.RULE_exp, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 90;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                        {
                            _localctx = new ConstantContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 35;
                            this.con();
                        }
                        break;
                    case 2:
                        {
                            _localctx = new ExpVariableContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 36;
                            _localctx._id = this.match(SmlParser.ID);
                        }
                        break;
                    case 3:
                        {
                            _localctx = new ParenthesesContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 37;
                            this.match(SmlParser.LPAREN);
                            this.state = 38;
                            this.exp(0);
                            this.state = 39;
                            this.match(SmlParser.RPAREN);
                        }
                        break;
                    case 4:
                        {
                            _localctx = new ListContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 41;
                            this.match(SmlParser.LSQUARE);
                            this.state = 50;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.T__0) | (1 << SmlParser.T__3) | (1 << SmlParser.T__6) | (1 << SmlParser.T__8) | (1 << SmlParser.INT) | (1 << SmlParser.REAL) | (1 << SmlParser.CHAR) | (1 << SmlParser.STRING) | (1 << SmlParser.TRUE) | (1 << SmlParser.FALSE) | (1 << SmlParser.LPAREN) | (1 << SmlParser.LSQUARE))) !== 0) || _la === SmlParser.UNIT || _la === SmlParser.ID) {
                                {
                                    this.state = 42;
                                    this.exp(0);
                                    this.state = 47;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === SmlParser.COMMA) {
                                        {
                                            {
                                                this.state = 43;
                                                this.match(SmlParser.COMMA);
                                                this.state = 44;
                                                this.exp(0);
                                            }
                                        }
                                        this.state = 49;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 52;
                            this.match(SmlParser.RSQUARE);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new ExpSequenceContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 53;
                            this.match(SmlParser.LPAREN);
                            this.state = 54;
                            this.exp(0);
                            this.state = 57;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 55;
                                        this.match(SmlParser.SEMICOLON);
                                        this.state = 56;
                                        this.exp(0);
                                    }
                                }
                                this.state = 59;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === SmlParser.SEMICOLON);
                            this.state = 61;
                            this.match(SmlParser.RPAREN);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new LetExpressionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 63;
                            this.match(SmlParser.T__0);
                            this.state = 64;
                            this.decSequence();
                            this.state = 65;
                            this.match(SmlParser.T__1);
                            this.state = 66;
                            this.exp(0);
                            this.state = 71;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === SmlParser.SEMICOLON) {
                                {
                                    {
                                        this.state = 67;
                                        this.match(SmlParser.SEMICOLON);
                                        this.state = 68;
                                        this.exp(0);
                                    }
                                }
                                this.state = 73;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 74;
                            this.match(SmlParser.T__2);
                        }
                        break;
                    case 7:
                        {
                            _localctx = new ConditionalContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 76;
                            this.match(SmlParser.T__3);
                            this.state = 77;
                            _localctx._pred = this.exp(0);
                            this.state = 78;
                            this.match(SmlParser.T__4);
                            this.state = 79;
                            _localctx._cons = this.exp(0);
                            this.state = 80;
                            this.match(SmlParser.T__5);
                            this.state = 81;
                            _localctx._alt = this.exp(3);
                        }
                        break;
                    case 8:
                        {
                            _localctx = new CaseAnalysisContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 83;
                            this.match(SmlParser.T__6);
                            this.state = 84;
                            this.exp(0);
                            this.state = 85;
                            this.match(SmlParser.T__7);
                            this.state = 86;
                            this.matches();
                        }
                        break;
                    case 9:
                        {
                            _localctx = new FunctionContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 88;
                            this.match(SmlParser.T__8);
                            this.state = 89;
                            this.matches();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 120;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 118;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._fn = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 92;
                                        if (!(this.precpred(this._ctx, 16))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
                                        }
                                        this.state = 93;
                                        _localctx._arg = this.exp(17);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 94;
                                        if (!(this.precpred(this._ctx, 15))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
                                        }
                                        this.state = 95;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (SmlParser.SLASH - 35)) | (1 << (SmlParser.DIV - 35)) | (1 << (SmlParser.MOD - 35)) | (1 << (SmlParser.STAR - 35)))) !== 0))) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 96;
                                        _localctx._op2 = this.exp(16);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 97;
                                        if (!(this.precpred(this._ctx, 14))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
                                        }
                                        this.state = 98;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (SmlParser.PLUS - 39)) | (1 << (SmlParser.MINUS - 39)) | (1 << (SmlParser.CARET - 39)))) !== 0))) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 99;
                                        _localctx._op2 = this.exp(15);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 100;
                                        if (!(this.precpred(this._ctx, 13))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
                                        }
                                        this.state = 101;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === SmlParser.CONS || _la === SmlParser.AT)) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 102;
                                        _localctx._op2 = this.exp(13);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 103;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 104;
                                        _localctx._id = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (SmlParser.EQ - 44)) | (1 << (SmlParser.NEQ - 44)) | (1 << (SmlParser.LT - 44)) | (1 << (SmlParser.GT - 44)) | (1 << (SmlParser.LTE - 44)) | (1 << (SmlParser.GTE - 44)))) !== 0))) {
                                            _localctx._id = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 105;
                                        _localctx._op2 = this.exp(13);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new InfixApplicationContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 106;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 107;
                                        _localctx._id = this.match(SmlParser.ID);
                                        this.state = 108;
                                        _localctx._op2 = this.exp(12);
                                    }
                                    break;
                                case 7:
                                    {
                                        _localctx = new ConjunctionContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 109;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 110;
                                        this.match(SmlParser.ANDALSO);
                                        this.state = 111;
                                        _localctx._op2 = this.exp(6);
                                    }
                                    break;
                                case 8:
                                    {
                                        _localctx = new DisjunctionContext(new ExpContext(_parentctx, _parentState));
                                        _localctx._op1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 112;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 113;
                                        this.match(SmlParser.ORELSE);
                                        this.state = 114;
                                        _localctx._op2 = this.exp(5);
                                    }
                                    break;
                                case 9:
                                    {
                                        _localctx = new ExpTypeAnnotationContext(new ExpContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_exp);
                                        this.state = 115;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 116;
                                        this.match(SmlParser.COLON);
                                        this.state = 117;
                                        this.typ(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 122;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    patmatch() {
        let _localctx = new PatmatchContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SmlParser.RULE_patmatch);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 123;
                this.pat(0);
                this.state = 124;
                this.match(SmlParser.T__9);
                this.state = 125;
                this.exp(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    matches() {
        let _localctx = new MatchesContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SmlParser.RULE_matches);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 127;
                this.patmatch();
                this.state = 132;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 128;
                                this.match(SmlParser.T__10);
                                this.state = 129;
                                this.patmatch();
                            }
                        }
                    }
                    this.state = 134;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    pat(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new PatContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 8;
        this.enterRecursionRule(_localctx, 8, SmlParser.RULE_pat, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 156;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                    case 1:
                        {
                            _localctx = new PatConstantContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 136;
                            this.con();
                        }
                        break;
                    case 2:
                        {
                            _localctx = new PatWildcardContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 137;
                            this.match(SmlParser.UNDERSCORE);
                        }
                        break;
                    case 3:
                        {
                            _localctx = new PatUnitContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 138;
                            this.match(SmlParser.UNIT);
                        }
                        break;
                    case 4:
                        {
                            _localctx = new PatVariableContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 139;
                            _localctx._id = this.match(SmlParser.ID);
                        }
                        break;
                    case 5:
                        {
                            _localctx = new PatParenthesesContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 140;
                            this.match(SmlParser.LPAREN);
                            this.state = 141;
                            this.pat(0);
                            this.state = 142;
                            this.match(SmlParser.RPAREN);
                        }
                        break;
                    case 6:
                        {
                            _localctx = new PatListContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 144;
                            this.match(SmlParser.LSQUARE);
                            this.state = 153;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.INT) | (1 << SmlParser.REAL) | (1 << SmlParser.CHAR) | (1 << SmlParser.STRING) | (1 << SmlParser.TRUE) | (1 << SmlParser.FALSE) | (1 << SmlParser.LPAREN) | (1 << SmlParser.LSQUARE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SmlParser.UNIT - 33)) | (1 << (SmlParser.UNDERSCORE - 33)) | (1 << (SmlParser.ID - 33)))) !== 0)) {
                                {
                                    this.state = 145;
                                    this.pat(0);
                                    this.state = 150;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === SmlParser.COMMA) {
                                        {
                                            {
                                                this.state = 146;
                                                this.match(SmlParser.COMMA);
                                                this.state = 147;
                                                this.pat(0);
                                            }
                                        }
                                        this.state = 152;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                }
                            }
                            this.state = 155;
                            this.match(SmlParser.RSQUARE);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 166;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 164;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new PatInfixConstructionContext(new PatContext(_parentctx, _parentState));
                                        _localctx._pat1 = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_pat);
                                        this.state = 158;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 159;
                                        this.match(SmlParser.CONS);
                                        this.state = 160;
                                        _localctx._pat2 = this.pat(4);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new PatTypeAnnotationContext(new PatContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_pat);
                                        this.state = 161;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 162;
                                        this.match(SmlParser.COLON);
                                        this.state = 163;
                                        this.typ(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 168;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typ(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new TypContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 10;
        this.enterRecursionRule(_localctx, 10, SmlParser.RULE_typ, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 187;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            _localctx = new TypeVariableContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 170;
                            this.match(SmlParser.VAR);
                        }
                        break;
                    case 2:
                        {
                            _localctx = new TypeConstructorContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 171;
                            _localctx._id = this.match(SmlParser.ID);
                        }
                        break;
                    case 3:
                        {
                            _localctx = new TypeConstructorContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 172;
                            this.match(SmlParser.LPAREN);
                            this.state = 173;
                            this.typ(0);
                            this.state = 176;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 174;
                                        this.match(SmlParser.COMMA);
                                        this.state = 175;
                                        this.typ(0);
                                    }
                                }
                                this.state = 178;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === SmlParser.COMMA);
                            this.state = 180;
                            this.match(SmlParser.RPAREN);
                            this.state = 181;
                            _localctx._id = this.match(SmlParser.ID);
                        }
                        break;
                    case 4:
                        {
                            _localctx = new TypeParenthesesContext(_localctx);
                            this._ctx = _localctx;
                            _prevctx = _localctx;
                            this.state = 183;
                            this.match(SmlParser.LPAREN);
                            this.state = 184;
                            this.typ(0);
                            this.state = 185;
                            this.match(SmlParser.RPAREN);
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 196;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 194;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new TypeFunctionContext(new TypContext(_parentctx, _parentState));
                                        _localctx._argTy = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_typ);
                                        this.state = 189;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 190;
                                        this.match(SmlParser.T__11);
                                        this.state = 191;
                                        _localctx._retTy = this.typ(2);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new TypeConstructorContext(new TypContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, SmlParser.RULE_typ);
                                        this.state = 192;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 193;
                                        _localctx._id = this.match(SmlParser.ID);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 198;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    dec() {
        let _localctx = new DecContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SmlParser.RULE_dec);
        let _la;
        try {
            this.state = 223;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SmlParser.T__12:
                    _localctx = new ValueDeclContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 199;
                        this.match(SmlParser.T__12);
                        this.state = 200;
                        this.valbind();
                        this.state = 205;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SmlParser.AND) {
                            {
                                {
                                    this.state = 201;
                                    this.match(SmlParser.AND);
                                    this.state = 202;
                                    this.valbind();
                                }
                            }
                            this.state = 207;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case SmlParser.T__13:
                    _localctx = new FunDeclContext(_localctx);
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 208;
                        this.match(SmlParser.T__13);
                        this.state = 209;
                        this.funbind();
                        this.state = 214;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SmlParser.AND) {
                            {
                                {
                                    this.state = 210;
                                    this.match(SmlParser.AND);
                                    this.state = 211;
                                    this.funbind();
                                }
                            }
                            this.state = 216;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case SmlParser.T__14:
                    _localctx = new LocalDeclContext(_localctx);
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 217;
                        this.match(SmlParser.T__14);
                        this.state = 218;
                        _localctx._localDecs = this.decSequence();
                        this.state = 219;
                        this.match(SmlParser.T__1);
                        this.state = 220;
                        _localctx._decs = this.decSequence();
                        this.state = 221;
                        this.match(SmlParser.T__2);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    decSequence() {
        let _localctx = new DecSequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, SmlParser.RULE_decSequence);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 231;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 225;
                                this.dec();
                                this.state = 227;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === SmlParser.SEMICOLON) {
                                    {
                                        this.state = 226;
                                        this.match(SmlParser.SEMICOLON);
                                    }
                                }
                            }
                        }
                    }
                    this.state = 233;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
                }
                this.state = 234;
                this.dec();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    valbind() {
        let _localctx = new ValbindContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, SmlParser.RULE_valbind);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 237;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SmlParser.REC) {
                    {
                        this.state = 236;
                        this.match(SmlParser.REC);
                    }
                }
                this.state = 239;
                this.pat(0);
                this.state = 240;
                this.match(SmlParser.EQ);
                this.state = 241;
                this.exp(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    funbind() {
        let _localctx = new FunbindContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, SmlParser.RULE_funbind);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 243;
                this.funmatches();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    funmatches() {
        let _localctx = new FunmatchesContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, SmlParser.RULE_funmatches);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 245;
                this.funmatch();
                this.state = 250;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SmlParser.T__10) {
                    {
                        {
                            this.state = 246;
                            this.match(SmlParser.T__10);
                            this.state = 247;
                            this.funmatch();
                        }
                    }
                    this.state = 252;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    funmatch() {
        let _localctx = new FunmatchContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, SmlParser.RULE_funmatch);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 253;
                _localctx._id = this.match(SmlParser.ID);
                this.state = 254;
                this.pat(0);
                this.state = 258;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SmlParser.INT) | (1 << SmlParser.REAL) | (1 << SmlParser.CHAR) | (1 << SmlParser.STRING) | (1 << SmlParser.TRUE) | (1 << SmlParser.FALSE) | (1 << SmlParser.LPAREN) | (1 << SmlParser.LSQUARE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SmlParser.UNIT - 33)) | (1 << (SmlParser.UNDERSCORE - 33)) | (1 << (SmlParser.ID - 33)))) !== 0)) {
                    {
                        {
                            this.state = 255;
                            this.pat(0);
                        }
                    }
                    this.state = 260;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 261;
                this.match(SmlParser.EQ);
                this.state = 262;
                this.exp(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    prog() {
        let _localctx = new ProgContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, SmlParser.RULE_prog);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 264;
                this.decSequence();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 1:
                return this.exp_sempred(_localctx, predIndex);
            case 4:
                return this.pat_sempred(_localctx, predIndex);
            case 5:
                return this.typ_sempred(_localctx, predIndex);
        }
        return true;
    }
    exp_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 16);
            case 1:
                return this.precpred(this._ctx, 15);
            case 2:
                return this.precpred(this._ctx, 14);
            case 3:
                return this.precpred(this._ctx, 13);
            case 4:
                return this.precpred(this._ctx, 12);
            case 5:
                return this.precpred(this._ctx, 11);
            case 6:
                return this.precpred(this._ctx, 5);
            case 7:
                return this.precpred(this._ctx, 4);
            case 8:
                return this.precpred(this._ctx, 6);
        }
        return true;
    }
    pat_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 9:
                return this.precpred(this._ctx, 4);
            case 10:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    typ_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 11:
                return this.precpred(this._ctx, 1);
            case 12:
                return this.precpred(this._ctx, 4);
        }
        return true;
    }
    static get _ATN() {
        if (!SmlParser.__ATN) {
            SmlParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SmlParser._serializedATN));
        }
        return SmlParser.__ATN;
    }
}
exports.SmlParser = SmlParser;
SmlParser.T__0 = 1;
SmlParser.T__1 = 2;
SmlParser.T__2 = 3;
SmlParser.T__3 = 4;
SmlParser.T__4 = 5;
SmlParser.T__5 = 6;
SmlParser.T__6 = 7;
SmlParser.T__7 = 8;
SmlParser.T__8 = 9;
SmlParser.T__9 = 10;
SmlParser.T__10 = 11;
SmlParser.T__11 = 12;
SmlParser.T__12 = 13;
SmlParser.T__13 = 14;
SmlParser.T__14 = 15;
SmlParser.WHITESPACE = 16;
SmlParser.COMMENT = 17;
SmlParser.INT = 18;
SmlParser.REAL = 19;
SmlParser.CHAR = 20;
SmlParser.STRING = 21;
SmlParser.TRUE = 22;
SmlParser.FALSE = 23;
SmlParser.LPAREN = 24;
SmlParser.RPAREN = 25;
SmlParser.LSQUARE = 26;
SmlParser.RSQUARE = 27;
SmlParser.REC = 28;
SmlParser.AND = 29;
SmlParser.SEMICOLON = 30;
SmlParser.COLON = 31;
SmlParser.COMMA = 32;
SmlParser.UNIT = 33;
SmlParser.UNDERSCORE = 34;
SmlParser.SLASH = 35;
SmlParser.DIV = 36;
SmlParser.MOD = 37;
SmlParser.STAR = 38;
SmlParser.PLUS = 39;
SmlParser.MINUS = 40;
SmlParser.CARET = 41;
SmlParser.CONS = 42;
SmlParser.AT = 43;
SmlParser.EQ = 44;
SmlParser.NEQ = 45;
SmlParser.LT = 46;
SmlParser.GT = 47;
SmlParser.LTE = 48;
SmlParser.GTE = 49;
SmlParser.ANDALSO = 50;
SmlParser.ORELSE = 51;
SmlParser.QUOTE = 52;
SmlParser.ID = 53;
SmlParser.VAR = 54;
SmlParser.RULE_con = 0;
SmlParser.RULE_exp = 1;
SmlParser.RULE_patmatch = 2;
SmlParser.RULE_matches = 3;
SmlParser.RULE_pat = 4;
SmlParser.RULE_typ = 5;
SmlParser.RULE_dec = 6;
SmlParser.RULE_decSequence = 7;
SmlParser.RULE_valbind = 8;
SmlParser.RULE_funbind = 9;
SmlParser.RULE_funmatches = 10;
SmlParser.RULE_funmatch = 11;
SmlParser.RULE_prog = 12;
// tslint:disable:no-trailing-whitespace
SmlParser.ruleNames = [
    "con", "exp", "patmatch", "matches", "pat", "typ", "dec", "decSequence",
    "valbind", "funbind", "funmatches", "funmatch", "prog",
];
SmlParser._LITERAL_NAMES = [
    undefined, "'let'", "'in'", "'end'", "'if'", "'then'", "'else'", "'case'",
    "'of'", "'fn'", "'=>'", "'|'", "'->'", "'val'", "'fun'", "'local'", undefined,
    undefined, undefined, undefined, undefined, undefined, "'true'", "'false'",
    "'('", "')'", "'['", "']'", "'rec'", "'and'", "';'", "':'", "','", "'()'",
    "'_'", "'/'", "'div'", "'mod'", "'*'", "'+'", "'-'", "'^'", "'::'", "'@'",
    "'='", "'<>'", "'<'", "'>'", "'<='", "'>='", "'andalso'", "'orelse'",
    "'''",
];
SmlParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, "WHITESPACE", "COMMENT", "INT", "REAL", "CHAR",
    "STRING", "TRUE", "FALSE", "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "REC",
    "AND", "SEMICOLON", "COLON", "COMMA", "UNIT", "UNDERSCORE", "SLASH", "DIV",
    "MOD", "STAR", "PLUS", "MINUS", "CARET", "CONS", "AT", "EQ", "NEQ", "LT",
    "GT", "LTE", "GTE", "ANDALSO", "ORELSE", "QUOTE", "ID", "VAR",
];
SmlParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SmlParser._LITERAL_NAMES, SmlParser._SYMBOLIC_NAMES, []);
SmlParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x038\u010D\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02#\n" +
    "\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x07\x030\n\x03\f\x03\x0E\x033\v\x03\x05\x035\n\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x06\x03<\n\x03\r\x03\x0E\x03" +
    "=\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07" +
    "\x03H\n\x03\f\x03\x0E\x03K\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x05\x03]\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x07\x03y\n\x03\f\x03\x0E\x03|\v\x03\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05\x85\n\x05\f\x05\x0E" +
    "\x05\x88\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\x97\n\x06\f\x06" +
    "\x0E\x06\x9A\v\x06\x05\x06\x9C\n\x06\x03\x06\x05\x06\x9F\n\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06\xA7\n\x06\f\x06\x0E\x06" +
    "\xAA\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x06" +
    "\x07\xB3\n\x07\r\x07\x0E\x07\xB4\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
    "\x03\x07\x03\x07\x05\x07\xBE\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
    "\x07\x07\x07\xC5\n\x07\f\x07\x0E\x07\xC8\v\x07\x03\b\x03\b\x03\b\x03\b" +
    "\x07\b\xCE\n\b\f\b\x0E\b\xD1\v\b\x03\b\x03\b\x03\b\x03\b\x07\b\xD7\n\b" +
    "\f\b\x0E\b\xDA\v\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\xE2\n\b\x03" +
    "\t\x03\t\x05\t\xE6\n\t\x07\t\xE8\n\t\f\t\x0E\t\xEB\v\t\x03\t\x03\t\x03" +
    "\n\x05\n\xF0\n\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f" +
    "\x07\f\xFB\n\f\f\f\x0E\f\xFE\v\f\x03\r\x03\r\x03\r\x07\r\u0103\n\r\f\r" +
    "\x0E\r\u0106\v\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x02\x02\x05" +
    "\x04\n\f\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
    "\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x07\x03\x02\x18\x19\x03\x02" +
    "%(\x03\x02)+\x03\x02,-\x03\x02.3\x02\u0132\x02\"\x03\x02\x02\x02\x04\\" +
    "\x03\x02\x02\x02\x06}\x03\x02\x02\x02\b\x81\x03\x02\x02\x02\n\x9E\x03" +
    "\x02\x02\x02\f\xBD\x03\x02\x02\x02\x0E\xE1\x03\x02\x02\x02\x10\xE9\x03" +
    "\x02\x02\x02\x12\xEF\x03\x02\x02\x02\x14\xF5\x03\x02\x02\x02\x16\xF7\x03" +
    "\x02\x02\x02\x18\xFF\x03\x02\x02\x02\x1A\u010A\x03\x02\x02\x02\x1C#\x07" +
    "\x14\x02\x02\x1D#\x07\x15\x02\x02\x1E#\x07\x16\x02\x02\x1F#\x07\x17\x02" +
    "\x02 #\t\x02\x02\x02!#\x07#\x02\x02\"\x1C\x03\x02\x02\x02\"\x1D\x03\x02" +
    "\x02\x02\"\x1E\x03\x02\x02\x02\"\x1F\x03\x02\x02\x02\" \x03\x02\x02\x02" +
    "\"!\x03\x02\x02\x02#\x03\x03\x02\x02\x02$%\b\x03\x01\x02%]\x05\x02\x02" +
    "\x02&]\x077\x02\x02\'(\x07\x1A\x02\x02()\x05\x04\x03\x02)*\x07\x1B\x02" +
    "\x02*]\x03\x02\x02\x02+4\x07\x1C\x02\x02,1\x05\x04\x03\x02-.\x07\"\x02" +
    "\x02.0\x05\x04\x03\x02/-\x03\x02\x02\x0203\x03\x02\x02\x021/\x03\x02\x02" +
    "\x0212\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x024,\x03\x02\x02" +
    "\x0245\x03\x02\x02\x0256\x03\x02\x02\x026]\x07\x1D\x02\x0278\x07\x1A\x02" +
    "\x028;\x05\x04\x03\x029:\x07 \x02\x02:<\x05\x04\x03\x02;9\x03\x02\x02" +
    "\x02<=\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x03\x02\x02" +
    "\x02?@\x07\x1B\x02\x02@]\x03\x02\x02\x02AB\x07\x03\x02\x02BC\x05\x10\t" +
    "\x02CD\x07\x04\x02\x02DI\x05\x04\x03\x02EF\x07 \x02\x02FH\x05\x04\x03" +
    "\x02GE\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02" +
    "\x02JL\x03\x02\x02\x02KI\x03\x02\x02\x02LM\x07\x05\x02\x02M]\x03\x02\x02" +
    "\x02NO\x07\x06\x02\x02OP\x05\x04\x03\x02PQ\x07\x07\x02\x02QR\x05\x04\x03" +
    "\x02RS\x07\b\x02\x02ST\x05\x04\x03\x05T]\x03\x02\x02\x02UV\x07\t\x02\x02" +
    "VW\x05\x04\x03\x02WX\x07\n\x02\x02XY\x05\b\x05\x02Y]\x03\x02\x02\x02Z" +
    "[\x07\v\x02\x02[]\x05\b\x05\x02\\$\x03\x02\x02\x02\\&\x03\x02\x02\x02" +
    "\\\'\x03\x02\x02\x02\\+\x03\x02\x02\x02\\7\x03\x02\x02\x02\\A\x03\x02" +
    "\x02\x02\\N\x03\x02\x02\x02\\U\x03\x02\x02\x02\\Z\x03\x02\x02\x02]z\x03" +
    "\x02\x02\x02^_\f\x12\x02\x02_y\x05\x04\x03\x13`a\f\x11\x02\x02ab\t\x03" +
    "\x02\x02by\x05\x04\x03\x12cd\f\x10\x02\x02de\t\x04\x02\x02ey\x05\x04\x03" +
    "\x11fg\f\x0F\x02\x02gh\t\x05\x02\x02hy\x05\x04\x03\x0Fij\f\x0E\x02\x02" +
    "jk\t\x06\x02\x02ky\x05\x04\x03\x0Flm\f\r\x02\x02mn\x077\x02\x02ny\x05" +
    "\x04\x03\x0Eop\f\x07\x02\x02pq\x074\x02\x02qy\x05\x04\x03\brs\f\x06\x02" +
    "\x02st\x075\x02\x02ty\x05\x04\x03\x07uv\f\b\x02\x02vw\x07!\x02\x02wy\x05" +
    "\f\x07\x02x^\x03\x02\x02\x02x`\x03\x02\x02\x02xc\x03\x02\x02\x02xf\x03" +
    "\x02\x02\x02xi\x03\x02\x02\x02xl\x03\x02\x02\x02xo\x03\x02\x02\x02xr\x03" +
    "\x02\x02\x02xu\x03\x02\x02\x02y|\x03\x02\x02\x02zx\x03\x02\x02\x02z{\x03" +
    "\x02\x02\x02{\x05\x03\x02\x02\x02|z\x03\x02\x02\x02}~\x05\n\x06\x02~\x7F" +
    "\x07\f\x02\x02\x7F\x80\x05\x04\x03\x02\x80\x07\x03\x02\x02\x02\x81\x86" +
    "\x05\x06\x04\x02\x82\x83\x07\r\x02\x02\x83\x85\x05\x06\x04\x02\x84\x82" +
    "\x03\x02\x02\x02\x85\x88\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87" +
    "\x03\x02\x02\x02\x87\t\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8A" +
    "\b\x06\x01\x02\x8A\x9F\x05\x02\x02\x02\x8B\x9F\x07$\x02\x02\x8C\x9F\x07" +
    "#\x02\x02\x8D\x9F\x077\x02\x02\x8E\x8F\x07\x1A\x02\x02\x8F\x90\x05\n\x06" +
    "\x02\x90\x91\x07\x1B\x02\x02\x91\x9F\x03\x02\x02\x02\x92\x9B\x07\x1C\x02" +
    "\x02\x93\x98\x05\n\x06\x02\x94\x95\x07\"\x02\x02\x95\x97\x05\n\x06\x02" +
    "\x96\x94\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02" +
    "\x98\x99\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02" +
    "\x9B\x93\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02" +
    "\x9D\x9F\x07\x1D\x02\x02\x9E\x89\x03\x02\x02\x02\x9E\x8B\x03\x02\x02\x02" +
    "\x9E\x8C\x03\x02\x02\x02\x9E\x8D\x03\x02\x02\x02\x9E\x8E\x03\x02\x02\x02" +
    "\x9E\x92\x03\x02\x02\x02\x9F\xA8\x03\x02\x02\x02\xA0\xA1\f\x06\x02\x02" +
    "\xA1\xA2\x07,\x02\x02\xA2\xA7\x05\n\x06\x06\xA3\xA4\f\x03\x02\x02\xA4" +
    "\xA5\x07!\x02\x02\xA5\xA7\x05\f\x07\x02\xA6\xA0\x03\x02\x02\x02\xA6\xA3" +
    "\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9" +
    "\x03\x02\x02\x02\xA9\v\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAB\xAC" +
    "\b\x07\x01\x02\xAC\xBE\x078\x02\x02\xAD\xBE\x077\x02\x02\xAE\xAF\x07\x1A" +
    "\x02\x02\xAF\xB2\x05\f\x07\x02\xB0\xB1\x07\"\x02\x02\xB1\xB3\x05\f\x07" +
    "\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB2\x03\x02\x02" +
    "\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x07\x1B\x02" +
    "\x02\xB7\xB8\x077\x02\x02\xB8\xBE\x03\x02\x02\x02\xB9\xBA\x07\x1A\x02" +
    "\x02\xBA\xBB\x05\f\x07\x02\xBB\xBC\x07\x1B\x02\x02\xBC\xBE\x03\x02\x02" +
    "\x02\xBD\xAB\x03\x02\x02\x02\xBD\xAD\x03\x02\x02\x02\xBD\xAE\x03\x02\x02" +
    "\x02\xBD\xB9\x03\x02\x02\x02\xBE\xC6\x03\x02\x02\x02\xBF\xC0\f\x03\x02" +
    "\x02\xC0\xC1\x07\x0E\x02\x02\xC1\xC5\x05\f\x07\x04\xC2\xC3\f\x06\x02\x02" +
    "\xC3\xC5\x077\x02\x02\xC4\xBF\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02" +
    "\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02" +
    "\xC7\r\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCA\x07\x0F\x02\x02" +
    "\xCA\xCF\x05\x12\n\x02\xCB\xCC\x07\x1F\x02\x02\xCC\xCE\x05\x12\n\x02\xCD" +
    "\xCB\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF" +
    "\xD0\x03\x02\x02\x02\xD0\xE2\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2" +
    "\xD3\x07\x10\x02\x02\xD3\xD8\x05\x14\v\x02\xD4\xD5\x07\x1F\x02\x02\xD5" +
    "\xD7\x05\x14\v\x02\xD6\xD4\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8" +
    "\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xE2\x03\x02\x02\x02\xDA" +
    "\xD8\x03\x02\x02\x02\xDB\xDC\x07\x11\x02\x02\xDC\xDD\x05\x10\t\x02\xDD" +
    "\xDE\x07\x04\x02\x02\xDE\xDF\x05\x10\t\x02\xDF\xE0\x07\x05\x02\x02\xE0" +
    "\xE2\x03\x02\x02\x02\xE1\xC9\x03\x02\x02\x02\xE1\xD2\x03\x02\x02\x02\xE1" +
    "\xDB\x03\x02\x02\x02\xE2\x0F\x03\x02\x02\x02\xE3\xE5\x05\x0E\b\x02\xE4" +
    "\xE6\x07 \x02\x02\xE5\xE4\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6" +
    "\xE8\x03\x02\x02\x02\xE7\xE3\x03\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9" +
    "\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEC\x03\x02\x02\x02\xEB" +
    "\xE9\x03\x02\x02\x02\xEC\xED\x05\x0E\b\x02\xED\x11\x03\x02\x02\x02\xEE" +
    "\xF0\x07\x1E\x02\x02\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0" +
    "\xF1\x03\x02\x02\x02\xF1\xF2\x05\n\x06\x02\xF2\xF3\x07.\x02\x02\xF3\xF4" +
    "\x05\x04\x03\x02\xF4\x13\x03\x02\x02\x02\xF5\xF6\x05\x16\f\x02\xF6\x15" +
    "\x03\x02\x02\x02\xF7\xFC\x05\x18\r\x02\xF8\xF9\x07\r\x02\x02\xF9\xFB\x05" +
    "\x18\r\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02\xFC\xFA\x03" +
    "\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\x17\x03\x02\x02\x02\xFE\xFC\x03" +
    "\x02\x02\x02\xFF\u0100\x077\x02\x02\u0100\u0104\x05\n\x06\x02\u0101\u0103" +
    "\x05\n\x06\x02\u0102\u0101\x03\x02\x02\x02\u0103\u0106\x03\x02\x02\x02" +
    "\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0107\x03" +
    "\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0107\u0108\x07.\x02\x02\u0108" +
    "\u0109\x05\x04\x03\x02\u0109\x19\x03\x02\x02\x02\u010A\u010B\x05\x10\t" +
    "\x02\u010B\x1B\x03\x02\x02\x02\x1C\"14=I\\xz\x86\x98\x9B\x9E\xA6\xA8\xB4" +
    "\xBD\xC4\xC6\xCF\xD8\xE1\xE5\xE9\xEF\xFC\u0104";
class ConContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_con; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ConContext = ConContext;
class IntegerContext extends ConContext {
    INT() { return this.getToken(SmlParser.INT, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInteger) {
            listener.enterInteger(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInteger) {
            listener.exitInteger(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInteger) {
            return visitor.visitInteger(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IntegerContext = IntegerContext;
class RealContext extends ConContext {
    REAL() { return this.getToken(SmlParser.REAL, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterReal) {
            listener.enterReal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReal) {
            listener.exitReal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReal) {
            return visitor.visitReal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RealContext = RealContext;
class CharacterContext extends ConContext {
    CHAR() { return this.getToken(SmlParser.CHAR, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCharacter) {
            listener.enterCharacter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCharacter) {
            listener.exitCharacter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCharacter) {
            return visitor.visitCharacter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CharacterContext = CharacterContext;
class StringContext extends ConContext {
    STRING() { return this.getToken(SmlParser.STRING, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterString) {
            listener.enterString(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitString) {
            listener.exitString(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitString) {
            return visitor.visitString(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringContext = StringContext;
class BooleanContext extends ConContext {
    TRUE() { return this.tryGetToken(SmlParser.TRUE, 0); }
    FALSE() { return this.tryGetToken(SmlParser.FALSE, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterBoolean) {
            listener.enterBoolean(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBoolean) {
            listener.exitBoolean(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBoolean) {
            return visitor.visitBoolean(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BooleanContext = BooleanContext;
class UnitContext extends ConContext {
    UNIT() { return this.getToken(SmlParser.UNIT, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterUnit) {
            listener.enterUnit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnit) {
            listener.exitUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnit) {
            return visitor.visitUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnitContext = UnitContext;
class ExpContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_exp; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExpContext = ExpContext;
class ConstantContext extends ExpContext {
    con() {
        return this.getRuleContext(0, ConContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterConstant) {
            listener.enterConstant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstant) {
            listener.exitConstant(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstant) {
            return visitor.visitConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstantContext = ConstantContext;
class ExpVariableContext extends ExpContext {
    ID() { return this.getToken(SmlParser.ID, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpVariable) {
            listener.enterExpVariable(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpVariable) {
            listener.exitExpVariable(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpVariable) {
            return visitor.visitExpVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpVariableContext = ExpVariableContext;
class ApplicationContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterApplication) {
            listener.enterApplication(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitApplication) {
            listener.exitApplication(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitApplication) {
            return visitor.visitApplication(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ApplicationContext = ApplicationContext;
class InfixApplicationContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    SLASH() { return this.tryGetToken(SmlParser.SLASH, 0); }
    DIV() { return this.tryGetToken(SmlParser.DIV, 0); }
    MOD() { return this.tryGetToken(SmlParser.MOD, 0); }
    STAR() { return this.tryGetToken(SmlParser.STAR, 0); }
    PLUS() { return this.tryGetToken(SmlParser.PLUS, 0); }
    MINUS() { return this.tryGetToken(SmlParser.MINUS, 0); }
    CARET() { return this.tryGetToken(SmlParser.CARET, 0); }
    CONS() { return this.tryGetToken(SmlParser.CONS, 0); }
    AT() { return this.tryGetToken(SmlParser.AT, 0); }
    EQ() { return this.tryGetToken(SmlParser.EQ, 0); }
    NEQ() { return this.tryGetToken(SmlParser.NEQ, 0); }
    LT() { return this.tryGetToken(SmlParser.LT, 0); }
    GT() { return this.tryGetToken(SmlParser.GT, 0); }
    LTE() { return this.tryGetToken(SmlParser.LTE, 0); }
    GTE() { return this.tryGetToken(SmlParser.GTE, 0); }
    ID() { return this.tryGetToken(SmlParser.ID, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterInfixApplication) {
            listener.enterInfixApplication(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInfixApplication) {
            listener.exitInfixApplication(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInfixApplication) {
            return visitor.visitInfixApplication(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InfixApplicationContext = InfixApplicationContext;
class ParenthesesContext extends ExpContext {
    LPAREN() { return this.getToken(SmlParser.LPAREN, 0); }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    RPAREN() { return this.getToken(SmlParser.RPAREN, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterParentheses) {
            listener.enterParentheses(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParentheses) {
            listener.exitParentheses(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParentheses) {
            return visitor.visitParentheses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenthesesContext = ParenthesesContext;
class ListContext extends ExpContext {
    LSQUARE() { return this.getToken(SmlParser.LSQUARE, 0); }
    RSQUARE() { return this.getToken(SmlParser.RSQUARE, 0); }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SmlParser.COMMA);
        }
        else {
            return this.getToken(SmlParser.COMMA, i);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterList) {
            listener.enterList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList) {
            listener.exitList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitList) {
            return visitor.visitList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ListContext = ListContext;
class ExpSequenceContext extends ExpContext {
    LPAREN() { return this.getToken(SmlParser.LPAREN, 0); }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    RPAREN() { return this.getToken(SmlParser.RPAREN, 0); }
    SEMICOLON(i) {
        if (i === undefined) {
            return this.getTokens(SmlParser.SEMICOLON);
        }
        else {
            return this.getToken(SmlParser.SEMICOLON, i);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpSequence) {
            listener.enterExpSequence(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpSequence) {
            listener.exitExpSequence(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpSequence) {
            return visitor.visitExpSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpSequenceContext = ExpSequenceContext;
class LetExpressionContext extends ExpContext {
    decSequence() {
        return this.getRuleContext(0, DecSequenceContext);
    }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    SEMICOLON(i) {
        if (i === undefined) {
            return this.getTokens(SmlParser.SEMICOLON);
        }
        else {
            return this.getToken(SmlParser.SEMICOLON, i);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLetExpression) {
            listener.enterLetExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLetExpression) {
            listener.exitLetExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLetExpression) {
            return visitor.visitLetExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LetExpressionContext = LetExpressionContext;
class ExpTypeAnnotationContext extends ExpContext {
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    COLON() { return this.getToken(SmlParser.COLON, 0); }
    typ() {
        return this.getRuleContext(0, TypContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterExpTypeAnnotation) {
            listener.enterExpTypeAnnotation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpTypeAnnotation) {
            listener.exitExpTypeAnnotation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpTypeAnnotation) {
            return visitor.visitExpTypeAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpTypeAnnotationContext = ExpTypeAnnotationContext;
class ConjunctionContext extends ExpContext {
    ANDALSO() { return this.getToken(SmlParser.ANDALSO, 0); }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterConjunction) {
            listener.enterConjunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConjunction) {
            listener.exitConjunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConjunction) {
            return visitor.visitConjunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConjunctionContext = ConjunctionContext;
class DisjunctionContext extends ExpContext {
    ORELSE() { return this.getToken(SmlParser.ORELSE, 0); }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterDisjunction) {
            listener.enterDisjunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDisjunction) {
            listener.exitDisjunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDisjunction) {
            return visitor.visitDisjunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DisjunctionContext = DisjunctionContext;
class ConditionalContext extends ExpContext {
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterConditional) {
            listener.enterConditional(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConditional) {
            listener.exitConditional(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConditional) {
            return visitor.visitConditional(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConditionalContext = ConditionalContext;
class CaseAnalysisContext extends ExpContext {
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    matches() {
        return this.getRuleContext(0, MatchesContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCaseAnalysis) {
            listener.enterCaseAnalysis(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCaseAnalysis) {
            listener.exitCaseAnalysis(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCaseAnalysis) {
            return visitor.visitCaseAnalysis(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CaseAnalysisContext = CaseAnalysisContext;
class FunctionContext extends ExpContext {
    matches() {
        return this.getRuleContext(0, MatchesContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFunction) {
            listener.enterFunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunction) {
            listener.exitFunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionContext = FunctionContext;
class PatmatchContext extends ParserRuleContext_1.ParserRuleContext {
    pat() {
        return this.getRuleContext(0, PatContext);
    }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_patmatch; }
    // @Override
    enterRule(listener) {
        if (listener.enterPatmatch) {
            listener.enterPatmatch(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPatmatch) {
            listener.exitPatmatch(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPatmatch) {
            return visitor.visitPatmatch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PatmatchContext = PatmatchContext;
class MatchesContext extends ParserRuleContext_1.ParserRuleContext {
    patmatch(i) {
        if (i === undefined) {
            return this.getRuleContexts(PatmatchContext);
        }
        else {
            return this.getRuleContext(i, PatmatchContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_matches; }
    // @Override
    enterRule(listener) {
        if (listener.enterMatches) {
            listener.enterMatches(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMatches) {
            listener.exitMatches(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMatches) {
            return visitor.visitMatches(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MatchesContext = MatchesContext;
class PatContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_pat; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.PatContext = PatContext;
class PatConstantContext extends PatContext {
    con() {
        return this.getRuleContext(0, ConContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPatConstant) {
            listener.enterPatConstant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPatConstant) {
            listener.exitPatConstant(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPatConstant) {
            return visitor.visitPatConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PatConstantContext = PatConstantContext;
class PatWildcardContext extends PatContext {
    UNDERSCORE() { return this.getToken(SmlParser.UNDERSCORE, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPatWildcard) {
            listener.enterPatWildcard(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPatWildcard) {
            listener.exitPatWildcard(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPatWildcard) {
            return visitor.visitPatWildcard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PatWildcardContext = PatWildcardContext;
class PatUnitContext extends PatContext {
    UNIT() { return this.getToken(SmlParser.UNIT, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPatUnit) {
            listener.enterPatUnit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPatUnit) {
            listener.exitPatUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPatUnit) {
            return visitor.visitPatUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PatUnitContext = PatUnitContext;
class PatVariableContext extends PatContext {
    ID() { return this.getToken(SmlParser.ID, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPatVariable) {
            listener.enterPatVariable(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPatVariable) {
            listener.exitPatVariable(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPatVariable) {
            return visitor.visitPatVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PatVariableContext = PatVariableContext;
class PatInfixConstructionContext extends PatContext {
    CONS() { return this.getToken(SmlParser.CONS, 0); }
    pat(i) {
        if (i === undefined) {
            return this.getRuleContexts(PatContext);
        }
        else {
            return this.getRuleContext(i, PatContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPatInfixConstruction) {
            listener.enterPatInfixConstruction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPatInfixConstruction) {
            listener.exitPatInfixConstruction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPatInfixConstruction) {
            return visitor.visitPatInfixConstruction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PatInfixConstructionContext = PatInfixConstructionContext;
class PatParenthesesContext extends PatContext {
    LPAREN() { return this.getToken(SmlParser.LPAREN, 0); }
    pat() {
        return this.getRuleContext(0, PatContext);
    }
    RPAREN() { return this.getToken(SmlParser.RPAREN, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPatParentheses) {
            listener.enterPatParentheses(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPatParentheses) {
            listener.exitPatParentheses(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPatParentheses) {
            return visitor.visitPatParentheses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PatParenthesesContext = PatParenthesesContext;
class PatListContext extends PatContext {
    LSQUARE() { return this.getToken(SmlParser.LSQUARE, 0); }
    RSQUARE() { return this.getToken(SmlParser.RSQUARE, 0); }
    pat(i) {
        if (i === undefined) {
            return this.getRuleContexts(PatContext);
        }
        else {
            return this.getRuleContext(i, PatContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SmlParser.COMMA);
        }
        else {
            return this.getToken(SmlParser.COMMA, i);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPatList) {
            listener.enterPatList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPatList) {
            listener.exitPatList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPatList) {
            return visitor.visitPatList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PatListContext = PatListContext;
class PatTypeAnnotationContext extends PatContext {
    pat() {
        return this.getRuleContext(0, PatContext);
    }
    COLON() { return this.getToken(SmlParser.COLON, 0); }
    typ() {
        return this.getRuleContext(0, TypContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterPatTypeAnnotation) {
            listener.enterPatTypeAnnotation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPatTypeAnnotation) {
            listener.exitPatTypeAnnotation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPatTypeAnnotation) {
            return visitor.visitPatTypeAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PatTypeAnnotationContext = PatTypeAnnotationContext;
class TypContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_typ; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.TypContext = TypContext;
class TypeVariableContext extends TypContext {
    VAR() { return this.getToken(SmlParser.VAR, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeVariable) {
            listener.enterTypeVariable(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeVariable) {
            listener.exitTypeVariable(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeVariable) {
            return visitor.visitTypeVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeVariableContext = TypeVariableContext;
class TypeConstructorContext extends TypContext {
    ID() { return this.getToken(SmlParser.ID, 0); }
    typ(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypContext);
        }
        else {
            return this.getRuleContext(i, TypContext);
        }
    }
    LPAREN() { return this.tryGetToken(SmlParser.LPAREN, 0); }
    RPAREN() { return this.tryGetToken(SmlParser.RPAREN, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SmlParser.COMMA);
        }
        else {
            return this.getToken(SmlParser.COMMA, i);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeConstructor) {
            listener.enterTypeConstructor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeConstructor) {
            listener.exitTypeConstructor(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeConstructor) {
            return visitor.visitTypeConstructor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeConstructorContext = TypeConstructorContext;
class TypeParenthesesContext extends TypContext {
    LPAREN() { return this.getToken(SmlParser.LPAREN, 0); }
    typ() {
        return this.getRuleContext(0, TypContext);
    }
    RPAREN() { return this.getToken(SmlParser.RPAREN, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeParentheses) {
            listener.enterTypeParentheses(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeParentheses) {
            listener.exitTypeParentheses(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeParentheses) {
            return visitor.visitTypeParentheses(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeParenthesesContext = TypeParenthesesContext;
class TypeFunctionContext extends TypContext {
    typ(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypContext);
        }
        else {
            return this.getRuleContext(i, TypContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeFunction) {
            listener.enterTypeFunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeFunction) {
            listener.exitTypeFunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeFunction) {
            return visitor.visitTypeFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeFunctionContext = TypeFunctionContext;
class DecContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_dec; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.DecContext = DecContext;
class ValueDeclContext extends DecContext {
    valbind(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValbindContext);
        }
        else {
            return this.getRuleContext(i, ValbindContext);
        }
    }
    AND(i) {
        if (i === undefined) {
            return this.getTokens(SmlParser.AND);
        }
        else {
            return this.getToken(SmlParser.AND, i);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterValueDecl) {
            listener.enterValueDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValueDecl) {
            listener.exitValueDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValueDecl) {
            return visitor.visitValueDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueDeclContext = ValueDeclContext;
class FunDeclContext extends DecContext {
    funbind(i) {
        if (i === undefined) {
            return this.getRuleContexts(FunbindContext);
        }
        else {
            return this.getRuleContext(i, FunbindContext);
        }
    }
    AND(i) {
        if (i === undefined) {
            return this.getTokens(SmlParser.AND);
        }
        else {
            return this.getToken(SmlParser.AND, i);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterFunDecl) {
            listener.enterFunDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunDecl) {
            listener.exitFunDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunDecl) {
            return visitor.visitFunDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunDeclContext = FunDeclContext;
class LocalDeclContext extends DecContext {
    decSequence(i) {
        if (i === undefined) {
            return this.getRuleContexts(DecSequenceContext);
        }
        else {
            return this.getRuleContext(i, DecSequenceContext);
        }
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLocalDecl) {
            listener.enterLocalDecl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLocalDecl) {
            listener.exitLocalDecl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLocalDecl) {
            return visitor.visitLocalDecl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LocalDeclContext = LocalDeclContext;
class DecSequenceContext extends ParserRuleContext_1.ParserRuleContext {
    dec(i) {
        if (i === undefined) {
            return this.getRuleContexts(DecContext);
        }
        else {
            return this.getRuleContext(i, DecContext);
        }
    }
    SEMICOLON(i) {
        if (i === undefined) {
            return this.getTokens(SmlParser.SEMICOLON);
        }
        else {
            return this.getToken(SmlParser.SEMICOLON, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_decSequence; }
    // @Override
    enterRule(listener) {
        if (listener.enterDecSequence) {
            listener.enterDecSequence(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDecSequence) {
            listener.exitDecSequence(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDecSequence) {
            return visitor.visitDecSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DecSequenceContext = DecSequenceContext;
class ValbindContext extends ParserRuleContext_1.ParserRuleContext {
    pat() {
        return this.getRuleContext(0, PatContext);
    }
    EQ() { return this.getToken(SmlParser.EQ, 0); }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    REC() { return this.tryGetToken(SmlParser.REC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_valbind; }
    // @Override
    enterRule(listener) {
        if (listener.enterValbind) {
            listener.enterValbind(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValbind) {
            listener.exitValbind(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValbind) {
            return visitor.visitValbind(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValbindContext = ValbindContext;
class FunbindContext extends ParserRuleContext_1.ParserRuleContext {
    funmatches() {
        return this.getRuleContext(0, FunmatchesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_funbind; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunbind) {
            listener.enterFunbind(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunbind) {
            listener.exitFunbind(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunbind) {
            return visitor.visitFunbind(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunbindContext = FunbindContext;
class FunmatchesContext extends ParserRuleContext_1.ParserRuleContext {
    funmatch(i) {
        if (i === undefined) {
            return this.getRuleContexts(FunmatchContext);
        }
        else {
            return this.getRuleContext(i, FunmatchContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_funmatches; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunmatches) {
            listener.enterFunmatches(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunmatches) {
            listener.exitFunmatches(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunmatches) {
            return visitor.visitFunmatches(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunmatchesContext = FunmatchesContext;
class FunmatchContext extends ParserRuleContext_1.ParserRuleContext {
    pat(i) {
        if (i === undefined) {
            return this.getRuleContexts(PatContext);
        }
        else {
            return this.getRuleContext(i, PatContext);
        }
    }
    EQ() { return this.getToken(SmlParser.EQ, 0); }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    ID() { return this.getToken(SmlParser.ID, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_funmatch; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunmatch) {
            listener.enterFunmatch(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunmatch) {
            listener.exitFunmatch(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunmatch) {
            return visitor.visitFunmatch(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunmatchContext = FunmatchContext;
class ProgContext extends ParserRuleContext_1.ParserRuleContext {
    decSequence() {
        return this.getRuleContext(0, DecSequenceContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SmlParser.RULE_prog; }
    // @Override
    enterRule(listener) {
        if (listener.enterProg) {
            listener.enterProg(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProg) {
            listener.exitProg(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgContext = ProgContext;
//# sourceMappingURL=SmlParser.js.map