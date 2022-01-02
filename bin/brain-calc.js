#!/usr/bin/env node

import readlineSync from 'readline-sync';

import name from '../src/cli.js';
// API
console.log(`Hello ${name}!`);
// API?
console.log('What is the result of the expression?');

const checkFlag = () => {
  for (let i = 0; i < 3; i += 1) { // API
    let flag;
    if (flag === false) {
      return `Let's try again, ${name}!`;
    } // API
    const brainCalc = () => {
      // API
      const num1 = Math.floor(Math.random() * 10);
      // API
      const num2 = Math.floor(Math.random() * 10);

      const operators = ['+', '-', '*'];

      const randOperator = operators[Math.floor(Math.random() * operators.length)];
      let result;

      switch (randOperator) {
        case '*':
          result = num1 * num2;
          break;
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        default:
          break;
      }
      // API?
      console.log(`Question: ${num1} ${randOperator} ${num2}`);
      // API
      const answer = readlineSync.question('Your answer: ');
      // API?
      if (answer == result) {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${result}`);
        flag = false;
      } // API
    };
    // API?
    brainCalc();
    // API
    if (flag === false) {
      return `Let's try again, ${name}!`;
    }
  }
  // API
  return `Congratulations, ${name}!`;
};
// API
console.log(checkFlag());
