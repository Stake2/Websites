var userLang = navigator.language || navigator.userLanguage;

//Defines the button text if the user language is English
if (userLang == "en-US") {
	var button_text = "Okay, byeeeee...";
}

//Defines the button text if the user language is Brazilian Portuguese
if (userLang == "pt-BR" || userLang == "pt-PT") {
	var button_text = "Tudo beeeeem...";
}

else {
	var button_text = "Okay, byeeeee...";
}

//Gets the div element
var notification_div_computer = document.getElementById("notification_div_computer");

//Gets the close button for the div element
var notification_close_button_computer = document.getElementById("notification_close_button_computer");

//Gets the div element
var notification_div_mobile = document.getElementById("notification_div_mobile");

//Gets the close button for the div element
var notification_close_button_mobile = document.getElementById("notification_close_button_mobile");

//When the user clicks on the click button, it will run this function
notification_close_button_computer.onclick = function() {
	Hide_Notification_Computer();
}

//When the user clicks on the click button, it will run this function
notification_close_button_mobile.onclick = function() {
	Hide_Notification_Mobile();
}

console.log("Notification Script was loaded.");

function Hide_Notification_Computer() {
	var notification_div_computer = document.getElementById("notification_div_computer");
	var notification_close_button_computer = document.getElementById("notification_close_button_computer");

	//Animates the div element from top to bottom, hiding it
	notification_div_computer.className = notification_div_computer.className.replace("stake2animatebottom", "stake2animatebottomrevert");

	//Changes the text of the div element
	notification_div_computer.innerHTML = '<h1 width="50%">' + button_text + "</h1>";

	//Hides the div element after the animation has stopped
	setTimeout(function() {
		notification_div_computer.style.display = "none";
	}, 10000);
}

function Hide_Notification_Mobile() {
	var notification_div_mobile = document.getElementById("notification_div_mobile");
	var notification_close_button_mobile = document.getElementById("notification_close_button_mobile");

	//Animates the div element from top to bottom, hiding it
	notification_div_mobile.className = notification_div_mobile.className.replace("stake2animatebottom", "stake2animatebottomrevert");

	//Changes the text of the div element
	notification_div_mobile.innerHTML = '<h2 width="50%">' + button_text + "</h2>";

	//Hides the div element after the animation has stopped
	setTimeout(function() {
		notification_div_mobile.style.display = "none";
	}, 10000);
}

console.log("Hide Notification Script was loaded.");