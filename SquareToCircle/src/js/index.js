tagButton = document.getElementById("bottone");
tagTriangle = document.getElementById("triangle");
let tagBox = document.getElementById("box");
let contatore =0;
tagBox.onclick = function() {

    tagBox.innerHTML = contatore    ;
    contatore = contatore + 1;
    //console.log("Ciao sono un bottone");
    //ora voglio che la funzione inserisce un testo nel div
    //ogni voglia che clicco sul bottone, nel div appare un nuovo testo

    //tagTriangle.innerHTML = tagTriangle.innerHTML + " Suca!";


}

tagButton.onclick = function() {
    tagTriangle.innerHTML = tagTriangle.innerHTML + " Suca!";
}
tagBox.onmouseover = function() {
  tagBox.style.backgroundColor = "red";
};

tagBox.onmouseout = function() {
  tagBox.style.backgroundColor = "blue";
};

/**
 * Handles the mouseover event for the tagBox element.
 * Changes the background color of the box to red when the mouse pointer enters it.
 */
