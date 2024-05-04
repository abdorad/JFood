//Reduire la taille de bar de navigation
window.addEventListener("scroll", function () {
  var nav = document.getElementById("nav");
  if (window.scrollY > 0) {
    nav.classList.add("minimized");
  } else {
    nav.classList.remove("minimized");
  }
});

//fonction pour scrool au sections de manière fluide
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    const navheigh = 100;
    const offset =
      section.getBoundingClientRect().top + window.pageYOffset - navheigh;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
}

const menuLinks = document.querySelectorAll(".menu-btn a");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const sectionId = link.getAttribute("href");

    scrollToSection(sectionId);
  });
});
