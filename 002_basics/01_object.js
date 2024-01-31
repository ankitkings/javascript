// Object literal\\


const mySym = Symbol("mySymbolValue")
const jsUser = {
    name: "Ankit",
    age: 18,
    location: "Indore",
    "email": "ankit@gmail.com",
    is_logged_in: false,
    [mySym]: "new symbol"
}

// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser.mySym);

jsUser.greeting = function(){
    console.log(`Hello JsUser, ${this.name}`);
}
console.log(jsUser.greeting());