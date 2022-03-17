#!/usr/bin/env node
/**
 * @description A executable to be able to compile eggc lang files
 * @author XXXX <aluXXXX@ull.edu.es>
 * @since XX/XX/20XX
 */

"use strict";

const fs = require("fs");
const { program } = require("commander");
const { parseFromFile } = require("../index.js");

const { version } = require("../package.json");

/**
 * A function that compiles a eggc file
 * @param {string} origin The name of the origin file
 * @param {string} destination The name of the destination file
 * @throws Will throw if there are errors in the program or if the files
 *     can't be opened
 */
const compile = (origin, destination = undefined) => {
  
};

/* ... */
