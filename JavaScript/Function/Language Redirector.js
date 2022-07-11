var root_website_link = "https://thestake2.netlify.app/";
var websites_list_text_files = root_website_link + "Texts/Websites List/";
var english_website_names_url = websites_list_text_files + "English Websites Array.txt";
var portuguese_website_names_url = websites_list_text_files + "Portuguese Websites Keyed.txt";

var user_language = navigator.website_language || navigator.userLanguage || navigator.language;
var website_language = user_language;

var title = document.getElementsByTagName("title")[0];
var website_title = String(title.innerHTML).replace("(1) ", "");

var meta_title = document.head.querySelector('[name="language_title"]').content;

var url_addon;
var english_language = "en-US";
var english_languages = ["en", "en-US", "en-BZ", "en-CA", "en-IE", "en-JM", "en-NZ", "en-PH", "en-ZA", "en-TT", "en-GB", "en-ZW"]

var portuguese_language = "pt-BR" || "pt-PT";
var portuguese_languages = ["pt", "pt-BR", "pt-PT"];

var languages_dict = {
"PT-BR": "pt",
"EN-US": "en",
}

async function Convert_Text_File_To_Object(url) {
	var x = await fetch(url);
	var object = await x.text();

	object = JSON.parse(object);

	return object;
}

var english_website_names = await Convert_Text_File_To_Object(english_website_names_url);
var portuguese_website_names = await Convert_Text_File_To_Object(portuguese_website_names_url);

function Language_Item_Definer(english_text, portuguese_text) {
	var language_text;

	if (english_languages.includes(website_language) == true) {
		language_text = english_text;
	}

	if (portuguese_languages.includes(website_language) == true) {
		language_text = portuguese_text;
	}

	return language_text;
}

function English_Language_Check(language) {
	if (english_languages.includes(language) == true) {
		return true;
	}

	if (english_languages.includes(language) == false) {
		return false;
	}
}

function Portuguese_Language_Check(language) {
	if (portuguese_languages.includes(language) == true) {
		return true;
	}

	if (portuguese_languages.includes(language) == false) {
		return false;
	}
}

function Redirect(website_link) {
	var redirect = website_link + Language_Item_Definer("en", "pt", user_language) + "/" + url_addon;
	window.location = redirect;
}

function Check_Language(english_website_name) {
	var website_link = root_website_link + english_website_name + "/"
	var portuguese_website_name = portuguese_website_names[String(english_website_name).replace(/ /gi, "_").toLowerCase()];

	if (meta_title == english_website_name) {
		console.log(Language_Item_Definer("The user is in the index website, redirecting to user language website", "O usuário está no site raíz, redirecionando para o site do idioma") + "...");
		Redirect(website_link);
	}

	if (meta_title == english_website_name + " English") {
		if (Portuguese_Language_Check(user_language) == true) {
			console.log(Language_Item_Definer("The user is in the English website, redirecting to Portuguese language website", "O usuário está no site em Inglês, redirecionando para o site em idioma Português") + "...");
			Redirect(website_link);
		}

		else {
			console.log(Language_Item_Definer("The user is in the correct website for their language", "O usuário está no site correto para seu idioma") + ".");
		}
	}

	if (meta_title == portuguese_website_name + " Português") {
		if (English_Language_Check(user_language) == true) {
			console.log(Language_Item_Definer("The user is in the Portuguese website, redirecting to English language website", "O usuário está no site em Português, redirecionando para o site em idioma Inglês") + "...");
			Redirect(website_link);
		}

		else {
			console.log(Language_Item_Definer("The user is in the correct website for their language", "O usuário está no site correto para seu idioma") + ".");
		}
	}
}

var current_website_link = String(window.location);
var check = current_website_link.includes("no-redirect=true");
var check_chapter_in_link = current_website_link.includes("[") || current_website_link.includes("(");

url_addon = "";

if (check_chapter_in_link == true) {
	url_addon = current_website_link.split("/").reverse()[0];
}

if (check == false) {
	english_website_names.forEach(Check_Language);
}

console.log("Redirect Script was loaded and checked the redirect status.");