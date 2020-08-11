function Rodar() {
    var link1 = "https://diario.netlify.app/pequenata/";
    var linksl = "https://diario.netlify.app/new_world/spaceliving/";
	var website_link = "https://diario.netlify.app/";

    var userLang = navigator.language || navigator.userLanguage;

    var res = link1 + userLang + "/";
    var res2 = linksl + userLang + "/";

    var title = document.getElementsByTagName("title")[0];
    var titulo = title.innerHTML;

    var site = window.location;
    var site2 = '"' + site + '"';

    var check = site2.includes("no-redirect=true");
	var checkgeral = site2.includes("2019");
    var checkpt = site2.includes("pt-br");
    var checken = site2.includes("en-us");

    if (titulo == "Diary" && check == false) {
		lang = "a";

        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "📘" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "Diary EN-US" && check == false) {
		lang = "en-US";

        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "📘" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "Diário PT-BR" || titulo == "Diário PT-PT" && check == false) {
		lang = "pt-BR";

        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "📘" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "Watch History" && check == false) {
		lang = "a";
	
        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "watch 👁" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "Watch History EN-US" && check == false) {
		lang = "en-US";

        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "watch 👁" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "Watch History PT-BR" && check == false) {
		lang = "pt-BR";

        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "watch 👁" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "Things I Do Geral" && check == false) {
		lang = "a";

        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "Things_I_do" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "Things I Do EN-US" && check == false) {
		lang = "en-US";

        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "Things_I_do" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "Coisas que eu faço" && check == false) {
		lang = "pt-BR";

        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "Coisas_que_eu_faço" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

	if (titulo == "2018" && check == false) {
        lang = "a";
        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "years 📅/" + "2018" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "2018 EN-US" && check == false) {
		lang = "en-US";
        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "years 📅/" + "2018" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "2018 PT-BR" && check == false) {
		lang = "pt-BR";
        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "years 📅/" + "2018" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

	if (titulo == "2019" && check == false) {
        lang = "a";
        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "years 📅/" + "2019" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "2019 EN-US" && check == false) {
		lang = "en-US";
        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "years 📅/" + "2019" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "2019 PT-BR" && check == false) {
		lang = "pt-BR";

        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "years 📅/" + "2019" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "New World" && check == false) {
        lang = "a";

        if (lang == userLang) {
            return;
		}

        if (lang != userLang) {
            var link1 = website_link + "new_world%20%E2%8A%A1/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }

    if (titulo == "New World PT-BR" && check == false) {
        lang = "pt-BR";

        if (lang == userLang) {
			return;
        }

        if (lang != userLang) {
            var link1 = website_link + "new_world%20%E2%8A%A1/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }

    if (titulo == "New World EN-US" && check == false) {
        lang = "en-US";

        if (lang == userLang) {
			return;
        }

        if (lang != userLang) {
			var link1 = website_link + "new_world%20%E2%8A%A1/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }

    if (titulo == "Pequenata - Littletato" && check == false) {
        lang = "a";

        if (lang == userLang) {
            return;
		}

        if (lang != userLang) {
            var link1 = website_link + "pequenata 📘/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }

    if (titulo == "The Life of Littletato" && check == false) {
        lang = "en-US";

        if (lang == userLang) {
			return;
        }

        if (lang != userLang) {
            var link1 = website_link + "pequenata 📘/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }

    if (titulo == "A Vida de Pequenata" && check == false) {
        lang = "pt-BR";

        if (lang == userLang) {
			return;
        }

        if (lang != userLang) {
            var link1 = website_link + "pequenata 📘/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }

    if (titulo == "A Vida de Pequenata PT-PT" && check == false) {
        lang = "pt-PT";

        if (lang == userLang) {
			return;
        }

        if (lang != userLang) {
            var link1 = website_link + "pequenata 📘/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }

    if (titulo == "SpaceLiving" && check == false) {
        lang = "a";

        if (lang == userLang) {
			return;
        }

        if (lang != userLang) {
            var linksl = website_link + "new_world ⊡/spaceliving 📘/";
            var userLang = navigator.language || navigator.userLanguage;
            var res2 = linksl + userLang + "/";
            window.location = res2;
            return;
        }
	}

    if (titulo == "SpaceLiving EN-US" && check == false) {
        lang = "en-US";

        if (lang == userLang) {
			return;
        }

        if (lang != userLang) {
            var linksl = website_link + "new_world ⊡/spaceliving 📘/";
            var userLang = navigator.language || navigator.userLanguage;
            var res2 = linksl + userLang + "/";
            window.location = res2;
            return;
        }
	}

    if (titulo == "SpaceLiving PT-BR" && check == false) {
        lang = "pt-BR";

        if (lang == userLang) {
			return;
        }

        if (lang != userLang) {
            var linksl = website_link + "new_world ⊡/spaceliving 📘/";
            var userLang = navigator.language || navigator.userLanguage;
            var res2 = linksl + userLang + "/";
            window.location = res2;
            return;
        }
	}

    if (titulo == "SpaceLiving PT-PT" && check == false) {
        lang = "pt-PT";

        if (lang == userLang) {
			return;
        }

        if (lang != userLang) {
            var linksl = website_link + "new_world ⊡/spaceliving 📘/";
            var userLang = navigator.language || navigator.userLanguage;
            var res2 = linksl + userLang + "/";
            window.location = res2;
            return;
        }
	}

    if (titulo == "The Story of the Nazzevo Brothers Geral" && check == false) {
        lang = "a";

        if (lang == userLang) {
			return;
        }

        if (lang != userLang) {
            var linksl = website_link + "nazzevo%20%F0%9F%93%98/";
            var userLang = navigator.language || navigator.userLanguage;
            var res2 = linksl + userLang + "/";
            window.location = res2;
            return;
        }
	}

    if (titulo == "The Story of the Nazzevo Brothers" && check == false) {
        lang = "en-US";

        if (lang == userLang) {
			return;
        }

        if (lang != userLang) {
            var linksl = website_link + "nazzevo%20%F0%9F%93%98/";
            var userLang = navigator.language || navigator.userLanguage;
            var res2 = linksl + userLang + "/";
            window.location = res2;
            return;
        }
	}

    if (titulo == "A História dos Irmãos Nazzevo" && check == false) {
        lang = "pt-BR";

        if (lang == userLang) {
			return;
        }

        if (lang != userLang) {
            var linksl = website_link + "nazzevo%20%F0%9F%93%98/";
            var userLang = navigator.language || navigator.userLanguage;
            var res2 = linksl + userLang + "/";
            window.location = res2;
            return;
        }
	}

    if (titulo == "A New Story Geral" && check == false) {
        var lang = "a";
		var sitename = "Desert_Island"

        if (lang == userLang) {
            return;
		}

        if (lang != userLang) {
            var link1 = website_link + sitename + "/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }

    if (titulo == "A New Story" && check == false) {
        var lang = "en-US";
		var sitename = "Desert_Island"

        if (lang == userLang) {
			return;
        }

        if (lang != userLang) {
            var link1 = website_link + sitename + "/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }

    if (titulo == "Uma Nova História" && check == false) {
        var lang = "pt-BR";
		var sitename = "Ilha_Deserta"

        if (lang == userLang) {
			return;
        }

        if (lang != userLang) {
            var link1 = website_link + sitename + "/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
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
            var link = website_link + "stake2/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == sitename + " EN-US" && check == false) {
		lang = "en-US";

        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "stake2/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == sitename + " PT-BR" && check == false) {
		lang = "pt-BR";

        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + "stake2/";
            var res = link + userLang + "/";
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
            var link = website_link + sitename + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "Xena and Izaque, 3 months of dating :3" && check == false) {
		var lang = "en-US";

        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + sitename + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo == "Xena e Izaque, 3 meses de namoro :3" && check == false) {
		var lang = "pt-BR";

        if (userLang == lang) {
            return;
        }

        if (userLang != lang) {
            var link = website_link + sitename + "/";
            var res = link + userLang + "/";
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
            var link = website_link + sitename + "/";
            var res = link + userLang + "/";
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
            var link = website_link + "Yourstruly_izaque" + "/";
            var res = link + userLang + "/";
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
            var link = website_link + sitename + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }
}