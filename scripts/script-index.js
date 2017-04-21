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


window.onload = initializare;


//aici va trebui sa initializez denumirea proiectelor, nr de taskuri
function initializareCuloriProiecte(){
	var projectColorList = document.getElementsByClassName("project-color");
	for (var i = 0; i < projectColorList.length; i++){

		projectColorList[i].style.backgroundColor = "blue";
	}
}




function initializare(){
	initializareProiecte();
	initializareTaskuri();
}


//creez un array de obiecte proiect
var listaProiecte = [
	{
		projectColor1: "blue",
		projectName1: "School",
		projectNrTasks1: 10
	},

	{
		projectColor1: "red",
		projectName1: "Personal",
		projectNrTasks1: 13
	},
	{
		projectColor1: "green",
		projectName1: "Shopping",
		projectNrTasks1: 2
	},
	{
		projectColor1: "yellow",
		projectName1: "Personal",
		projectNrTasks1: 13
	},
	{
		projectColor1: "red",
		projectName1: "Tehnolofii Web",
		projectNrTasks1: 20
	},
	{
		projectColor1: "indigo",
		projectName1: "Reading",
		projectNrTasks1: 9
	},
	{
		projectColor1: "brown",
		projectName1: "Sport",
		projectNrTasks1: 5
	},

];



function initializareProiecte() {
	var containerProjectsList = document.getElementById("container-projects-list");
	//informatiile vor fi luate din baza de date

	for (var i = 0; i < listaProiecte.length; i++){
		var projectItem = document.createElement("div");
		projectItem.classList.add("project-item");

		var projectInfo = document.createElement("div");
		projectInfo.classList.add("project-info");

		var containerProjectColor = document.createElement("div");
		containerProjectColor.classList.add("container-project-color");

		var projectColor = document.createElement("div");
		projectColor.classList.add("project-color");
		projectColor.style.backgroundColor = listaProiecte[i].projectColor1;
		containerProjectColor.appendChild(projectColor);

		projectInfo.appendChild(containerProjectColor);

		var projectName = document.createElement("div");
		projectName.classList.add("project-name");
		projectName.textContent = listaProiecte[i].projectName1;

		projectInfo.appendChild(projectName);

		var projectNrTasks = document.createElement("div");
		projectNrTasks.classList.add("project-nr-tasks");
		projectNrTasks.textContent = listaProiecte[i].projectNrTasks1;

		projectInfo.appendChild(projectNrTasks);

		projectItem.appendChild(projectInfo);

		var btnModifyProject = document.createElement("button");
		btnModifyProject.classList.add("btn-modify-project");
		btnModifyProject.textContent = "...";
		btnModifyProject.addEventListener("click", adaugareFormModificareProiect);

		projectItem.appendChild(btnModifyProject);

		containerProjectsList.appendChild(projectItem);


	}

}


//creez un array de taskuri

var listaTaskuri = [
	{
		taskTitle: "Merg la sala",
		taskTime: "09:10",
		projectName1: "Sport"
	},

	{
		taskTitle: "Cumpar un kg de mere",
		taskTime: "12:10",
		projectName1: "Shopping"
	},

	{
		taskTitle: "Ma joc cu pisica",
		taskTime: "14:00",
		projectName1: "Personal"
	},

	{
		taskTitle: "Citesc despre fotografie",
		taskTime: "15:10",
		projectName1: "Reading"
	},

	{
		taskTitle: "Citesc Anna Karenina",
		taskTime: "17:10",
		projectName1: "Reading"
	},

	{
		taskTitle: "Cumpar un pulover",
		taskTime: "18:10",
		projectName1: "Shopping"
	},

	{
		taskTitle: "Lucrez la proiect",
		taskTime: "20:10",
		projectName1: "Tehnologii Web"
	},

	{
		taskTitle: "Citesc despre JavaScript",
		taskTime: "22:10",
		projectName1: "Tehnologii Web"
	}
];



function initializareTaskuri() {
	var containerTasksList = document.getElementById("container-tasks-list");

	for (var i = 0; i < listaTaskuri.length; i++){


		var taskItem = document.createElement("div");
		taskItem.classList.add("task-item");

		var btnDone = document.createElement("div");
		btnDone.classList.add("btn-done");
		

		var imgDone = document.createElement("img");
		imgDone.setAttribute('src', "images/check-mark.svg");
		imgDone.setAttribute('width', "20px");
		imgDone.setAttribute('height', "20px");
		imgDone.setAttribute('alt', "Done");
		btnDone.appendChild(imgDone);

		taskItem.appendChild(btnDone);

		var containerTaskInfo = document.createElement("div");
		containerTaskInfo.classList.add("container-task-info");

		var titleTask = document.createElement("div");
		titleTask.classList.add("title-task");
		titleTask.textContent = listaTaskuri[i].taskTitle;
		containerTaskInfo.appendChild(titleTask);

		var containerDateTime = document.createElement("div");
		containerDateTime.classList.add("container-date-time");
		containerDateTime.textContent = listaTaskuri[i].taskTime;
		containerTaskInfo.appendChild(containerDateTime);

		var projectName = document.createElement("div");
		projectName.classList.add("project-name");
		projectName.textContent = listaTaskuri[i].projectName1;
		containerTaskInfo.appendChild(projectName);

		taskItem.appendChild(containerTaskInfo);


		var btnModifyTask = document.createElement("div");
		btnModifyTask.classList.add("btn-modify");

		var imgModify = document.createElement("img");
		imgModify.setAttribute('src', "images/controls.svg");
		imgModify.setAttribute('width', "20px");
		imgModify.setAttribute('height', "20px");
		imgModify.setAttribute('alt', "Modify");

		btnModifyTask.appendChild(imgModify);

		taskItem.appendChild(btnModifyTask);

		containerTasksList.appendChild(taskItem);

	}
}



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


// adaug codul pentru a crea un div dinamic pentru modificarea unui dintre proiecte
// cand apas butonul de modificare al unui proiect, proiectul este eliminat din lista,iar in locul sau
//apare elementul div cu text input default avand denumirea proiectului 
function addEventListenerClassName(className, eventName, functionName) {
    var listElements = document.getElementsByClassName(className);
    for (var i = 0; i < listElements.length; i++) {
        listElements[i].addEventListener(eventName, functionName, false);
    }
}






function cancelModificareProiect(e){
	 var btnModifyCancelClicked;
    //internet explorer 6-8
    if (e.srcElement){
    	btnModifyCancelClicked = e.srcElement;
    }
    //celelalte browsere
    else if (e.target){
    	btnModifyCancelClicked = e.target;
    }

    //cand apas pe cancel proiectul apare in lista si form-ul este scos
    if (btnModifyCancelClicked.parentNode.parentNode.nextElementSibling){
    	btnModifyCancelClicked.parentNode.parentNode.nextElementSibling.style.display="flex";
	}
    btnModifyCancelClicked.parentNode.parentNode.remove();
}


// var modifyForm = document.createElement("form");
var modifyDiv = document.createElement("div");


function creareModifyForm(modificare, denumireProiectText, culoareProiect){
	//initialiez form
    while (modifyDiv.firstChild) {
    	modifyDiv.removeChild(modifyDiv.firstChild);
	}
	var listOfColors = document.createElement("select");

	var optionBlue = document.createElement("option");
	optionBlue.setAttribute('value',"#BBDEFB");
	optionBlue.setAttribute('selected', "selected");
	optionBlue.style.backgroundColor="#BBDEFB";
	optionBlue.textContent = "blue";

	var optionRed = document.createElement("option");
	optionRed.setAttribute('value',"#FFCDD2");
	optionRed.style.backgroundColor="#FFCDD2";
	optionRed.textContent = "red";

	var optionGreen = document.createElement("option");
	optionGreen.setAttribute('value',"#C8E6C9");
	optionGreen.style.backgroundColor="#C8E6C9";
	optionGreen.textContent = "green";

	var optionYellow = document.createElement("option");
	optionYellow.setAttribute('value',"#FFF9C4");
	optionYellow.style.backgroundColor="#FFF9C4";
	optionYellow.textContent = "yellow";

	var optionOrange = document.createElement("option");
	optionOrange.setAttribute('value',"#FFE0B2");
	optionOrange.style.backgroundColor="#FFE0B2";
	optionOrange.textContent = "orange";

	var optionIndigo = document.createElement("option");
	optionIndigo.setAttribute('value',"#C5CAE9");
	optionIndigo.style.backgroundColor="#C5CAE9";
	optionIndigo.textContent = "indigo";

	listOfColors.appendChild(optionBlue);
	listOfColors.appendChild(optionRed);
	listOfColors.appendChild(optionGreen);
	listOfColors.appendChild(optionYellow);
	listOfColors.appendChild(optionOrange);
	listOfColors.appendChild(optionIndigo);

	listOfColors.style.backgroundColor="#BBDEFB";

	listOfColors.addEventListener("change", function() {
		listOfColors.style.backgroundColor=listOfColors.options[listOfColors.selectedIndex].value;
	});
	
	

	var textProjectName = document.createElement("input");
	textProjectName.setAttribute('type', "text");
	textProjectName.setAttribute('name', "denumireProiect");

	if (modificare == 1){

		listOfColors.style.backgroundColor = culoareProiect;
	    textProjectName.setAttribute('value', denumireProiectText);
	}

	textProjectName.style.width="70%";
	textProjectName.style.marginLeft="10px";
    

    var btnOk = document.createElement("button");
    btnOk.textContent = "Ok";
    btnOk.setAttribute('value', "Ok");
    btnOk.classList.add('btn-form-modify');

    

    var btnCancel = document.createElement("button");
    btnCancel.textContent = "Cancel";
    btnCancel.setAttribute('id', "btnCancelModificare");
    btnCancel.classList.add('btn-form-modify');
    btnCancel.addEventListener("click", cancelModificareProiect);

    


    var infoDiv = document.createElement("div");

	infoDiv.appendChild(listOfColors);
	infoDiv.appendChild(textProjectName);

	var btnsDiv = document.createElement("div");

	

	btnsDiv.appendChild(btnOk);
	btnsDiv.appendChild(btnCancel);
	if (modificare == 1){
		var btnDelete = document.createElement("button");
	    btnDelete.textContent = "Delete";
	    btnDelete.classList.add('btn-form-modify');
		btnsDiv.appendChild(btnDelete);
    }

	modifyDiv.appendChild(infoDiv);
	modifyDiv.appendChild(btnsDiv);


	modifyDiv.style.marginBottom="8px";

}





function adaugareFormModificareProiect(e){

	

	var containerProjectsList = document.getElementById("container-projects-list");


    var btnModifyClicked;
    //internet explorer 6-8
    if (e.srcElement){
    	btnModifyClicked = e.srcElement;
    }
    //celelalte browsere
    else if (e.target){
    	btnModifyClicked = e.target;
    }


    // atunci cand apas butonul de modificare form-ul anterior trebuie sa dispara si 
	//proiectul anterior sa reapara
	// alert(containerProjectsList.childElementCount);

	for (var i = 0; i < containerProjectsList.childElementCount; i++){
		if (containerProjectsList.children[i].style.display=="none"){

			containerProjectsList.children[i].style.display="flex";
			break;
		}
		
	}

    var denumireProiectText = btnModifyClicked.previousElementSibling.children[1].textContent;
    var culoareProiect = btnModifyClicked.previousElementSibling.children[0].children[0].style.backgroundColor;
	creareModifyForm(1, denumireProiectText, culoareProiect);

    containerProjectsList.insertBefore(modifyDiv, btnModifyClicked.parentNode);

    // btnModifyClicked.parentNode.remove();
    btnModifyClicked.parentNode.style.display="none";
}


addEventListenerClassName('btn-modify-project', 'click', adaugareFormModificareProiect);





// adaug functionalitate pentru butonul de adaugare a unui nou proiect
function adaugareFormCreareProiect(){
	var containerProjectsList = document.getElementById("container-projects-list");
	for (var i = 0; i < containerProjectsList.childElementCount; i++){
		if (containerProjectsList.children[i].style.display=="none"){

			containerProjectsList.children[i].style.display="flex";
			break;
		}
		
	}

	creareModifyForm(0);
    
    containerProjectsList.appendChild(modifyDiv);
}


var btnAddProject = document.getElementById("btn-add-project");
btnAddProject.addEventListener("click", adaugareFormCreareProiect);

