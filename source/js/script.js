var buttonNav = document.querySelector(".header__toggle");
var nav = document.querySelector(".nav");

buttonNav.addEventListener("click", function() {

  nav.classList.toggle("nav--opened");

  buttonNav.classList.toggle("header__toggle--closed")
});

var selectorButton = document.querySelector(".button--selector");
var options = document.querySelector(".options");

selectorButton.addEventListener("click", function() {

options.classList.toggle("options--opened");
});
