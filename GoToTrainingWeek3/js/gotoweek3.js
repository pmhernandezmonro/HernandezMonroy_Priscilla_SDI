
 /*
Priscilla Hernandez-Monroy
SDI Section #3
GoTo Week 3
09/16/2015
 */

//alert("Testing to see if connected.");

 //Create an array of fruit names and then sort it

 //Array - variable that holds multiple variables
 //Index # of an array always starts with 0 ! !

 var bowlOfFruit  = ["apple", "banana", "pear", "peach"];

 //See whole array
 console.log(bowlOfFruit);

 //Console.log the banana
 console.log(bowlOfFruit[1]);

 //How many items are in an array?
 //length property - access this by using dot syntax
 // Fancy term for use a period
 console.log(bowlOfFruit.length);

 //Count the number of pears in our fruit bowl

 //Create a variable that will keep track of how many pears there are.
 var totalNumPears = 0;


 //Test each item in the array and check if it is a pear

 //Basic structure of a conditional
 // if(condition to test){code that will run if true}

  if(bowlOfFruit[0]==="pear") {
     //This code will run if true
     //Add 1 to the total numbers of pears
     console.log("This item is a pear!");
     totalNumPears++; //totalNumPears = totalNumPears + 1
 } else {
     console.log("This fruit is not a pear!");
 }

 if(bowlOfFruit[1]==="pear") {
     //This code will run if true
     //Add 1 to the total numbers of pears
     console.log("This item is a pear!");
     totalNumPears++; //totalNumPears = totalNumPears + 1
 } else {
     console.log("This fruit is not a pear!");
 }

 if(bowlOfFruit[2]==="pear") {
     //This code will run if true
     //Add 1 to the total numbers of pears
     console.log("This item is a pear!");
     totalNumPears++; //totalNumPears = totalNumPears + 1
 } else {
     console.log("This fruit is not a pear!");
 }

 if(bowlOfFruit[3]==="pear") {
     //This code will run if true
     //Add 1 to the total numbers of pears
     console.log("This item is a pear!");
     totalNumPears++; //totalNumPears = totalNumPears + 1
 } else {
     console.log("This fruit is not a pear!");
 }

 console.log("There are "+totalNumPears+" pear(s) in the fruit bowl.");

//Create a another variable to track pears
 var pearNumber = 0;

//Create a loop for repetitive code.

 // For loop structure
 // for(intializing a counting variable; condition to test; increment of change ){ code to run for each time we loop}

 for (var i =0; i<bowlOfFruit.length; i++){
     console.log("Inside the loop, i ="+i);
     console.log(bowlOfFruit[i]);
     //Test if the array item is pear
     if(bowlOfFruit[i]==="pear"){
         console.log("found pear!");
         pearNumber++;
     }else{
         console.log("Fruit is not a pear");
     }

 }

 console.log("The total number of pears in the bowl is"+pearNumber);


 //Validate prompts

 var name = prompt("What is your name?");

 //Test to see if the variable