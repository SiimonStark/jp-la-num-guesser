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

//*******************************************************
//*****min-max input field, changing the DOM*************
var minInput = document.querySelector("#js-min-input");
var maxInput = document.querySelector("#js-max-input");

var minUpdate = document.getElementById("js-min-update");
var maxUpdate = document.getElementById("js-max-update");

var getUpdate = document.querySelector("#js-update");

function updateClick(e){
  e.preventDefault();
  console.log("in update rng");
  updateRng();
}

//********************************************************
//  if(minInput.value > maxInput.value){
//    alert.('Please Choose a Value less than the minimum')
//   };
//********************************************************
//  var winningLotto = withinRng
//  function withinRng (){
//    
//  }
//********************************************************

function updateRng(){
    minUpdate.innerText = minInput.value;
    maxUpdate.innerText = maxInput.value;

}

getUpdate.addEventListener('click', updateRng);
// ******************************************************
// Don't need for loops
// create the variables in a global scope
// Research Parseinit
// ******************************************************

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


