var z = new Date();
var date = '"' + z.getDate() + '/' + (z.getMonth() + 1 ) + '"';
var natal = '"' + "25/12" + '"';
var link1 = "https://diario.netlify.com/pequenata/";
var link2 = "https://diario.netlify.com/pequenata/pt-br/";
var link3 = "https://diario.netlify.com/pequenata/en-us/";
var linksl = "https://diario.netlify.com/new_world/spaceliving/";
var sitenatal = "natal/";
var site = window.location;
var title = document.getElementsByTagName("title")[0];
var titulo = title.innerHTML;
var site2 = '"' + site + '"';
var check2 = site2.includes("natal");
var check3 = site2.includes("change_to_xmas");
var natalativado = false;

if (titulo === "Pequenata - Littletato" && date === natal && check2 === false) {
    window.location = 'https://diario.netlify.com/pequenata/natal/';
}

if (titulo === "Pequenata PT-BR" && date === natal && check2 === false) {
    window.location = 'https://diario.netlify.com/pequenata/pt-br/natal/';
}

if (titulo === "Littletato EN-US" && date === natal && check2 === false) {
    window.location = 'https://diario.netlify.com/pequenata/en-us/natal/';
}

if (titulo === "SpaceLiving" && date === natal && check2 === false) {
    window.location = 'https://diario.netlify.com/new_world/spaceliving/natal/';
}

if (titulo === "SpaceLiving PT-BR" && date === natal && check2 === false) {
    window.location = 'https://diario.netlify.com/new_world/spaceliving/pt-br/natal/';
}

if (titulo === "SpaceLiving EN-US" && date === natal && check2 === false) {
    window.location = 'https://diario.netlify.com/new_world/spaceliving/en-us/natal/';
}

if (titulo === "Pequenata - Littletato" && check3 === true && check2 === false) {
    window.location = 'https://diario.netlify.com/pequenata/natal/';
}

if (titulo === "Pequenata PT-BR" && check3 === true && check2 === false) {
    window.location = 'https://diario.netlify.com/pequenata/pt-br/natal/';
}

if (titulo === "Littletato EN-US" && check3 === true && check2 === false) {
    window.location = 'https://diario.netlify.com/pequenata/en-us/natal/';
}

if (titulo === "SpaceLiving" && check3 === true && check2 === false) {
    window.location = 'https://diario.netlify.com/new_world/spaceliving/natal/';
}

if (titulo === "SpaceLiving PT-BR" && check3 === true && check2 === false) {
    window.location = 'https://diario.netlify.com/new_world/spaceliving/pt-br/natal/';
}

if (titulo === "SpaceLiving EN-US" && check3 === true && check2 === false) {
    window.location = 'https://diario.netlify.com/new_world/spaceliving/en-us/natal/';
}

if (titulo === "Pequenata - Littletato" && natalativado === true && check2 === false) {
    window.location = 'https://diario.netlify.com/pequenata/natal/';
}

if (titulo === "Pequenata PT-BR" && natalativado === true && check2 === false) {
    window.location = 'https://diario.netlify.com/pequenata/pt-br/natal/';
}

if (titulo === "Littletato EN-US" && natalativado === true && check2 === false) {
    window.location = 'https://diario.netlify.com/pequenata/en-us/natal/';
}

if (titulo === "SpaceLiving" && natalativado === true && check2 === false) {
    window.location = 'https://diario.netlify.com/new_world/spaceliving/natal/';
}

if (titulo === "SpaceLiving PT-BR" && natalativado === true && check2 === false) {
    window.location = 'https://diario.netlify.com/new_world/spaceliving/pt-br/natal/';
}

if (titulo === "SpaceLiving EN-US" && natalativado === true && check2 === false) {
    window.location = 'https://diario.netlify.com/new_world/spaceliving/en-us/natal/';
}