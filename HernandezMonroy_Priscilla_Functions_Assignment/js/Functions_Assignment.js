
 /*
Priscilla Hernandez-Monroy
SDI Section #3
Functions Assignment
09/24/2015
 */

//alert("Testing for connection.");
//Creating calculator to find perimeter and area of square.

 function perimeter (l,w){
     //find the perimeter of a square is l + l + w + w
     var perimeter = Number(l) + Number(l) + Number(w) + Number(w);
     return perimeter;
 }

//Prompt user for length and width
 var l = prompt("Enter the length of the square.");
 //If user leaves blank ask again.
 while(l==="" || isNaN(l)){
     //Prompt the user again.
     l=prompt("Please do not leave blank.\n Enter the length of the square.");


 }
 //Validate if user enters a number and not a word.
 var w = prompt("Enter the width of the square as a number.");
 //If user leaves blank ask again.
 while(w==="" || isNaN(w)) {
     //Prompt the user again.
     w = prompt("Please do not leave blank.\n Enter the width of the square as a number.");
 }
//Give user perimeter
         var totalPerimeter = perimeter(l, w);
         console.log("The total perimeter of a square with a " +l+ " and a width of " +w+ " is " +totalPerimeter+ ".");


function area (l,w){
    //find area of square l * w
    var area = Number(l) * Number(w);
    return area;
}

 //Prompt user for length and width to find area of square.
alert("Now we will find the area of the square.");

 var l = prompt("Please enter the length of the square to find area.");
 //If user leaves blank ask again.
 while(l==="" || isNaN(l)){
     //Prompt the user again.
     l=prompt("Please do not leave blank.\n Enter the length of the square to find area.");


 }
 //Validate if user enters a number and not a word.
 var w = prompt("Enter the width of the square .");
 //If user leaves blank ask again.
 while(w==="" || isNaN(w)) {

     //Prompt the user again.
     w = prompt("Please do not leave blank.\n Enter the width of the square as a number.");
 }
//Give user area of square
     var totalArea = area(l, w);
     console.log("The total area of a square with a " +l+ " and a width of " +w+ " is " +totalArea+ ".");

 


