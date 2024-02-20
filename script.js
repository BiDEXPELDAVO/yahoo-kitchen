"use strict";
const label = document.querySelector(".label");
const input = document.querySelector(".input");
const newsletter = document.querySelector(".newsletter");
const overlay = document.querySelector(".overlay");

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
