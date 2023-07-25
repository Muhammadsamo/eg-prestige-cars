$(document).ready(function () {
  $("#nuestra-historia").vide("historia.mp4");
});

const menuBtn = document.querySelector(".mobile-nav-btn");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavBtnBurger = document.querySelector(".mobile-nav-btn__burger");

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
