let readMoreBtn = document.querySelectorAll(".read-more-btn");
let dropDownBtn = document.querySelector(".menu");
let navLinks = document.querySelectorAll(".nav-links a");
let menuLinks = document.querySelectorAll("li");
let loadMoreProject = document.getElementById("loadBtn");
let dropDownValue = false;
let rMoreBtn = false;

// ! ReadMore Function

let readMore = (event) => {
  let readMoreTxt = event.target.previousElementSibling;

  if (!rMoreBtn) {
    readMoreTxt.style.display = "inline";
    event.target.innerText = "...Read less";

    rMoreBtn = true;
  } else {
    readMoreTxt.style.display = "none";
    event.target.innerText = "...Read more";
    rMoreBtn = false;
  }
};

// ! dropDown function

let dropDown = () => {
  if (!dropDownValue) {
    document.querySelector(".dropdown-menu").style.height = "310px";
    document.querySelector(".dropdown-menu").style.display = "flex";
    dropDownValue = true;
  } else {
    document.querySelector(".dropdown-menu").style.height = "0";
    dropDownValue = false;
  }
};

//! Active Class Function

let activeClass = (e) => {
  let activeElement = document.querySelector(".active");
  if (activeElement) {
    activeElement.classList.remove("active");
  }
  e.target.classList.add("active");
};

// ! loader function

let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

//!  Iteration

readMoreBtn.forEach((currElem) => {
  // ! Click Events
  currElem.addEventListener("click", readMore);
});

navLinks.forEach((currElema) => {
  currElema.addEventListener("click", activeClass);
});
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    document.querySelector(".dropdown-menu").style.height = "0";
  });
});

// ! click Event

dropDownBtn.addEventListener("click", dropDown);

loadMoreProject.addEventListener("click", () => {
  alert("Work In Progress...");
});