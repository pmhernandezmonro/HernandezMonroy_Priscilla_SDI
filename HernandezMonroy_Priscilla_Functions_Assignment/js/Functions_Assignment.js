
 /*
Priscilla Hernandez-Monroy
SDI Section #3
Functions Assignment
09/24/2015
 */

//alert("Testing for connection.");
//Creating calculator for use to find perimeter and area of square.

 function perimeter(l,h,w){
     //find the perimeter of a square it is 4 + 8 + l + w
     var perimeter = 4+8+l+w;
     return perimeter;

 }
//Prompt user for length and width
 var l = prompt("Enter the length of the square.");
 //If user leaves blank ask again.
 while(w==="" || isNaN(l)){
     //Prompt the user again.
     l=prompt("Please do not leave blank.\n Enter the length of the square.");
     



 }