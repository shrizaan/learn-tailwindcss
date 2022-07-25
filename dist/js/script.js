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
    toTop.classList.add("active");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("block");
  }
};

window.addEventListener("load", function () {
  const toTop = document.getElementById("to-top");
  toTop.classList.add("hidden");
  const html = document.querySelector("html");
  const lightMode = document.getElementById("light-mode");
  const darkMode = document.getElementById("dark-mode");

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  if (html.classList.contains("dark")) {
    darkMode.classList.remove("hidden");
    lightMode.classList.add("hidden");
  } else {
    lightMode.classList.remove("hidden");
    darkMode.classList.add("hidden");
  }
});

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

// light and dark mode button event
const modeToggle = document.getElementById("toggle-mode");
modeToggle.addEventListener("click", function () {
  const html = document.querySelector("html");
  const lightMode = document.getElementById("light-mode");
  const darkMode = document.getElementById("dark-mode");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    lightMode.classList.add("active");
    lightMode.classList.remove("hidden");
    darkMode.classList.add("hidden");
    setTimeout(function () {
      lightMode.classList.remove("active");
    }, 300);
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    darkMode.classList.toggle("active");
    lightMode.classList.add("hidden");
    darkMode.classList.remove("hidden");
    setTimeout(function () {
      darkMode.classList.remove("active");
    }, 300);
    localStorage.setItem("theme", "dark");
  }
});
