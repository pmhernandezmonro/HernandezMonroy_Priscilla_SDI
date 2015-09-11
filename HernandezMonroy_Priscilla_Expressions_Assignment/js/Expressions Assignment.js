/*
 Priscilla Hernandez-Monroy
 SDI Section #3
 Expressions Assignment
 9-10-2015
 */

//alert ("testing.");

//Create a child care calculator

//Greet the user
alert("Welcome!\nLets find out how much you spend on child care in one year.");

//Ask user how much do they spend on child care per week

var howMuch = prompt("How much do you spend on child care in per week?");

//Create console.log to check answer
console.log(howMuch);

//How many weeks are in one month
 var Month = 4;

//Figure out amount spent
var amount = Month * howMuch;

//alert user with amount they spend in one month
console.log(" In one month you spend "+amount+ " dollars on child care. ");
alert(" In one month you spend "+amount+ " dollars on child care. ");

//Figure out how much they spend in one year
alert(" Next you will find out how much you spend in one year")


//How many months in one year
var oneYear = 12;

//Figure out total spent in one year

var total = oneYear * amount;

//alert user with final values
console.log(" In one year you spend "+total+" dollars on child care. ");
alert("In one year you spend "+total+" dollars on child care. ");


/* I typed 100 dollars for amount spent per week and my calculator gave me
 400 as the final answer. */

/* Next it gave me the final answer of the amount spent in
one year which was 4800 */

/* I typed 200 dollars for amount spent per week on child care and my
calculator gave me the amount of 800 for one month */

/* Next it gave me the final answer of the amount spent in
one year which was 9600 for the year. */




