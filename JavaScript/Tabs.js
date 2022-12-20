import {Language, format, print} from "./Language.js";

function Open_Tab(tab_id, tab_button_id = "") {
	// Get tab
	var tab = document.getElementById(tab_id)

	// Get tabs
	var tabs = Array.from(document.getElementsByClassName("tab"))

	// Hide all tabs
	tabs.forEach(
		function(tab) {
			tab.style.display = "none"
		}
	)

	// Show clicked tab
	w3.show("#" + tab_id)
	tab.scrollIntoView()

	// Hide hamburger menu
	w3.hide("#hamburger_menu")

	// Show hamburger menu button
	w3.show("#hamburger_menu_button")

	// Get tab buttons
	var tab_buttons = Array.from(document.getElementsByClassName("tab_button"))

	// Show all tab buttons
	tab_buttons.forEach(
		function(tab_button) {
			tab_button.style.display = "block"
		}
	)

	// Hide clicked tab button
	if (tab_button_id != "") {
		tab_button = document.getElementById(tab_button_id)
		tab_button.style.display = "none"
	}
}

function Show_Hamburger_Menu() {
	// Show hamburger menu
	hamburger_menu = document.getElementById("hamburger_menu")
	hamburger_menu.style.display = "block"

	// Hide hamburger menu button
	hamburger_menu_button = document.getElementById("hamburger_menu_button")
	hamburger_menu_button.style.display = "none"
}

var script_name = {
	"en": "Tabs",
	"pt": "Abas",
}

print(format(Language.language_texts["{0}_script_was_loaded"], Language.Item(script_name)))