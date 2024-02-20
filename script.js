"use strict";
const label = document.querySelector(".label");
const input = document.querySelector(".input");
const newsletter = document.querySelector(".newsletter");
const overlay = document.querySelector(".overlay");
// BOOK A TABLE PAGE
const labelOne = document.querySelector(".label-1");
const inputOne = document.querySelector(".input-1");
// ////BOOK A TABLE PAGE

input.addEventListener("click", function () {
  label.style.left = "-120px";
  label.style.color = "white";
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  label.style.left = "22px";
  label.style.color = "black";
  overlay.classList.add("hidden");
});

inputOne.addEventListener("click", function () {
  // labelOne.style.bottom = "70px";
  // labelOne.style.color = "blue";
  console.log("click");
});
