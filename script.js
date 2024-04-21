let readMoreBtn = document.querySelectorAll(".read-more-btn");
let dropDownBtn = document.querySelector(".menu");

let dropDownValue = false;
let rMoreBtn = false;




// ! ReadMore Function

let readMore = (event) => {

    let readMoreTxt = event.target.previousElementSibling;

    if (!rMoreBtn) {
        readMoreTxt.style.display = "inline";
        event.target.innerText = "...Read less"

        rMoreBtn = true;
    } else {
        readMoreTxt.style.display = "none";
        event.target.innerText = "...Read more";
        rMoreBtn = false;
    }
}


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
}


//! Loop

readMoreBtn.forEach((currElem) => {

    // ! Click Events
    currElem.addEventListener("click", readMore)
})

// ! click Event 

dropDownBtn.addEventListener("click", dropDown);