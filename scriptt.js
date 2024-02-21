"use strict";
// BOOK A TABLE PAGE
const labelOne = document.querySelectorAll(".label-1");
const inputOne = document.querySelectorAll(".input-1");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < inputOne.length; i++)
  inputOne[i].addEventListener("click", function () {
    labelOne[i].classList.toggle("position");

    labelOne[i].classList.toggle("font-size");
    labelOne[i].classList.toggle("font");

    inputOne[i].classList.toggle("color");
    overlay.classList.remove("hidden");
  });

for (let i = 0; i < inputOne.length; i++)
  overlay.addEventListener("click", function () {
    inputOne[i].classList.add("color");
    labelOne[i].classList.remove("position");

    labelOne[i].classList.toggle("font-size");
    labelOne[i].classList.remove("font");

    overlay.classList.add("hidden");
  });

// ////BOOK A TABLE PAGE

// SUPERCOMBO PAGE

const stars = document.querySelectorAll(".fa-star");

let starsColor = [];
for (let i = 0; i < stars.length; i++)
  stars[i].addEventListener("click", function () {
    starsColor = starsColor + i;
    if (starsColor >= i) {
      stars[i].style.color = "gold";
      console.log("click");
    }
  });

// SUPERCOMBO PAGE ////
