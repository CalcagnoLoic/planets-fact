document.addEventListener("astro:page-load", () => {
  document.querySelector(".hamburger")?.addEventListener("click", () => {
    const menu = document.querySelector(".menu-dropdown");
    let menuIsOpen = false;

    if (!menuIsOpen) {
      menu?.classList.remove("hidden");
      menuIsOpen = true;
      document.body.classList.add("overflow-hidden");
    } else {
      menu?.classList.add("hidden");
      menuIsOpen = false;
    }
  });
});
