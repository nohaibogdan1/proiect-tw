var btnGetInfo = document.getElementById("btn-get-info");
var btnCancelInfo = document.getElementById("btn-cancel-info");
var friendItems = document.getElementsByClassName("friend-item");

function showGetInfoOptions(){
	var getInfoOptions = document.getElementById("container-options-info");
	getInfoOptions.style.display = "block";
	var checkBoxes = document.getElementsByClassName("check");
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

// for (var i = 0; i < friendItems; i++){
// 	friendItems[i].addEventListener("click", showTasksFriend);
// }

friendItems[0].addEventListener("click", showTasksFriend);

var btnClose = document.getElementById("btn-close");

btnClose.addEventListener("click", closeTasksFriend);

