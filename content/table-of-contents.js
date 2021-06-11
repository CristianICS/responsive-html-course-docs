/*
 * Another method to reusable code (more 'easier')
 * It's able to do the same as code in header.js, but
 * without the need for creating aditional div
*/

// 1 HTML document with the div that originally would content the element:
//<div id="table-of-contents" class="TOC"></div>

// 2 JavaScript code
// document.getElementById("table-of-contents").innerHTML = "original HTML code";

// WARNING: THE SCRIPT WILL RUN ONLY IN THE PAGE TO DISPLAY
// so only get the elements of one section

// Array with all course sections
var sections_names = {
    html: [
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
    ],
    css: [
        "Conceptos básicos"
    ]
};



// Array with the above section's hrefs
var sections_url = {
    html: [
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
    ],
    css: [
        "css-introduccion.html"
    ]
};


var number_of_sections = sections_url.length;

// Variable to save Table of Contents
var TOC;

// add new line with the title
TOC = '<p class="title">HTML5</p>';

// add all the sections to TOC
for (i = 0; i < number_of_sections; i++) {
    var section = sections_url[i];
    // regular expression to retrieve only html sections
    var patternHTML = /^html/;
    // regular expression to retrieve only css sections
    var patternCSS = /^css/;

    if(section == patternHTML){
        // when title of the theory block matchs with the TOC's section, add active class
        if(document.body.getElementsByTagName("h1")[0].innerHTML==sections_names[i]) {
            // When section matches with the section in the TOC, displaying it activated
            TOC += '<a class="subtitle active">' + sections_names[i] + '</a>';
        } else {
            TOC += '<a href="' + section + '" class="subtitle">' + sections_names[i] + '</a>';
        }
    } else if(section == patternCSS){
        // when title of the theory block matchs with the TOC's section, add active class
        if(document.body.getElementsByTagName("h1")[0].innerHTML==sections_names[i]) {
            // When section matches with the section in the TOC, displaying it activated
            TOC += '<a class="subtitle active">' + sections_names[i] + '</a>';
        } else {
            TOC += '<a href="' + section + '" class="subtitle">' + sections_names[i] + '</a>';
        }
    }

}

// Display TOC in the div container with id "reusable-TOC"
document.getElementById("table-of-contents").innerHTML = TOC;

// Display direction arrows | each in its div container
var leftPage;
var rightPage;
var responsiveArrows;
// Get section's title
var title = document.body.getElementsByTagName("h1")[0].innerHTML;

// return the index which contains section's title
var returnSection = function(title, sections){
    return sections.indexOf(title)
}

var index = returnSection(title, sections_names);

// Write code to create control arrows considering above index
if(index==0){
    // display arrow left to index page, because it's the first section
    leftPage = '<a href="index.html"><i class="left arrow"></i></a>';
    // arrow right contains href to next section, i.e., one more than the index
    rightPage = '<a href="' + sections_url[index+1] + '"><i class="right arrow"></i></a>';
    // responsive arrows have both
    responsiveArrows = leftPage;
    responsiveArrows += rightPage;

    // Display right direction arrow
    document.getElementById("left-arrow").innerHTML = '<a href="index.html"><i class="left arrow"></i></a>';

    // Display right direction arrow
    document.getElementById("right-arrow").innerHTML = rightPage;

    // Display responsive arrows
    document.getElementById("arrows-responsive").innerHTML = responsiveArrows;
} else if (index==(number_of_sections-1)) { // matches with the last secion
    // display only left arrow, because it's the last section
    leftPage = '<a href="' + sections_url[index-1] + '"><i class="left arrow"></i></a>';
    responsiveArrows = leftPage;
    // Display right direction arrow
    document.getElementById("left-arrow").innerHTML = leftPage;

    // Display responsive arrows
    document.getElementById("arrows-responsive").innerHTML = responsiveArrows;
} else if (index==-1) { // in index.html page
    // set only right direction arrow
    rightPage = '<a href="html-introduccion.html"><i class="right arrow"></i></a>';
    responsiveArrows = rightPage;

    // Display right direction arrow
    document.getElementById("right-arrow").innerHTML = rightPage;

    // Display responsive arrows
    document.getElementById("arrows-responsive").innerHTML = responsiveArrows;
} else {
    leftPage = '<a href="' + sections_url[index-1] + '"><i class="left arrow"></i></a>';
    rightPage = '<a href="' + sections_url[index+1] + '"><i class="right arrow"></i></a>';
    responsiveArrows = leftPage;
    responsiveArrows += rightPage;
    // Display right direction arrow
    document.getElementById("left-arrow").innerHTML = leftPage;

    // Display right direction arrow
    document.getElementById("right-arrow").innerHTML = rightPage;

    // Display responsive arrows
    document.getElementById("arrows-responsive").innerHTML = responsiveArrows;
}



