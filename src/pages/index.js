import "./index.css";
import { enableValidation, settings, resetValidation, disableButton } from "../scripts/validation.js";
import { setButtonText } from "../utils/helpers.js";
import Api from "../utils/Api.js";

// import images
import pencilSrc from "../images/pencil.svg";
import whitePencilSrc from "../images/white-pencil.svg";
import logoSrc from "../images/logo.svg";
import plusSrc from "../images/plus.svg";
import grayXSrc from "../images/gray-x.svg";
import whitexSrc from "../images/white-x.svg";

// initialize the api
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "c13b185c-8fbc-40ad-bb6b-9e8300eb8355",
    "Content-Type": "application/json"
  }
});

// modals
const addCardModal = document.querySelector("#add-card-modal");
const cardSubmitButton = addCardModal.querySelector(".modal__submit-button");
const addCardElement = addCardModal.querySelector(".modal__form");
const addCardModalCloseButton = addCardModal.querySelector(
  ".modal__close-button"
);

const cardTemplate = document.querySelector("#card-template");
const cardNameInput = addCardModal.querySelector("#add-card-name-input");
const cardLinkInput = addCardModal.querySelector("#add-card-link-input");
const cardsList = document.querySelector(".cards__list");

let selectedCard, selectedCardId;

// Profile elements
const avatar = document.querySelector('.profile__avatar');
const profileEditButton = document.querySelector(".profile__edit-btn");
const cardModalButton = document.querySelector(".profile__add-btn");
const avatarModalButton = document.querySelector(".profile__avatar-btn");
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

// Form elements
const editProfileModal = document.querySelector("#edit-profile-modal");
const editFormElement = editProfileModal.querySelector(".modal__form");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const editModalNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editModalDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const deleteForm = document.querySelector("#delete-form");

// delete form elements
const deleteModal = document.querySelector("#delete-modal");
const closeDeleteModalButton = document.querySelector("#close-modal-delete-button");
const cancelDeleteButton = deleteForm.querySelector(".modal__submit-btn");

// declare images and assign them to the right places
const pencil = document.querySelector('.profile__edit-btn-logo');
pencil.src = pencilSrc;

const whitePencil = document.querySelector('.profile__avatar-pencil');
whitePencil.src = whitePencilSrc;
const logo = document.querySelector('.header__logo');
logo.src = logoSrc;
const plus = document.querySelector('.profile__plus-image');
plus.src = plusSrc;

const closeModalX = document.querySelectorAll(".modal__close.modal__close-grey");
closeModalX.forEach(button => {
  button.src = grayXSrc;
});

const closeButtons = document.querySelectorAll(".modal__close.modal__close-white");
closeButtons.forEach(button => {
  button.src = whitexSrc;
});

closeDeleteModalButton.addEventListener("click", () => {
  closeModal(deleteModal);
})

cancelDeleteButton.addEventListener("click", () => {
  closeModal(deleteModal);
})

// Select the modal
const previewModal = document.querySelector("#preview-modal");
const previewModalImageEl = previewModal.querySelector(".modal__image");
const previewModalCaptionEl = previewModal.querySelector(".modal__caption");
const previewModalCloseButton = previewModal.querySelector(
  ".modal__close-button_type_preview"
);
const avatarModal = document.querySelector("#avatar-modal");

// avatar form elements
const avatarSubmitButton = avatarModal.querySelector(".modal__submit-button");
const avatarCardElement = avatarModal.querySelector(".modal__form");
const addAvatarModalCloseButton = avatarModal.querySelector(
  ".modal__close-button"
);
const avatarLinkInput = avatarModal.querySelector("#profile-avatar-input");

api.getAppInfo()
.then(([cards, userInfo]) => {
  cards.forEach((item) => {
    const cardElement = getCardElement(item);
    cardsList.prepend(cardElement);
  });
  profileNameElement.textContent = userInfo.name;
  profileDescriptionElement.textContent = userInfo.about;
  avatar.src = userInfo.avatar;
})
.catch(console.error);

//function to open the preview modal
function openPreviewModal(link, name) {
  previewModalImageEl.src = link;
  previewModalImageEl.alt = name;
  previewModalCaptionEl.textContent = name;
  openModal(previewModal);
}

// function to handle closing the modal with escape key
function handleEscapeKey(event) {
  if (event.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown",handleEscapeKey);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown",handleEscapeKey);
}


//add listeners for closing the modal on overlay click
function addOverlayClickListener(modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
}

// select all modals
const modals = document.querySelectorAll(".modal");

avatarModalButton.addEventListener("click", () => {
  openModal(avatarModal);
});
avatarCardElement.addEventListener("submit", handleAvatarSubmit);

// add listener to each modal
modals.forEach((modal) => {
  addOverlayClickListener(modal);
})


function handleEditFormSubmit(evt) {
  evt.preventDefault();

  const submitBtn = evt.submitter;
  setButtonText(submitBtn, true);

  api
    .editUserInfo({
      name: editModalNameInput.value,
      about: editModalDescriptionInput.value
    })
    .then((data) => {
      profileNameElement.textContent = data.name;
      profileDescriptionElement.textContent = data.about;
      avatar.src = data.avatar;

      closeModal(editProfileModal);
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(submitBtn, false);

    });
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const submitBtn = evt.submitter;
  setButtonText(submitBtn, true);
  const inputValues = { name: cardNameInput.value, link: cardLinkInput.value };

  api
    .addCard({
      name: inputValues.name,
      link: inputValues.link
    })
    .then((newCard) => {
      console.log("New card added:", newCard);
      const cardElement = getCardElement(newCard);
      cardsList.prepend(cardElement);
      evt.target.reset();
      disableButton(cardSubmitButton, settings);
      closeModal(addCardModal);

    }).catch(console.error)
    .finally(() => {
      setButtonText(submitBtn, false);

    });
}

function handleAvatarSubmit(evt) {
  evt.preventDefault();

  const submitBtn = evt.submitter;
  setButtonText(submitBtn, true);

  api.editAvatarInfo(avatarLinkInput.value)
    .then((data) => {
      console.log("Avatar updated successfully:", data);

      avatar.src = data.avatar;
      disableButton(submitBtn, settings);
      closeModal(avatarModal);

      evt.target.reset();
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(submitBtn, false);
    });
  }

function getCardElement(data, userInfo) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardLikeCount = cardElement.querySelector(".card__like-count");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardNameEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  const likes = data.likes || [];
  let likeCount = likes.length;
  cardLikeCount.textContent = likes.length;

  // Use the isLiked field to initialize the like button
  if (data.isLiked) {
    cardLikeButton.classList.add("card__like-button_liked");
  }

  cardLikeButton.addEventListener("click", () => {
    if (cardLikeButton.classList.contains("card__like-button_liked")) {
      api.removeLike(data._id)
        .then(updatedCard => {
          cardLikeButton.classList.remove("card__like-button_liked");
          likeCount = Math.max(0, likeCount -1);
          cardLikeCount.textContent = likeCount;
        })
        .catch(console.error);
    } else {
      api.addLike(data._id)
        .then(updatedCard => {
          cardLikeButton.classList.add("card__like-button_liked");
          likeCount += 1;
          cardLikeCount.textContent = likeCount;
        })
        .catch(console.error);
    }
  });

  cardDeleteButton.addEventListener("click", () => {
    openModal(deleteModal);
    selectedCard = cardElement;
    selectedCardId = data._id;
    console.log(selectedCard);
    console.log(selectedCardId);
  });

  cardImageEl.addEventListener("click", () => {
    openPreviewModal(data.link, data.name);
  });

  return cardElement;
}

  function handleDeleteSubmit(evt) {
  evt.preventDefault();

  const submitBtn = evt.submitter;
  setButtonText(submitBtn, true, "Delete", "Deleting...");

  console.log("Deleting card with ID:", selectedCardId);

  api.deleteCard(selectedCardId)
    .then(() => {
      if (selectedCard) {
        selectedCard.remove();
      }
      closeModal(deleteModal);
})
    .catch(console.error)
    .finally(() => {
      setButtonText(submitBtn, false, "Delete", "Deleting...");
});
  }
deleteForm.addEventListener("submit", handleDeleteSubmit);


profileEditButton.addEventListener("click", () => {
  editModalNameInput.value = profileNameElement.textContent;
  editModalDescriptionInput.value = profileDescriptionElement.textContent;
  resetValidation(editProfileModal,Array.from(editProfileModal.querySelectorAll(settings.inputSelector)), settings);
  openModal(editProfileModal);
});

previewModalCloseButton.addEventListener("click", () => {
  closeModal(previewModal);
});

editProfileCloseButton.addEventListener("click", () => {
  closeModal(editProfileModal);
});

// close the avatar profile picture modal
addAvatarModalCloseButton.addEventListener("click", () => {
  closeModal(avatarModal);
})

cardModalButton.addEventListener("click", () => {
  openModal(addCardModal);
});

addCardModalCloseButton.addEventListener("click", () => {
  closeModal(addCardModal);
});

editFormElement.addEventListener("submit", handleEditFormSubmit);
addCardElement.addEventListener("submit", handleAddCardSubmit);

enableValidation(settings);
