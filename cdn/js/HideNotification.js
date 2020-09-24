function hidenotif() {
	var notifdiv = document.getElementById("notificationdiv");
	var notifclosebtn = document.getElementById("notificationclose");
	document.title = olddocumenttitle;

	//Animates the div element from top to bottom, hiding it
	notifdiv.className = notifdiv.className.replace("stake2animatebottom", "stake2animatebottomrevert");

	//Changes the text of the div element
	notifdiv.innerHTML = '<h1 width="50%">' + btnText1 + "</h1>";

	//Hides the div element after the animation has stopped
	setTimeout(function() {
		notifdiv.style.display = "none";
	}, 10000);
}

function hidenotifm() {
	var notifdivm = document.getElementById("notificationdivm");
	var notifclosebtnm = document.getElementById("notificationclosem");
	document.title = olddocumenttitle;

	//Animates the div element from top to bottom, hiding it
	notifdivm.className = notifdivm.className.replace("stake2animatebottom", "stake2animatebottomrevert");

	//Changes the text of the div element
	notifdivm.innerHTML = '<h2 width="50%">' + btnText1 + "</h2>";

	//Hides the div element after the animation has stopped
	setTimeout(function() {
		notifdivm.style.display = "none";
	}, 10000);
}

console.log("Hide Notification Script was loaded.");