var btnGetInfo = document.getElementById("btn-get-info");
var btnCancelInfo = document.getElementById("btn-cancel-info");
var friendItems = document.getElementsByClassName("friend-item");


window.onload = initializareFriends;

//initializare
function initializareFriends(){
	var containerFriendsList = document.getElementById("container-friends-list");
	for (var i = 0; i < 20; i++){

		var friendItem = document.createElement("div");
		friendItem.classList.add("friend-item");

		var checkFriend = document.createElement("input");
		checkFriend.classList.add("check-friend");
		checkFriend.setAttribute('type', "checkbox");

		friendItem.appendChild(checkFriend);

		var friendPicture = document.createElement("div");
		friendPicture.classList.add("friend-picture");

		var imgFriend = document.createElement("img");
		imgFriend.setAttribute('src', "images/friend-picture.png");
		imgFriend.setAttribute('alt', "Picture");
		imgFriend.setAttribute('width', "40px");
		imgFriend.setAttribute('height', "40px");
		friendPicture.appendChild(imgFriend);

		friendItem.appendChild(friendPicture);

		var friendName = document.createElement("div");
		friendName.classList.add("friend-name");
		friendName.textContent = "Nohai Ionut Bogdan";
		friendName.addEventListener("click", getTasksFriend)

		friendItem.appendChild(friendName);


		containerFriendsList.appendChild(friendItem);
	}
}


// adaug dinamic taskuri in lista cu taskuri
function getTasksFriend(e){
	var friendBtn;
    //internet explorer 6-8
    if (e.srcElement){
    	friendBtn = e.srcElement;
    }
    //celelalte browsere
    else if (e.target){
    	friendBtn = e.target;
    }

    var taskFriendList = document.getElementById("task-friend-list");
    
    for (var i = 0; i < 10; i++){
    	var taskFriend = document.createElement("div");
    	taskFriend.classList.add("task-friend");

    	var denumireTaskFriend = document.createElement("div");
    	denumireTaskFriend.classList.add("denumire-task-friend");
    	denumireTaskFriend.textContent = "Merg la conferinta angularJS.";
    	taskFriend.appendChild(denumireTaskFriend);

    	var locatieTaskFriend = document.createElement("div");
    	locatieTaskFriend.classList.add("locatie-task-friend");

    	var denumireLocatieTaskFriend = document.createElement("div");
    	denumireLocatieTaskFriend.textContent = "Congress Hall, Palas";
    	locatieTaskFriend.appendChild(denumireLocatieTaskFriend);

    	var btnMap = document.createElement("div");
    	btnMap.classList.add("btn-map");
    	

    	var iconMap = document.createElement("img");
    	iconMap.setAttribute('src', "images/map-icon.svg");
    	iconMap.setAttribute('height', "15px");
    	iconMap.setAttribute('width', "15px");
    	btnMap.appendChild(iconMap);
    	btnMap.addEventListener("click", addSpecificMap);

    	locatieTaskFriend.appendChild(btnMap);

    	taskFriend.appendChild(locatieTaskFriend);




    	var wrapperDateHour = document.createElement("div");
    	wrapperDateHour.classList.add("wrapper-date-hour");

    	var dateTaskFriend = document.createElement("div");
    	dateTaskFriend.classList.add("date-task-friend");
    	dateTaskFriend.textContent = "12-02-2017";
    	wrapperDateHour.appendChild(dateTaskFriend);

    	var hourTaskFriend = document.createElement("div");
    	hourTaskFriend.classList.add("hour-task-friend");
    	hourTaskFriend.textContent = "12:00 - 14:00";
    	wrapperDateHour.appendChild(hourTaskFriend);

    	taskFriend.appendChild(wrapperDateHour);

    	var btnAddTaskFriend = document.createElement("button");
    	btnAddTaskFriend.classList.add("btn-add-task-friend");
    	btnAddTaskFriend.textContent = "Add task";
    	taskFriend.appendChild(btnAddTaskFriend);

    	taskFriendList.appendChild(taskFriend);
    }

    showTasksFriend();
}


//adaug harta cu locatia taskului respectiv pentru a gasi mai usor acea locatie
function addSpecificMap(e){
	var taskMapBtn;
    //internet explorer 6-8
    if (e.srcElement){
    	taskMapBtn = e.srcElement;
    }
    //celelalte browsere
    else if (e.target){
    	taskMapBtn = e.target;
    }

    var taskMap = document.createElement("div");
    taskMap.classList.add("task-map");

    taskMapBtn.parentNode.parentNode.parentNode.insertBefore(taskMap, taskMapBtn.parentNode.parentNode.nextSibling);
    taskMapBtn.style.display = "none";

    var btntaksMapCancel = document.createElement("div");
    btntaksMapCancel.textContent = "X";
    btntaksMapCancel.addEventListener("click", removeMapTasks);

    taskMapBtn.parentNode.parentNode.insertBefore(btntaksMapCancel, taskMapBtn.parentNode.nextSibling);


}

function removeMapTasks(e){
	var btntaksMapCancel;
    //internet explorer 6-8
    if (e.srcElement){
    	btntaksMapCancel = e.srcElement;
    }
    //celelalte browsere
    else if (e.target){
    	btntaksMapCancel = e.target;
    }

    btntaksMapCancel.previousSibling.children[0].style.display="block";
    btntaksMapCancel.parentNode.nextSibling.remove();
    btntaksMapCancel.remove();
}


// afisez meniul ce contine butoanele ok si cancel si checkboxurile
function showGetInfoOptions(){
	var getInfoOptions = document.getElementById("container-options-info");
	getInfoOptions.style.display = "flex";
	var checkBoxes = document.getElementsByClassName("check-friend");
	for (var i = 0; i < checkBoxes.length; i++) {
		checkBoxes[i].style.display="block";
	}
}



btnGetInfo.addEventListener("click", showGetInfoOptions);

//ascund meniul ce contine butoanele ok si cancel si checkboxurile
function closeGetInfoOptions(){
	var getInfoOptions = document.getElementById("container-options-info");
	getInfoOptions.style.display = "none";
	var checkBoxes = document.getElementsByClassName("check-friend");
	for (var i = 0; i < checkBoxes.length; i++) {
		checkBoxes[i].style.display="none";
	}
}

btnCancelInfo.addEventListener("click", closeGetInfoOptions);

//afiseaz lista cu taskuri ale unei persoane
function showTasksFriend(){
	var containerFriendTasks = document.getElementById("container-friend-tasks");
	containerFriendTasks.style.display = "block";
}

//ascund lista cu taskuri ale unei persoane
function closeTasksFriend(){
	var containerFriendTasks = document.getElementById("container-friend-tasks");
	containerFriendTasks.style.display = "none";
}



var btnClose = document.getElementById("btn-close");

btnClose.addEventListener("click", closeTasksFriend);

