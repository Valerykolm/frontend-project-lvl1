#!/usr/bin/env node

import readlineSync from 'readline-sync';

import name from '../src/cli.js';

console.log(`Hello ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const checkFlag = () => {
  for (let i = 0; i < 3; i += 1) {
    let flag;
    if (flag === false) {
      return `Let's try again, ${name}!`;
    }

    const brainEven = () => {
      const num = Math.floor(Math.random() * 10);

      console.log(`Question: ${num}`);

      const answer = readlineSync.question('Your answer: ');

      if (answer === 'yes') {
        if (num % 2 === 0) {
          console.log('Correct!');
        } else {
          console.log('"yes" is wrong answer ;(. Correct answer was "no".');
          flag = false;
        }
      } else if (answer === 'no') {
        if (num % 2 !== 0) {
          console.log('Correct!');
        } else {
          console.log('"no" is wrong answer ;(. Correct answer was "yes".');
          flag = false;
        }
      } else {
        console.log('Wrong!');
        flag = false;
      }
    };
    // API?
    brainEven();

    if (flag === false) {
      return `Let's try again, ${name}!`;
    }
  }

  return `Congratulations, ${name}!`;
};

console.log(checkFlag());
