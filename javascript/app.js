let slideImages = document.querySelectorAll(".slides img");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let dots = document.querySelectorAll(".dot");
let container = document.querySelector(".slider-container");

//Reduire la taille de bar de navigation
window.addEventListener("scroll", function () {
  var nav = document.getElementById("nav");
  if (window.scrollY > 0) {
    nav.classList.add("minimized");
  } else {
    nav.classList.remove("minimized");
  }
});

var counter = 0;
//code pour le botton next
next.addEventListener("click", slideNext);
function slideNext() {
  slideImages[counter].style.animation = "next1 0.5s ease-in-out forwards";
  if (counter >= slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = "next2 0.5s ease-in-out forwards";
  indicators();
}

//code pour le botton prev
prev.addEventListener("click", slidePrev);
function slidePrev() {
  slideImages[counter].style.animation = "prev1 0.5s ease-in-out forwards";
  if (counter == 0) {
    counter = slideImages.length - 1;
  } else {
    counter--;
  }
  slideImages[counter].style.animation = "prev2 0.5s ease-in-out forwards";
  indicators();
}

//Slide auto

function autoSliding() {
  deletInterval = setInterval(timer, 2000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoSliding();

//Stop Slide auto lorsque on la touche

container.addEventListener("mouseover", function () {
  clearInterval(deletInterval);
});

//continue Slide auto lorsque on la touche pas

container.addEventListener("mouseout", autoSliding);

//ajouter et retirer la class active au bottons;
function indicators() {
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  dots[counter].className += " active";
}

//changer l'image avec les buttons aussi

function switchImage(currentImage) {
  currentImage.classList.add("active");
  var imageId = currentImage.getAttribute("data-attr");
  if (imageId > counter) {
    slideImages[counter].style.animation = "next1 0.5s ease-in-out forwards";
    counter = imageId;
    slideImages[counter].style.animation = "next2 0.5s ease-in-out forwards";
  } else if (imageId == counter) {
    return;
  } else {
    slideImages[counter].style.animation = "prev1 0.5s ease-in-out forwards";
    counter = imageId;
    slideImages[counter].style.animation = "prev2 0.5s ease-in-out forwards";
  }
  indicators();
}
