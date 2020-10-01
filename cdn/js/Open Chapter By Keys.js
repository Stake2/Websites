document.addEventListener("keyup", function() {
	var is_ctrl;
	var opening_chapter_text;

	if (event.keyCode === 37 || event.keyCode === 39) {
		event.preventDefault();
		is_ctrl = !!event.ctrlKey;

		if (is_ctrl === true || is_ctrl === false) {
			if (event.keyCode === 37) {
				if (ChapterNumber != 1) {
					opening_chapter_text = "Opening chapter number " + '"' + (ChapterNumber - 1) + " - " + ChapterTitle + '"' + "...";

					console.log(opening_chapter_text);
					openCity("chapter-" + (ChapterNumber - 1));
					DefineChapter((ChapterNumber -= 1));
				}
			}

			if (event.keyCode === 39) {
				if (ChapterNumber != Last_Chapter) {
					opening_chapter_text = "Opening chapter number " + '"' + (ChapterNumber + 1) + " - " + ChapterTitle + '"' + "...";

					console.log(opening_chapter_text);
					openCity("chapter-" + (ChapterNumber + 1));
					DefineChapter((ChapterNumber += 1));
				}
			}
		}
	}
});

console.log("Open Chapter By Keys Script was loaded.");