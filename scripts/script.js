const openPopupButton = document.querySelector(".profile__open-button");
const popupProfile = document.querySelector(".popup-profile");
const popupPlace = document.querySelector(".popup-place");
const popupImage = document.querySelector(".popup-image");
const closePopupButtonProfile = popupProfile.querySelector(".popup__button-close");
const closePopupButtonPlace = popupPlace.querySelector(".popup__button-close");
const closePopupButtonImage = popupImage.querySelector(".popup__button-close");

const buttonSave = document.querySelector(".form__button-save");

const imageTitle = popupImage.querySelector(".popup-image__title");
const imageSrc = popupImage.querySelector(".popup-image__img");

const formElement = document.querySelector(".form");
const nameInput = document.querySelector(".form__input_type_name");
const jobInput = document.querySelector(".form__input_type_job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const namePlaceInput = document.querySelector(".form__input_type_name-place");
const linkPlaceInput = document.querySelector(".form__input_type_link");

const addButtonPlace = document.querySelector(".profiles__add-button");
const namePlace = document.querySelector(".form__input_type_name-place");
const linkPlace = document.querySelector(".form__input_type_link");

const list = document.querySelector(".cards-grid__list");
const itemTemplate = document.querySelector(".item__template").content;

const formCard = document.querySelector(".form_card");

function openPopup (popup) {
  popup.classList.add("popup_opened")
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

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
  cardLikeButton.addEventListener("click", like);

  const imgDeleteButton = newElement.querySelector(".cards-grid__button_delete");
  imgDeleteButton.addEventListener("click", deleteClick);

  imgCard.addEventListener("click", function () {
    popupImage.classList.add("popup_opened");
    imageTitle.textContent = textCard.textContent;
    imageSrc.src = imgCard.src;
    imageSrc.alt = imgCard.alt;

  });
  return newElement;
}

function like(evt) {
  evt.target.classList.toggle("cards-grid__button_like_active");
}

function renderCard(item) {
  list.prepend(renderitems(item));
}

initialCards.forEach((item) => {
  renderCard(item);
});

function addCard(event) {
  event.preventDefault();
  renderCard({ name: namePlace.value, link: linkPlace.value });
  closePopup(popupImage);
  formCard.reset();
}


openPopupButton.addEventListener("click",() => {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
})
  
addButtonPlace.addEventListener("click",() => openPopup(popupPlace));
formElement.addEventListener("submit", formSubmitHandler);
closePopupButtonProfile.addEventListener("click",() => closePopup(popupProfile));
closePopupButtonPlace.addEventListener("click",()  => closePopup(popupPlace));
closePopupButtonImage.addEventListener("click",()  => closePopup(popupImage));
formCard.addEventListener("submit", addCard);
