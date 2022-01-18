#!/usr/bin/env node

import myDefault from '../src/games/even.js';

import checkFlag from '../src/index.js';

console.log('Answer "yes" if the number is even, otherwise answer "no"');

checkFlag(myDefault);
