var userHours = window.prompt("Enter the number of hours you work per week.");
var userRate = window.prompt("Enter your rate per hour");

document.getElementById("userHours").innerHTML = userHours;
document.getElementById("userRate").innerHTML = "$" + userRate;

//weekly pay
function weeklyPay(num1, num2){
    var multiply = num1 + num2;
document.getElementById("weekly").innerHTML = "$" + multiply;
}

weeklyPay(userHours, userRate);

//monthly pay
function monthlyPay(num1, num2){
    var calculation = (num1 * num2) * 52;
    var result = calculation / 12;
    document.getElementById("monthly").innerHTML = "$" + result;
}

monthlyPay(userHours, userRate);

//annual pay
function annualPay(num1, num2){
    var calculation = num1 * num2;
    var result = calculation * 52;
    document.getElementById("annual").innerHTML = "$" + result;
}

annualPay(userHours, userRate);