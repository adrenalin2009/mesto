let openPopupButton = document.querySelector(".profile__open-button");
let popupProfile = document.querySelector(".popup-profile");
let popupPlace = document.querySelector(".popup-place");
const popupImage = document.querySelector(".popup-image");
let closePopupButtonProfile = popupProfile.querySelector(".popup__button-close");
let closePopupButtonPlace = popupPlace.querySelector(".popup__button-close");
let closePopupButtonImage = popupImage.querySelector(".popup__button-close");

let buttonSave = document.querySelector(".form__button-save");

const ImageTitle = popupImage.querySelector(".popup-image__title");
const ImageSrc = popupImage.querySelector(".popup-image__img");

let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__input_type_name");
let jobInput = document.querySelector(".form__input_type_job");
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");

let namePlaceInput = document.querySelector(".form__input_type_name-place");
let linkPlaceInput = document.querySelector(".form__input_type_link");

let addButtonPlace = document.querySelector(".profiles__add-button");
let namePlace = document.querySelector(".form__input_type_name-place");
let linkPlace = document.querySelector(".form__input_type_link");

let list = document.querySelector(".cards-grid__list");
const itemTemplate = document.querySelector(".item__template").content;

function openPopupProfile() {
  popupProfile.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function openPopupPlace() {
  popupPlace.classList.add("popup_opened");
}

function closePopup() {
  popupProfile.classList.remove("popup_opened");
  popupPlace.classList.remove("popup_opened");
  popupImage.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

openPopupButton.addEventListener("click", openPopupProfile);
formElement.addEventListener("submit", formSubmitHandler);
addButtonPlace.addEventListener("click", openPopupPlace);
closePopupButtonProfile.addEventListener("click", closePopup);
closePopupButtonPlace.addEventListener("click", closePopup);
closePopupButtonImage.addEventListener("click", closePopup);

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function deleteClick(evt) {
  evt.target.closest(".cards-grid__item").remove();
}

function renderitems(item) {
  const newElement = itemTemplate.cloneNode(true);
  const textCard = newElement.querySelector(".cards-grid__title");
  const imgCard = newElement.querySelector(".cards-grid__img");

  textCard.textContent = item.name;
  imgCard.src = item.link;
  imgCard.alt = item.name;

  const cardLikeButton = newElement.querySelector(".cards-grid__button_like");
  cardLikeButton.addEventListener("click", Like);

  const imgDeleteButton = newElement.querySelector(".cards-grid__button_delete");
  imgDeleteButton.addEventListener("click", deleteClick);

  imgCard.addEventListener("click", function () {
    popupImage.classList.add("popup_opened");
    ImageTitle.textContent = textCard.textContent;
    ImageSrc.src = imgCard.src;
  });
  return newElement;
}

function Like(evt) {
  evt.target.classList.toggle("cards-grid__button_like_active");
}

function renderCard(item) {
  list.prepend(renderitems(item));
}

initialCards.forEach((item) => {
  renderCard(item);
});

const formCard = document.querySelector(".form_card");

function addCard(event) {
  event.preventDefault();
  renderCard({ name: namePlace.value, link: linkPlace.value });
  closePopup(popupImage);
}

formCard.addEventListener("submit", addCard);