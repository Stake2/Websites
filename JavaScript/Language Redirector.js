import {Language, format, print} from "./Language.js";

var languages = Language.languages

// Define website dictionary
var website = {
	"title": String(document.title),
	"link": String(window.location),
	"addon": "",
}

website["check"] = website["link"].includes("no-redirect=true")
website["link_parameters"] = website["link"].includes("[") || website["link"].includes("(")

// Define link addon (URL parameters)
if (website["link_parameters"] == true) {
	website["addon"] = website["link"].split("/").reverse()[0]
}

function Check_Language() {
	text = Language.language_texts["website_title"] + ": " + website["title"] + "\n\n" +
	Language.language_texts["website_link"] + ": " + website["link"] + "\n\n" +
	Language.language_texts["website_language"] + ": " + languages["full_translated"][languages["full_to_small"][languages["meta"]]][languages["user"]] + "\n\n" +
	Language.language_texts["user_language"] + ": " + languages["full_translated"][languages["user"]][languages["user"]]

	print(text)

	website["correct_language"] = true

	languages["small"].forEach(function(language) {
		var full_language = languages["full"]

		if (languages["meta"] == full_language) {
			var correct_language = false
		}
	})

	var text = Language.language_texts["the_user_is_in_the_{1}_redirecting_to_{2}_website"] + "..."
	var text = text.replace("{1}", languages["full_translated"][languages["user"]][languages["user"]])
	var text = text.replace("{2}", languages["full_translated"][languages["full_to_small"][languages["meta"]]][languages["user"]])

	if (website["correct_language"] == true) {
		var text = Language.language_texts["the_user_is_in_the_correct_website_for_their_language"] + "."
	}	

	if (website["correct_language"] == false) {
		if (website["link"].slice(-1) != "/") {
			website["link"] += "/"
		}

		website["link"] = website["link"] + languages["user"] + "/" + website["addon"]

		text += "\n\n" + Language.language_texts["link, title()"] + ": " + website["link"]
	}

	print(text)

	if (website["correct_language"] == false && website["check"] == false) {
		window.location = website["link"]
	}
}

var script_name = {
	"en": "Language Redirector",
	"pt": "Redirecionador de Idioma",
}

print(format(Language.language_texts["{0}_script_was_loaded"], Language.Item(script_name)))