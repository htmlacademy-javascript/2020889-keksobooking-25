const TITLE = [
  'Загородный дом с бассейном и бильярдом',
  'Гостевой дом 50м кв с сауной',
  'Уютный двухэтажный дом на 10 Фонтана',
  'Сервисные апартаменты с террасой',
  'Видовые резиденции у Кремля',
  'Высотка на Котельнической',
  'Угловой апартамент в Башне Нева',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEAUTURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Уютная резиденция с одной спальней общей площадью 93 кв.м на 7 этаже современного здания легендарной гостиницы Москва.',
  'Лаконичный интерьер в стиле неоклассика. Открытая планировка, кухня-гостиная. Полноразмерная кухня оборудована немецкой встроенной техникой Kueppersbusch и укомплектована полным набором посуды и кофемашиной.',
  'Предлагаются в аренду шикарные, светлые апартаменты в башне Neva Towers. Полностью укомплектован дорогой мебелью и техникой.',
  'Панорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город. В ночное время огни небоскребов не оставят Вас равнодушными.',
  'Вместительная гардеробная комната и дополнительные системы хранения, одна мастер-ванная, один гостевой санузел с постирочной. Панорамное остекление во всех помещениях. Вид во внутренний двор.',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];


//Функция, возвращающая случайное целое.
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber2(min, max) {
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

const getRandomArrayFeauters = (features) => {
  const lastIndex = features.length - 1;
  const a = getRandomNumber(0, lastIndex);
  const b = getRandomNumber(0, lastIndex);
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return features.slice(min, max);
};

const locationLat = getRandomLatLng(35.65000, 35.70000, 5);
const locationLng = getRandomLatLng(139.70000, 139.80000, 5);

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];


const createPost = () => ({
  author: {
    avatar: `img/avatars/user${  getRandomNumber2(1, 10)  }.png`,
  },

  offer: {
    title: getRandomArrayElement(TITLE),
    address: `${locationLat}, ${locationLng}`,
    price: getRandomNumber(40000, 200000),
    type: getRandomArrayElement(TYPE),
    rooms: getRandomNumber(1,5),
    guests: getRandomNumber(1, 10),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getRandomArrayFeauters(FEAUTURES),
    description: getRandomArrayElement(DESCRIPTION),
    photos: getRandomArrayElement(PHOTOS),
  },

  location: {
    lat: locationLat,
    lng: locationLng,
  },
});

const result = createPost();
console.log(result);

//const orders = ['title', 'address', 'price', 'type', 'rooms', 'guests', 'checkin', 'checkout', 'features', 'description','photos']
//orders.forEach((order) => {
//console.log(order, result.offer[order]);
