function buttons() {
	document.getElementById("myDIV").style.display = "none";
	document.getElementById("ShowButton").style.display = "block";
	document.getElementById("myDIV").className += 'w3-animate-top';
	document.getElementById("myDIV").className += ' w3-animate-zoom';
}

function buttons2() {
	document.getElementById("myDIV").style.display = "block";
	document.getElementById("ShowButton").style.display = "none";
	var element = document.getElementById("myDIV");
	element.className = element.className.replace("w3-animate-top", "");
	element.className = element.className.replace(" w3-animate-zoom", "");
}

console.log("ShowHide Script was loaded.");