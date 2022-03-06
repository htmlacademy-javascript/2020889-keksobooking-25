//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomNumber(min, max) {
  if (min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return 'Минимум должен быть меньше либо неравен Максимуму';
}
console.log(getRandomNumber(0,100));

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getRandomNumber2(min, max, maxDigits) {
  if (min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const digitsDegree = 10 ** maxDigits;
    return ((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
  }
  return 'Минимум должен быть меньше либо неравен Максимуму';
}
console.log(getRandomNumber2(0,100,5));
