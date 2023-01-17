const form = document.querySelector("form");
const progressBar = document.querySelector(".progress-bar");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // form submit logic here
  progressBar.style.width = "50%"; // set the width of the progress bar
});

const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
