var computer_buttons_element = "computer_buttons_bar";
var show_computer_buttons_element = "show_computer_buttons";

function Hide_Computer_Buttons() {
	document.getElementById(computer_buttons_element).style.display = "none";
	document.getElementById(show_computer_buttons_element).style.display = "block";
	document.getElementById(computer_buttons_element).className += 'w3-animate-top';
	document.getElementById(computer_buttons_element).className += ' w3-animate-zoom';
}

function Show_Computer_Buttons() {
	document.getElementById(computer_buttons_element).style.display = "block";
	document.getElementById(show_computer_buttons_element).style.display = "none";
	var element = document.getElementById(computer_buttons_element);
	element.className = element.className.replace("w3-animate-top", "");
	element.className = element.className.replace(" w3-animate-zoom", "");
}

console.log("Show Hide Script was loaded.");