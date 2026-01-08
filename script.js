let menuBtn = document.querySelector("#menuIcon");
let navLinks = document.querySelector("#navLinks");
let isclicked = true;

menuBtn.addEventListener("click", () => {
  if (isclicked) {
    navLinks.classList.remove("show");
    menuBtn.setAttribute("class", "fa-solid fa-xmark");
    menuBtn.style.color = "red";
  } else {
    navLinks.classList.add("show");
    menuBtn.setAttribute("class", "fa-solid fa-bars-staggered");
    menuBtn.style.color = "black";
  }
  isclicked = !isclicked;
});
