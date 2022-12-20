// Define Language_Class for definition of language texts
export class Language_Class {
	languages = {
		"user": String(navigator.website_language || navigator.userLanguage || navigator.language).split("-")[0],
		"meta": document.head.querySelector('[name="meta_language"]').content,
		"small": [
			"general",
			"pt",
			"en"
		],
		"full": {
			"general": "General",
			"pt": "Português",
			"en": "English"
		},
		"full_translated": {
			"general": {
				"pt": "Geral",
				"en": "General"
			},
			"pt": {
				"pt": "Português",
				"en": "Portuguese"
			},
			"en": {
				"pt": "Inglês",
				"en": "English"
			}
		},
		"full_to_small": {
			"General": "general",
			"Português": "pt",
			"English": "en"
		}
	}
	texts = {}
	language_texts = {}

	constructor() {
		this.Define_Texts()
	}

	Item(item) {
		if (this.languages["user"] in item) {
			return item[this.languages["user"]]
		}

		if (Object.keys(item).includes(this.languages["user"]) == false) {
			var dictionary = {}

			for (var i = 0; i < Object.keys(item).length; i++) {
				var key = Object.keys(item)[i]

				if (this.languages["user"] in item[key]) {
					dictionary[key] = item[key][this.languages["user"]]
				}
			}

			return dictionary
		}
	}

	Define_Texts() {
		this.texts = {
			"website_title": {
				"en": "Website title",
				"pt": "Título do site",
			},
			"website_link": {
				"en": "Website link",
				"pt": "Link do site",
			},
			"website_language": {
				"en": "Website language",
				"pt": "Idioma do site",
			},
			"user_language": {
				"en": "User language",
				"pt": "Idioma do usuário",
			},
			"link, title()": {
				"en": "Link",
				"pt": "Link",
			},
			"the_user_is_in_the_{0}_redirecting_to_{1}_website": {
				"en": `The user is in the {0} website, redirecting to {1} website`,
				"pt": `O usuário está no site {0}, redirecionando para o site em {1}`,
			},
			"the_user_is_in_the_correct_website_for_their_language": {
				"en": "The user is in the correct website for their language",
				"pt": "O usuário está no site correto para seu idioma",
			},
			"{0}_script_was_loaded": {
				"en": '"{0}.js" script was loaded.',
				"pt": 'O script "{0}.js" foi carregado.',
			},
		}

		this.language_texts = this.Item(this.texts)
	}
}

// JavaScript String format function
export function format(text) {
  var args = arguments

	return text.replace(/{([0-9]+)}/g, function(match, index) {
		return args[Number(index) + 1];
	});
};

export function print(text) {
	console.log(text)
}

export const Language = new Language_Class()