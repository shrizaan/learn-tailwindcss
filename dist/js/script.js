// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.getElementById("to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");

    toTop.classList.add("block");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("block");
  }
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

// Click outside of navbar to close
window.addEventListener("click", function (e) {
  if (e.target.id !== "hamburger" && e.target.id !== "nav-menu") {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
    const spanHamburger = hamburger.querySelectorAll("span");
  }
});