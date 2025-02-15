let fruits = ["Apple", "Mango", "Banana"]
let intFruits = new Array("kiwi", "avacado", "dragon fruit")


console.log(fruits)
console.log(intFruits)

console.log(fruits.length)

fruits[0] = "Blackberry";
console.log(fruits)

// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
// fruits.push("Orange")
console.log(fruits.push("Orange"))
console.log(fruits)


//The pop() method of Array instances removes the last element from an array and returns that element. 
// fruits.pop()
console.log(fruits.pop())
console.log(fruits)


// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
// fruits.unshift("Grapes")
console.log(fruits.unshift("Grapes"))
console.log(fruits)


// The shift() method of Array instances removes the first element from an array and returns that removed element.
// fruits.shift()
console.log(fruits.shift())
console.log(fruits)


// The sort() method sorts an array in place and returns the same array. By default, it sorts in ascending order by converting elements to strings and comparing their UTF-16 code values.
// fruits.sort()
console.log(fruits.sort())
console.log(fruits)
