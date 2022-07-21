const utilities = {};

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", function () {
  const spanHamburger = hamburger.querySelectorAll("span");
  hamburger.classList.toggle("hamburger-active");
  spanHamburger.forEach(function (span) {
    span.classList.toggle("bg-primary");
  });
});
