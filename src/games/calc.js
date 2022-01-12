/**
* Эта функция возвращает число (для вопроса)
* и правильный ответ
*/
const questionAnswer = () => {
  const num1 = Math.floor(Math.random() * 10);
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

  const question = `${num1} ${randOperator} ${num2}`;

  return [question, result];
};

export default questionAnswer;
