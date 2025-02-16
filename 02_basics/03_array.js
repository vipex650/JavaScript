let marvel_heroes = ["Captain Americe", "Iron Man", "Thor"];
let dc_heroes = ["Superman", "Batman", "Flash"];

// The concat() method is used to merge two or more arrays into a new array, without modifying the original arrays.
let all_heroes = marvel_heroes.concat(dc_heroes);

console.log(all_heroes) // ["Iron Man", "Spider-Man", "Thor", "Batman", "Superman", "Flash"]



// "The spread operator (...) in JavaScript expands elements of arrays, objects, or iterables. It's used for merging, copying, and passing function arguments while ensuring the original data remains unchanged by creating a shallow copy."
let all_new_heroes = [...marvel_heroes, ...dc_heroes]

console.log(all_new_heroes) // ["Iron Man", "Spider-Man", "Thor", "Batman", "Superman", "Flash"]



// The flat() method is used to flatten nested arrays, meaning it removes nested structures and returns a single-level array.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



// The Array.of() method creates a new array from the provided values. It ensures that each argument becomes an element of the array
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]



// The Array.from() method is used to create a new array from an iterable (like a string, Set, Map) or an array-like object (like an object with a length property).
console.log(Array.from("Hello")); // ['H', 'e', 'l', 'l', 'o']



// The includes() method checks whether an array contains a specific value and returns true or false.
const names = ["Alice", "Bob", "Charlie"];

console.log(names.includes("alice")); // false (case-sensitive)
console.log(names.includes("Alice")); // true

