// 1. Creating a Function
function greetUser(name) {
    return `Hello, ${name}!`;
}
console.log(greetUser("Aditya"));

// 2. Function which Sums 2 Numbers
function sumNumbers(a, b) {
    return a + b;
}
console.log("Sum of 5 and 3:", sumNumbers(5, 3));

// 3. Optional Parameters
function greetWithDefault(name = "Guest") {
    return `Welcome, ${name}!`;
}
console.log(greetWithDefault()); // Uses default
console.log(greetWithDefault("Aditya")); // Uses passed value

// 4. Arrow Functions
const multiplyNumbers = (a, b) => a * b;
console.log("Multiplication of 4 and 2:", multiplyNumbers(4, 2));

// 5. Function as a Variable
const divideNumbers = function (a, b) {
    return a / b;
};
console.log("Division of 10 by 2:", divideNumbers(10, 2));

// Quick Recap: Using functions together
const calculateTotal = (num1, num2) => {
    const sum = sumNumbers(num1, num2);
    const product = multiplyNumbers(num1, num2);
    return `Sum: ${sum}, Product: ${product}`;
};
console.log(calculateTotal(6, 3));
