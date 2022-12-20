import {Language, format, print} from "./Language.js"

var texts = {
	"opening_chapter_number_{0}": {
		"en": 'Opening chapter number {0}.',
		"pt": 'Abrindo capítulo número {0}.',
	},
	"chapter, title()": {
		"en": "Chapter",
		"pt": "Capítulo",
	}
}

var language_texts = Language.Item(texts)

// Define chapter number, website title and set backup
var chapter_number = null
website["backup"] = String(document.title)

// Function to define chapter number and title
function Define_Chapter(number, title) {
	// Define chapter number
	chapter_number = Number(number)

	// Add chapter title to website title
	document.title = website["backup"] + " - " + language_texts["chapter, title()"] + ": " + title
}

// Function to define chapter number and title, show "opening chapter" text, and open chapter tab
function Open_Chapter(number) {
	Define_Chapter(number)

	print(format(language_texts["opening_chapter_number_{0}"] + " ", number))

	Open_Tab("chapter_" + number)
}

// Open chapter tab by URL
parameters = Object.fromEntries(  
	new URLSearchParams(window.location.search)
)

// Check chapter in URL
if (Object.keys(parameters).includes("chapter") == true) {
	setTimeout(
		function() {
			Open_Chapter(parameters["chapter"])
		},
		1000,
	)
}

// Open chapter tab by keys
document.addEventListener("keyup", function() {
	var left_arrow = 37, right_arrow = 39

	// If left or right arrow is pressed
	if (chapter_number != null && event.keyCode === left_arrow || chapter_number != null && event.keyCode === right_arrow) {
		// Prevent default event
		event.preventDefault()

		// Define supported modifier keys
		var supported_modifier_keys = [!!event.ctrlKey, !!event.shiftKey]

		// Check if modifiey key is pressed
		var i = 0
		while (i <= supported_modifier_keys.length) {
			var modifier_key = supported_modifier_keys[i]

			if (modifier_key == true) {
				var modifier_key_pressed = true
			}

			i++
		}

		// If one of them is pressed, then check chapter number
		if (modifier_key_pressed == true) {
			open = false

			// If left arrow is pressed and chapter number is not the first chapter, define the chapter number as one number less
			if (event.keyCode === left_arrow && chapter_number != 1) {
				chapter_number = Number(chapter_number) - 1

				open = true
			}

			// If right arrow is pressed and chapter number is not the last chapter, define the chapter number as plus one number
			if (event.keyCode === right_arrow && chapter_number != last_chapter) {
				chapter_number = Number(chapter_number) + 1

				open = true
			}

			// If either key is pressed, define chapter number and title, show "opening chapter" text, and open chapter tab
			if (open == true) {
				Open_Chapter(chapter_number)
			}
		}
	}
})

var script_name = {
	"en": "Story",
	"pt": "História",
}

print(format(Language.language_texts["{0}_script_was_loaded"], Language.Item(script_name)))