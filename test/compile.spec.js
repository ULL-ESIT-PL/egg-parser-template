// @ts-check
/**
 * @description A file with the tests for the Egg lang parser
 * @author AluXXX Name <aluXXXX@ull.edu.es>
 * @since XX/XX/2022
 */

'use strict';

const should = require('chai').should();
const { parseFromFile } = require("../index.js");

const fs = require('fs');
const { skipKeys, simpleDeb } = require('../src/utils.js')

skipKeys(['toString', "line", "offset", "lineBreaks"]);

describe('Compiler', () => {
  const runTest = (testName) => {
    const expected = JSON.parse(fs.readFileSync('test/ast/' + testName + '.json', {encoding: 'utf8'}));
    debugger;
    /* ... */

  };

  const testList = [
    'array',
    'if',
    'scope',
    /* ... */
  ];

  testList.forEach((test) => {
    it(test, () => {
      runTest(test);
    });
  });
});

describe('Compiler errors', () => {
  const basePath = 'test/errors/';

  const testList = [
    { name: 'unexpected-token-comma', error: /Unexpected.*token.*,/i },
    { name: 'unexpected-eof',   error: /Unexpected.*EOF.*token/i },
    { name: 'unexpected-token-word', error: /Unexpected.*WORD.token/i },
  ];

  const runTest = (test) => {
    it(test.name, () => {
      /* ... */
    });
  };

  testList.forEach((test) => {
    runTest(test);
  });
});
