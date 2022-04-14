const maxCapacity = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const maxCapacityErrorMessage = {
  '1': 'для 1 гостя',
  '2': 'для 1-2 гостей',
  '3': 'для 1-3 гостей',
  '100': 'не для гостей',
};

const pricesOnType = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

const MIN_PRICE = 0;
const MAX_PRICE = 100000;
const START_SLIDER = 1000;
const INITIAL_VALUE = 1000;


const form = document.querySelector('.ad-form');
const capacityField = form.querySelector('#capacity');
const roomNumberField = form.querySelector('#room_number');
const typeField = form.querySelector('#type');
const checkInField = form.querySelector('#timein');
const checkOutField = form.querySelector('#timeout');
const sliderElement = document.querySelector('.ad-form__slider');
const priceField = form.querySelector('#price');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
});

function validateCapacityField (value) {
  return maxCapacity[roomNumberField.value].includes(value);
}

function dontValidateCapacityField () {
  return `${maxCapacityErrorMessage[roomNumberField.value]}`;
}

pristine.addValidator(
  capacityField,
  validateCapacityField,
  dontValidateCapacityField,
);

function changeRoomNumber () {
  pristine.validate(capacityField);
}

roomNumberField.addEventListener('change', changeRoomNumber);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    form.submit();
  }
});

function validateAddtionalPrice (value) {
  return pricesOnType[typeField.value] <= value;
}

function getAdditionalPriceError () {
  return `Минимальная цена ${pricesOnType[typeField.value]}`;
}

pristine.addValidator(
  priceField,
  validateAddtionalPrice,
  getAdditionalPriceError,
);

typeField.addEventListener('change', () => {
  priceField.placeholder = pricesOnType[typeField.value];
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: pricesOnType[typeField.value],
      max: MAX_PRICE
    },
    start: START_SLIDER,
  });
  pristine.validate(priceField);
});

priceField.value = INITIAL_VALUE;

noUiSlider.create(sliderElement, {
  range: {
    min: MIN_PRICE,
    max: MAX_PRICE,
  },
  start: START_SLIDER,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
});

function syncronizeCheckInAndOut (){
  checkInField.addEventListener('click', (evt) => {
    checkOutField.value = evt.target.value;
  });
  checkOutField.addEventListener('click', (evt) => {
    checkInField.value = evt.target.value;
  });
}
syncronizeCheckInAndOut();

export {changeRoomNumber, validateAddtionalPrice, getAdditionalPriceError, syncronizeCheckInAndOut};
