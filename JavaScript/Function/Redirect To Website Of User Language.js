function Check_Website_Link() {
	var website_link = "https://thestake2.netlify.app/";
	var user_language = navigator.website_language || navigator.userLanguage || navigator.language;

	var english_language = "en-US";
	var portuguese_language = "pt-BR" || "pt-PT";

	var title = document.getElementsByTagName("title")[0];
	var website_title = title.innerHTML;

	var current_site_link = window.location;
	var current_site_link_string = '"' + current_site_link + '"';

	var check = String(current_site_link).includes("no-redirect=true");

	var check_chapter_in_link = String(current_site_link).includes("[") || String(current_site_link).includes("(");

	var url_addon;

	if (check_chapter_in_link == true) {
		url_addon = String(current_site_link).split("/").reverse()[0];
	}

	else {
		url_addon = "";
	}

	if (website_title == "Diary" && check == false) {
		var website_language = "General";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + "Diary" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (website_title == "Diary EN-US" && check == false) {
		var website_language = "en-US";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + "Diary" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (website_title == "Diário" && check == false || website_title == "Diário PT-PT" && check == false) {
		if (website_title == "Diário") {
			var website_language = "pt-BR";
		}

		if (website_title == "Diário PT-PT") {
			var website_language = "pt-PT";
		}

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + "Diário" + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
		}
	}

	var website_name = "Watch History";

	if (website_title == website_name && check == false) {
		var website_language = "General";
	
		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + website_name + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
		}
	}

	if (website_title == website_name + " EN-US" && check == false) {
		var website_language = "en-US";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + website_name + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
		}
	}

	if (website_title == website_name + " PT-BR" && check == false) {
		var website_language = "pt-BR";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + website_name + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
		}
	}

	if (website_title == website_name + " PT-PT" && check == false) {
		var website_language = "pt-PT";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + website_name + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
		}
	}

	if (website_title == "Things I Do Geral" && check == false) {
		var website_language = "General";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + "Things_I_do" + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
		}
	}

	if (website_title == "Things I Do EN-US" && check == false) {
		var website_language = "en-US";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + "Things_I_do" + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
		}
	}

	if (website_title == "Coisas que eu faço" && check == false) {
		var website_language = "pt-BR";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + "Coisas_que_eu_faço" + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
		}
	}

	if (website_title == "2018" && check == false) {
		var website_language = "General";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + "Years/" + "2018" + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
		}
	}

	if (website_title == "2018 EN-US" && check == false) {
		var website_language = "en-US";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + "Years/" + "2018" + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
		}
	}

	if (website_title == "2018 PT-BR" && check == false) {
		var website_language = "pt-BR";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + "Years/" + "2018" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (website_title == "2019" && check == false) {
		var website_language = "General";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + "Years/" + "2019" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (website_title == "2019 EN-US" && check == false) {
		var website_language = "en-US";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + "Years/" + "2019" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (website_title == "2019 PT-BR" && check == false) {
		var website_language = "pt-BR";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + "Years/" + "2019" + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (website_title == "New World" && check == false) {
		var website_language = "General";

		if (website_language == user_language) {
			return;
		}

		if (website_language != user_language) {
			var choosen_website_url = website_link + "New_World/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
			return;
		}
	}

	if (website_title == "New World PT-BR" && check == false) {
		var website_language = "pt-BR";

		if (website_language == user_language) {
			return;
		}

		if (website_language != user_language) {
			var choosen_website_url = website_link + "New_World/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
			return;
		}
	}

	if (website_title == "New World EN-US" && check == false) {
		var website_language = "en-US";

		if (website_language == user_language) {
			return;
		}

		if (website_language != user_language) {
			var choosen_website_url = website_link + "New_World/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
			return;
		}
	}

	if (website_title == "Littletato - Pequenata" && check == false) {
		var website_language = "General";

		if (website_language == user_language) {
			return;
		}

		else {
			if (user_language == english_language) {
				var choosen_website_url = website_link + "The Life of Littletato/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}

			if (user_language == portuguese_language) {
				var choosen_website_url = website_link + "A Vida de Pequenata/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}
		}
	}

	if (website_title == "The Life of Littletato" && check == false) {
		var website_language = "en-US";

		if (website_language == user_language) {
			return;
		}

		else {
			if (user_language == english_language) {
				var choosen_website_url = website_link + "The Life of Littletato/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}

			if (user_language == portuguese_language) {
				var choosen_website_url = website_link + "A Vida de Pequenata/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}
		}
	}

	if (website_title == "A Vida de Pequenata" && check == false) {
		var website_language = "pt-BR";

		if (website_language == user_language) {
			return;
		}

		else {
			if (user_language == english_language) {
				var choosen_website_url = website_link + "The Life of Littletato/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}

			if (user_language == portuguese_language) {
				var choosen_website_url = website_link + "A Vida de Pequenata/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}
		}
	}

	if (website_title == "A Vida de Pequenata PT-PT" && check == false) {
		var website_language = "pt-PT";

		if (website_language == user_language) {
			return;
		}

		else {
			if (user_language == english_language) {
				var choosen_website_url = website_link + "The Life of Littletato/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}

			if (user_language == portuguese_language) {
				var choosen_website_url = website_link + "A Vida de Pequenata/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}
		}
	}

	if (website_title == "SpaceLiving" && check == false) {
		var website_language = "General";

		if (website_language == user_language) {
			return;
		}

		else {
			var choosen_website_url = website_link + "New_World/SpaceLiving/";
			var redirect_to = choosen_website_url + user_language + "/" + url_addon;
			window.location = redirect_to;
			return;
		}
	}

	if (website_title == "SpaceLiving EN-US" && check == false) {
		var website_language = "en-US";

		if (website_language == user_language) {
			return;
		}

		else {
			var choosen_website_url = website_link + "New_World/SpaceLiving/";
			var redirect_to = choosen_website_url + user_language + "/" + url_addon;
			window.location = redirect_to;
			return;
		}
	}

	if (website_title == "SpaceLiving PT-BR" && check == false) {
		var website_language = "pt-BR";

		if (website_language == user_language) {
			return;
		}

		else {
			var choosen_website_url = website_link + "New_World/SpaceLiving/";
			var redirect_to = choosen_website_url + user_language + "/" + url_addon;
			window.location = redirect_to;
			return;
		}
	}

	if (website_title == "SpaceLiving PT-PT" && check == false) {
		var website_language = "pt-PT";

		if (website_language == user_language) {
			return;
		}

		else {
			var choosen_website_url = website_link + "New_World/SpaceLiving/";
			var redirect_to = choosen_website_url + user_language + "/" + url_addon;
			window.location = redirect_to;
			return;
		}
	}

	if (website_title == "The Story of the Bulkan Siblings Geral" && check == false) {
		var website_language = "General";

		if (website_language == user_language) {
			return;
		}

		else {
			if (user_language == english_language) {
				var choosen_website_url = website_link + "The Story of the Bulkan Siblings/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}

			if (user_language == portuguese_language) {
				var choosen_website_url = website_link + "A História dos Irmãos Bulkan/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}
		}
	}

	if (website_title == "The Story of the Bulkan Brothers" && check == false) {
		var website_language = "en-US";

		if (website_language == user_language) {
			return;
		}

		else {
			if (user_language == english_language) {
				var choosen_website_url = website_link + "The Story of the Bulkan Siblings/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}

			if (user_language == portuguese_language) {
				var choosen_website_url = website_link + "A História dos Irmãos Bulkan/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}
		}
	}

	if (website_title == "A História dos Irmãos Bulkan" && check == false) {
		var website_language = "pt-BR";

		if (website_language == user_language) {
			return;
		}

		else {
			if (user_language == english_language) {
				var choosen_website_url = website_link + "The Story of the Bulkan Siblings/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}

			if (user_language == portuguese_language) {
				var choosen_website_url = website_link + "A História dos Irmãos Bulkan/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}
		}
	}

	if (website_title == "A História dos Irmãos Bulkan PT-PT" && check == false) {
		var website_language = "pt-PT";

		if (website_language == user_language) {
			return;
		}

		else {
			if (user_language == english_language) {
				var choosen_website_url = website_link + "The Story of the Bulkan Siblings/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}

			if (user_language == portuguese_language) {
				var choosen_website_url = website_link + "A História dos Irmãos Bulkan/";
				var redirect_to = choosen_website_url + user_language + "/" + url_addon;
				window.location = redirect_to;
				return;
			}
		}
	}

	if (website_title == "Desert Island" && check == false) {
		var website_language = "General";
		var website_name = "Desert Island";

		if (website_language == user_language) {
			return;
		}

		if (website_language != user_language) {
			var choosen_website_url = website_link + website_name + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
			return;
		}
	}

	if (website_title == "Desert Island EN-US" && check == false) {
		var website_language = "en-US";
		var website_name = "Desert Island";

		if (website_language == user_language) {
			return;
		}

		if (website_language != user_language) {
			var choosen_website_url = website_link + website_name + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
			return;
		}
	}

	if (website_title == "Ilha Deserta" && check == false) {
		var website_language = "pt-BR";
		var website_name = "Desert Island";

		if (website_language == user_language) {
			return;
		}

		if (website_language != user_language) {
			var choosen_website_url = website_link + website_name + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
			return;
		}
	}

	if (website_title == "Ilha Deserta PT-PT" && check == false) {
		var website_language = "pt-PT";
		var website_name = "Desert Island";

		if (website_language == user_language) {
			return;
		}

		if (website_language != user_language) {
			var choosen_website_url = website_link + website_name + "/";
			var res = choosen_website_url + user_language.toLowerCase() + "/";
			window.location = res;
			return;
		}
	}

	var website_name = "Stake2";
	var second_website_name = "Stake2, Funkysnipa Cat";

	if (website_title == second_website_name && check == false) {
		var website_language = "General";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + website_name + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (website_title == second_website_name + " EN-US" && check == false) {
		website_language = "en-US";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + website_name + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (website_title == second_website_name + " PT-BR" && check == false) {
		website_language = "pt-BR";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + website_name + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
		}
	}

	if (website_title == second_website_name + " PT-PT" && check == false) {
		website_language = "pt-PT";

		if (user_language == website_language) {
			return;
		}

		if (user_language != website_language) {
			var choosen_website_url = website_link + website_name + "/";
			var res = choosen_website_url + user_language + "/";
			window.location = res;
			var thiss = that;
		}
	}
}

console.log("Redirect Script was loaded and checked the redirect status.");