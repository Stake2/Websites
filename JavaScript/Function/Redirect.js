function Rodar() {
	var website_link = "https://thestake2.netlify.app/";
	var userLang = navigator.language || navigator.userLanguage;

	var title = document.getElementsByTagName("title")[0];
	var titulo = title.innerHTML;

	var current_site_link = window.location;
	var current_site_link_string = '"' + current_site_link + '"';

	var check = current_site_link_string.includes("no-redirect=true");

	if (titulo == "Diary" && check == false) {
		var lang = "a";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "diary" + "/";
			var res = choosen_website_url;
			window.location = res;
		}
	}

	if (titulo == "Diary EN-US" && check == false) {
		var lang = "en-US";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "diary" + "/";
			var res = choosen_website_url;
			window.location = res;
		}
	}

	if (titulo == "Diário" || titulo == "Diário PT-PT" && check == false) {
		if (titulo == "Diário") {
			var lang = "pt-BR";
		}

		if (titulo == "Diário PT-PT") {
			var lang = "pt-PT";
		}

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "diario" + "/";
			var res = choosen_website_url;
			window.location = res;
		}
	}

	if (titulo == "Watch History" && check == false) {
		var lang = "a";
	
		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "watch 👁" + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "Watch History EN-US" && check == false) {
		var lang = "en-US";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "watch 👁" + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "Watch History PT-BR" && check == false) {
		var lang = "pt-BR";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "watch 👁" + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "Watch History PT-PT" && check == false) {
		var lang = "pt-PT";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "watch 👁" + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "Things I Do Geral" && check == false) {
		var lang = "a";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "Things_I_do" + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "Things I Do EN-US" && check == false) {
		var lang = "en-US";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "Things_I_do" + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "Coisas que eu faço" && check == false) {
		var lang = "pt-BR";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "Coisas_que_eu_faço" + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "2018" && check == false) {
		var lang = "a";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "years 📅/" + "2018" + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "2018 EN-US" && check == false) {
		var lang = "en-US";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "years 📅/" + "2018" + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "2018 PT-BR" && check == false) {
		var lang = "pt-BR";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "years 📅/" + "2018" + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "2019" && check == false) {
		var lang = "a";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "years 📅/" + "2019" + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "2019 EN-US" && check == false) {
		var lang = "en-US";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "years 📅/" + "2019" + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "2019 PT-BR" && check == false) {
		var lang = "pt-BR";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "years 📅/" + "2019" + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "New World" && check == false) {
		var lang = "a";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + "new_world%20%E2%8A%A1/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "New World PT-BR" && check == false) {
		var lang = "pt-BR";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + "new_world%20%E2%8A%A1/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "New World EN-US" && check == false) {
		var lang = "en-US";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + "new_world%20%E2%8A%A1/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "Littletato - Pequenata" && check == false) {
		var lang = "a";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + "pequenata 📘/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "The Life of Littletato" && check == false) {
		var lang = "en-US";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + "pequenata 📘/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "A Vida de Pequenata" && check == false) {
		var lang = "pt-BR";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + "pequenata 📘/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "A Vida de Pequenata PT-PT" && check == false) {
		var lang = "pt-PT";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + "pequenata 📘/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "SpaceLiving" && check == false) {
		var lang = "a";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + "new_world ⊡/spaceliving 📘/";
			var res2 = choosen_website_url + userLang + "/";
			window.location = res2;
			return;
		}
	}

	if (titulo == "SpaceLiving EN-US" && check == false) {
		var lang = "en-US";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + "new_world ⊡/spaceliving 📘/";
			var res2 = choosen_website_url + userLang + "/";
			window.location = res2;
			return;
		}
	}

	if (titulo == "SpaceLiving PT-BR" && check == false) {
		var lang = "pt-BR";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + "new_world ⊡/spaceliving 📘/";
			var res2 = choosen_website_url + userLang + "/";
			window.location = res2;
			return;
		}
	}

	if (titulo == "SpaceLiving PT-PT" && check == false) {
		var lang = "pt-PT";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + "new_world ⊡/spaceliving 📘/";
			var res2 = choosen_website_url + userLang + "/";
			window.location = res2;
			return;
		}
	}

	if (titulo == "The Story of the Nazzevo Brothers Geral" && check == false) {
		var lang = "a";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + "nazzevo%20%F0%9F%93%98/";
			var res2 = choosen_website_url + userLang + "/";
			window.location = res2;
			return;
		}
	}

	if (titulo == "The Story of the Nazzevo Brothers" && check == false) {
		var lang = "en-US";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + "nazzevo%20%F0%9F%93%98/";
			var res2 = choosen_website_url + userLang + "/";
			window.location = res2;
			return;
		}
	}

	if (titulo == "A História dos Irmãos Nazzevo" && check == false) {
		var lang = "pt-BR";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + "nazzevo%20%F0%9F%93%98/";
			var res2 = choosen_website_url + userLang + "/";
			window.location = res2;
			return;
		}
	}

	if (titulo == "Desert Island Geral" && check == false) {
		var lang = "a";
		var sitename = "Desert_Island";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + sitename + "/";
			var res = choosen_website_url + userLang.toLowerCase() + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "Desert Island" && check == false) {
		var lang = "en-US";
		var sitename = "Desert_Island";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + sitename + "/";
			var res = choosen_website_url + userLang.toLowerCase() + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "Ilha Deserta" && check == false) {
		var lang = "pt-BR";
		var sitename = "Ilha_Deserta";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + sitename + "/";
			var res = choosen_website_url + userLang.toLowerCase() + "/";
			window.location = res;
			return;
		}
	}

	if (titulo == "Uma Nova História PT-PT" && check == false) {
		var lang = "pt-PT";
		var sitename = "Ilha_Deserta";

		if (lang == userLang) {
			return;
		}

		if (lang != userLang) {
			var choosen_website_url = website_link + sitename + "/";
			var res = choosen_website_url + userLang.toLowerCase() + "/";
			window.location = res;
			return;
		}
	}

	var sitename = "Stake2"
	if (titulo == sitename && check == false) {
		lang = "a";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "stake2/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == sitename + " EN-US" && check == false) {
		lang = "en-US";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "stake2/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == sitename + " PT-BR" && check == false) {
		lang = "pt-BR";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "stake2/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	var sitename = "xenaeizaque";
	if (titulo == "Xena and Izaque, 3 months of dating :3 Geral" && check == false) {
		var lang = "a";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + sitename + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "Xena and Izaque, 3 months of dating :3" && check == false) {
		var lang = "en-US";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + sitename + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "Xena e Izaque, 3 meses de namoro :3" && check == false) {
		var lang = "pt-BR";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + sitename + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "Yours truly, Izaque. Geral" && check == false) {
		var lang = "a";
		var sitename = "Yourstruly_izaque";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + sitename + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "Yours truly, Izaque." && check == false) {
		var lang = "en-US";
		var sitename = "Yourstruly_izaque";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + "Yourstruly_izaque" + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}

	if (titulo == "Sinceramente, Izaque." && check == false) {
		var lang = "pt-BR";
		var sitename = "Yourstruly_izaque";

		if (userLang == lang) {
			return;
		}

		if (userLang != lang) {
			var choosen_website_url = website_link + sitename + "/";
			var res = choosen_website_url + userLang + "/";
			window.location = res;
		}
	}
}

console.log("Redirect Script was loaded and checked the redirect status.");