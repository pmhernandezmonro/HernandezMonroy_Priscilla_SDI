/*
Priscilla Hernandez-Monroy
SDI Section #3
Conditionals Assignment
09/17/2015
 */

//alert ("Testing to see if connected.");

//Will be calculating if user is acheving goal of going to the park to ride bike per week

// List of variables
var days; //Number of days per week user vists park to ride bike.
var hoursPerDay;  //Number of hours user vists park to ride bike.
var goal; //Users goal.
var totalHours; //Total of hours user is missing to reach goal.

// List of prompts to ask user
goal = prompt("Hello we are going to calculate if have reached your goal of visting the park. \nHow many hours per week would you like to visit the park? ");
if (goal == "" ) {//Alert user if they leave prompt blank.}
    goal = prompt("Whoops! Please do not leave blank. Enter now");
}
hoursPerDay = prompt("Please enter how many hours you visit the park per day ");
if (hoursPerDay == "") {//Alert user if they leave prompt blank.}
    hoursPerDay = prompt("Whoops! Please do not leave blank. Enter now");
}
days = prompt("How many days do you visit the park per week? ");
if (days == "") {//Alert user if they leave prompt blank.}
    days = prompt("Whoops! Please do not leave blank. Enter now");
}







