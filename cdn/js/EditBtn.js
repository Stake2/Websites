var title = document.getElementsByTagName("title")[0];
var titulo = title.innerHTML;
var icon = '<i class="fas fa-pen"></i>';
var userLang = navigator.language || navigator.userLanguage;

if (userLang == "en-US" || userLang == "en-AU" || userLang == "en-BZ" || userLang == "en-CA" || userLang == "en-GB") {
	var btnText1 = 'Activate'
	var btnText2 = 'Deactivate'
}

if (userLang == "pt-BR" || userLang == "pt-PT") {
	var btnText1 = 'Ativar'
	var btnText2 = 'Desativar'
}

function Cetoggle1cmnd() {
	document.getElementById("teste1div").setAttribute("contenteditable", "false");
	document.getElementById("cetoggle1btn").setAttribute("onClick", "Cetoggle2cmnd();");
	document.getElementById("cetoggle1btn").innerHTML = "<h2>" + btnText1 + ": " + icon + "</h2>";
}
	
function Cetoggle2cmnd() {
	document.getElementById("teste1div").setAttribute("contenteditable", "true");
	document.getElementById("cetoggle1btn").setAttribute("onClick", "Cetoggle1cmnd();");
	document.getElementById("cetoggle1btn").innerHTML = "<h2>" + btnText2 + ": " + icon + "</h2>";
}

function Cetoggle3cmnd() {
	document.getElementById("teste2div").setAttribute("contenteditable", "false");
	document.getElementById("cetoggle2btn").setAttribute("onClick", "Cetoggle4cmnd();");
	document.getElementById("cetoggle2btn").innerHTML = "<h2>" + btnText1 + ": " + icon + "</h2>";
}

function Cetoggle4cmnd() {
	document.getElementById("teste2div").setAttribute("contenteditable", "true");
	document.getElementById("cetoggle2btn").setAttribute("onClick", "Cetoggle3cmnd();");
	document.getElementById("cetoggle2btn").innerHTML = "<h2>" + btnText2 + ": " + icon + "</h2>";
}