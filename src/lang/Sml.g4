grammar Sml;

/** Tokens */

WHITESPACE: [ \r\n\t]+ -> skip;

INT
    : '~'? NUM
    ;

// Not supporting scientific notation for now since the tilde complicates thing
FLOAT
    : '~'? NUM '.' NUM
    ;

CHAR
    : '#"' ASCII '"'
    ;

STRING
    : '"' ASCII* '"'
    ;

fragment DIGIT: [0-9];

fragment NUM: DIGIT+;

fragment LETTER: [a-zA-Z];

fragment ESC: '\\' (["\\/bfnrt]);

fragment SAFECODEPOINT: ~ ["\\\u0000-\u001F];

// reference: https://stackoverflow.com/questions/66902057/antlr-how-to-accept-double-quotes-inside-double-quoted-string-while-parsing
fragment ASCII: ESC | SAFECODEPOINT;

TRUE: 'true';
FALSE: 'false';

LPAREN: '(';
RPAREN: ')';
REC: 'rec';
AND: 'and';
SEMICOLON: ';';

SLASH: '/';
DIV: 'div';
MOD: 'mod';
STAR: '*';
PLUS: '+';
MINUS: '-';
CARET: '^';
CONS: '::';
AT: '@';
EQ: '=';
NEQ: '<>';
LT: '<';
GT: '>';
LTE: '<=';
GTE: '>=';
ANDALSO: 'andalso';
ORELSE: 'orelse';

ID
    : LETTER (LETTER | DIGIT | '\'' | '_' )*
    | ( '!' | '%' | '&' | '$' | '#' | '+' | '-' | '/' | ':' |
        '<' | '=' | '>' | '?' | '@' | '\\' | '~' | '`' | '^' | '|' | '*' )+
    ;

/** Productions */

con
    : INT              # Integer
    | FLOAT            # FloatingPoint
    | CHAR             # Character
    | STRING           # String
    | (TRUE | FALSE)   # Boolean
    ;

exp
    : con                                                             # Constant
    | id=ID                                                           # ExpVariable
    // Precedence levels can be found on Page 98 of https://smlfamily.github.io/sml90-defn.pdf
    | op1=exp id=(SLASH | DIV | MOD | STAR) op2=exp                   # InfixApplication
    | op1=exp id=(PLUS | MINUS | CARET) op2=exp                       # InfixApplication
    | <assoc=right> op1=exp id=(CONS | AT) op2=exp                    # InfixApplication
    | op1=exp id=(EQ | NEQ | LT | GT | LTE | GTE) op2=exp             # InfixApplication
    | op1=exp id=ID op2=exp                                           # InfixApplication
    | LPAREN exp RPAREN                                               # Parentheses
    | 'let' decSequence 'in' exp (SEMICOLON exp)* 'end'               # LetExpression
    | op1=exp ANDALSO op2=exp                                         # Conjunction
    | op1=exp ORELSE op2=exp                                          # Disjunction
    | 'if' pred=exp 'then' cons=exp 'else' alt=exp                    # Conditional
    ;

pat
    : con                                                             # PatConstant
    | id=ID                                                           # PatVariable
    ;

dec
    : 'val' valbind (AND valbind)*                                    # ValueDecl
    ;

// TODO: everywhere that uses "dec" in the
// grammar rules online should be replaced with this instead
decSequence: (dec SEMICOLON?)* dec;

valbind: REC? pat EQ exp;

prog: decSequence;
