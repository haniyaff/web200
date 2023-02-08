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
    var years = document.getElementById("input").value;
    return years;
}

function calculateMonths(years){
    // 1year = 12months
    var months = years * 12 + "months";
return months;
}

function calculateDays(years){
    //1year = 365.2425 Days
    var days = years * 365.2425 + "days";
    return days;
}

function calculateHours(years){
    //1yr = 8,765.82hr
    var hours = years * 8765.82 + "hours";
    return hours;
}

function calculateSeconds(years){
    //1yr = 31556952sec
    var seconds = years * 31556952 + "seconds";
    return seconds;
}

function displayResults(months, days, hours, seconds){
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("seconds").innerHTML = seconds;
}                                                                                                                                                                       