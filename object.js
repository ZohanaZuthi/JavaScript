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

// to stop anyone from making update to my object we can freeze it
// Object.freeze(JsUser)
JsUser.email="statrack613@gmail.com"
console.log(JsUser.email)

// to add a function to object
JsUser.greeting=function(){
    console.log("Hello JS User")
}
console.log(JsUser.greeting())
console.log(typeof(greeting))

JsUser.greeting2=function(){
    console.log(`Hello JS User, My name is ${this.name}`)
}
console.log(JsUser.greeting2())
