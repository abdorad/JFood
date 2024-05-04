//Reduire la taille de bar de navigation
window.addEventListener("scroll", function () {
  var nav = document.getElementById("nav");
  if (window.scrollY > 0) {
    nav.classList.add("minimized");
  } else {
    nav.classList.remove("minimized");
  }
});

// let tel = document.querySelector("#tel");
// window.Intl(input, {});

//fonction pour scrool au map de manière fluide

function scrollToMap() {
  let map = document.querySelector("#map");
  map.scrollIntoView({ behavior: "smooth" });
}
