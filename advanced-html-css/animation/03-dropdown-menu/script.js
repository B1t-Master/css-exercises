const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    dropdownMenu.classList.toggle("visible");
  }
});

dropdownMenu.addEventListener("animationend", () => {
  setTimeout(() => {
    dropdownMenu.classList.toggle("visible");
  }, 5000);
});

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownMenu.classList.remove("visible");
  }
});
