// var chal1 = document.querySelector('.js-chal1').value;
var chal1Input = document.getElementById("js-chal1");
var chal2Input = document.getElementById("js-chal2");

var chal1Update = document.querySelectorAll(".js-updateChal1");
var chal2Update = document.querySelectorAll('.js-updatechal2');

// GUESS INPUT VARIABLES
var largeGuess1 = document.getElementById("js-newguess-1");
var largeGuess2 = document.getElementById("js-newguess-2");

var guess1 = document.querySelector(".js-guess-1");
var guess2 = document.querySelector(".js-guess-2");

var chal2Input = document.getElementById("js-chal2");
var chal2Update = document.querySelectorAll(".js-updateChal2");

var chal1Input = document.getElementById("js-chal1");
var chal1Update = document.querySelectorAll(".js-updateChal1");

// SUBMIT BUTTON VARIABLE
var getSubmit = document.querySelector("#js-submit");


// Event Listeners 
getSubmit.addEventListener('click', submitClick);

function submitClick(e){
  e.preventDefault();
  console.log("in submit");

  updateGuesses();
  update();
}


function updateGuesses() {
  largeGuess1.innerText = guess1.value;
  largeGuess2.innerText = guess2.value;
}


// UPDATE NAMES
function update() {
  for (var i = 0; i < chal2Update.length; i++) {
    chal2Update[i].innerText = chal2Input.value;
  }
  for (var i = 0; i < chal1Update.length; i++) {
    chal1Update[i].innerText = chal1Input.value;
  }
}

function clearFields(e) {
  e.preventDefault();
  document.getElementById("js-clear-input1").value = "";
  document.getElementById("js-clear-input2").value = "";
}

var clearButton = document.querySelector("#js-clear");
clearButton.addEventListener('click', clearFields);




// SPLIT UPDATE NAMES
// function updateChal1(e){
//   e.preventDefault();
//   var chal1Input = document.getElementById("js-chal1").value;
//   var chal1Update = document.querySelectorAll(".js-updateChal1");
//   for (var i = 0; i < chal1Update.length; i++) {
//     chal1Update[i].innerText = chal1Input;
//   }
// }

// function updateChal2(e){
//   e.preventDefault();
//   var chal2Input = document.getElementById("js-chal2").value;
//   var chal2Update = document.querySelectorAll(".js-updateChal2");
//   for (var i = 0; i < chal2Update.length; i++) {
//     chal2Update[i].innerText = chal2Input;
//   }
// }

// SPLIT UPDATE NUM FUNCTIONS
// function updateGuess1(e) {
//   e.preventDefault(); 
//   var guess1 = document.querySelector(".js-guess-1").value;
//   largeGuess1.innerText = guess1;
// }
// function updateGuess2(e) {
//   e.preventDefault(); 
//   var guess2 = document.querySelector(".js-guess-2").value;
//   largeGuess2.innerText = guess2;
// }


// 
// getSubmit.addEventListener('click', update);