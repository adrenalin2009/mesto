const openPopupProfileButton = document.querySelector(".profile__open-button");
const popupProfile = document.querySelector(".popup-profile");
const popupPlace = document.querySelector(".popup-place");
const popupImage = document.querySelector(".popup-image");
const closePopupButtonProfile = popupProfile.querySelector(".popup__button-close");
const closePopupButtonPlace = popupPlace.querySelector(".popup__button-close");
const closePopupButtonImage = popupImage.querySelector(".popup__button-close");

const buttonSave = document.querySelector(".form__button-save");
const buttonSavePlace = popupPlace.querySelector(".form__button-save");

const imageTitle = popupImage.querySelector(".popup-image__title");
const imageSrc = popupImage.querySelector(".popup-image__img");

const formProfile = popupProfile.querySelector(".form");
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
const itemTemplate = document.querySelector(".item-template").content;

const formCard = document.querySelector(".form_card");

function openPopup (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupEsc);

}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
  if(evt.key === "Escape") {
    const namePopapOpen = document.querySelector('.popup_opened');
    closePopup(namePopapOpen);
  }
}

function closePopupOverlay(event) {
  if(event.target === event.currentTarget){
    closePopup(event.currentTarget)
  }
}

function handlerFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

function deleteClick(evt) {
  evt.target.closest(".cards-grid__item").remove();
}

function createCard(item) {
  const newElement = itemTemplate.cloneNode(true);
  const textCard = newElement.querySelector(".cards-grid__title");
  const imgCard = newElement.querySelector(".cards-grid__img");

  textCard.textContent = item.name;
  imgCard.src = item.link;
  imgCard.alt = item.name;

  const cardLikeButton = newElement.querySelector(".cards-grid__like");
  cardLikeButton.addEventListener("click", like);

  const imgDeleteButton = newElement.querySelector(".cards-grid__delete");
  imgDeleteButton.addEventListener("click", deleteClick);

  imgCard.addEventListener("click", function () {
    openPopup (popupImage);
    imageTitle.textContent = textCard.textContent;
    imageSrc.src = imgCard.src;
    imageSrc.alt = imgCard.alt;

  });
  return newElement;
}

function like(evt) {
  evt.target.classList.toggle("cards-grid__like_active");
}

function renderCard(item) {
  list.prepend(createCard(item));
}

initialCards.forEach((item) => {
  renderCard(item);
});

function addCard(event) {
  event.preventDefault();
  renderCard({ name: namePlace.value, link: linkPlace.value });
  closePopup(popupPlace);
  formCard.reset();
  buttonSavePlace.classList.add("form__button-save_inactive");
  buttonSavePlace.getAttribute("disabled",true);
}


openPopupProfileButton.addEventListener("click",() => {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
})

addButtonPlace.addEventListener("click",() => openPopup(popupPlace));

formProfile.addEventListener("submit", handlerFormSubmit);

const popups = Array.from(document.querySelectorAll(".popup"));
popups.forEach((popupName) => {
  popupName.addEventListener("click", closePopupOverlay);
})

closePopupButtonProfile.addEventListener("click",() => closePopup(popupProfile));
closePopupButtonPlace.addEventListener("click",()  => closePopup(popupPlace));
closePopupButtonImage.addEventListener("click",()  => closePopup(popupImage));
formCard.addEventListener("submit", addCard);

