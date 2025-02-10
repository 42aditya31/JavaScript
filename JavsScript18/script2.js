// Global Scope
var appName = "User Profile App";

// IIFE to fetch and display user details immediately
(function () {
  console.log(`Welcome to ${appName}!`); // Using global variable
})();

// Simulating user data from an API
const user = { name: "Aditya", age: 22, skills: ["JavaScript", "React"] };

// Destructuring the user object
const { name, age } = user;
console.log(`User: ${name}, Age: ${age}`);

// Spread Syntax: Adding more skills
const updatedSkills = [...user.skills, "Node.js"];
console.log(`Updated Skills:`, updatedSkills);

// Function to demonstrate local, global, and block scope
function displayMessage() {
  var localMessage = "Inside function"; // Local Scope

  if (true) {
    let blockMessage = "Inside block"; // Block Scope
    console.log(blockMessage);
  }
  // console.log(blockMessage);
  console.log(localMessage); //  Accessible inside function
}

displayMessage();

// Hoisting Example
console.log(hoistedVar); //(Hoisted but not initialized)
var hoistedVar = "I'm hoisted";
hoistedFunction();

function hoistedFunction() {
  console.log("Function is hoisted");
}
