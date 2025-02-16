// Slice and Splice
let myArr = ["Ramesh", "Suresh", "Kamlesh", "Jacko", "Monako"]
console.log("A:", myArr)

let myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B:", myArr)

let myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C:", myArr)


// The slice() method creates a shallow copy of a part of an array, from the start index to just before the end index, without changing the original array.

let colour = ["red", "green", "blue", "yellow"];
// Slicing from index 1 to the end
let slicedColors = colour.slice(1);
console.log(slicedColors); // ["green", "blue", "yellow"]
console.log(colour); // ["red", "green", "blue", "yellow"] (Original remains unchanged)



// "The splice() method modifies an array by adding, removing, or replacing elements at a specified index. It takes three arguments: the start index, the number of elements to remove, and optional elements to insert. Since it works in place, it directly changes the original array."

let numbers = [10, 20, 30, 40, 50];
// Removing 2 elements starting from index 1
console.log(numbers.splice(1, 3)); // [20, 30, 40]
console.log(numbers); // [10, 50]


let colors = ["red", "green", "blue"];
// Adding "yellow" and "pink" at index 1 (without removing anything)
colors.splice(1, 0, "yellow", "pink");
console.log(colors); // ["red", "yellow", "pink", "green", "blue"]


let fruits = ["apple", "banana", "cherry"];
// Replacing "banana" with "grape"
console.log(fruits.splice(1, 1, "grape")); // ["banana"]
console.log(fruits); // ["apple", "grape", "cherry"]
