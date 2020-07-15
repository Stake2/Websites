var userLang = navigator.language || navigator.userLanguage;

//Defines the button text if the user language is English
if (userLang == "en-US") {
	var btnText1 = "Okay, byeeeee...";
}

//Defines the button text if the user language is Brazilian Portuguese
if (userLang == "pt-BR" || userLang == "pt-PT") {
	var btnText1 = "Tudo beeeeem...";
}

else {
	var btnText1 = "Okay, byeeeee...";
}

//Gets the div element
var notifdiv = document.getElementById("notificationdiv");

//Gets the close button for the div element
var notifclosebtn = document.getElementById("notificationclose");

//Gets the div element
var notifdivm = document.getElementById("notificationdivm");

//Gets the close button for the div element
var notifclosebtnm = document.getElementById("notificationclosem");

//When the user clicks on the click button, it will run this function
notifclosebtn.onclick = function() {
	//Animates the div element from top to bottom, hiding it
	notifdiv.className = notifdiv.className.replace("stake2animatebottom", "stake2animatebottomrevert");

	//Changes the text of the div element
	notifdiv.innerHTML = "<h1 width='50%'>" + btnText1 + "</h1>";

	document.title = olddocumenttitle;

	//Hides the div element after the animation has stopped
	setTimeout(function() {
		notifdiv.style.display = "none";
	}, 10000);
}

//When the user clicks on the click button, it will run this function
notifclosebtnm.onclick = function() {
	//Animates the div element from top to bottom, hiding it
	notifdivm.className = notifdivm.className.replace("stake2animatebottom", "stake2animatebottomrevert");

	//Expands the width of the div element
	notifdivm.style.width = "100%";
	notifdivm.innerHTML = "<h2 width='50%'>" + btnText1 + "</h2>";

	document.title = olddocumenttitle;

	//Hides the div element after the animation has stopped
	setTimeout(function() {
		notifdivm.style.display = "none";
	}, 10000);
}