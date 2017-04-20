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


// adaug codul pentru a crea un form dinamic pentru modificarea unui dintre proiecte
// cand apas butonul de modificare al unui proiect, proiectul este eliminat din lista,iar in locul sau
//apare elementul form cu text input default avand denumirea proiectului si color pickerul default avand 
//culoare proiecutlui

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


var modifyForm = document.createElement("form");



function creareModifyForm(modificare, denumireProiectText){
	//initialiez form
    while (modifyForm.firstChild) {
    	modifyForm.removeChild(modifyForm.firstChild);
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

	    textProjectName.setAttribute('value', denumireProiectText);
	}

	textProjectName.style.width="70%";
	textProjectName.style.marginLeft="10px";
    


    var btnOk = document.createElement("input");
    btnOk.setAttribute('type',"submit");
    btnOk.setAttribute('name', "modificareProiect");
    btnOk.setAttribute('value', "Ok");
    btnOk.classList.add('btn-form-modify');

    

    var btnCancel = document.createElement("input");
    btnCancel.setAttribute('type', "button");
    btnCancel.setAttribute('name', "cancelModificare");
    btnCancel.setAttribute('value', "Cancel");
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
		var btnDelete = document.createElement("input");
	    btnDelete.setAttribute('type', "submit");
	    btnDelete.setAttribute('name', "deleteProiect");
	    btnDelete.setAttribute('value', "Delete");
	    btnDelete.classList.add('btn-form-modify');
		btnsDiv.appendChild(btnDelete);
    }

	modifyForm.appendChild(infoDiv);
	modifyForm.appendChild(btnsDiv);


	modifyForm.style.marginBottom="8px";

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

	// alert('1');
	
    var denumireProiectText = btnModifyClicked.previousElementSibling.children[1].textContent;
	
	creareModifyForm(1, denumireProiectText);





    btnModifyClicked.previousElementSibling.children[0].children[0].style.backgroundColor="red";

    

    containerProjectsList.insertBefore(modifyForm, btnModifyClicked.parentNode);

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
    
    containerProjectsList.appendChild(modifyForm);
}


var btnAddProject = document.getElementById("btn-add-project");
btnAddProject.addEventListener("click", adaugareFormCreareProiect);

