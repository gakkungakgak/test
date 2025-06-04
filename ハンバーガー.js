document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menuList = document.getElementById("menu");

  let isOpen = false;

  menuIcon.addEventListener("click", function () {
    isOpen = !isOpen;
    menuList.classList.toggle("open");

    menuIcon.src = isOpen
        ? "photo/sashimi_salmon.png"
        : "photo/二海サーモン日記.png";
  });
});