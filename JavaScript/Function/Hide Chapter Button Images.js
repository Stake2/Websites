function Hide_Chapter_Images() {
	i = 1;

	var chapter_image;

	while (i <= Last_Chapter) {
		chapter_image = document.getElementById("story_chapter_image_number_" + i);
		chapter_image.style.display = "none";

		i++;
	}
}

function Show_Chapter_Images() {
	i = 1;

	var chapter_image;

	while (i <= Last_Chapter) {
		chapter_image = document.getElementById("story_chapter_image_number_" + i);
		chapter_image.style.display = "block";

		i++;
	}
}