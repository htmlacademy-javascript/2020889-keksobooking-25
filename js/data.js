import {getRandomNumber, getRandomPictureNumber, getRandomLatLng, getRandomArray, getRandomArrayElement} from './util.js';

const titles = [
  'Загородный дом с бассейном и бильярдом',
  'Гостевой дом 50м кв с сауной',
  'Уютный двухэтажный дом на 10 Фонтана',
  'Сервисные апартаменты с террасой',
  'Видовые резиденции у Кремля',
  'Высотка на Котельнической',
  'Угловой апартамент в Башне Нева',
];

const types = [
  {value:'palace', text: 'Дворец'},
  {value:'flat', text:  'Квартира'},
  {value:'house', text:  'Дом'},
  {value:'bungalow', text: 'Бунгало'},
  {value:'hotel', text: 'Отель'},
];

const checkins = [
  '12:00',
  '13:00',
  '14:00',
];

const checkouts = [
  '12:00',
  '13:00',
  '14:00',
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const descriptions = [
  'Уютная резиденция с одной спальней общей площадью 93 кв.м на 7 этаже современного здания легендарной гостиницы Москва.',
  'Лаконичный интерьер в стиле неоклассика. Открытая планировка, кухня-гостиная. Полноразмерная кухня оборудована немецкой встроенной техникой Kueppersbusch и укомплектована полным набором посуды и кофемашиной.',
  'Предлагаются в аренду шикарные, светлые апартаменты в башне Neva Towers. Полностью укомплектован дорогой мебелью и техникой.',
  'Панорамное остекление по всему периметру апартаментов. Видовые характеристики: футуристический вид на город. В ночное время огни небоскребов не оставят Вас равнодушными.',
  'Вместительная гардеробная комната и дополнительные системы хранения, одна мастер-ванная, один гостевой санузел с постирочной. Панорамное остекление во всех помещениях. Вид во внутренний двор.',
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const MIN_LATITUDE = 35.65000;
const MAX_LATITUDE = 35.70000;
const LATITUDE_DIGITS = 5;
const MIN_LONGTITUDE = 139.70000;
const MAX_LONGTITUDE = 139.80000;
const LONGTITUDE_DIGITS = 5;
const locationLat = getRandomLatLng(MIN_LATITUDE, MAX_LATITUDE, LATITUDE_DIGITS);
const locationLng = getRandomLatLng(MIN_LONGTITUDE, MAX_LONGTITUDE, LONGTITUDE_DIGITS);
const MIN_PICTURE_NUMBER = 1;
const MAX_PICTURE_NUMBER = 10;
const MIN_PRICE = 40000;
const MAX_PRICE = 200000;
const MIN_NUMBER_OF_ROOMS = 1;
const MAX_NUMBER_OF_ROOMS = 5;
const MIN_NUMBER_OF_GUESTS = 1;
const MAX_NUMBER_OF_GUESTS = 10;

const createPost = () => {
  const location = {
    lat: locationLat,
    lng: locationLng,
  };

  return {
    author: {
      avatar: `img/avatars/user${getRandomPictureNumber(MIN_PICTURE_NUMBER, MAX_PICTURE_NUMBER)}.png`,
    },

    offer: {
      title: getRandomArrayElement(titles),
      address: `${locationLat}, ${locationLng}`,
      price: getRandomNumber(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(types),
      rooms: getRandomNumber(MIN_NUMBER_OF_ROOMS, MAX_NUMBER_OF_ROOMS),
      guests: getRandomNumber(MIN_NUMBER_OF_GUESTS, MAX_NUMBER_OF_GUESTS),
      checkin: getRandomArrayElement(checkins),
      checkout: getRandomArrayElement(checkouts),
      features: getRandomArray(features),
      description: getRandomArrayElement(descriptions),
      photos: getRandomArray(photos),
      location,
    },
  };

};

const createPosts = () => Array.from({length: 10}, createPost);
export {createPosts, types};
