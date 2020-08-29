// focus contact

const input = document.querySelectorAll(".form__input");

input.forEach((e) => {
  e.addEventListener("focus", (event) => {
    e.previousElementSibling.classList.add("label-focus");
  });
  e.addEventListener("blur", (event) => {
    e.previousElementSibling.classList.remove("label-focus");
  });
});

// header background

let isTransparent = true;
const nav = document.querySelector(".nav-container");

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

// mobile navbar animation
const bottom = document.querySelector(".bottom-nav");

let oldScollPosition = 0;

let isScrollingDown = false;

let isHeaderVisible = true;

window.addEventListener("scroll", (event) => {
  isScrollingDown = oldScollPosition > window.scrollY;
  oldScollPosition = window.scrollY;

  if (!isScrollingDown && window.scrollY > 200 && isHeaderVisible) {
    bottom.classList.add("bottom-nav-invisible");
    isHeaderVisible = false;
  }
  if (isScrollingDown && !isHeaderVisible) {
    bottom.classList.remove("bottom-nav-invisible");
    isHeaderVisible = true;
  }
});

// mobile navigation display

const mobileNavigation = document.querySelector(".mobile-navi");
const navigationLinks = document.querySelectorAll(".mobile-navi-item");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", (event) => {
  mobileNavigation.classList.toggle("mobile-navi-display");
});

navigationLinks.forEach((e) => {
  e.addEventListener("click", (event) => {
    mobileNavigation.classList.toggle("mobile-navi-display");
  });
});

//form

//adding form
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const details = {
    name: form.name.value,
    Email: form.email.value,
    message: form.Message.value,
    subject: form.subject.value,
  };
  db.collection("contacts")
    .add(details)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
