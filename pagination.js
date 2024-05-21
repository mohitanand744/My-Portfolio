// ! pagination code

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
