let menuIsOpen = false;

const toggleMenu = () => {
  const menu = document.querySelector(".menu-dropdown");

  if (menuIsOpen) {
    menu?.classList.add("hidden");
    menuIsOpen = false;
  } else {
    menu?.classList.remove("hidden");
    menuIsOpen = true;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".hamburger");
  menu?.addEventListener("click", toggleMenu);
});
