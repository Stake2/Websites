var mobile_buttons_element = "mobile_button_sidebar";
var show_mobile_buttons_element = "show_mobile_buttons";

function Show_Mobile_Buttons() {
	document.getElementById(mobile_buttons_element).style.width = "300px";
	document.getElementById(show_mobile_buttons_element).style.display = "none";
}

function Hide_Mobile_Buttons() {
	document.getElementById(mobile_buttons_element).style.width = "0px";
	document.getElementById(show_mobile_buttons_element).style.display = "block";
}

console.log("Side Menu Script was loaded.");