let openPopup = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__button-close');
let savePopup = document.querySelector('.popup__button-save');

openPopup.addEventListener('click', toggleClass)

closePopup.addEventListener('click', toggleClass)

savePopup.addEventListener('click', toggleClass)

function toggleClass(){
    popup.classList.toggle('popup_opened');
}
