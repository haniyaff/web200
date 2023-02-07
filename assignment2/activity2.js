var userHours = window.prompt("Enter the number of hours you work per week.");
var userRate = window.prompt("Enter your rate per hour");

document.getElementById("userHours").innerHTML = userHours;
document.getElementById("userRate").innerHTML = "$" + userRate;

var weeklyPay = userHours * userRate;
document.getElementById("weekly").innerHTML = "$" + weeklyPay;

var monthlyPay = weeklyPay * 4;
document.getElementById("monthly").innerHTML = "$" + monthlyPay;

var annualPay = userHours * userRate * 52;
document.getElementById("annual").innerHTML = "$" + annualPay;