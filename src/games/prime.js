const questionAnswer = () => {
  const num = 1 + Math.floor(Math.random() * 10);
  let result;
  if ((num === 2) || (num === 1)) {
    result = 'yes';
  }

  for (let divisor = 2; divisor < num; divisor += 1) {
    if (num % divisor === 0) {
      result = 'no';
      break;
    } else {
      result = 'yes';
    }
  }
  return [num, result];
};

export default questionAnswer;
