function Hide_Computer_Buttons() {
	document.getElementById("computer_buttons_bar").style.display = "none";
	document.getElementById("show_Computer_Menu").style.display = "block";
	document.getElementById("computer_buttons_bar").className += 'w3-animate-top';
	document.getElementById("computer_buttons_bar").className += ' w3-animate-zoom';
}

function Show_Computer_Buttons() {
	document.getElementById("computer_buttons_bar").style.display = "block";
	document.getElementById("show_Computer_Menu").style.display = "none";
	var element = document.getElementById("computer_buttons_bar");
	element.className = element.className.replace("w3-animate-top", "");
	element.className = element.className.replace(" w3-animate-zoom", "");
}

console.log("ShowHide Script was loaded.");