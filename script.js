let readMoreBtn = document.querySelectorAll(".read-more-btn");
let dropDownBtn = document.querySelector(".menu");
let navLinks = document.querySelectorAll(".nav-links a");
let menuLinks = document.querySelectorAll("li");
let loadMoreProject = document.getElementById("loadBtn");
let cursor = document.querySelector(".cursor");
let filterBtns = document.querySelectorAll(".filterbtn");
let filterCards = document.querySelectorAll(".filtercard");
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
//! filter Card Function

let filtercardss = (e) => {
  document.querySelector(".showingCards").classList.remove("showingCards");
  e.target.classList.add("showingCards");

  //! Iteration

  filterCards.forEach((cardss) => {
    cardss.classList.add("hidden");

    if (
      cardss.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      cardss.classList.remove("hidden");
    }
  });
};

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
filterBtns.forEach((filterbtnss) => {
  filterbtnss.addEventListener("click", ()=> {
    /* filtercardss(); */
    alert("Work In Progress...")
  });
});

// ! click Event

dropDownBtn.addEventListener("click", dropDown);

loadMoreProject.addEventListener("click", () => {
  alert("Work In Progress...");
});

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.display = "block";
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});
