// Problem: Create an array containing different types of teas
let teas = ["Green Tea", "Black Tea", "Oolong Tea", "White Tea", "Herbal Tea"]
console.log(teas)



// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea")
console.log(teas)


  
// Problem: Remove "Oolong Tea" from the list of teas
let n = teas.indexOf("Oolong Tea")
if(n != -1)
    teas.splice(n, 1);
console.log(teas)



// Problem: Filter the list to only include teas that are caffeinated
const caffeinatedTeas = teas.filter((tea) => tea !== "Herbal Tea");


  
// Problem: Sort the list of teas in alphabetical order
teas.sort()
console.log(teas)

const test = ["🥚", "🐓"];
console.log(test.sort()); // JavaScript's default .sort() converts elements to strings and sorts based on Unicode order: "🐓" (U+1F413) comes before "🥚" (U+1F95A) in Unicode.


  
// Problem: Use a for loop to print each type of tea in the array
for(let i=0; i<teas.length; i++){
    console.log(teas[i])
}
  


// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")
let caffeinatedMyTeas = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal Tea") {
    caffeinatedMyTeas++;
  }
}


  
// Problem: Use a for loop to create a new array with all tea names in uppercase
const uppercaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  uppercaseTeas.push(teas[i].toUpperCase());
}


  
// Problem: Use a for loop to find the tea name with the most characters
let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}


  
// Problem: Use a for loop to reverse the order of the teas in the array
const reversedArray = [];
for (let i = teas.length - 1; i >= 0; i--) {
  reversedArray.push(teas[i]);
}
  