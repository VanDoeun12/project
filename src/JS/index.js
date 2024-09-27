


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
        allButtons[j].style.backgroundColor = "red"; // Reset background color
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
       
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }
}
function SelectC() {

    var allBlock = document.getElementsByClassName('search');
     var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'

    var button = document.getElementById('btn-c'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "c") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
    
    // Reset the background color of all buttons before applying the new color
    for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectD() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-d'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "d") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
     // Reset the background color of all buttons before applying the new color
     for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectE() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-e'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "e") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
     // Reset the background color of all buttons before applying the new color
     for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectF() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-f'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "f") {
           
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
     // Reset the background color of all buttons before applying the new color
     for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }
    

}
function SelectG() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-g'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "g") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
     // Reset the background color of all buttons before applying the new color
     for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectH() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-h'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "h") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
     // Reset the background color of all buttons before applying the new color
     for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectI() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-i'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "i") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
     // Reset the background color of all buttons before applying the new color
     for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectJ() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-j'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "j") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
     // Reset the background color of all buttons before applying the new color
     for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectK() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-k'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "k") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
     // Reset the background color of all buttons before applying the new color
     for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectL() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-l'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "l") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectM() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-m'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "m") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectN() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-n'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "n") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
     // Reset the background color of all buttons before applying the new color
     for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectO() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-o'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "o") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectP() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-p'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "p") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectQ() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-q'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "q") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectR() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-r'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "r") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectS() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-s'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "s") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectT() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-t'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "t") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectU() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-u'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "u") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectV() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-v'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "v") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectW() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-w'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "w") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectX() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-x'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "x") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectY() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-y'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "y") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectZ() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-z'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        if (allBlock[i].id == "z") {
            allBlock[i].style.display = "";
        }
        else {
            allBlock[i].style.display = "none";
        }
    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
function SelectAll() {

    var allBlock = document.getElementsByClassName('search');
    var allButtons = document.getElementsByClassName('btn'); // Get all buttons with the class 'btn'
    var button = document.getElementById('btn-all'); // Get the specific button that was clicked
    for (var i = 0; i < allBlock.length; i++) {
        
        allBlock[i].style.display = "";

    }
      // Reset the background color of all buttons before applying the new color
      for (var j = 0; j < allButtons.length; j++) {
        allButtons[j].style.backgroundColor = "red"; // Reset background color
    }

    // Change the background color of the clicked button
    if (button) {
        button.style.backgroundColor = "lightblue"; // Set new background color for clicked button
    }

}
// Call SelectAll when the page loads to make the "Show All" button active
window.onload = function() {
    SelectAll();
};

