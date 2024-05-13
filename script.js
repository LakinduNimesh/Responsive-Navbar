const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("header_toggle");
const navClose = document.getElementById("header_close")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle('show')
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove('show')
});
