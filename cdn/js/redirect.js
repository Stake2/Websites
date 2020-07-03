function Rodar() {
    var link1 = "https://diario.netlify.app/pequenata/";
    var linksl = "https://diario.netlify.app/new_world/spaceliving/";
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

    if (titulo === "Diary" && check === false) {
		lang = "tet";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "📘" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Diary EN-US" && check === false) {
		lang = "en-US";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "📘" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Diário PT-BR" && check === false) {
		lang = "pt-BR";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "📘" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Watch History" && check === false) {
		lang = "tet";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "watch 👁" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Watch History EN-US" && check === false) {
		lang = "en-US";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "watch 👁" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Watch History PT-BR" && check === false) {
		lang = "pt-BR";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "watch 👁" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Things I Do Geral" && check === false) {
		lang = "tet";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "Things_I_do" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Things I Do EN-US" && check === false) {
		lang = "en-US";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "Things_I_do" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Coisas que eu faço" && check === false) {
		lang = "pt-BR";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "Coisas_que_eu_faço" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

	if (titulo === "2018" && check === false) {
        lang = 'e';
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/years 📅/" + "2018" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "2018 EN-US" && check === false) {
		lang = "en-US";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/years 📅/" + "2018" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "2018 PT-BR" && check === false) {
		lang = "pt-BR";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/years 📅/" + "2018" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

	if (titulo === "2019" && check === false) {
        lang = 'e';
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/years 📅/" + "2019" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "2019 EN-US" && check === false) {
		lang = "en-US";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/years 📅/" + "2019" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "2019 PT-BR" && check === false) {
		lang = "pt-BR";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/years 📅/" + "2019" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

	if (titulo === "2019" && check === false) {
        lang = 'e';
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/years 📅/" + "2019" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "New World" && check === false) {
        titulo2 = "a";
        if (titulo2 === userLang) {
            return;
		}

        if (titulo2 != userLang) {
            var link1 = "https://diario.netlify.app/new_world%20%E2%8A%A1/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }

    if (titulo === "New World PT-BR" && check === false) {
        titulo2 = "pt-BR";
        if (titulo2 === userLang) {
			return;
        }

        if (titulo2 != userLang) {
            var link1 = "https://diario.netlify.app/new_world%20%E2%8A%A1/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }

    if (titulo === "New World EN-US" && check === false) {
        titulo2 = "en-US";
        if (titulo2 === userLang) {
			return;
        }

        if (titulo2 != userLang) {
            var link1 = "https://diario.netlify.app/new_world%20%E2%8A%A1/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }

    if (titulo === "Pequenata - Littletato" && check === false) {
        titulo2 = "a";
        if (titulo2 === userLang) {
            return;
		}

        if (titulo2 != userLang) {
            var link1 = "https://diario.netlify.app/pequenata 📘/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }

    if (titulo === "The Life of Littletato" && check === false) {
        titulo2 = "en-US";
        if (titulo2 === userLang) {
			return;
        }

        if (titulo2 != userLang) {
            var link1 = "https://diario.netlify.app/pequenata 📘/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }

    if (titulo === "A Vida de Pequenata" && check === false) {
        titulo2 = "pt-BR";
        if (titulo2 === userLang) {
			return;
        }

        if (titulo2 != userLang) {
            var link1 = "https://diario.netlify.app/pequenata 📘/";
            var userLang = navigator.language || navigator.userLanguage;
            var res = link1 + userLang + "/";
            window.location = res;
            return;
        }
    }
	
    if (titulo === "SpaceLiving" && check === false) {
        titulo2 = "root";
        if (titulo2 === userLang) {
			return;
        }
	
        if (titulo2 != userLang) {
            var linksl = "https://diario.netlify.app/new_world ⊡/spaceliving 📘/";
            var userLang = navigator.language || navigator.userLanguage;
            var res2 = linksl + userLang + "/";
            window.location = res2;
            return;
        }
	}

    if (titulo === "SpaceLiving EN-US" && check === false) {
        titulo2 = "en-US";
        if (titulo2 === userLang) {
			return;
        }

        if (titulo2 != userLang) {
            var linksl = "https://diario.netlify.app/new_world ⊡/spaceliving 📘/";
            var userLang = navigator.language || navigator.userLanguage;
            var res2 = linksl + userLang + "/";
            window.location = res2;
            return;
        }
	}

    if (titulo === "SpaceLiving PT-BR" && check === false) {
        titulo2 = "pt-BR";
        if (titulo2 === userLang) {
			return;
        }

        if (titulo2 != userLang) {
            var linksl = "https://diario.netlify.app/new_world ⊡/spaceliving 📘/";
            var userLang = navigator.language || navigator.userLanguage;
            var res2 = linksl + userLang + "/";
            window.location = res2;
            return;
        }
	}

    if (titulo === "The Story of the Nazzevo brothers Geral" && check === false) {
        titulo2 = "root";
        if (titulo2 === userLang) {
			return;
        }
	
        if (titulo2 != userLang) {
            var linksl = "https://diario.netlify.app/nazzevo%20%F0%9F%93%98/";
            var userLang = navigator.language || navigator.userLanguage;
            var res2 = linksl + userLang + "/";
            window.location = res2;
            return;
        }
	}

    if (titulo === "The Story of the Nazzevo brothers" && check === false) {
        titulo2 = "en-US";
        if (titulo2 === userLang) {
			return;
        }

        if (titulo2 != userLang) {
            var linksl = "https://diario.netlify.app/nazzevo%20%F0%9F%93%98/";
            var userLang = navigator.language || navigator.userLanguage;
            var res2 = linksl + userLang + "/";
            window.location = res2;
            return;
        }
	}

    if (titulo === "A História dos irmãos Nazzevo" && check === false) {
        titulo2 = "pt-BR";
        if (titulo2 === userLang) {
			return;
        }

        if (titulo2 != userLang) {
            var linksl = "https://diario.netlify.app/nazzevo%20%F0%9F%93%98/";
            var userLang = navigator.language || navigator.userLanguage;
            var res2 = linksl + userLang + "/";
            window.location = res2;
            return;
        }
	}

    if (titulo === "Stake2" && check === false) {
		lang = "tet";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "stake2" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Stake2 EN-US" && check === false) {
		lang = "en-US";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "stake2" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Stake2 PT-BR" && check === false) {
		lang = "pt-BR";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "stake2" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Xena and Izaque, 3 months of dating :3 Geral" && check === false) {
		lang = "tet";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "xenaeizaque" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Xena and Izaque, 3 months of dating :3" && check === false) {
		lang = "en-US";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "xenaeizaque" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Xena e Izaque, 3 meses de namoro :3" && check === false) {
		lang = "pt-BR";
        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "xenaeizaque" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Yours truly, Izaque. Geral" && check === false) {
		lang = "tet";

        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "Yourstruly_izaque" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Yours truly, Izaque." && check === false) {
		lang = "en-US";

        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "Yourstruly_izaque" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }

    if (titulo === "Sinceramente, Izaque." && check === false) {
		lang = "pt-BR";

        if (userLang === lang) {
            return;
        }
    
        if (userLang != lang) {
            var link = "https://diario.netlify.app/" + "Yourstruly_izaque" + "/";
            var res = link + userLang + "/";
            window.location = res;
        }
    }
}