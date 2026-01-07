let menuBtn = document.querySelector("#menuicon");
let navLinks = document.querySelector("#navLinks");
let isclicked = true;

menuBtn.addEventListener("click", () => {
  if (isclicked) {
    navLinks.classList.remove("show");
    menuBtn.setAttribute("class", "fa-solid fa-xmark");
    menuBtn.style.color = "red";
    navLinks.style.transform = "translateX(0%)";
  } else {
    navLinks.classList.add("show");
    menuBtn.setAttribute("class", "fa-solid fa-bars-staggered");
    menuBtn.style.color = "black";
    navLinks.style.transform = "translateX(100%)";
  }
  isclicked = !isclicked;
});
