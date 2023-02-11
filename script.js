"use strict";

const submitBtn = document.querySelector(".btn--submit");
const firstNameInput = document.querySelector(".main__input--1");
const lastNameInput = document.querySelector(".main__input--2");
const emailInput = document.querySelector(".main__input--3");
const passwordInput = document.querySelector(".main__input--4");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!firstNameInput.validity.valid) {
    document
      .querySelector(".main__input--1 + .main__invalid-icon")
      .classList.add("unhide");

    document.querySelector(".main__invalid--1").classList.add("unhide");

    document.querySelector(".main__input--1").classList.add("invalid-border");
  } else {
    document
      .querySelector(".main__input--1 + .main__invalid-icon")
      .classList.remove("unhide");

    document.querySelector(".main__invalid--1").classList.remove("unhide");

    document
      .querySelector(".main__input--1")
      .classList.remove("invalid-border");
  }

  if (!lastNameInput.validity.valid) {
    document
      .querySelector(".main__input--2 + .main__invalid-icon")
      .classList.add("unhide");

    document.querySelector(".main__invalid--2").classList.add("unhide");

    document.querySelector(".main__input--2").classList.add("invalid-border");
  } else {
    document
      .querySelector(".main__input--2 + .main__invalid-icon")
      .classList.remove("unhide");

    document.querySelector(".main__invalid--2").classList.remove("unhide");

    document
      .querySelector(".main__input--2")
      .classList.remove("invalid-border");
  }

  if (!emailInput.validity.valid) {
    document
      .querySelector(".main__input--3 + .main__invalid-icon")
      .classList.add("unhide");

    document.querySelector(".main__invalid--3").classList.add("unhide");

    document.querySelector(".main__input--3").classList.add("invalid-border");
  } else {
    document
      .querySelector(".main__input--3 + .main__invalid-icon")
      .classList.remove("unhide");

    document.querySelector(".main__invalid--3").classList.remove("unhide");

    document
      .querySelector(".main__input--3")
      .classList.remove("invalid-border");
  }

  if (!passwordInput.validity.valid) {
    document
      .querySelector(".main__input--4 + .main__invalid-icon")
      .classList.add("unhide");

    document.querySelector(".main__invalid--4").classList.add("unhide");

    document.querySelector(".main__input--4").classList.add("invalid-border");
  } else {
    document
      .querySelector(".main__input--4 + .main__invalid-icon")
      .classList.remove("unhide");

    document.querySelector(".main__invalid--4").classList.remove("unhide");

    document
      .querySelector(".main__input--4")
      .classList.remove("invalid-border");
  }
});
