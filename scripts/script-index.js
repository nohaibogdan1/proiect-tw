var btnCloseLeftMenu = document.getElementById("btn-close-left-menu");
var btnOpenLeftMenu = document.getElementById("btn-open-left-menu");
var btnOpenAddTask = document.getElementById("btn-add-task");
var btnCloseAddTask = document.getElementById("close-add-task");
var taskTextInput = document.getElementById("task-text-input");
var menuBottomSection = document.getElementById("menu-bottom-section");
var menuAddTask = document.getElementById("container-info-add-task");
var body = document.body;


var mapBtn = document.getElementById("map-btn");
var map = document.getElementById("map");



function closeLeftMenu (){
	var leftMenu = document.getElementById("left-menu");

	leftMenu.classList.add("close-left-menu");
	if(leftMenu.classList.contains("open-left-menu")) {
		leftMenu.classList.remove("open-left-menu");
	}
}


function openLeftMenu (){
	var leftMenu = document.getElementById("left-menu");

	leftMenu.classList.add("open-left-menu");
	if(leftMenu.classList.contains("close-left-menu")) {
		leftMenu.classList.remove("close-left-menu");
	}
}


btnCloseLeftMenu.addEventListener("click", closeLeftMenu);
btnOpenLeftMenu.addEventListener("click", openLeftMenu);




function openAddTask() {
	closeLeftMenu();
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



btnOpenAddTask.addEventListener("click", openAddTask);
btnCloseAddTask.addEventListener("click", closeAddTask);


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
