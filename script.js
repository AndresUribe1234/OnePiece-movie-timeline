"use strict";

const addButton = document.querySelector(".add-new-button");

addButton.addEventListener("click", addNewButton);

function addNewButton() {
  const newButton = document.createElement("button");
  const buttonContainer = document.querySelector(".button-container");

  newButton.classList.add("new-button");
  buttonContainer.appendChild(newButton);

  const allButtons = document.querySelectorAll(".new-button");

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].textContent = "New Button!";
  }
}

const modalButtons = document.querySelectorAll(".show-modal");

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < modalButtons.length; i++) {
  modalButtons[i].addEventListener("click", openInteraction);
}

function openInteraction() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

closeModal.addEventListener("click", closeInteraction);
overlay.addEventListener("click", closeInteraction);

function closeInteraction() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

document.addEventListener("keydown", escKeyboard);

function escKeyboard(event) {
  if (event["key"] === "Escape" && !modal.classList.contains("hidden")) {
    closeInteraction();
  }
}
