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
    	locatieTaskFriend.textContent = "Congress Hall, Palas";
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












function showGetInfoOptions(){
	var getInfoOptions = document.getElementById("container-options-info");
	getInfoOptions.style.display = "block";
	var checkBoxes = document.getElementsByClassName("check-friend");
	for (var i = 0; i < checkBoxes.length; i++) {
		checkBoxes[i].style.display="block";
	}
}










btnGetInfo.addEventListener("click", showGetInfoOptions);









function closeGetInfoOptions(){
	var getInfoOptions = document.getElementById("container-options-info");
	getInfoOptions.style.display = "none";
	var checkBoxes = document.getElementsByClassName("check");
	for (var i = 0; i < checkBoxes.length; i++) {
		checkBoxes[i].style.display="none";
	}
}

btnCancelInfo.addEventListener("click", closeGetInfoOptions);


function showTasksFriend(){
	var containerFriendTasks = document.getElementById("container-friend-tasks");
	containerFriendTasks.style.display = "block";
}

function closeTasksFriend(){
	var containerFriendTasks = document.getElementById("container-friend-tasks");
	containerFriendTasks.style.display = "none";
}



var btnClose = document.getElementById("btn-close");

btnClose.addEventListener("click", closeTasksFriend);

