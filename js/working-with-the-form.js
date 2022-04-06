//Неактивное состояние
const setInactiveStatus = () => {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form-disabled');

  const fieldSet = document.querySelectorAll('fieldset');
  fieldSet.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });

  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('ad-form--disabled');

  const mapFilter = document.querySelectorAll('.map__filter');
  mapFilter.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};
//setInactiveStatus();

//Активное состояние
const setActiveStatus = () => {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.remove('ad-form-disabled');

  const fieldSet = document.querySelectorAll('fieldset');
  fieldSet.forEach((element) => {
    element.removeAttribute('disabled');
  });

  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.remove('ad-form--disabled');

  const mapFilter = document.querySelectorAll('.map__filter');
  mapFilter.forEach((element) => {
    element.removeAttribute('disabled');
  });
};

setActiveStatus();

export {setInactiveStatus, setActiveStatus};
