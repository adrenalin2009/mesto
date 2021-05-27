let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__button-close');

openPopup.addEventListener('click', function(){
  popup.classList.add('popup_opened');
})

closePopup.addEventListener('click', function(){
  popup.classList.remove('popup_opened');
})



let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob .textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler); 
