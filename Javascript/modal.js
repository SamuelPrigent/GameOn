// Top nav responsive - mobile versions
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Const - DOM Elements
const modalbg = document.querySelector(".bground"); // Div Modal à ciblé dans la fonction
// const formData = document.querySelectorAll(".formData");

// Open Modal
const modalBtn = document.querySelectorAll(".modal-btn"); // Ecoute du Clic
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // Appel la fonction
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal
const modalClose = document.querySelectorAll(".close"); // Ecoute le Clic
modalClose.forEach((btn) => btn.addEventListener("click", closeModal)); // Appel la fonction
function closeModal() {
  modalbg.style.display = "none";
}
