/**
 * Эта функция возвращает число (для вопроса)
 * и правильный ответ
 */
const questionAnswer = () => {
  const num = Math.floor(Math.random() * 10);

  let result;

  if (num % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }

  return [num, result];
};

export default questionAnswer;
