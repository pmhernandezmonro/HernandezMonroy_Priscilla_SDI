/*
Priscilla Hernandez-Monroy
SDI Section #3
Conditionals Assignment
09/17/2015
 */

//alert ("Testing to see if connected.");

//Will be calculating if user is acheving goal of going to the park for exercise per week

// List of variables
var days; //Number of days per week user vists park for exercise.
var hoursPerDay;  //Number of hours user vists park for exercise.
var goal; //Users goal.
var totalHours; //Total of hours user is missing to reach goal.

// List of prompts to ask user 
alert("Hello! Should you go to the park today? Lets find out ");

//Ask user to enter outside temp
var currentTemp = prompt("Please enter outside temp.");

//Now ask user limit of temp to tolerate
var maxTemp = prompt("Please enter the max temp you would tolerate today.");

//Max temp when it is no longer good to go to the park

if (currentTemp < maxTemp) {
    console.log("Wow it is " + currentTemp + " degrees outside seems like a nice day to go to the park.");
}else { //Add else in case the temp is above the max temp

console.log("Wow It is too hot to go to the park today.");
}






