"use strict";

const onePieceMovies = {
  2009: "ONE PIECE FILM STRONG WORLD",
  2011: "ONE PIECE 3D",
  2012: "ONE PIECE FILM Z",
  2016: "ONE PIECE FILM GOLD",
  2019: "ONE PIECE STAMPEDE",
  2022: "ONE PIECE RED",
};
const numberOfMovies = Object.keys(onePieceMovies).length;

const addButton = document.querySelector(".add-new-button");

addButton.addEventListener("click", addNewButton);

function addNewButton() {
  const newButton = document.createElement("button");
  const buttonContainer = document.querySelector(".button-container");

  if (document.querySelectorAll(".new-button").length < numberOfMovies) {
    newButton.classList.add("new-button");
    buttonContainer.appendChild(newButton);

    const allButtons = document.querySelectorAll(".new-button");

    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].textContent = Object.keys(onePieceMovies)[i];
      if (allButtons[i].textContent === "2009") {
        allButtons[i].addEventListener("click", openFilmStrongWorld);
      } else if (allButtons[i].textContent === "2011") {
        allButtons[i].addEventListener("click", open3D);
      } else if (allButtons[i].textContent === "2012") {
        allButtons[i].addEventListener("click", openFilmZ);
      } else if (allButtons[i].textContent === "2016") {
        allButtons[i].addEventListener("click", openFilmGold);
      } else if (allButtons[i].textContent === "2019") {
        allButtons[i].addEventListener("click", openStampede);
      } else if (allButtons[i].textContent === "2022") {
        allButtons[i].addEventListener("click", openRed);
      }
    }
  } else {
    openUpcoming();
  }
}

function openFilmStrongWorld() {
  const allMovies = document.querySelectorAll(".movie");
  for (let i = 0; i < allMovies.length; i++) {
    if (allMovies[i].classList.contains("hidden-strong")) {
      allMovies[i].classList.remove("hidden-strong");
    }
  }
  overlay.classList.remove("hidden");
}

function open3D() {
  const allMovies = document.querySelectorAll(".movie");
  for (let i = 0; i < allMovies.length; i++) {
    if (allMovies[i].classList.contains("hidden-3d")) {
      allMovies[i].classList.remove("hidden-3d");
    }
  }
  overlay.classList.remove("hidden");
}

function openFilmZ() {
  const allMovies = document.querySelectorAll(".movie");
  for (let i = 0; i < allMovies.length; i++) {
    if (allMovies[i].classList.contains("hidden-z")) {
      allMovies[i].classList.remove("hidden-z");
    }
  }
  overlay.classList.remove("hidden");
}

function openFilmGold() {
  const allMovies = document.querySelectorAll(".movie");
  for (let i = 0; i < allMovies.length; i++) {
    if (allMovies[i].classList.contains("hidden-gold")) {
      allMovies[i].classList.remove("hidden-gold");
    }
  }
  overlay.classList.remove("hidden");
}

function openStampede() {
  const allMovies = document.querySelectorAll(".movie");
  for (let i = 0; i < allMovies.length; i++) {
    if (allMovies[i].classList.contains("hidden-stampede")) {
      allMovies[i].classList.remove("hidden-stampede");
    }
  }
  overlay.classList.remove("hidden");
}

function openRed() {
  const allMovies = document.querySelectorAll(".movie");
  for (let i = 0; i < allMovies.length; i++) {
    if (allMovies[i].classList.contains("hidden-red")) {
      allMovies[i].classList.remove("hidden-red");
    }
  }
  overlay.classList.remove("hidden");
}

function openUpcoming() {
  const allMovies = document.querySelectorAll(".movie");
  for (let i = 0; i < allMovies.length; i++) {
    if (allMovies[i].classList.contains("hidden-upcoming")) {
      allMovies[i].classList.remove("hidden-upcoming");
    }
  }
  overlay.classList.remove("hidden");
}

const movie = document.querySelector(".movie");
const closeMovie = document.querySelector(".close-movie");
const overlay = document.querySelector(".overlay");

closeMovie.addEventListener("click", closeInteraction);
overlay.addEventListener("click", closeInteraction);

function closeInteraction() {
  const allMovies = document.querySelectorAll(".movie");
  const moviesClasses = [
    "hidden-strong",
    "hidden-3d",
    "hidden-z",
    "hidden-gold",
    "hidden-stampede",
    "hidden-red",
    "hidden-upcoming",
  ];

  let classToPush;
  let arrayToCompare = [];
  for (let i = 0; i < allMovies.length; i++) {
    if (allMovies[i].classList.contains("hidden-strong")) {
      arrayToCompare.push("hidden-strong");
    } else if (allMovies[i].classList.contains("hidden-3d")) {
      arrayToCompare.push("hidden-3d");
    } else if (allMovies[i].classList.contains("hidden-z")) {
      arrayToCompare.push("hidden-z");
    } else if (allMovies[i].classList.contains("hidden-gold")) {
      arrayToCompare.push("hidden-gold");
    } else if (allMovies[i].classList.contains("hidden-stampede")) {
      arrayToCompare.push("hidden-stampede");
    } else if (allMovies[i].classList.contains("hidden-red")) {
      arrayToCompare.push("hidden-red");
    } else if (allMovies[i].classList.contains("hidden-upcoming")) {
      arrayToCompare.push("hidden-upcoming");
    }
  }

  for (let x in moviesClasses) {
    if (arrayToCompare.includes(moviesClasses[x]) === false) {
      classToPush = moviesClasses[x];
    }
  }
  let z = 0;

  for (let i = 0; i < allMovies.length; i++) {
    for (let y in moviesClasses) {
      if (allMovies[i].classList.contains(moviesClasses[y])) {
        z = 1;
      }
    }
    if (z === 0) {
      allMovies[i].classList.add(classToPush);
      break;
    }
    z = 0;
  }
  overlay.classList.add("hidden");
}

document.addEventListener("keydown", escKeyboard);

function escKeyboard(event) {
  console.log(event);
  if (event["key"] === "Escape") {
    closeInteraction();
  }
}

let allCloseMovieButtons = document.querySelectorAll(".close-movie");
for (let i = 0; i < allCloseMovieButtons.length; i++) {
  allCloseMovieButtons[i].addEventListener("click", closeMovieWithButton);
}
function closeMovieWithButton(event) {
  let path = event["path"];

  if (path[1].classList.contains("3d")) {
    path[1].classList.add("hidden-3d");
    overlay.classList.add("hidden");
  } else if (path[1].classList.contains("z")) {
    path[1].classList.add("hidden-z");
    overlay.classList.add("hidden");
  } else if (path[1].classList.contains("gold")) {
    path[1].classList.add("hidden-gold");
    overlay.classList.add("hidden");
  } else if (path[1].classList.contains("stampede")) {
    path[1].classList.add("hidden-stampede");
    overlay.classList.add("hidden");
  } else if (path[1].classList.contains("red")) {
    path[1].classList.add("hidden-red");
    overlay.classList.add("hidden");
  } else if (path[1].classList.contains("upcoming")) {
    path[1].classList.add("hidden-upcoming");
    overlay.classList.add("hidden");
  } else if (path[1].classList.contains("strong")) {
    path[1].classList.add("hidden-strong");
    overlay.classList.add("hidden");
  }
}
