//Функция, возвращающая случайное целое.
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPictureNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const numberWithZero = Math.floor(Math.random() * (max - min + 1)) + min;
  if (numberWithZero > 9) {
    return numberWithZero;
  } else {
    return (`0${numberWithZero}`);
  }
}

// Функция, возвращающая случайное число с плавающей точкой.
function getRandomLatLng(min, max, maxDigits) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const digitsDegree = 10 ** maxDigits;
  return ((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
}

const getRandomArray = (data) => {
  const lastIndex = data.length - 1;
  const a = getRandomNumber(0, lastIndex);
  const b = getRandomNumber(0, lastIndex);
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return data.slice(min, max);
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];
export {getRandomNumber, getRandomPictureNumber, getRandomLatLng, getRandomArray, getRandomArrayElement};
