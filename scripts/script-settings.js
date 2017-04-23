var btnGeneral = document.getElementById("btn-general");
var btnAccount = document.getElementById("btn-account");

window.onload = initialization();

function initialization(){
	btnGeneral.classList.add("tab-links-active");
	document.getElementById("general-settings").style.display = "block";
}

btnGeneral.addEventListener("click", function(){
	showProperSettings("general-settings");
});

btnAccount.addEventListener("click", function(){
	showProperSettings("account-settings");
});


function showProperSettings(settingsContentId){
	var tabContent = document.getElementsByClassName("tab-content");
	for (var i = 0; i < tabContent.length; i++){
		tabContent[i].style.display = "none";
	}

	if(settingsContentId == "general-settings"){
		btnGeneral.classList.add("tab-links-active");
		btnAccount.classList.remove("tab-links-active");
	}else {
		btnAccount.classList.add("tab-links-active");
		btnGeneral.classList.remove("tab-links-active");
	}

	document.getElementById(settingsContentId).style.display = "block";


}