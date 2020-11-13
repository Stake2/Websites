document.addEventListener("keyup", function() {
	var is_ctrl;
	var is_shift;
	var is_alt;
	var opening_chapter_text;
	var userLang = navigator.language || navigator.userLanguage;

	if (userLang == "pt-BR" || userLang == "pt-PT") {
		var chapter_div_text = "capítulo-";
	}

	else {
		var chapter_div_text = "chapter-";
	}

	if (event.keyCode === 37 || event.keyCode === 39) {
		event.preventDefault();
		is_ctrl = !!event.ctrlKey;
		is_shift = !!event.shiftKey;
		is_alt = !!event.altKey;

		if (is_alt === true) {
			if (event.keyCode === 37) {
				if (ChapterNumber != 1) {
					opening_chapter_text = "Opening chapter number " + '"' + (ChapterNumber - 1) + ".";

					console.log(opening_chapter_text);
					openCity(chapter_div_text + (ChapterNumber - 1));
					DefineChapter((ChapterNumber - 1));
				}
			}

			if (event.keyCode === 39) {
				if (ChapterNumber != Last_Chapter) {
					opening_chapter_text = "Opening chapter number " + '"' + (ChapterNumber + 1) + ".";

					console.log(opening_chapter_text);
					openCity(chapter_div_text + (ChapterNumber + 1));
					DefineChapter((ChapterNumber + 1));
				}
			}
		}
	}
});

console.log("Open Chapter By Keys Script was loaded.");