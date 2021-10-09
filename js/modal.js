//VARIABLES
//Get modal elements and store in variables
//Modal
var modal = document.getElementById("simpleModal");

//Open Modal button
var modalBtn = document.getElementById("modalBtn");

//Close Modal button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//ADD EMAIL TO MODAL
function includeModalEmail() {
  var modalEmailElement = document.getElementById("modalEmail");
  modalEmailElement.textContent = "tajmcgrawstudios@gmail.com";
}

//EVENT LISTENERS
//Listen for the open Click
modalBtn.addEventListener("click", openModal);

//Listen for the close Click
closeBtn.addEventListener("click", closeModal);

//Listen for outside click
window.addEventListener("click", outsideClick);

//FUNCTIONS
function openModal(event) {
  event.preventDefault();
  includeModalEmail();
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
