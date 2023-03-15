//     < 4 = extra small
//     4 to 6 = small
//     7 to 9 = medium
//     10 to 12 = large
//     13+ = extra large
//  Round half-sizes up to the next whole size. 
// One option for rounding is to add 0.5 and then convert to an integer


var element = document.getElementById("myBtn");
element.addEventListener("click", main);

function main(){
    var shoeSize = document.getElementById("input").value;
    shoeSize = Math.round(shoeSize)

    if(shoeSize >= 13){
        document.getElementById("sockSize").innerHTML = "Extra Large"
    }else if(shoeSize >= 10 && shoeSize<= 12){
        document.getElementById("sockSize").innerHTML = "Large"
    }else if(shoeSize >= 7 && shoeSize <= 9){
        document.getElementById("sockSize").innerHTML = "Medium"
    }else if(shoeSize >= 4 && shoeSize <= 6){
        document.getElementById("sockSize").innerHTML = "Small"
    }else{
        document.getElementById("sockSize").innerHTML = "Extra Small"
    }
   
}





