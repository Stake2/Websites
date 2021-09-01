function Check_Website_Link() {
	var website_link = "https://thestake2.netlify.app/";
	var user_language = navigator.language || navigator.userLanguage;

	var english_language = "en-US";
	var portuguese_language = "pt-BR" || "pt-PT";

	var title = document.getElementsByTagName("title")[0];
	var titulo = title.innerHTML;

	var current_site_link = window.location;
	var current_site_link_string = '"' + current_site_link + '"';

	var check = current_site_link_string.includes("no-redirect=true");

	var check_chapter_in_link = current_site_link_string.includes("[");

	var url_addon;

	if (check_chapter_in_link == true) {
		url_addon = current_site_link_string.split("/").reverse()[0];
	}

	else {
		url_addon = "";
	}

	if (titulo == "Diary" && check == false) {
		var language = "a";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "Diary" + "/";
			var res = choosen_website_url;
			window.location = res;
		}
	}

	if (titulo == "Diary EN-US" && check == false) {
		var language = "en-US";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "Diary" + "/";
			var res = choosen_website_url;
			window.location = res;
		}
	}

	if (titulo == "Diário" || titulo == "Diário PT-PT" && check == false) {
		if (titulo == "Diário") {
			var language = "pt-BR";
		}

		if (titulo == "Diário PT-PT") {
			var language = "pt-PT";
		}

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "Diário" + "/";
			var res = choosen_website_url;
			window.location = res;
		}
	}

	if (titulo == "Watch History" && check == false) {
		var language = "a";
	
		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "watch 👁" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == "Watch History EN-US" && check == false) {
		var language = "en-US";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "watch 👁" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == "Watch History PT-BR" && check == false) {
		var language = "pt-BR";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "watch 👁" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == "Watch History PT-PT" && check == false) {
		var language = "pt-PT";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "watch 👁" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == "Things I Do Geral" && check == false) {
		var language = "a";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "Things_I_do" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == "Things I Do EN-US" && check == false) {
		var language = "en-US";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "Things_I_do" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == "Coisas que eu faço" && check == false) {
		var language = "pt-BR";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "Coisas_que_eu_faço" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == "2018" && check == false) {
		var language = "a";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "years 📅/" + "2018" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == "2018 EN-US" && check == false) {
		var language = "en-US";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "years 📅/" + "2018" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == "2018 PT-BR" && check == false) {
		var language = "pt-BR";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "years 📅/" + "2018" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == "2019" && check == false) {
		var language = "a";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "years 📅/" + "2019" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == "2019 EN-US" && check == false) {
		var language = "en-US";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "years 📅/" + "2019" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == "2019 PT-BR" && check == false) {
		var language = "pt-BR";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "years 📅/" + "2019" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == "New World" && check == false) {
		var language = "a";

		if (language == user_language) {
			return;
		}

		if (language != user_language) {
			var choosen_website_url = website_link + "new_world%20%E2%8A%A1/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "New World PT-BR" && check == false) {
		var language = "pt-BR";

		if (language == user_language) {
			return;
		}

		if (language != user_language) {
			var choosen_website_url = website_link + "new_world%20%E2%8A%A1/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "New World EN-US" && check == false) {
		var language = "en-US";

		if (language == user_language) {
			return;
		}

		if (language != user_language) {
			var choosen_website_url = website_link + "new_world%20%E2%8A%A1/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "Littletato - Pequenata" && check == false) {
		var language = "general_language";

		if (language == user_language) {
			return;
		}

		else {
			var choosen_website_url = website_link + "The Life of Littletato/";
			var res = choosen_website_url + user_language + "/" + url_addon;
			window.location = res;
			return;
		}
	}

	if (titulo == "The Life of Littletato" && check == false) {
		var language = "en-US";

		if (language == user_language) {
			return;
		}

		else {
			var choosen_website_url = website_link + "The Life of Littletato/";
			var res = choosen_website_url + user_language + "/" + url_addon;
			window.location = res;
			return;
		}
	}

	if (titulo == "A Vida de Pequenata" && check == false) {
		var language = "pt-BR";

		if (language == user_language) {
			return;
		}

		else {
			var choosen_website_url = website_link + "A Vida de Pequenata/";
			var res = choosen_website_url + user_language + "/" + url_addon;
			window.location = res;
			return;
		}
	}

	if (titulo == "A Vida de Pequenata PT-PT" && check == false) {
		var language = "pt-PT";

		if (language == user_language) {
			return;
		}

		else {
			var choosen_website_url = website_link + "A Vida de Pequenata/";
			var res = choosen_website_url + user_language + "/" + url_addon;
			window.location = res;
			return;
		}
	}

	if (titulo == "SpaceLiving" && check == false) {
		var language = "a";

		if (language == user_language) {
			return;
		}

		else {
			var choosen_website_url = website_link + "New_World/SpaceLiving/";
			var redirect_to = choosen_website_url + user_language + "/";
			window.location = redirect_to;
			return;
		}
	}

	if (titulo == "SpaceLiving EN-US" && check == false) {
		var language = "en-US";

		if (language == user_language) {
			return;
		}

		else {
			var choosen_website_url = website_link + "New_World/SpaceLiving/";
			var redirect_to = choosen_website_url + user_language + "/";
			window.location = redirect_to;
			return;
		}
	}

	if (titulo == "SpaceLiving PT-BR" && check == false) {
		var language = "pt-BR";

		if (language == user_language) {
			return;
		}

		else {
			var choosen_website_url = website_link + "New_World/SpaceLiving/";
			var redirect_to = choosen_website_url + user_language + "/";
			window.location = redirect_to;
			return;
		}
	}

	if (titulo == "SpaceLiving PT-PT" && check == false) {
		var language = "pt-PT";

		if (language == user_language) {
			return;
		}

		else {
			var choosen_website_url = website_link + "New_World/SpaceLiving/";
			var redirect_to = choosen_website_url + user_language + "/";
			window.location = redirect_to;
			return;
		}
	}

	if (titulo == "The Story of the Bulkan Siblings Geral" && check == false) {
		var language = "general_language";

		if (language == user_language) {
			return;
		}

		else {
			if (user_language == english_language) {
				var choosen_website_url = website_link + "The Story of the Bulkan Siblings/";
				var redirect_to = choosen_website_url + user_language + "/";
				window.location = redirect_to;
				return;
			}

			if (user_language == portuguese_language) {
				var choosen_website_url = website_link + "A História dos Irmãos Bulkan/";
				var redirect_to = choosen_website_url + user_language + "/";
				window.location = redirect_to;
				return;
			}
		}
	}

	if (titulo == "The Story of the Bulkan Brothers" && check == false) {
		var language = "en-US";

		if (language == user_language) {
			return;
		}

		else {
			if (user_language == english_language) {
				var choosen_website_url = website_link + "The Story of the Bulkan Siblings/";
				var redirect_to = choosen_website_url + user_language + "/";
				window.location = redirect_to;
				return;
			}

			if (user_language == portuguese_language) {
				var choosen_website_url = website_link + "A História dos Irmãos Bulkan/";
				var redirect_to = choosen_website_url + user_language + "/";
				window.location = redirect_to;
				return;
			}
		}
	}

	if (titulo == "A História dos Irmãos Bulkan" && check == false) {
		var language = "pt-BR";

		if (language == user_language) {
			return;
		}

		else {
			if (user_language == english_language) {
				var choosen_website_url = website_link + "The Story of the Bulkan Siblings/";
				var redirect_to = choosen_website_url + user_language + "/";
				window.location = redirect_to;
				return;
			}

			if (user_language == portuguese_language) {
				var choosen_website_url = website_link + "A História dos Irmãos Bulkan/";
				var redirect_to = choosen_website_url + user_language + "/";
				window.location = redirect_to;
				return;
			}
		}
	}

	if (titulo == "A História dos Irmãos Bulkan PT-PT" && check == false) {
		var language = "pt-PT";

		if (language == user_language) {
			return;
		}

		else {
			if (user_language == english_language) {
				var choosen_website_url = website_link + "The Story of the Bulkan Siblings/";
				var redirect_to = choosen_website_url + user_language + "/";
				window.location = redirect_to;
				return;
			}

			if (user_language == portuguese_language) {
				var choosen_website_url = website_link + "A História dos Irmãos Bulkan/";
				var redirect_to = choosen_website_url + user_language + "/";
				window.location = redirect_to;
				return;
			}
		}
	}

	if (titulo == "Desert Island Geral" && check == false) {
		var language = "a";
		var sitename = "Desert_Island";

		if (language == user_language) {
			return;
		}

		if (language != user_language) {
			var choosen_website_url = website_link + sitename + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "Desert Island" && check == false) {
		var language = "en-US";
		var sitename = "Desert_Island";

		if (language == user_language) {
			return;
		}

		if (language != user_language) {
			var choosen_website_url = website_link + sitename + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "Ilha Deserta" && check == false) {
		var language = "pt-BR";
		var sitename = "Ilha_Deserta";

		if (language == user_language) {
			return;
		}

		if (language != user_language) {
			var choosen_website_url = website_link + sitename + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "Uma Nova História PT-PT" && check == false) {
		var language = "pt-PT";
		var sitename = "Ilha_Deserta";

		if (language == user_language) {
			return;
		}

		if (language != user_language) {
			var choosen_website_url = website_link + sitename + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
			return;
		}
	}

	var sitename = "Stake2"
	if (titulo == sitename && check == false) {
		language = "a";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "stake2/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == sitename + " EN-US" && check == false) {
		language = "en-US";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "stake2/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (titulo == sitename + " PT-BR" && check == false) {
		language = "pt-BR";

		if (user_language == language) {
			return;
		}

		if (user_language != language) {
			var choosen_website_url = website_link + "stake2/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}
}

console.log("Redirect Script was loaded and checked the redirect status.");