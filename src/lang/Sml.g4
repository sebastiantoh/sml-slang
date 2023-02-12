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

ID
    : LETTER (LETTER | DIGIT | '\'' | '_' )*
    | ( '!' | '%' | '&' | '$' | '#' | '+' | '-' | '/' | ':' |
        '<' | '=' | '>' | '?' | '@' | '\\' | '~' | '`' | '^' | '|' | '*' )+
    ;

SLASH: '/';
DIV: 'div';
MOD: 'mod';
STAR: '*';
PLUS: '+';
MINUS: '-';

/** Productions */

con
    : INT           # Integer
    | FLOAT         # FloatingPoint
    | CHAR          # Character
    | STRING        # String
    ;

exp
    : con                                             # Constant
    // Precedence levels can be found on Page 98 of https://smlfamily.github.io/sml90-defn.pdf
    | op1=exp id=(SLASH | DIV | MOD | STAR) op2=exp   # InfixApplication
    | op1=exp id=(PLUS | MINUS) op2=exp               # InfixApplication
    | op1=exp id=ID op2=exp                           # InfixApplication
    ;
