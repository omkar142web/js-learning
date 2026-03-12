// let container = document.querySelector(".container");
// let close = document.querySelector("#close");
// let box1 = document.querySelector("#box1");
// let box2 = document.querySelector("#box2");
// let box3 = document.querySelector("#box3");


// function addHidden() {
//   container.classList.add("hidden");
// }

// addHidden();


// function removeHidden() {
//   container.classList.remove("hidden");
// }

// close.onclick = () => {
//   container.classList.add("hidden");
// };

// box1.onclick = () => {
//   container.classList.remove("hidden");
// };

// box2.onclick = () => {
//   container.classList.remove("hidden");
// };

// box3.onclick = () => {
//   container.classList.remove("hidden");
// };

let container = document.querySelector(".container");
let modal = document.querySelector(".modal");
let close = document.querySelector("#close");

let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");

function openModal(){
  container.classList.remove("hidden");
}

function closeModal(){
  container.classList.add("hidden");
}

box1.onclick = openModal;
box2.onclick = openModal;
box3.onclick = openModal;

close.onclick = closeModal;

container.addEventListener("click", (e)=>{
  if(e.target === container){
    closeModal();
  }
});
