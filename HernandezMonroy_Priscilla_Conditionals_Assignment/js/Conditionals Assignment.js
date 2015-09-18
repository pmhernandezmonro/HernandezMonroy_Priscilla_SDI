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
//Ask user to enter how many hours they vist park.
hoursPerDay = prompt("Please enter how many hours you visit the park per day ");
if (hoursPerDay == "") {//Alert user if they leave prompt blank.}
    hoursPerDay = prompt("Whoops! Please do not leave blank. Enter now");
}
//Ask user how many days out of the week they visit park.
days = prompt("How many days do you visit the park per week? ");
if (days == "") {//Alert user if they leave prompt blank.}
    days = prompt("Whoops! Please do not leave blank. Enter now");
}
//Determine how total hours user should be going to park
totalHours = Number (goal) - Number(hoursPerDay) * Number (days);
console.log("Looks like you are" + " "+totalHours+ " " + "hour from acheving your goal of riding your bike at the park. ");

//Let user know if they achieved their goal for the week
if (goal > totalHours && totalHours == 0) {

}else{
    console.log("")
}