// 1. Create an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Original Array:", fruits); 

// 2. Access elements using indices
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]); 

// 3. Add elements
fruits.push("Dragonfruit"); 
console.log("After push:", fruits);

fruits.unshift("Avocado"); 
console.log("After unshift:", fruits); 

// 4. Remove elements
fruits.pop(); 
console.log("After pop:", fruits); 

fruits.shift(); 
console.log("After shift:", fruits); 

// 5. Modify elements
fruits[1] = "Blueberry"; 
console.log("After modification:", fruits); 

// 6. Find elements
let index = fruits.indexOf("Cherry");
console.log("Index of Cherry:", index); 


// 7. Remove or replace elements using splice
fruits.splice(1, 1, "Blackberry"); 
console.log("After splice:", fruits); 

// 8. Slice an array (extract a portion)
let slicedFruits = fruits.slice(0, 2); 
console.log("Sliced array:", slicedFruits); 

// 9. Iterate over an array
fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}:`, fruit);
});

// 10. Combine arrays
let vegetables = ["Carrot", "Potato"];
let combined = fruits.concat(vegetables);
console.log("Combined array:", combined); 

// 11. Sort and reverse
combined.sort();
console.log("Sorted array:", combined); 

combined.reverse();
console.log("Reversed array:", combined); 

// 12. Check if it's an array
console.log("Is fruits an array?", Array.isArray(fruits)); 

// 13. Map, filter, and reduce
let upperCaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("UpperCase Fruits:", upperCaseFruits); 

let filteredFruits = fruits.filter((fruit) => fruit.includes("b"));
console.log("Filtered Fruits:", filteredFruits); 

let totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0);
console.log("Total length of all fruit names:", totalLength); 

// 14. Spread Operator
let copiedArray = [...fruits];
console.log("Copied Array using spread:", copiedArray); 

// 15. Destructuring
let [firstFruit, secondFruit] = fruits;
console.log("First Fruit:", firstFruit); 
console.log("Second Fruit:", secondFruit); 
