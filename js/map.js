import {setInactiveStatus, setActiveStatus} from './working-with-the-form.js';
import {createPosts} from './data.js';

const LAT_TOKYO = 35.68999;
const LNG_TOKYO = 139.69201;
const resetButton = document.querySelector('.ad-form__reset');
const addressField = document.querySelector('.ad-form').querySelector('#address');

setInactiveStatus();

const map = L.map('map-canvas')
  .on('load', () => {
    setActiveStatus();
  })
  .setView({
    lat: LAT_TOKYO,
    lng: LNG_TOKYO,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});


const mainPinMarker = L.marker(
  {
    lat: LAT_TOKYO,
    lng: LNG_TOKYO,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  addressField.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
});

//posle perezagruzki vozvrawayet ikonku na mesto
resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: LAT_TOKYO,
    lng: LNG_TOKYO,
  });

  //posle perezagruzki vozvrawayet razmer karti na mesto
  map.setView({
    lat: LAT_TOKYO,
    lng: LNG_TOKYO,
  }, 16);
});

// mainPinMarker.remove(); udalyaem marker

//sozdayem baloon
const simplePinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const similarCards = createPosts(10);
const createCustomPopup = (point) => {
  const baloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = baloonTemplate.cloneNode(true);

  popupElement.querySelector('.popup__avatar').src = point.avatar;
  popupElement.querySelector('popup__title').textContent = point.title;
  popupElement.querySelector('popup__text popup__text--address').textContent = point.address;
  popupElement.querySelector('popup__text popup__text--price').textContent = point.price;
  popupElement.querySelector('popup__type').textContent = point.type;
  popupElement.querySelector('popup__text popup__text--capacity').textContent = point.capacity;
  popupElement.querySelector('popup__text popup__text--time').textContent = point.time;
  popupElement.querySelector('popup__features').textContent = point.features;
  popupElement.querySelector('popup__description').textContent = point.description;
  popupElement.querySelector('popup__photos').textContent = point.photos;
  return popupElement;
};

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (point) => {
  const {lat, lng} = point;

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: simplePinIcon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(createCustomPopup(point));
};

similarCards.forEach((point) => {
  createMarker(point);
});

//markerGroup.clearLayers(); udalayem sloi
