//Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const wrapnav = document.querySelector("#wrap-nav");
const mainContainer = document.querySelector(".main-container");
const sinaupal = document.querySelector(".sinaupal");

// const aboutpage = document.querySelector("#about-page");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  wrapnav.classList.toggle("hidden");
});

mainContainer.addEventListener("mouseenter", () => {
  sinaupal.style.filter = "none";
});

mainContainer.addEventListener("mouseleave", () => {
  sinaupal.style.filter = "grayscale(100%)";
});
