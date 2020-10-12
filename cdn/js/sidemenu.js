function openNav() {
	document.getElementById("mobile_button_sidebar").style.width = "300px";
	document.getElementById("ShowMenu").style.display = "none";
}

function closeNav() {
	document.getElementById("mobile_button_sidebar").style.width = "0px";
	document.getElementById("ShowMenu").style.display = "block";
}

console.log("SideMenu Script was loaded.");