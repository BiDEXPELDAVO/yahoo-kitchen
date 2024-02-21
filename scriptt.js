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

const starOne = document.querySelectorAll(".star-0");
const starTwo = document.querySelectorAll(".star-1");
const starThree = document.querySelectorAll(".star-2");
const starFour = document.querySelectorAll(".star-3");
const starFive = document.querySelectorAll(".star-4");
const starSix = document.querySelectorAll(".star-5");

starOne.forEach((star, index1) => {
  for (let i = 0; i < starOne.length; i++)
    star.addEventListener("click", function () {
      starOne.forEach((star, index2) => {
        if (index1 >= index2) {
          star.style.color = "gold";
        } else {
          star.style.color = "black";
        }
      });
    });
});

starTwo.forEach((star, index1) => {
  for (let i = 0; i < starTwo.length; i++)
    star.addEventListener("click", function () {
      starTwo.forEach((star, index2) => {
        if (index1 >= index2) {
          star.style.color = "gold";
        } else {
          star.style.color = "black";
        }
      });
    });
});

starThree.forEach((star, index1) => {
  for (let i = 0; i < starThree.length; i++)
    star.addEventListener("click", function () {
      starThree.forEach((star, index2) => {
        if (index1 >= index2) {
          star.style.color = "gold";
        } else {
          star.style.color = "black";
        }
      });
    });
});

starFour.forEach((star, index1) => {
  for (let i = 0; i < starFour.length; i++)
    star.addEventListener("click", function () {
      starFour.forEach((star, index2) => {
        if (index1 >= index2) {
          star.style.color = "gold";
        } else {
          star.style.color = "black";
        }
      });
    });
});

starFive.forEach((star, index1) => {
  for (let i = 0; i < starFive.length; i++)
    star.addEventListener("click", function () {
      starFive.forEach((star, index2) => {
        if (index1 >= index2) {
          star.style.color = "gold";
        } else {
          star.style.color = "black";
        }
      });
    });
});

starSix.forEach((star, index1) => {
  for (let i = 0; i < starSix.length; i++)
    star.addEventListener("click", function () {
      starSix.forEach((star, index2) => {
        if (index1 >= index2) {
          star.style.color = "gold";
        } else {
          star.style.color = "black";
        }
      });
    });
});

// SUPERCOMBO PAGE ////
