// Shallow copy & Deep copy

// Original object with nested structure
let obj1 = { 
    name: "Alice", 
    address: { city: "New York", zip: 10001 } 
};

// Reference: Both variables point to the same object
let obj2 = obj1; 


// Shallow Copy: Only the top level is copied, nested objects remain linked
let shallowCopy = { ...obj1 }; 


// Deep Copy: Fully independent object
let deepCopy = structuredClone(obj1); 

