// Story.js

class Story_Class {
	"texts" = {
		"script_name": "Story",
		"language_script_name": {
			"en": "Story",
			"pt": "História",
		},
		"chapter, title()": {
			"en": "Chapter",
			"pt": "Capítulo",
		},
		"opening_chapter_with_number_{0}_and_title_{1}": {
			"en": 'Opening chapter with number "{0}" and title "{1}".',
			"pt": 'Abrindo capítulo com número "{0}" e título "{1}".',
		},
		"defined_chapter_with_number_{0}_and_title_{1}": {
			"en": 'Defined chapter with number "{0}" and title "{1}".',
			"pt": 'Definido capítulo com número "{0}" e título "{1}".',
		},
		"opened_the_modal_tab_with_id_{0}": {
			"en": 'Opened the modal tab with id "{0}"',
			"pt": 'Aberto a aba modal com id "{0}"',
		},
		"hiding_this_modal_{0}": {
			"en": 'Hiding this modal "{0}"',
			"pt": 'Escondendo este modal "{0}"',
		},
		"undefined": {
			"en": "Undefined",
			"pt": "Indefinido",
		},
	}
}

const Story = new Story_Class()

Story.language_texts = Language.Item(Story.texts)

// Define chapter number, website title and set backup
var chapter_number = null
website["backup"] = String(document.title)

// Function to define chapter number and title
function Define_Chapter(number, title) {
	// Define chapter number
	chapter_number = Number(number)

	// Add chapter title to website title
	document.title = website["backup"] + " - " + Story.language_texts["chapter, title()"] + ": " + number

	if (title != undefined) {
		document.title = document.title + " - " + title
	}

	if (title == undefined) {
		title = Story.language_texts["undefined"]
	}

	print(Story.language_texts["script_name"] + ".Define_Chapter(): " + format(Story.language_texts["defined_chapter_with_number_{0}_and_title_{1}"], number, title))
}

// Function to define chapter number and title, show "opening chapter" text, and open chapter tab
function Open_Chapter(number, title) {
	// Define chapter and change website title
	Define_Chapter(number, title)

	if (title == undefined) {
		title = Story.language_texts["undefined"]
	}

	// Show information
	print(Story.language_texts["script_name"] + ".Open_Chapter(): " + format(Story.language_texts["opening_chapter_with_number_{0}_and_title_{1}"] + " ", number, title))

	// Open chapter tab
	Open_Tab("chapter_" + number)
}

// Open chapter tab by URL
parameters = Object.fromEntries(  
	new URLSearchParams(window.location.search)
)

// Check chapter in URL and open if chapter is present in URL
if (Object.keys(parameters).includes("chapter") == true) {
	setTimeout(
		function() {
			Open_Chapter(parameters["chapter"])
		},
		3000,
	)
}

function Open_Modal(id, chapter_title) {
	id = "chapter_" + id

	// Open modal tab
	var modal_tab = document.getElementById(id)

	// Show modal tab
	w3.show("#" + id)

	// Scroll to modal tab
	var modal_anchor = document.getElementById(id + "_anchor")

	if (typeof modal_anchor != "undefined" && modal_anchor != null) {
		modal_anchor.scrollIntoView(true)
	}

	else {
		modal_tab.scrollIntoView(true)
	}

	print(Story.language_texts["script_name"] + ".Open_Modal(): " + format(Story.language_texts["opened_the_modal_tab_with_id_{0}"], id) + ".")

	// Update chapter title to show on modal
	var chapter_title_element = document.getElementById(id + "_title")

	chapter_title_element.innerHTML = chapter_title

	// Update chapter value of input
	var chapter_title_value = document.getElementById(id + "_value")

	chapter_title_value.setAttribute("value", chapter_title)

	modal_tab.tabIndex = "-1"
	modal_tab.focus()
}

function Hide_Modal(id) {
	id = "chapter_" + id

	var modal = document.getElementById(id)

	// Hide modal tab
	modal.style.display = "none"
}

document.addEventListener("keyup", function(event) {
	var left_arrow = 37, right_arrow = 39

	// Add click event listener to hide modal when user pressed the ESC key
	if (event.key == "Escape") {
		event.preventDefault()

		if (String(event.target.id).includes("chapter_comment") || String(event.target.id).includes("chapter_read")) {
			print(Story.language_texts["script_name"] + ".Hide_Modal_By_Key(): " + format(Story.language_texts["hiding_this_modal_{0}"], String(event.target.id)) + ".")

			event.target.style.display = "none"
			document.activeElement.blur()
		}
	}

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
				modifier_key_pressed = true
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

// Add click event listener to hide modal when user clicks outside modal-content
document.addEventListener("click", function(event) {
	if (String(event.target.id).includes("chapter_comment") || String(event.target.id).includes("chapter_read")) {
		event.preventDefault()

		print(Story.language_texts["script_name"] + ".Hide_Modal_By_Click(): " + format(Story.language_texts["hiding_this_modal_{0}"], String(event.target.id)) + ".")

		event.target.style.display = "none"
		document.activeElement.blur()
	}
})

print(format(Language.language_texts["javascript_{0}_script_was_loaded"], Story.language_texts["language_script_name"]))