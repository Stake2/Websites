var ChapterNumber;
var Last_Chapter = 29;
var readattribute;
var writeattribute;
var userLang = navigator.language || navigator.userLanguage;

function DefineChapter(number) {
    ChapterNumber = number;
	readattribute = $("#show_story_chapter_text_button_number_" + ChapterNumber).html();
	writeattribute = $("#edit_story_chapter_button_number_" + ChapterNumber).html();
}

if (userLang == "pt-BR" || userLang == "pt-PT") {
	var chapter_text = "capítulo";
	var read_chapter_text = "ler-capitulo-";
	var chapter_text_name = "texto-capítulo-";
	var write_chapter_button_text = "botão-de-escrever-";
}
	
else {
	var chapter_text = "chapter";
	var read_chapter_text = "read-chapter-";
	var chapter_text_name = "chapter-text-";
	var write_chapter_button_text = "write-button-";
}
	
function WriteChapter(ChapterWriteContent) {
    $("#" + chapter_text_name + ChapterNumber).html(ChapterWriteContent);
    $("#" + write_chapter_button_text + ChapterNumber).html('<h3><i class="fas fa-book"></i></h3>');
    $("#" + write_chapter_button_text + ChapterNumber).attr('onclick', 'OpenChapter2(' + readattribute + ');');
}

function OpenChapter2(ChapterReadContent) {
    openCity(chapter_text + '-' + ChapterNumber);
    $("#" + chapter_text_name + ChapterNumber).html(ChapterReadContent);
    $("#" + write_chapter_button_text + ChapterNumber).html('<h3><i class="fas fa-pen"></i></h3>');
    $("#" + write_chapter_button_text + ChapterNumber).attr('onclick', 'WriteChapter(' + writeattribute + ');');
}

console.log("Write Chapter Script was loaded.");