let openPopupButton = document.querySelector('.profile__open-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__button-close');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

function openPopup() {
  popup.classList.add('popup_opened');
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

openPopupButton.addEventListener("click", openPopup); 

closePopupButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler); 


