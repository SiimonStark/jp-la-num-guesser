// var chal1 = document.querySelector('.js-chal1').value;
  var chal1Input = document.getElementById("js-chal1");
  var chal1Update = document.querySelectorAll(".js-updateChal1");

function clearFields() {
  document.getElementById("js-clear-input1").value = "";
  document.getElementById("js-clear-input2").value = "";
}

<<<<<<< HEAD
function updateChal1(e){
 e.preventDefault();
 var chal1Input = document.getElementById("js-chal1").value;
 var chal1Update = document.querySelectorAll(".js-updateChal1");
 for (var i = 0; i < chal1Update.length; i++) {
   chal1Update[i].innerText = chal1Input;
 }
}

var getSubmit = document.querySelector("#js-submit");
=======
function updateChal1(){
  for (var i = 0; i < chal1Update.length; i++) {
    chal1Update[i].innerText = chal1Input.value;
  }
}

var getSubmit = document.querySelector("#js-submit");

>>>>>>> f82c5a8117054820be6542c15e4a6642da640a6b
getSubmit.addEventListener('click', updateChal1);