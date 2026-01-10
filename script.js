let mm = gsap.matchMedia();

gsap.from(".eshop-logo h1", {
  y: -130,
  opacity: 0,
  duration: 0.9,
  delay: 0.3,
});
gsap.from("#menuIcon", {
  y: -120,
  duration: 0.6,
  opacity: 0,
  delay: 0.4,
});

mm.add("(min-width:1440px)", () => {
  let el = gsap.timeline();
  el.from("#navLinks a", {
    x: -120,
    duration: 0.8,
    opacity: 0,
    stagger: 0.3,
  });
  el.from("#icons", {
    x: -120,
    duration: 0.7,
    stagger: 0.3,
    opacity: 0,
  });
});

mm.add("(max-width:768px)", () => {
  let el = gsap.timeline();
  el.to("#navLinks", {
    left: 0,
    duration: 0.9,
  });
  el.from("#navClose i", {
    scale: 2,
    duration: 0.8,
    opacity: 0,
  });
  el.from(".mobile-logo img", {
    x: -100,
    duration: 0.8,
    opacity: 0,
  });
  el.from("#navLinks a", {
    x: -100,
    duration: 0.9,
    opacity: 0,
    stagger: 0.3,
  });
  el.from("#icons", {
    y: 100,
    duration: 0.8,
    opacity: 0,
    stagger: 0.3,
  });

  el.pause();
  let navClose = document.querySelector("#navClose");
  let menuIcon = document.querySelector("#menuIcon");

  menuIcon.addEventListener("click", function () {
    el.play();
  });
  navClose.addEventListener("click", function () {
    el.reverse();
  });
});

let scrollRight = document.querySelector("#scrollRight");
let scrollLeft = document.querySelector("#scrollLeft");
let heroSlides = document.querySelectorAll(".hero-slide");
let imgIndex = 0;
let intervalid;

function showimage(index) {
  heroSlides.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

function nextImage() {
  imgIndex = (imgIndex + 1) % heroSlides.length;
  showimage(imgIndex);
}

function prevImage() {
  imgIndex = (imgIndex - 1 + heroSlides.length) % heroSlides.length;
  showimage(imgIndex);
}

scrollLeft.addEventListener("click", () => {
  nextImage();
  showimage(imgIndex);
});

scrollRight.addEventListener("click", () => {
  prevImage();
  showimage(imgIndex);
});

function startInterval() {
  intervalid = setInterval(nextImage, 3000);
}

function resetInterval() {
  clearInterval(intervalid);
  startInterval();
}

showimage(imgIndex);
startInterval();
