let readMoreTxt = document.querySelector(".read-more-txt");
let readMoreBtn = document.querySelector(".read-more-btn");

let rMoreBtn = false;

// ! Click Events

readMoreBtn.addEventListener("click", () => {
    if (!rMoreBtn) {
        readMoreTxt.style.display = "inline";
        readMoreBtn.innerText = "...Read less"

        rMoreBtn = true;
    } else {
        readMoreTxt.style.display = "none";
        readMoreBtn.innerText = "...Read more";
        rMoreBtn = false;
    }


})