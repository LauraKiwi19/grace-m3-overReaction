'use strict';
// LocalStorage
const nameInput = document.querySelector('.js-input-name');
const jobInput = document.querySelector('.js-input-job');
const photo = document.querySelector('.js-photo');
const emailInput = document.querySelector('.js-input-email');
const phoneInput = document.querySelector('.js-input-phone');
const linkedinInput = document.querySelector('.js-input-linkedin');
const githubInput = document.querySelector('.js-input-github');
const paletteInput = document.querySelectorAll('.js-palettes');
const itemInputs = document.querySelectorAll('.item__input');
const typograInputs = document.querySelectorAll('.js-typography');
const photoCard = document.querySelector('.js-card__image');

function readChoosenPalette() {
  const inputChecked = document.querySelector('.js-palettes:checked');
  return parseInt(inputChecked.value);
  // for (let i = 0; i < paletteInput.length; i = i + 1) {
  //   if (paletteInput[i].checked) {
  //     return parseInt(paletteInput[i].value);
  //   }
  // }
}

function readChoosenTypogra() {
  const inputChecked = document.querySelector('.js-typography:checked');
  return parseInt(inputChecked.value);
}

function previewLocalStorage() {
  for (let i = 0; i < itemInputs.length; i = i + 1) {
    itemInputs[i].dispatchEvent(new Event('keyup'));
  }
}

//document.querySelector('.js-input-github').dispatchEvent(new Event('keyup'));
// nameInput.dispatchEvent(new Event('keyup'));
const formInfo = {};

const saveInfo = () => {
  formInfo.palette = readChoosenPalette();
  formInfo.name = nameInput.value;
  formInfo.job = jobInput.value;
  formInfo.photo = photo.src;
  formInfo.email = emailInput.value;
  formInfo.phone = phoneInput.value;
  formInfo.linkedin = linkedinInput.value;
  formInfo.github = githubInput.value;
  formInfo.typogra = readChoosenTypogra();

  // Pasar objeto a cadena
  localStorage.setItem('userData', JSON.stringify(formInfo));
  changeButtonColor();
};

const getFromLocalStorage = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData !== null) {
    paletteInput.value = userData.palette;
    nameInput.value = userData.name;
    jobInput.value = userData.job;
    photo.src = userData.photo;
    if (!!userData.photo === true) {
      photoCard.style.backgroundImage = `url(${userData.photo})`;
      photo.style.backgroundImage = `url(${userData.photo})`;
    } else {
      photoCard.style.backgroundImage = `url('../../assets/images/default.jpg')`;
    }
    emailInput.value = userData.email;
    phoneInput.value = userData.phone;
    linkedinInput.value = userData.linkedin;
    githubInput.value = userData.github;
    typograInputs.value = userData.typogra;
  }
};

// const form = document.querySelector('.js-form');
form.addEventListener('keyup', saveInfo);
form.addEventListener('click', saveInfo);

//// changing color of button-share when form is completed

const buttonShare = document.querySelector('.share__btn');

function changeButtonColor() {
  if (nameInput.value && jobInput.value && emailInput.value && linkedinInput.value && githubInput.value && photo.src) {
    //if (nameInput.value && jobInput.value && emailInput.value && linkedinInput.value && githubInput.value && browse.value) {
    buttonShare.style.background = '#e17334';
  } else {
    buttonShare.style.background = 'lightgrey';
  }
}

form.addEventListener('keyup', changeButtonColor);

const startApp = () => {
  if (!!formInfo === true) {
    getFromLocalStorage();
    previewLocalStorage();
    changeButtonColor();
  }
};
