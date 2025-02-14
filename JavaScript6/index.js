// 1. Strings
const greeting = "Hello, World!";
console.log("String:", greeting);

// 2. Accessing Characters
console.log("First character:", greeting[0]);
console.log("Last character:", greeting[greeting.length - 1]);

// 3. Length of a String
console.log("Length of string:", greeting.length);

// 4. Template Literals
const name = "Aditya";
const message = `Welcome, ${name}!`;
console.log("Template Literal:", message);

// 5. Run JS Anywhere
// Strings can be logged or manipulated on any JS environment (browser or Node.js).
console.log("Run JavaScript Anywhere Example:", `Current length: ${greeting.length}`);

// 6. Escape Sequence
const escapeExample = "He said, \"JavaScript is awesome!\"";
console.log("Escape Sequence Example:", escapeExample);

// 7. Uppercase and Lowercase
console.log("Uppercase:", greeting.toUpperCase());
console.log("Lowercase:", greeting.toLowerCase());

// 8. Slicing a String
const sliced = greeting.slice(7, 12);
console.log("Sliced String:", sliced);

// 9. Replace
const replaced = greeting.replace("World", "JavaScript");
console.log("Replaced String:", replaced);

// 10. Concatenation
const part1 = "JavaScript";
const part2 = "Strings";
const concatenated = part1 + " " + part2;
console.log("Concatenated String:", concatenated);

// 11. Strings are Immutable
let immutableExample = "Immutable";
immutableExample[0] = "X"; // This does not change the string
console.log("Strings are Immutable:", immutableExample);

// 12. More: Checking if a String Contains a Substring
const containsExample = greeting.includes("World");
console.log("Contains 'World':", containsExample);

// 13. More: Splitting a String
const splitExample = greeting.split(", ");
console.log("Split String:", splitExample);
