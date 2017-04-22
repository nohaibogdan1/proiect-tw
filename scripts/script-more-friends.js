window.onload = initializareFriends;

//initializare
function initializareFriends(){
	var containerFriendsList = document.getElementById("container-friends-list");
	for (var i = 0; i < 20; i++){

		var containerFriendItem = document.createElement("div");
		containerFriendItem.classList.add("container-friend-item");


		var friendItem = document.createElement("div");
		friendItem.classList.add("friend-item");


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

		friendItem.appendChild(friendName);


		var followFriendBtn = document.createElement("button");
		followFriendBtn.textContent = "Follow";
		followFriendBtn.classList.add("follow-friend-btn");
		

		friendItem.appendChild(followFriendBtn);

		containerFriendItem.appendChild(friendItem);

		var containerCommonInfo = document.createElement("div");
		containerCommonInfo.classList.add("container-common-info");

		var titleCommonInfo = document.createElement("h5");
		titleCommonInfo.textContent = "Ce aveti in comun: ";
		containerCommonInfo.appendChild(titleCommonInfo);
		//un for, adaug div pentru fiecare element comun in containerCommonInfo

		var commonInfo = document.createElement("div");
		commonInfo.textContent = "A participat la intrunirea javascript";
		containerCommonInfo.appendChild(commonInfo);

		containerFriendItem.appendChild(containerCommonInfo);


		containerFriendsList.appendChild(containerFriendItem);
	}
}
