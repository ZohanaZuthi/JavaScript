//  Memory is two types:
// Primitive and Reference
// according to these two types javascript provides twi memory 
// 1. Stack Memory(Primitive Data)
// 2. Heap Memory (Reference Data Type)

// Used for storing primitive values (numbers, strings, booleans, null, undefined, Symbol, BigInt).
// Used for reference types (objects, arrays, functions).

let name="Zuthi"
let age= 22

console.log(`Hello My name is ${name}. My age is ${age}`)

const gameName= new String('hiteshch')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
// a copy of gameName is changed not the main one
console.log(gameName.charAt(3))
console.log(gameName.indexOf('e'))

const subs=gameName.substring(2,4)
console.log(subs)

const slics=gameName.slice(2,4)
console.log(slics)

// JavaScript is dynamically typed. This means:

// No Explicit Type Declaration – You don’t need to specify the type of a variable when declaring it.

//  Static Data
// Static data refers to data that is known at compile-time (before the program runs) and is usually allocated in a fixed location. Once allocated, static data's size and location remain constant throughout the program's execution.
// Dynamic Data
// Dynamic data refers to data whose size and memory location can change during runtime. This data is allocated and deallocated while the program is running, and the memory is managed dynamically.
//  if heap memory is used it can be changed by reference