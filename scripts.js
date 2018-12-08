//NAME INPUT VARIABLES
var chal1Input = document.getElementById("js-chal1");
var chal2Input = document.getElementById("js-chal2");

//UPDATED NAME VARIABLES
var chal1Update = document.querySelectorAll(".js-updateChal1");
var chal2Update = document.querySelectorAll(".js-updateChal2");

// GUESS INPUT VARIABLES
var guess1 = document.querySelector(".js-guess-1");
var guess2 = document.querySelector(".js-guess-2");

//UPDATED GUESS VARIABLES
var largeGuess1 = document.getElementById("js-newguess-1");
var largeGuess2 = document.getElementById("js-newguess-2");

// SUBMIT BUTTON VARIABLE
var getSubmit = document.querySelector("#js-submit");

// RANDOM NUM VARIABLE
var numGenerated

//UPDATE FIELDS VARIABLES
var minInput = document.querySelector("#js-min-input");
var maxInput = document.querySelector("#js-max-input");

//ADJUSTABLE TEXT TO SHOW RANGE VARIABLES
var minUpdate = document.getElementById("js-min-update");
var maxUpdate = document.getElementById("js-max-update");

// CLEAR BUTTON VARIABLE
var clearButton = document.querySelector("#js-clear");

//UPDATE BUTTON VARIABLE
var getUpdate = document.querySelector("#js-update");

//DOM manipulation for lowHigh text
var lowHigh1 = document.querySelector(".js-low-high1");
var lowHigh2 = document.querySelector(".js-low-high2");

/////////////////////////////////////////////////////////////

//********************************************************
 // function declareWinner(){
 // 	e.preventDefault();
 	function player1Win() {


 		if (guess1.value > numGenerated){
 			lowHigh1.innerText = "that's too high";
 		} else if (guess1.value < numGenerated){
 			lowHigh1.innerText = "that's too low";
 		} else {
 			lowHigh1.innerText = "Winner"
 		}
 		// debugger
 	}
 	function player2Win(){
 		if (guess2.value > numGenerated){
 			lowHigh2.innerText = "that's too high";
 		} else if (guess2.value < numGenerated){
 			lowHigh2.innerText = "that's too low";
 		} else {
 			lowHigh2.innerText = "Winner";
 		}
 		// debugger
 	}
 // };
//********************************************************
// 
//********************************************************

// function updateRng(){
//   minUpdate.innerText = minInput.value;
//   maxUpdate.innerText = maxInput.value;
// }

// Event Listeners 
getSubmit.addEventListener('click', submitClick);

getUpdate.addEventListener('click', updateRng);

clearButton.addEventListener('click', clearFields);

/////////////////////////////////////////////////////////////
// !!!!!!!! I TOOK THIS OUT AND ADDED THE PREVENT DEFAULT TO 
//FUNCTION BELOW !!!!!!!!

// function updateClick(e){
//   e.preventDefault();
//   console.log("in update rng");
//   updateRng();
// }

//RANDOM NUM GENERATOR
function updateRng(e){
  e.preventDefault();
  minUpdate.innerText = minInput.value;
  maxUpdate.innerText = maxInput.value;
  min = parseInt(minInput.value) || 1;
  max = parseInt(maxInput.value) || 100;
  numGenerated = Math.floor(Math.random() * (max - min + 1))  + min;
}

// ******************************************************
// Don't need for loops
// create the variables in a global scope
// Research Parseinit
// ******************************************************

// SUBMIT FUNCTION TO RUN THE TWO BELOW
function submitClick(e){
  e.preventDefault();
  console.log("in submit");
  updateGuesses();
  update();
  player1Win();
  player2Win();
}

//UPDATE GUESSES IN CARDS
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

// CLEAR GUESS INPUT
function clearFields(e) {
  e.preventDefault();
  document.getElementById("js-clear-input1").value = "";
  document.getElementById("js-clear-input2").value = "";
} 


