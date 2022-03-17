const { makeLexer } = require("moo-ignore");
/** Tokens object: definitions */
const Tokens = {
};

let lexer = makeLexer(Tokens, [ ], { eof: true });

module.exports = { lexer };
