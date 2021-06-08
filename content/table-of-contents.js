// IMPORTANT: The style of the web has to be a global key to make 0
// the margin and padding of all web's elements

// WHY?: Because the new html code to insert it's been display inside
// another div container

/** Example: remove additional spaces between elements
 * html {
 * 	margin:0;
 * 	padding:0;
 * }
*/


// Array with all course sections
var sections_names = [
    "Introducción",
    "Elementos básicos",
    "Formato",
    "Encabezados",
    "Párrafos",
    "Imágenes",
    "Enlaces",
    "Listas",
    "Formularios",
    "Etiquetas Responsive",
    "Audio",
    "Mejorar accesibilidad"
];

// Array with the above section's hrefs
var sections_url = [
    "html-introduccion.html",
    "html-elementos-basicos.html",
    "html-formato.html",
    "html-encabezados.html",
    "html-parrafos.html",
    "html-imagenes.html",
    "html-enlaces.html",
    "html-listas.html",
    "html-formularios.html",
    "html-etiquetas-responsive.html",
    "html-audio.html",
    "html-mejorar-accesibilidad.html"
];

var number_of_sections = sections_url.length;

// Save Table of Contents code
var TOC = '<div id="table-of-contents" class="TOC">';
// add new line
TOC += '<p class="title">HTML5</p>';
for (i = 0; i < number_of_sections; i++) {
    // when title of the theory block matchs with the TOC's section, add active class
    if(document.body.getElementsByTagName("h1")[0].innerHTML==sections_names[i]) {
        TOC += '<a class="subtitle active">' + sections_names[i] + '</a>';
    } else {
        TOC += '<a href="' + sections_url[i] + '" class="subtitle">' + sections_names[i] + '</a>';
    }
}

// add close tag
TOC += '</div>';

// Display TOC in the div container with id "reusable-TOC"
document.getElementById("reusable-TOC").innerHTML = TOC;