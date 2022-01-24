const questionAnswer = () => {
  // Первый элемент прогрессии
  let num = Math.floor(Math.random() * 10);
  // Случайный шаг арифметической прогрессии
  const step = 1 + Math.floor(Math.random() * 10);
  const array = [num];

  for (let i = 0; i <= 9; i += 1) {
    num += step;
    array.push(num);
  }

  // Случайный элемент массива
  const arr = array[Math.floor(Math.random() * array.length)];
  // Замена случайного элемента массива на ..
  const index = array.indexOf(arr);

  if (index !== -1) {
    array[index] = '..';
  }
  const question = `${array.join(' ')}`;
  return [question, String(arr)];
};

export default questionAnswer;
