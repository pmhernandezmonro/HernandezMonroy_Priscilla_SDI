
 /*
Priscilla Hernandez-Monroy
SDI Section #3
GoTo Training Week 4
09/24/2015
 */

//alert("Testing")

 //Create a fle that will give us a random number between two numbers.

 //Ask the user for the min number.
 var minNum = prompt("Let's find a number between two numbers!\nWhat is the min number:");
//Validate the prompt is not blank and it is a number
while(minNum==="" || isNaN(minNum)){
    //re-prompt the user
    if(minNum===""){
        minNum = prompt("Please do not leave blank and only use numbers.\nWhats is the min number:");






    }else if(isNaN(minNum))

    minNum = prompt("PLease do not leave blank.\nWhats is the min number:");


}


 /*
 Basic structure of a while loop.

 //Declare a variable
 var x = prompt("Type in a number");

 while( x < 6){ //condition to test

    //Some sort of change to the variable we in our condition to test.
     x++;
 }

  */

 //prompt user for max number
 var maxNum = prompt("What is the max number:");
 //Validate directly after the prompt.
 while(maxNum==="" || isNaN(maxNum)){

     maxNum= prompt("Please do not leave blank and only use number.\nWhat is the max value:");

 }

 //What if you wanted to validate words
 //Ask a yes or no question
 var happy = prompt("Are you happy today?");
 //convert to all lowercase
happy = happy.toLowerCase();

 while(happy !="yes"){
     happy = prompt("Please only yes or no.\nAre you happy today?");

 }
//function call - "go button" that runs function.
 randomizr();
 //Create a function to calculate the random number
 function randomizr(min, max){

     //Generate our random number
     var randomNumber = Math.random()*(max-min)+Number(min);
     console.log(randomNumber);
//return value to our main code.


 }

