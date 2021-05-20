/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon */
function tocFunction_responsive() {
  var x = document.getElementById("table-of-contents");
  if (x.className === "TOC") {
    x.className += " responsive";
  } else {
    x.className = "TOC";
  }
}


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger icon */
function TOC_function() {
	var x = document.getElementById("table-of-contents");
	
	if (x.style.display === "block") {
    x.style.display = "none";
	document.getElementById("canvas").style.left = "0vw";
	document.getElementById("canvas").style.width = "100vw";
	document.getElementById("navbar-menu").style.width = "100vw";
	document.getElementById("left-arrow").style.left = "0vw";
  } else {
    x.style.display = "block";
	document.getElementById("canvas").style.left = "15vw";
	document.getElementById("canvas").style.width = "85vw";
	document.getElementById("navbar-menu").style.width = "85vw";
	document.getElementById("left-arrow").style.left = "15vw";
  }
}

