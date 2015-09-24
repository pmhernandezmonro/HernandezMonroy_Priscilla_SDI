
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
 var w = prompt("Enter the width of the square.");
 //If user leaves blank ask again.
 while(w==="" || isNaN(w)) {
     //Prompt the user again.
     w = prompt("Please do not leave blank.\n Enter the width of the square as a number.");
 }
//Give user perimeter
         var total = perimeter(l, w);
         console.log("The total perimeter of a square with a " +l+ " and a width of " +w+ " is " +total+ ".");





