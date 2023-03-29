// var h = 1;

// while (h<10)
// {
//     console.log("The statement has ran", h);
//     h++;
// }


// Create a program that uses a loop to generate a list of multiplication expressions for a given value. Ask the user to enter the value and the number of expressions to be displayed. For example, a list of three expressions for the value 1 would be:
// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3 = 3
// A list of five expressions for the value 3 would be:
// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// 3 * 4 = 12
// 3 * 5 = 15

var element = document.getElementById("myBtn");
element.addEventListener("click", main);



function main(){
var value = document.getElementById("input1").value;
var expressions = document.getElementById("input2").value;
var results = document.getElementById("results");
var i = 1; 

while (i<=expressions )
{
    var finalResult = value * i;

    console.log(value + " * " + i + " =" + finalResult);
    results.innerHTML+= value + " * " + i + " = " + finalResult + "<br>";

    i++;
}


}