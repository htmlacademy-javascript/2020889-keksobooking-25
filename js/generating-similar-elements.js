import {createPosts} from './data.js';
import {TYPE} from './data.js';
import {FEAUTURES} from './data.js';

const offerTemplate = document.querySelector('#card').content.querySelector('.popup');
const similarCards = createPosts(10);
const similarCardsFragment = document.createDocumentFragment();
const mapCanvas = document.querySelector('#map-canvas');

const setTextContent = (element, selector, value) => {
  if (value) {
    // add value
    element.querySelector(selector).textContent = value;
  } else {
    // remove item
    element.querySelector(selector).remove();
  }
};

const createCard = function(card) {
  similarCards.forEach(({offer, author}) => {
    const offerElement = offerTemplate.cloneNode(true);
    const popupFeatures = offerElement.querySelector('.popup__features');

    setTextContent(offerElement, '.popup__title', card.offer.title);
    setTextContent(offerElement,'.popup__text--address', card.offer.address);
    setTextContent(offerElement, '.popup__text--price', `${card.offer.price} ₽/ночь`);
    setTextContent(offerElement,'.popup__type', TYPE[card.offer.type]);
    setTextContent(offerElement, '.popup__text--capacity', `${card.offer.rooms} 
  комнаты для ${card.offer.guests} гостей`);
    setTextContent(offerElement, '.popup__text--time', `Заезд после ${card.offer.checkin}, 
  выезд до ${card.offer.checkout}`);
    setTextContent(offerElement,'.popup__description', card.offer.description);

    const getFeatureElements = function () {
      const featureElements = offerElement.querySelectorAll('.popup__feature');
      for (let i = 0; i < featureElements.length; i++) {
        featureElements[i].classList.add('hidden');
      }
      offer.features.forEach((feature) => {
        const li = document.createElement('li');
        li.classList.add('popup__feature');
        li.classList.add(FEAUTURES[feature]);
        popupFeatures.appendChild(li);
      });
    };
    getFeatureElements();

    const getPhotoElements = function () {
      const photoBlock = offerElement.querySelector('.popup__photos');
      const photoElement = offerElement.querySelector('.popup__photo');
      offer.photos.forEach((photo) => {
        const newPhotoElement = photoElement.cloneNode(true);
        newPhotoElement.setAttribute('src', photo);
        photoBlock.appendChild(newPhotoElement);
      });
      photoElement.classList.add('hidden');
      offerElement.querySelector('.popup__avatar').src = author.avatar;
    };
    getPhotoElements();

    similarCardsFragment.appendChild(offerElement);
  });
  mapCanvas.appendChild(similarCardsFragment);
};
createCard();
export {createCard};
