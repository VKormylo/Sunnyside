const menu = document.querySelector(".header-menu");
const burger = document.querySelector(".burger-menu");

burger.addEventListener("click", function () {
  menu.classList.toggle("visible");
});
