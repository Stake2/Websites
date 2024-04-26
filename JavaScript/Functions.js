// Functions.js

var Functions = {
	"texts": {
		"class_title": {
			"en": "Functions",
			"pt": "Funções"
		}
	}
}

Functions.language_texts = Language.Item(Functions.texts)

Functions.Class_Method = Class_Method(Functions.texts["class_title"])

// Functions that are used on various websites

// Remove the zoom class after the page has been loaded
function Remove_Zoom() {
	// Define the method title
	var method_title = {
		"en": arguments.callee.name,
		"pt": "Remover_Zoom"
	}

	// Define the verbose title
	var text = {
		"en": 'The "w3-animate-zoom" class was removed from the buttons (removed zoom animation of buttons)',
		"pt": 'A classe "w3-animate-zoom" foi removida dos botões (removida animação de zoom dos botões)'
	}

	// Get all elements with the "w3-animate-zoom" class
	array = Array.from(document.getElementsByClassName("w3-animate-zoom"))

	array.forEach(
		function(element) {
			if (element.tagName == "BUTTON") {
				element.classList.toggle("w3-animate-zoom")
			}
		}
	)

	Functions.Class_Method(method_title, text)
}

// Click on input button part
function Click_Input(array)	{
	// Define the method title
	var method_title = {
		"en": arguments.callee.name,
		"pt": "Clicar_Input"
	}

	var array = Array.from(array)

	// Iterate through elements list
	array.forEach(
		function(item) {
			// If element is Input element, click it
			if (item.tagName == "INPUT") {
				item.click()

				var text = {
					"en": "Clicking on the Input element in a Div",
					"pt": "Clicando no elemento Input em uma Div"
				}

				Functions.Class_Method(method_title, text)
			}
		}
	)
}

// Get divs from page
var divs = document.getElementsByTagName("div")

// Transform divs into array
var array = Array.from(divs)

array.forEach(
	function(div) {
		// Checks if div contains the "input" element
		var add = false

		var children = Array.from(div.children)

		children.forEach(
			function(item) {
				if (item.tagName == "INPUT") {
					add = true
				}
			}
		)

		// Add "click" event listener if div contains the "input" element
		if (add == true) {
			div.addEventListener("click", 
				function(event) {
					// If target is a div, define array as the children of the div 
					if (event.target.tagName == "DIV") {
						var array = event.target.children
					}

					// If target is not a div, define array as the children of the parent element (which is probably the div)
					else {
						var parent = event.target.parentElement

						// If parent is a div, define array as the children of the div
						if (parent.tagName == "DIV") {
							var array = parent.children
						}

						// If parent is not a div, define parent as the parent of the parent element
						// Define the array as the children of the parent element (which is probably now the div)
						else {
							var parent = parent.parentElement

							var array = parent.children
						}
					}

					// Finds the input button and clicks it
					Click_Input(array)
				}
			)
		}
	}
)

// Add leading zeroes to number
function Add_Leading_Zeroes(number) {
	// Define the method title
	var method_title = {
		"en": arguments.callee.name,
		"pt": "Adicionar_Zeros_À_Esquerda"
	}

	var old_number = number

	var text = {
		"en": "Did not added leading zeros to this number: {0}",
		"pt": "Não adicionou zeros à esquerda à este número: {0}"
	}

	if (number <= 9) {
		text = {
			"en": "Added leading zeros to this number: {0}",
			"pt": "Adicionou zeros à esquerda à este número: {0}"
		}

		number = "0" + String(number)
	}

	Functions.Class_Method(method_title, format(text, number))
}

// Add text gotten from file to element
function Add_Text_To_Element(url, element) {
	var request = new XMLHttpRequest()

	request.open("GET", url, true)
	request.send()
	request.onreadystatechange = process

	function process(event) {
		element.innerHTML = event.target.response
	}
}

// Hide hamburger buttons menu when scrolling down
// Show hamburger buttons menu when scrolling up
var hamburger_menu_button = document.getElementById("hamburger_menu_button")
var last_scroll = window.scrollY

// Define the "Check_Scroll_Position" function
function Check_Scroll_Position(id) {
	// Define the window Y position
	var window_Y = window.scrollY

	// Scrolling up
	if (window_Y < last_scroll) {
		// Define the text and show the button
		text = {
			"en": "The user scrolled the page up, showing the hamburger menu button\n\n:Element:",
			"pt": "O usuário rolou a página para cima, mostrando o botão do menu hambúrguer\n\n:Elemento:"
		}

		w3.show("#" + id)
		w3.addClass("#" + id, "w3-animate-zoom")
	}

	// Scrolling down
	if (window_Y > last_scroll) {
		// Define the text and hide the button
		text = {
			"en": "The user scrolled the page down, hiding the hamburger menu button",
			"pt": "O usuário rolou a página para baixo, escondendo o botão do menu hambúrguer"
		}

		w3.hide("#" + id)
		w3.removeClass("#" + id, "w3-animate-zoom")
	}

	// Update the "last_scroll" variable
	last_scroll = window.scrollY
}

// Define the "Check_Page_Scrolling" function
function Check_Page_Scrolling(event, ids = null) {
	// Define the method title
	var method_title = {
		"en": "Check_Page_Scrolling",
		"pt": "Verificar_Rolagem_Da_Página"
	}

	// Define the ids list
	if (ids == null) {
		ids = [
			"hamburger_menu_button"
		]
	}

	// Define the default text variable
	var text = null

	// If there is only one ID on the list of ids
	if (ids.length == 1) {
		// Check the scroll position and hide/show the element as needed
		Check_Scroll_Position(ids[0])
	}

	// If there are more IDs
	else {
		// Iterate through the list of ids
		Array.from(ids).forEach(function(id) {
			// Check the scroll position and hide/show the element as needed
			Check_Scroll_Position(id)
		})
	}
}

// Add the event listener
scroll_function = function() {
	Check_Page_Scrolling()
}

window.addEventListener("scroll", scroll_function)

// Show the "Loaded_Class" text
Loaded_Class(Functions.texts["class_title"])