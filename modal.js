//
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // Modal div
const modalBtn = document.querySelectorAll(".modal-btn"); // Ecoute Clic => "Je m'inscris"
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // Appel la fonction ouvrir

// launch modal form // Display "block" remplace le => none et affiche le modal
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal
const modalClose = document.querySelectorAll(".close");
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
function closeModal() {
  modalbg.style.display = "none";
}

// FormData - Stock des données du formulaire
