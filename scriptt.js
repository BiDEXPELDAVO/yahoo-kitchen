"use strict";
// BOOK A TABLE PAGE
const labelOne = document.querySelectorAll(".label-1");
const inputOne = document.querySelectorAll(".input-1");
const overlay = document.querySelector(".overlay");
// ////BOOK A TABLE PAGE

for (let i = 0; i < inputOne.length; i++)
  inputOne[i].addEventListener("click", function () {
    labelOne[i].classList.toggle("size");

    labelOne[i].classList.toggle("font-size");
    labelOne[i].classList.toggle("font");

    inputOne[i].classList.remove("color");
    overlay.classList.remove("hidden");
  });

for (let i = 0; i < inputOne.length; i++)
  overlay.addEventListener("click", function () {
    inputOne[i].classList.add("color");
    labelOne[i].classList.remove("size");

    labelOne[i].classList.toggle("font-size");
    labelOne[i].classList.remove("font");

    overlay.classList.add("hidden");
  });
