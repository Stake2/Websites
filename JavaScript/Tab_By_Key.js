// Tab_By_Key.js

class Tab_By_Key_Class {
	"texts" = {
		"script_name": "Tab_By_Key",
		"language_script_name": {
			"en": "Tab_By_Key",
			"pt": "Aba_Por_Tecla",
		},
	}
}

const Tab_By_Key = new Tab_By_Key_Class()

Tab_By_Key.language_texts = Language.Item(Tab_By_Key.texts)

// Add event listener to keyup to open tabs
document.addEventListener("keyup", function(event) {
	var left_arrow = 37, right_arrow = 39

	// If left or right arrow is pressed
	if (event.keyCode === left_arrow || event.keyCode === right_arrow) {
		// Prevent default event
		event.preventDefault()

		// Define supported modifier keys
		var supported_modifier_keys = [!!event.ctrlKey, !!event.shiftKey]

		// Check if modifiey key is pressed
		var i = 0
		while (i <= supported_modifier_keys.length) {
			var modifier_key = supported_modifier_keys[i]

			if (modifier_key == true) {
				modifier_key_pressed = true
			}

			i++
		}

		// If one of them is pressed, then check what key was pressed
		if (modifier_key_pressed == true) {
			open = false

			// If left arrow is pressed then define tab number as the previous tab
			if (event.keyCode === left_arrow) {
				tab_number = Number(tab_number) - 1

				open = true
			}

			// If right arrow is pressed then define tab number as the next tab
			if (event.keyCode === right_arrow) {
				tab_number = Number(tab_number) + 1

				open = true
			}

			// If either key is pressed, get tab by tab number and open tab
			if (open == true) {
				// Get tabs
				var tabs = Array.from(document.getElementsByClassName("tab"))

				if (tabs[tab_number] != undefined) {
					tab_id = tabs[tab_number].id
					Open_Tab(tab_id)
				}
			}
		}
	}
})

print(format(Language.language_texts["javascript_{0}_script_was_loaded"], Tab_By_Key.language_texts["language_script_name"]))