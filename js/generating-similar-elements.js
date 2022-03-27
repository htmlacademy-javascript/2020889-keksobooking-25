import {createPost} from './data.js';

const similarOfferTemplate = document.querySelector('#card').content.querySelector('.popup');
const offerFragment = document.createDocumentFragment();
const mapContainer = document.querySelector('#map-canvas');

const getSimilarOffers= (offer) => {
  const offerElement = similarOfferTemplate.cloneNode(true);
  offerElement.querySelector('.popup__title').textContent = offer.title;
  offerElement.querySelector('.popup__text--address').textContent = offer.address;
  offerElement.querySelector('.popup__text--price').innerHtml = `${offer.price} <span>₽/ночь</span>`;
  offerElement.querySelector('.popup__type').innerHtml = offer.type;
  offerElement.querySelector('.popup__text--capacity').innerHtml = `${offer.rooms} комнаты для ${offer.guests}`;
  offerElement.querySelector('.popup__text--time').innerHtml = `${offer.checkin}, выезд до ${offer.checkout}`;

  const features = offer.features;
  const featuresList = offerElement.querySelectorAll('.popup__feature');

  featuresList.forEach((featuresListItem) => {
    const isNecessary = features.some((feature) =>
      featuresListItem.classList.contains(`popup__feature--${feature}`));

    if (!isNecessary) {featuresListItem.remove();
    }
  });

  offerElement.querySelector('.popup__description').textContent = offer.description;

  const photos = offerElement.querySelector('.popup__photos');
  const photoElement = photos.querySelector('.popup__photo');
  const photoSources = offer.photos;

  photoSources.forEach((image) => {
    const newPhotoElement = photoElement.cloneNode(true);
    newPhotoElement.src = image;
    photos.append(newPhotoElement);
  });

  offerElement.querySelector('.popup__avatar').src = offer.avatar;
  return offerElement;
};

createPost.forEach((element) => {
  offerFragment.appendChild(getSimilarOffers(element));
});

mapContainer.appendChild(getSimilarOffers(createPost[0]));
export {offerFragment};
