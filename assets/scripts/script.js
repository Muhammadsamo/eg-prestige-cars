$(document).ready(function () {
  $("#nuestra-historia").vide("historia.mp4");
});

const menuBtn = document.querySelector(".mobile-nav-btn");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavBtnBurger = document.querySelector(".mobile-nav-btn__burger");
const accordionBtn = document.querySelector(".nuestra-historia-heading");
const accordionBox = document.querySelector(".nuestra-historia-mobile");

let showMenu = false;

menuBtn.addEventListener("click", () => {
  if (!showMenu) {
    mobileNavBtnBurger.classList.add("open");
    mobileNav.style.transform = "translateY(0)";

    showMenu = true;
  } else {
    mobileNavBtnBurger.classList.remove("open");
    mobileNav.style.transform = "translateY(-110%)";

    showMenu = false;
  }
});

accordionBtn.addEventListener("click", () => {
  accordionBox.classList.toggle("active");
});
