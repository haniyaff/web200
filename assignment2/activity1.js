var distanceMiles = window.prompt("Enter a distance in miles");
document.getElementById("userInput").innerHTML = distanceMiles;

var yards = distanceMiles * 1760;
document.getElementById("yards").innerHTML = yards;

var feet = distanceMiles * 5280;
document.getElementById("feet").innerHTML = feet;

var inches = distanceMiles * 63360;
document.getElementById("inches").innerHTML = inches;

var kilometers = distanceMiles * 1.60934;
document.getElementById("kilometers").innerHTML = kilometers;

var meters = distanceMiles * 1609.34;
document.getElementById("meters").innerHTML = meters;


