#!/usr/bin/env node

import myDefault from '../src/games/calc.js';

import checkFlag from '../src/index.js';

console.log('What is the result of the expression?');

checkFlag(myDefault);
