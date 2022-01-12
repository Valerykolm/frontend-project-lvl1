import readlineSync from 'readline-sync';

import name from './cli.js';

console.log(`Hello ${name}!`);

const checkFlag = (questionAnswer) => {
  let flag = true;
  for (let i = 0; i < 3; i += 1) {
    const qa = questionAnswer();

    const question = qa[0];
    const correctAnswer = qa[1];

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      flag = false;
      break;
    }
  }

  if (flag === false) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

export default checkFlag;
