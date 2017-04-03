var form = document.getElementById("form");
var email = document.getElementById("email");
var password = document.getElementById("password");
var signUp = document.getElementById("signUp");
var spanEmail = document.getElementById("spanEmail");
var spanPassword = document.getElementById("spanPassword");
var span = document.getElementById("span");
var expressionEmail = /\w+@+\w+\.+[a-z]/;
var expressionPassword = /^[A-Za-z0-9_]{1,6}$/;

function validar(){
  if (!expressionEmail.test(email.value) || !expressionPassword.test(password.value)){
      if(!expressionEmail.test(email.value)){
        spanEmail.innerText = "The email is not correct";
      }
      else {
        spanEmail.innerText = "";
        window.location = "index2.html";
      }

      if(!expressionPassword.test(password.value)){
          spanPassword.innerText = "Only letters and numbers";
        }
      else {
          spanPassword.innerText = "";
      }
  }
  else if((email.value.length!=0 && password.value.length!=0)) {
    window.location = "index2.html";
  }
  else if (email.value.length!=0 && password.value.length!=0){
    span.innerText = "All the fields must contain at least one letter";
  }
}
window.addEventListener("load", function(){
  signUp.addEventListener("click", function(event){
    event.preventDefault();
    validar();
    form.reset();
	});

});
