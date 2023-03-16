## Egg Parser

Egg Language utility. Translates egg programs into ASTs.

## Installation

```
npm install git@github.com:ULL-ESIT-PL-2122/egg-parser-aluName-aluSurname-aluXXXX.git
```

## Usage from code:

```javascript
const { parseFromFile } = require('@ULL-ESIT-PL-2122/egg-parser-aluName-aluSurname-aluXXXX')
const example_file = "./testFile.txt"

console.log("Original Code: \n", example_code);
console.log("AST generated from code: \n", parseFromFile(example_code));
```

## Usage as executable:

An input file must be specified. You also may or may not specify an output file. If not given, it will default to the original file's name, with a .json extension.

```
npx eggc input_file --o output_file
```

## Examples

You can check various examples in the examples/ directory.

## Author

aluXXXX (name aluSurname) - [GitHub Profile](https://github.com/crguezl)

## Tests

```
npm run test
```

## Version History

1.0.0 Initial Release
1.0.1 Added module documentation
1.0.2 Minor fixes
