// 1. Creating an Array
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits Array:", fruits);

// 2. Accessing Array Elements
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// 3. Adding Elements
fruits.push("Mango"); // Adds at the end
console.log("After push:", fruits);

fruits.unshift("Orange"); // Adds at the beginning
console.log("After unshift:", fruits);

// 4. Removing Elements
fruits.pop(); // Removes the last element
console.log("After pop:", fruits);

fruits.shift(); // Removes the first element
console.log("After shift:", fruits);

// 5. Checking Array Length
console.log("Array Length:", fruits.length);

// 6. Iterating Over an Array
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("Using forEach:");
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// 7. Using `map` to Transform Array
const uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercased Fruits:", uppercasedFruits);

// 8. Filtering Array
const filteredFruits = fruits.filter(fruit => fruit.startsWith("B"));
console.log("Filtered Fruits (start with 'B'):", filteredFruits);

// 9. Searching in an Array
console.log("Index of 'Banana':", fruits.indexOf("Banana"));
console.log("'Grapes' exists in array:", fruits.includes("Grapes"));

// 10. Slicing and Splicing
const slicedFruits = fruits.slice(0, 2); // Extracts a portion
console.log("Sliced Fruits:", slicedFruits);

fruits.splice(1, 1, "Blueberry", "Kiwi"); // Removes and replaces
console.log("After Splice:", fruits);

// 11. Sorting and Reversing
fruits.sort(); // Sorts alphabetically
console.log("Sorted Fruits:", fruits);

fruits.reverse(); // Reverses the array
console.log("Reversed Fruits:", fruits);

// 12. Joining Arrays
const vegetables = ["Carrot", "Potato"];
const allItems = fruits.concat(vegetables); // Combines arrays
console.log("All Items:", allItems);

const joinedItems = allItems.join(", ");
console.log("Joined Items:", joinedItems);

// 13. Multi-dimensional Arrays
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log("Matrix:");
console.table(matrix);

// Accessing elements in a matrix
console.log("Element at [1][2]:", matrix[1][2]);

// 14. Reduce for Accumulation
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Numbers:", sum);
