// header background

let isTransparent = true;
const nav = document.querySelector("nav");

window.addEventListener("scroll", (event) => {
  if (window.pageYOffset > 70 && isTransparent) {
    nav.classList.add("fixed-nav");
    isTransparent = false;
  }
  if (window.pageYOffset <= 70 && !isTransparent) {
    nav.classList.remove("fixed-nav");
    isTransparent = true;
  }
});

console.log(window.pageYOffset);
//Animated Navbar

const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");

const options = {
  threshold: 0.7,
};
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const cords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: cords.height,
      width: cords.width,
      top: cords.top,
      left: cords.left,
    };
    if (entry.isIntersecting) {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

//preloader section

const load = document.querySelector(".loading");

window.addEventListener("load", (event) => {
  load.classList.add("loader-finish");
});
