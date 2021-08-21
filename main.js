const menu = document.querySelector(".header-menu");
const burger = document.querySelector(".burger-menu");
const header = document.querySelector(".header-top");
const about = document.querySelector(".features");
const links = document.querySelectorAll(".header-menu__item");

var pos =
  about.getBoundingClientRect().top - document.body.getBoundingClientRect().top;

burger.addEventListener("click", function () {
  menu.classList.toggle("visible");
});

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > pos) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});