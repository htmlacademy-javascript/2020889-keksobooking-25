const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
});

const capacityField = form.querySelector('#capacity');
const roomNumberField = form.querySelector('#room_number');
const typeField = form.querySelector('#type');
const checkInField = form.querySelector('#timein');
const checkOutField = form.querySelector('#timeout');
const priceField = form.querySelector('#price');

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
