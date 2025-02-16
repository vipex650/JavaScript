let myArray = [1, 4, 2, 3, 5, 6];


function Sum_Of_Elements(Elements){
    let sum = 0;
    for(let i = 0; i < Elements.length; i++){
        sum = sum + Elements[i];
    }
    return sum;
}


let add = Sum_Of_Elements(myArray);
console.log(`Sum of Element of Array: ${add}`)


let anotherSum = Sum_Of_Elements([3, 3, 2, 6, 4])
console.log(`Sum of Element of anotherArray: ${anotherSum}`)