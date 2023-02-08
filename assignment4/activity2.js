var element = document.getElementById("myBtn");
element.addEventListener("click", main);

main();

function main (){
    var miles = getMiles();
    var yards = calculateYards(miles);
    var feet = calculateFeet(miles);
    var inches = calculateInches(miles);
    var kilometers = calculateKilometers(miles);
    var meters = calculateMeters(miles);

    displayResults(yards, feet, inches, kilometers, meters);
}

function getMiles(){
    var miles = document.getElementById("input").value;
    return miles;
}

function calculateYards(miles){
    var yards = miles * 1760 + "yards";
    return yards;
}

function calculateFeet(miles){
    var feet = miles * 5280 + "feet";
    return feet;
}

function calculateInches(miles){
    var inches = miles * 63360 + " inches";
    return inches;
}

function calculateKilometers(miles){
    var kilometers = miles * 1.60934 + " kilometers";
    return kilometers;
}

function calculateMeters(miles){
    var meters = miles * 1609.34 + " meters";
    return meters;
}

function displayResults(yards, feet, inches, kilometers, meters){
    document.getElementById("yards").innerHTML = yards;
    document.getElementById("feet").innerHTML = feet;
    document.getElementById("inches").innerHTML = inches;
    document.getElementById("kilometers").innerHTML = kilometers;
    document.getElementById("meters").innerHTML = meters;
    
}