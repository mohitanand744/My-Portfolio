let readMoreBtn = document.querySelectorAll(".read-more-btn");
let dropDownBtn = document.querySelector(".menu");
let navLinks = document.querySelectorAll(".nav-links a");
let menuLinks = document.querySelectorAll("li");
let loadMoreProject = document.getElementById("loadBtn");
let cursor = document.querySelector(".cursor");
let filterBtns = document.querySelectorAll(".filterbtn");
let filterCards = document.querySelectorAll(".filtercard");
let goToTopBtn = document.querySelector(".gototop");
let filterBoxes = document.querySelectorAll(".filtercard");
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
    dropDownBtn.classList.add("rotate");
    dropDownValue = true;
  } else {
    document.querySelector(".dropdown-menu").style.height = "0";
    dropDownBtn.classList.remove("rotate");
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

window.onscroll = () => {
  if (
    document.body.scrollTop > 180 ||
    document.documentElement.scrollTop > 180
  ) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
};

dropDownBtn.addEventListener("click", dropDown);

cursor.style.display = "none";
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

//! filter Card Function

let filterProjectsCart = () => {
  let filtercardss = (e) => {
    document.querySelector(".showingCards").classList.remove("showingCards");
    e.target.classList.add("showingCards");

    //! Iteration

    filterCards.forEach((cardss) => {
      cardss.classList.add("hidden");

      if (
        e.target.dataset.name === "react" ||
        e.target.dataset.name === "reactapi"
      ) {
        document.querySelector(".warn").innerText = "Work In Progress...";
      } else {
        document.querySelector(".warn").innerText = "";
      }

      if (
        cardss.dataset.name === e.target.dataset.name ||
        e.target.dataset.name === "all"
      ) {
        cardss.classList.remove("hidden");
      }
    });
  };
  filterBtns.forEach((filterbtnss) => {
    filterbtnss.addEventListener("click", (e) => {
      filtercardss(e);
    });
  });
};

filterProjectsCart();

// ! pagination code
let projectsCartPagination = () => {
  let projects = document.querySelector(
    "#projects .Latest-work .cards-container"
  ).children;
  let prevBtn = document.querySelector(".prev");
  let nextBtn = document.querySelector(".next");
  let pageNum = document.querySelector(".pages");
  let dots = document.querySelectorAll(".span");

  let maxActiveProjects = 4;
  let indexNum = 1;
  let pages = Math.ceil(projects.length / maxActiveProjects);

  let showProjects = () => {
    for (let index = 0; index < projects.length; index++) {
      projects[index].classList.remove("show");
      projects[index].classList.add("hide");

      if (
        index >= indexNum * maxActiveProjects - maxActiveProjects &&
        index < indexNum * maxActiveProjects
      ) {
        projects[index].classList.add("show");
        projects[index].classList.remove("hide");
      }

      pageNum.innerHTML = `${indexNum}`;
    }
  };

  let checkBtnsStatus = () => {
    if (indexNum === pages) {
      dots[1].style.display = "none";
      nextBtn.style.display = "none";
    } else {
      dots[1].style.display = "flex";
      nextBtn.style.display = "block";
    }

    if (indexNum > 1) {
      dots[0].style.display = "flex";
      prevBtn.style.display = "block";
    } else {
      dots[0].style.display = "none";
      prevBtn.style.display = "none";
    }
  };

  prevBtn.addEventListener("click", () => {
    indexNum--;

    showProjects();
    checkBtnsStatus();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", () => {
    indexNum++;
    showProjects();
    checkBtnsStatus();

    window.scrollTo({
      top: 170,
      behavior: "smooth",
    });
  });

  showProjects();
  checkBtnsStatus();
};

document.querySelector(".pagination-container").style.display = "none";
/* toggle project Cart Data */

let toggleProjectsCartData = (e) => {
  document.querySelector(".ac").classList.remove("ac");
  e.target.classList.add("ac");

  if (e.target.classList.contains("paginated")) {
    document.querySelector(".pagination-container").style.display = "flex";
    document.querySelector(".filter-btns").style.display = "none";

    projectsCartPagination();
  } else {
    window.location.reload();
    document.querySelector(".filter-btns").style.display = "flex";
  }
};

document.querySelector(".togelBtns").addEventListener("click", (e) => {
  toggleProjectsCartData(e);
});
