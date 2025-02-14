const person = { name: "Aditya", age: 22 };

// Object destructuring
const { name, age } = person;
console.log(name, age);

// Array destructuring
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first, second); 


// Spread Syntax (...)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Copy and add new elements
console.log(arr2);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // Copy and add new properties
console.log(obj2);



// Local, Global, and Block Scope
let globalVar = "I'm global"; // Global Scope

function testScope() {
    let localVar = "I'm local"; // Local Scope
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

testScope();{

    let blockVar = "I'm block scoped"; // Block Scope
    console.log(blockVar); 
}
