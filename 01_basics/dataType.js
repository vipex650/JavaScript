// String - "", '', ``
let name = "Anuj Gupta"

// Numbers - 20, 20.7
let age = 20

// Boolean - true, false
let isPaid = true

let favouriteClass = null // typeOf - Object
let hometown; // typeOf - undefined

// Array - [], typeOf - Object
let Skills = ["HTML", "CSS", "JavaScript", true, false, 25]

// Object - {}, typeOf - Object
let StudentProfile = {
    name: "Anuj Gupta",
    age: 20,
    isPaid: true,
    favouriteClass: null,
    Skills: ["HTML", "CSS", "JavaScript", true, false, 25]
}


console.log(name)
console.log(age)
console.log(isPaid)
console.log(favouriteClass)
console.log(hometown)
console.log(Skills)
console.log(StudentProfile)

// Insted of writing console.log to many times, we can also use console.table
console.table([name, age, isPaid, favouriteClass, hometown])
console.table([Skills])
console.table([StudentProfile])


// to determine the type of variable
console.log(typeof name)
console.log(typeof(name))


// to access array elements in javascript
console.log(Skills[0])
console.log(Skills[3])


// to access object elements in javascript
console.log(StudentProfile.name)
console.log(StudentProfile.age)
console.log(StudentProfile.Skills)
console.log(StudentProfile.Skills[2])


