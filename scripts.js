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
// var min = parseInt(minInput.value);
// Why does this break the code??
// var max = parseInt(maxInput.value);
var minInput = document.querySelector("#js-min-input");
var maxInput = document.querySelector("#js-max-input");

//ADJUSTABLE TEXT TO SHOW RANGE VARIABLES
var minUpdate = document.getElementById("js-min-update");
var maxUpdate = document.getElementById("js-max-update");

// BUTTON VARIABLES
var clearButton = document.querySelector("#js-clear");
var getUpdate = document.querySelector("#js-update");
var resetButton = document.querySelector("#js-reset");

//DOM manipulation for lowHigh text
var lowHigh1 = document.querySelector(".js-low-high1");
var lowHigh2 = document.querySelector(".js-low-high2");

/////////////////////////////////////////////////////////////

//********************************************************
//Justin Working on: Form Validation
//********************************************************
function validateRng(){
	if (parseInt(minInput.value) > parseInt(maxInput.value)){
			alert("Please choose a value lower than your Max!!");
	} 
}
//********************************************************

//***************Event Listeners****************** 
getSubmit.addEventListener('click', submitClick);

getUpdate.addEventListener('click', updateRng);

clearButton.addEventListener('click', clearFields);

resetButton.addEventListener('click', resetGame);

guess1.addEventListener('keyup', areFieldsEmpty);

//////////////////////////////////////////////////////////

//***************FUNCTIONS************************

//RANDOM NUM GENERATOR
function updateRng(e){
  e.preventDefault();
  minUpdate.innerText = minInput.value;
  maxUpdate.innerText = maxInput.value;
  validateRng();
  min = parseInt(minInput.value) || 1;
  max = parseInt(maxInput.value) || 100;
  numGenerated = Math.floor(Math.random() * (max - min + 1))  + min;
}

//RESET GAME (CLEAR FIELDS AND GEN NEW NUMBER)
function resetGame(e) {
  e.preventDefault();
  document.getElementById("js-clear-input1").value = "";
  document.getElementById("js-clear-input2").value = "";
  document.getElementById("js-chal1").value = "";
  document.getElementById("js-chal2").value = "";
  minUpdate.innerText = minInput.value;
  maxUpdate.innerText = maxInput.value;
  min = parseInt(minInput.value) || 1;
  max = parseInt(maxInput.value) || 100;
  numGenerated = Math.floor(Math.random() * (max - min + 1))  + min;
} 

// SUBMIT FUNCTION TO RUN THE TWO BELOW
function submitClick(e){
  e.preventDefault();
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

// Functions to declare Winner
function player1Win() {
 if (guess1.value > numGenerated){
 	lowHigh1.innerText = "that's too high";
 } else if (guess1.value < numGenerated){
 	lowHigh1.innerText = "that's too low";
 } else {
 	lowHigh1.innerText = "Winner"
 }
}
function player2Win(){
 if (guess2.value > numGenerated){
 	lowHigh2.innerText = "that's too high";
 } else if (guess2.value < numGenerated){
 	lowHigh2.innerText = "that's too low";
 } else {
 	lowHigh2.innerText = "Winner";
 }
}

// CLEAR GUESS INPUT
function clearFields(e) {
  e.preventDefault();
  document.getElementById("js-clear-input1").value = "";
  document.getElementById("js-clear-input2").value = "";
} 



//ARE FIELDDS EMPTY? ONLY WORKS FOR FIRST GUESS FIELD.
//IMPLEMENT FOR LOOP TO TARGET SECOND AS WELL?
function areFieldsEmpty(e) {
  e.preventDefault();
  clearButton.disabled = false;
}

//RESET GAME ENABLED FUNC CALLED IN SUBMITCLICK







