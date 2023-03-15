var element = document.getElementById("myBtn");
element.addEventListener("click", main);

main();

function main(){
    var years = getAge();
    var months = calculateMonths(years);
    var days = calculateDays(years);
    var hours = calculateHours(years);
    var seconds = calculateSeconds(years);

    displayResults(months, days, hours, seconds);
}

function getAge(){
    var years = document.getElementById("input1").value;
    return years;
}

function calculateMonths(years){
    // 1year = 12months
    var months = years * 12 + " months";
return months;
}

function calculateDays(years){
    //1year = 365.2425 Days
    var days = years * 365.2425 + " days";
    return days;
}

function calculateHours(years){
    //1yr = 8,765.82hr
    var hours = years * 8765.82 + " hours";
    return hours;
}

function calculateSeconds(years){
    //1yr = 31556952sec
    var seconds = years * 31556952 + " seconds";
    return seconds;
}

function displayResults(months, days, hours, seconds){
var select = document.getElementById("ddlViewBy");
var eValue = select.value;
var text = select.options[select.selectedIndex].text;


if(eValue == "months"){
    document.getElementById("calculatedAge").innerHTML = months;
    document.getElementById("span").innerHTML = "months";
}else if(eValue == "days"){
    document.getElementById("calculatedAge").innerHTML = days;
    document.getElementById("span").innerHTML = "days";
}else if(eValue == "hours"){
    document.getElementById("calculatedAge").innerHTML = hours;    
    document.getElementById("span").innerHTML = "hours";
}else if(eValue == "seconds"){
    document.getElementById("calculatedAge").innerHTML = seconds;
    document.getElementById("span").innerHTML = "seconds";
}else{
    document.getElementById("calculatedAge").innerHTML = " ";
}


}                                                                                                                                                                       




