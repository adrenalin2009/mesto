let formElement = document.querySelector('.popup__container');

function formSubmitHandler (evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('.popup__input-name').value;
  let jobInput = document.querySelector('.popup__input-job').value;
  document.querySelector('.profile__title').textContent  = nameInput;
  document.querySelector('.profile__subtitle').textContent = jobInput;
}

formElement.addEventListener('submit', formSubmitHandler); 
