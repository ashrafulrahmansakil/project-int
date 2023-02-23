/*
 * hambarger open close
 */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("ul");
const links = document.querySelectorAll("li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
  hamburger.classList.toggle("open");
});

/*
 * hamburger sidebar
 */

// toggle
const sidebar = document.querySelector(".navbar__menu");

hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("sidebar-hide")
})