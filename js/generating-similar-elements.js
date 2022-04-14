import {createPosts} from './data.js';
import {TYPES} from './data.js';

const offerTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarCards = createPosts()                          ;

function setTextContent(element, classname, content = [], template = '') {
  const targetElement = element.querySelector(classname);

  for (let i = 0; i < content.length; i++) {
    if (!content[i]) {
      targetElement.classList.add('hidden');
      return;
    }
    targetElement.textContent = template ? template : content;
  }}

const getFeatureElements = function (features, popupFeatures) {

  features.forEach((feature) => {
    const li = document.createElement('li');
    li.classList.add('popup__feature');
    li.classList.add(`popup__feature--${feature}`);
    popupFeatures.appendChild(li);
  });
};

const getPhotoElements = function (photos, offerElement) {
  const photoBlock = offerElement.querySelector('.popup__photos');
  const photoElement = offerElement.querySelector('.popup__photo');
  photos.forEach((photo) => {
    const newPhotoElement = photoElement.cloneNode(true);
    newPhotoElement.setAttribute('src', photo);
    photoBlock.appendChild(newPhotoElement);
  });
  photoElement.classList.add('hidden');
};

const createCard = (offer, author) => {
  const offerElement = offerTemplate.cloneNode(true);
  const popupFeatures = offerElement.querySelector('.popup__features');

  setTextContent(offerElement, '.popup__avatar', [author.avatar]);
  setTextContent(offerElement, '.popup__title', [offer.title]);
  setTextContent(offerElement,'.popup__text--address', [offer.address]);
  setTextContent(offerElement, '.popup__text--price', [offer.price], `${offer.price} ₽/ночь`);
  setTextContent(offerElement,'.popup__type', [TYPES[offer.type]]);
  setTextContent(offerElement, '.popup__text--capacity',[offer.rooms, offer.guests], `${offer.rooms} 
  комнаты для ${offer.guests} гостей`);
  setTextContent(offerElement, '.popup__text--time', [offer.checkin, offer.checkout], `Заезд после ${offer.checkin}, 
  выезд до ${offer.checkout}`);
  setTextContent(offerElement,'.popup__description', [offer.description]);

  getFeatureElements(offer.features, popupFeatures);
  getPhotoElements(offer.photos, offerElement);

  return offerElement;
};

export {createCard, similarCards};
