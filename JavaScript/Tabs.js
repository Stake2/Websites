// Tabs.js

class Tabs_Class {
	"texts" = {
		"script_name": "Tabs",
		"language_script_name": {
			"en": "Tabs",
			"pt": "Abas",
		},
		"opened_the_tab_with_id_{0}_title_{1}_and_number_{2}": {
			"en": 'Opened the tab with id "{0}", title "{1}", and number "{2}"',
			"pt": 'Aberto a aba com id "{0}", título "{1}", e número "{2}"',
		},
		"undefined": {
			"en": "Undefined",
			"pt": "Indefinido",
		},
	}
}

const Tabs = new Tabs_Class()

Tabs.language_texts = Language.Item(Tabs.texts)

var tabs, tab_number = 0

function Open_Tab(tab_id) {
	// Get tab
	var tab = document.getElementById(tab_id)

	// Get tabs
	tabs = Array.from(document.getElementsByClassName("tab"))

	// Hide all tabs
	tabs.forEach(
		function(item) {
			item.style.display = "none"
		}
	)

	// Show clicked tab
	w3.show("#" + tab_id)

	// Scroll to tab
	var tab_anchor = document.getElementById(tab_id + "_anchor")

	if (typeof tab_anchor != "undefined" && tab_anchor != null) {
		tab_anchor.scrollIntoView(true)
	}

	else {
		tab.scrollIntoView(true)
	}

	// Get tab title
	tab_title_element = document.getElementById(tab_id + "_title")

	if (typeof tab_title_element != "undefined" && tab_title_element != null) {
		var tab_title = String(document.getElementById(tab_id + "_title").innerHTML).split(": ")[0]
	}

	else {
		var tab_title = Tabs.language_texts["undefined"]
	}

	// Define tab number
	var i = 0
	while (i < tabs.length) {
		var local_tab_id = tabs[i].id

		if (local_tab_id == tab_id) {
			tab_number = i
		}

		i++
	}

	print(Tabs.language_texts["script_name"] + ".Open_Tab(): " + format(Tabs.language_texts["opened_the_tab_with_id_{0}_title_{1}_and_number_{2}"], tab_id, tab_title, (tab_number + 1)) + ".")

	// Hide hamburger menu
	w3.hide("#hamburger_menu")

	// Show hamburger menu button
	w3.show("#hamburger_menu_button")

	// Get tab buttons
	var tab_buttons = Array.from(document.getElementsByClassName("tab_button"))

	// Show all tab buttons
	tab_buttons.forEach(
		function(item) {
			item.style.display = "block"
		}
	)

	// Get tab button from tab number
	tab_button = document.getElementById("button_" + (tab_number + 1))

	// Hide clicked tab button
	tab_button.style.display = "none"

	return tab
}

function Show_Hamburger_Menu() {
	// Show hamburger menu
	hamburger_menu = document.getElementById("hamburger_menu")
	hamburger_menu.style.display = "block"

	// Hide hamburger menu button
	hamburger_menu_button = document.getElementById("hamburger_menu_button")
	hamburger_menu_button.style.display = "none"
}

function Hide_Hamburger_Menu() {
	// Hide hamburger menu
	hamburger_menu = document.getElementById("hamburger_menu")
	hamburger_menu.style.display = "none"

	// Show hamburger menu button
	hamburger_menu_button = document.getElementById("hamburger_menu_button")
	hamburger_menu_button.style.display = "block"
}

print(format(Language.language_texts["javascript_{0}_script_was_loaded"], Tabs.language_texts["language_script_name"]))