import {getRandomNumber, getRandomPictureNumber, getRandomLatLng, getRandomArrayFeauters, getRandomArrayElement} from './util.js';

const TITLE = [
  'Загородный дом с бассейном и бильярдом',
  'Гостевой дом 50м кв с сауной',
  'Уютный двухэтажный дом на 10 Фонтана',
  'Сервисные апартаменты с террасой',
  'Видовые резиденции у Кремля',
  'Высотка на Котельнической',
  'Угловой апартамент в Башне Нева',
];

const TYPE = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель',
};

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

const minLatitude = 35.65000;
const maxLatitude = 35.70000;
const latitudeDigits = 5;
const minLongtitude = 139.70000;
const maxLongtitude = 139.80000;
const longtitudeDigits = 5;
const locationLat = getRandomLatLng(minLatitude, maxLatitude, latitudeDigits);
const locationLng = getRandomLatLng(minLongtitude, maxLongtitude, longtitudeDigits);
const minPictureNumber = 1;
const maxPictureNumber = 10;
const minPrice = 40000;
const maxPrice = 200000;
const minNumberOfRooms = 1;
const maxNumberOfRooms = 5;
const minNumberOfGuests = 1;
const maxNumberOfGuests = 10;

const createPost = () => ({
  author: {
    avatar: `img/avatars/user${getRandomPictureNumber(minPictureNumber, maxPictureNumber)}.png`,
  },

  offer: {
    title: getRandomArrayElement(TITLE),
    address: `${locationLat}, ${locationLng}`,
    price: getRandomNumber(minPrice, maxPrice),
    type: getRandomArrayElement(TYPE),
    rooms: getRandomNumber(minNumberOfRooms, maxNumberOfRooms),
    guests: getRandomNumber(minNumberOfGuests, maxNumberOfGuests),
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

export {createPost};
export {TYPE};
