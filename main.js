const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", function () {
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  overlay.classList.remove("show");
});
