let openPopupButton = document.querySelector('.profile__open-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__button-close');

function openPopup() {
  popup.classList.add('popup_opened');
  formElement.addEventListener('submit', formSubmitHandler); 
}
openPopupButton.addEventListener("click", openPopup); 


function closePopup() {
  popup.classList.remove('popup_opened');
}
closePopupButton.addEventListener('click', closePopup);


let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob .textContent = jobInput.value;
}



