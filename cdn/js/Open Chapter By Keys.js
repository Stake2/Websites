document.addEventListener("keyup", function() {
	var is_ctrl;

	if (event.keyCode === 37 || event.keyCode === 39) {
		event.preventDefault();
		is_ctrl = !!event.ctrlKey;

		if (is_ctrl === true || is_ctrl === false) {
			if (event.keyCode === 37) {
				if (ChapterNumber != 1) {
					console.log("chapter-" + (ChapterNumber - 1))
					openCity("chapter-" + (ChapterNumber - 1))
					DefineChapter((ChapterNumber -= 1))
				}
			}

			if (event.keyCode === 39) {
				if (ChapterNumber != Last_Chapter) {
					console.log("chapter-" + (ChapterNumber + 1))
					openCity("chapter-" + (ChapterNumber + 1))
					DefineChapter((ChapterNumber += 1))
				}
			}
		}
	}
});

console.log("Open Chapter By Keys Script was loaded.");