


// search 
function search() {
    var searchAnime = document.getElementById("search-item").value.toUpperCase();
    var stroeitem = document.getElementById("anime-lists");
    var anime = document.querySelectorAll(".col-sm-6");

    var aname = stroeitem.getElementsByTagName("p");

    for (var i = 0; i < aname.length; i++) {
        let match = anime[i].getElementsByTagName('p')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML
            if (textvalue.toUpperCase().indexOf(searchAnime) > -1) {
                anime[i].style.display = "";

            }
            else {
                anime[i].style.display = "none";

            }

        }

    }
}
// Funtion setup button
function SelectA() {
    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-a'); // Get the specific button that was clicked

    // Show the element with ID 'b' and hide others
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "a") {
            allBlock[i].style.display = ""; // Show block with ID 'b'
        } else {
            allBlock[i].style.display = "none"; // Hide other blocks
        }
    }

    // Reset the background color of all buttons before applying the new color
    for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = ""; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }
}
function SelectB() {
    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-b'); // Get the specific button that was clicked

    // Show the element with ID 'b' and hide others
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "b") {
            allBlock[i].style.display = ""; // Show block with ID 'b'
        } else {
            allBlock[i].style.display = "none"; // Hide other blocks
        }
    }

    // Reset the background color of all buttons before applying the new color
    for (var j = 0; j < allButtons.length; j++) {
       
        allButtons[j].style.backgroundColor = ""; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }
}
function SelectC() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "c") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectD() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "d") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectE() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "e") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectF() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "f") {
           
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
    

}
function SelectG() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "g") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectH() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "h") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectI() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "i") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectJ() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "j") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectL() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "l") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectM() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "m") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectO() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "o") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectP() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "p") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectQ() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "q") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectR() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "r") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectS() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "s") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectT() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "t") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectU() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "u") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectV() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "v") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectW() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "w") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectX() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "x") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectY() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "y") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectZ() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "z") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }

}
function SelectAll() {

    var allBlock = document.getElementsByClassName('search');
    for (var i = 0; i < allBlock.length; i++) {
        
        allBlock[i].style.display = "";

    }

}

