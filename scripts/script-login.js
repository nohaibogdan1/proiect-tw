var btnClose = document.getElementById("btn-close");
var btnSignUp = document.getElementById("btn-signup");
var btnLogIn = document.getElementById("btn-login");
var cover = document.getElementById("cover");
var signUpForm = document.getElementById("signup-form");
var logInForm = document.getElementById("login-form");

btnSignUp.addEventListener("click", openSignupForm);
btnLogIn.addEventListener("click", openLoginForm);

function openSignupForm(){
	cover.style.display = "block";
	signUpForm.style.display = "block";
}

function openLoginForm(){
	cover.style.display = "block";
	logInForm.style.display = "block";
}

btnClose.addEventListener("click", closeForm);


function closeForm(){
	var cover = document.getElementById("cover");
	signUpForm.style.display = "none";
	logInForm.style.display = "none";
	cover.style.display = "none";
}