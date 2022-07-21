// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
  hamburger.classList.remove("hamburger-active");
  navMenu.classList.add("hidden");
};

// Hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
  const spanHamburger = hamburger.querySelectorAll("span");
  hamburger.classList.toggle("hamburger-active");
  console.log(navMenu);
  navMenu.classList.toggle("hidden");
  spanHamburger.forEach(function (span) {
    span.classList.toggle("bg-primary");
  });
});
