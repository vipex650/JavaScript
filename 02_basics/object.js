const mySym = Symbol("key1"); // Creating a Symbol


let JsUser = {
    name : "Anuj",
    "full name" : "Anuj Gupta",
    [mySym]: "Secret Value",  // Using Symbol as a property key
    age : 16,
    language : ["C-language", "C++","PYTHON", "JAVASCRIPT"],
    location : "Gorakhpur",
    email : "anuj@google.com",
    isLoggedIn : false
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym]) // Secret Value
console.log(typeof mySym)  // "symbol"


JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)  // Object.freeze() makes an object immutable, meaning you can’t add, remove, or change its properties. However, it only works on the top level, so nested objects inside it can still be modified.
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);


