var button = document.getElementById("myBtn");
button.addEventListener("click" , main);

function main(){
var input1 = document.getElementById("input1").value;

 var results = document.getElementById("results");

 var i = 1;


    do{
        var x = prompt("Enter your score below:");
        var num1 = parseInt(x);
        
        console.log(num1);

var calculations = (num1 +num1)/input1;  
 /// I don't know how to add all prompt numbers together, and i think the above calculations to find the average is wrong.

var finalResult =  Math.round(calculations);

        results.innerHTML = "Your average is: " + finalResult;
i++;
    }    while(i<=input1);

}
