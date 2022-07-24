// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.getElementById("to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.add("active");
    toTop.classList.remove("deactive");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("deactive");
    toTop.classList.remove("active");
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
