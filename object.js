// object is declared in two ways
// by object literals
// by constructor
// object constructor is defined as singleton

// object literals
// here the key is taken as string

const sym=Symbol("mysym")
const JsUser={
    name:"Zuthi",
    "full name":"Nazifa Fairuz Zuthi",
    [sym]:"This is my symbol",
    age:22,
    height:1.5,
    email:"nazifafairuzzuthi@gmail.com",
    lastLogindays:["Monday","Saturday"]


}
console.log(JsUser.email)
// console.log(JsUser[email])
console.log(JsUser["email"])
// as full name is written as string it can be accessed like a string and no other way
console.log(JsUser["full name"])
// how to use symbol as a key
console.log(JsUser[sym])
console.log(typeof(sym))
