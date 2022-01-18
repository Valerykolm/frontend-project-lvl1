const questionAnswer = () => {
  const num1 = 1 + Math.floor(Math.random() * 10);
  const num2 = 1 + Math.floor(Math.random() * 10);

  let result;

  if ((num1 === 1) || (num2 === 1)) {
    result = 1;
  }

  let divisor = Math.max(num1, num2);

  while (((num1 % divisor !== 0) || (num2 % divisor !== 0)) && (divisor > 0)) {
    divisor -= 1;
  }

  result = divisor;

  const question = `${num1} ${num2}`;

  return [question, String(result)];
};

export default questionAnswer;
