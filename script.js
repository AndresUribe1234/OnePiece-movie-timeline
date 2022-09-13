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
