var button_element, button_background_color_class, new_button_background_color_class, old_button_background_color_class, old_button, button_number, id, sub_id, query, buttons;

function Define_Colors_And_Styles() {
	new_button_background_color_class = document.getElementById("click_website_button_color").textContent;
	old_button_background_color_class = document.getElementById("old_website_button_color").textContent;
	button_number = document.getElementById("button_number").textContent;
}

function Define_Button(id_parameter) {
	id = id_parameter;
	button_element = document.getElementById(id);
	button_background_color_class = button_element.classList[2];

	query = '[id=' + id + ']';
	buttons = document.querySelectorAll(query);
}

function Change_Button_Color() {
	var i = 0;
	while (i <= button_number) {
		sub_id = "computer_button_" + (i + 1);
		old_button = document.getElementById(sub_id);

		if (old_button == null) {
			i += 1;
		}

		else {
			query = '[id=' + sub_id + ']';
			sub_buttons = document.querySelectorAll(query);

			if (sub_buttons != undefined) {
				var x = 0;
				while (x <= sub_buttons.length) {
					if (sub_buttons[x] != undefined) {
						sub_buttons[x].className = sub_buttons[x].className.replace(new_button_background_color_class, button_background_color_class);

						x += 1;
					}

					else {
						x += 1;
					}
				}
			}

			i += 1;
		}
	}

	var i = 0;
	while (i <= button_number) {
		sub_id = "mobile_button_" + (i + 1);
		old_button = document.getElementById(sub_id);

		if (old_button == null) {
			i += 1;
		}

		else {
			query = '[id=' + sub_id + ']';
			sub_buttons = document.querySelectorAll(query);

			if (sub_buttons != undefined) {
				var x = 0;
				while (x <= sub_buttons.length) {
					if (sub_buttons[x] != undefined) {
						sub_buttons[x].className = sub_buttons[x].className.replace(new_button_background_color_class, button_background_color_class);

						x += 1;
					}

					else {
						x += 1;
					}
				}
			}

			i += 1;
		}
	}

	var i = 0;
	while (i <= button_number) {
		sub_id = "watched_archived_button_" + (i + 1);
		old_button = document.getElementById(sub_id);

		if (old_button == null) {
			i += 1;
		}

		else {
			query = '[id=' + sub_id + ']';
			sub_buttons = document.querySelectorAll(query);

			if (sub_buttons != undefined) {
				var x = 0;
				while (x <= sub_buttons.length) {
					if (sub_buttons[x] != undefined) {
						sub_buttons[x].className = sub_buttons[x].className.replace(new_button_background_color_class, button_background_color_class);

						x += 1;
					}

					else {
						x += 1;
					}
				}
			}

			i += 1;
		}
	}

	var i = 0;
	while (i <= 1) {
		sub_id = "websites_tab_button";
		old_button = document.getElementById(sub_id);

		if (old_button == null) {
			i += 1;
		}

		else {
			query = '[id=' + sub_id + ']';
			sub_buttons = document.querySelectorAll(query);

			if (sub_buttons != undefined) {
				var x = 0;
				while (x <= sub_buttons.length) {
					if (sub_buttons[x] != undefined) {
						sub_buttons[x].className = sub_buttons[x].className.replace(new_button_background_color_class, button_background_color_class);

						x += 1;
					}

					else {
						x += 1;
					}
				}
			}

			i += 1;
		}
	}

	var i = 0;
	while (i <= buttons.length) {
		if (buttons[i] != undefined) {
			buttons[i].className = buttons[i].className.replace(button_background_color_class, new_button_background_color_class);

			i += 1;
		}

		else {
			i += 1;
		}
	}
}

console.log("Change Button Color Script was loaded.");