
var btnClose = document.getElementById("close-left-menu-btn");
var menuLeft = document.getElementById("menu-left");
var menuAddTask = document.getElementById("container-info-add-task");
var btnOpen = document.getElementById("open-left-menu-btn");
var btnOpenTask = document.getElementById("add-task-button");
var btnCloseAddTask = document.getElementById("close-add-task");
var taskTextInput = document.getElementById("task-text-input");
var menuBottomSection = document.getElementById("menu-bottom-section");
var body = document.body;

var controlsBtn1 = document.getElementById("controls-btn-1");

var mapBtn = document.getElementById("map-btn");
var map = document.getElementById("map");


// alert(btnClose);

// alert(menuLeft);



function closeMenuLeft(){
	
	menuLeft.classList.add("close-left-menu");
	if(menuLeft.classList.contains("open-left-menu")) {
		menuLeft.classList.remove("open-left-menu");
	}
}

function openMenuLeft() {
	if(menuLeft.classList.contains("close-left-menu")) {
		menuLeft.classList.remove("close-left-menu");
	}
	menuLeft.classList.add("open-left-menu");
}



function openAddTask() {
	if(menuAddTask.classList.contains("close-container-add-task")){
		menuAddTask.classList.remove("close-container-add-task");
	}
	menuAddTask.classList.add("open-container-add-task");
	taskTextInput.focus();
}

function closeAddTask() {
	if(menuAddTask.classList.contains("open-container-add-task")){
		menuAddTask.classList.remove("open-container-add-task");
	}
	menuAddTask.classList.add("close-container-add-task");
}


btnOpen.addEventListener("click", openMenuLeft);
btnClose.addEventListener("click", closeMenuLeft);
btnOpenTask.addEventListener("click", openAddTask);
btnCloseAddTask.addEventListener("click", closeAddTask);
controlsBtn1.addEventListener("click", openAddTask);


var windowWidth = window.innerWidth;

function openMap() {
	map.style.display = "block";
}

mapBtn.addEventListener("click", openMap);


function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

var nrDays = document.getElementById("days-weeks-etc");

function showSelectDays() {
	var selectedOptionValue = nrDays.options[nrDays.selectedIndex].value;

	if (selectedOptionValue == 2) {
		var selectDaysMonth = document.getElementById("specific-days-month");
		selectDaysMonth.style.display = "none";
		var selectDaysWeek = document.getElementById("specific-days-week");
		selectDaysWeek.style.display = "block";

	}
	else if (selectedOptionValue == 3) {
		var selectDaysWeek = document.getElementById("specific-days-week");
		selectDaysWeek.style.display = "none";
		var selectDaysMonth = document.getElementById("specific-days-month");
		selectDaysMonth.style.display = "block";
	}
	else {
		var selectDaysWeek = document.getElementById("specific-days-week");
		selectDaysWeek.style.display = "none";
		var selectDaysMonth = document.getElementById("specific-days-month");
		selectDaysMonth.style.display = "none";
	}


}
nrDays.addEventListener("change", showSelectDays);

