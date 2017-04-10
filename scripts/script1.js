
var btnClose = document.getElementById("close-left-menu-btn");
var menuLeft = document.getElementById("menu-left");
var menuAddTask = document.getElementById("container-info-add-task");
var btnOpen = document.getElementById("open-left-menu-btn");
var btnOpenTask = document.getElementById("add-task-button");
var btnCloseAddTask = document.getElementById("close-add-task");
var taskTextInput = document.getElementById("task-text-input");
var menuBottomSection = document.getElementById("menu-bottom-section");
var body = document.body;
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


var windowWidth = window.innerWidth;

// if (windowWidth > 750){
// 	body.appendChild(menuBottomSection);
// 	if (menuBottomSection.classList.contains("menu-bottom-section-mobile")){
// 		menuBottomSection.classList.remove("menu-bottom-section-mobile");
// 	}
// 	menuBottomSection.classList.add("menu-bottom-section-desktop");
// }