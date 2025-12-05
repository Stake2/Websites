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
		"pt": "Não adicionou zeros à esquerda à esse número: {0}"
	}

	if (number <= 9) {
		text = {
			"en": "Added leading zeros to this number: {0}",
			"pt": "Adicionou zeros à esquerda à esse número: {0}"
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
function Check_Scroll_Position(ids) {
	// Define the method title
	var method_title = {
		"en": arguments.callee.name,
		"pt": "Verificar_Posição_De_Rolagem"
	}

	// Define the window Y position
	var window_Y = window.scrollY

	// Scrolling up
	if (window_Y < last_scroll) {
		// Define the text and show the button
		text = {
			"en": "The user scrolled the page up, showing the hamburger menu button",
			"pt": "O usuário rolou a página para cima, mostrando o botão do menu hambúrguer"
		}

		// Define the show or hide and add or remove methods
		show_or_hide = w3.show
		add_or_remove = w3.addClass
	}

	// Scrolling down
	if (window_Y > last_scroll) {
		// Define the text and hide the button
		text = {
			"en": "The user scrolled the page down, hiding the hamburger menu button",
			"pt": "O usuário rolou a página para baixo, escondendo o botão do menu hambúrguer"
		}

		// Define the show or hide and add or remove methods
		show_or_hide = w3.hide
		add_or_remove = w3.removeClass
	}

	// Iterate through the list of ids
	Array.from(ids).forEach(function(id) {
		show_or_hide("#" + id)
		add_or_remove("#" + id, "w3-animate-zoom")
	})

	// Update the "last_scroll" variable
	last_scroll = window.scrollY

	// Show the verbose text
	//Functions.Class_Method(method_title, text)
}

// Define the "Check_Page_Scrolling" function
function Check_Page_Scrolling(event, ids = null) {
	// Define the method title
	var method_title = {
		"en": "Check_Page_Scrolling",
		"pt": "Verificar_Rolagem_Da_Página"
	}

	// If the list of ids is null, define a default list of ids
	if (ids == null) {
		ids = list
	}

	// Check the scroll position and hide/show the elements as needed
	//Check_Scroll_Position(ids)
}

// Define the function on the "window" object
window.Check_Page_Scrolling = Check_Page_Scrolling

// Define the scroll list
var list = [
	"hamburger_menu_button"
]

// Add the event listener
scroll_function = function(event) {
	window.Check_Page_Scrolling(event, list)
}

window.addEventListener("scroll", scroll_function)

// Show the "Loaded_Class" text
Loaded_Class(Functions.texts["class_title"])