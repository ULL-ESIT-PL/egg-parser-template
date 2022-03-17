@{%
/**
 * The Grammar of the Egg Lang in nearley.js 
 * @external Grammar
 * @see {@link https://ull-esit-pl-2122.github.io/temas/syntax-analysis/teoria.html#gramaticas-independientes-del-contexto}
 */

%}

@lexer lexer
program -> expression %EOF {% id %}
expression -> 
       %STRING  

