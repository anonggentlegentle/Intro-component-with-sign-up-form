"use strict";

const submitBtn = document.querySelector(".btn--submit");
const firstNameInput = document.querySelector(".main__input--1");
const lastNameInput = document.querySelector(".main__input--2");
const emailInput = document.querySelector(".main__input--3");
const passwordInput = document.querySelector(".main__input--4");

const addStyles = function (num) {
  document
    .querySelector(`.main__input--${num} + .main__invalid-icon`)
    .classList.add("unhide");

  document.querySelector(`.main__invalid--${num}`).classList.add("unhide");

  document
    .querySelector(`.main__input--${num}`)
    .classList.add("invalid-border");
};

const removeStyles = function (num) {
  document
    .querySelector(`.main__input--${num} + .main__invalid-icon`)
    .classList.remove("unhide");

  document.querySelector(`.main__invalid--${num}`).classList.remove("unhide");

  document
    .querySelector(`.main__input--${num}`)
    .classList.remove("invalid-border");
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!firstNameInput.validity.valid) {
    addStyles(1);
  } else {
    removeStyles(1);
  }

  if (!lastNameInput.validity.valid) {
    addStyles(2);
  } else {
    removeStyles(2);
  }

  if (!emailInput.validity.valid) {
    addStyles(3);
  } else {
    removeStyles(3);
  }

  if (!passwordInput.validity.valid) {
    addStyles(4);
  } else {
    removeStyles(4);
  }
});
