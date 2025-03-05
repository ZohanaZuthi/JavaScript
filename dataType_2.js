"use script"
// this ensures that the code is written and running according to newer js version
let score=33
console.log(typeof score)
let str="33a"
let num=Number(str)
console.log(typeof num)
console.log(num)
let neg_score=-score
console.log(neg_score)

console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
console.log("1"+2+2)
// The expression is evaluated from left to right. First, "1" + 2 results in "12" (string concatenation). Then, "12" + 2 results in "122".
console.log(1+2+"2")
// The expression is evaluated from left to right. First, 1 + 2 results in 3 (numeric addition). Then, 3 + "2" results in "32" (string concatenation).
console.log(+true)
console.log(+"")

// there are kind of 7 types of datatypes in javascript
// string, bigint,symbol, boolean,number, undefined and null


// null is an object according to javascript
// Symbol is a primitive data type introduced in ES6 (ECMAScript 2015). It is used to create unique identifiers that cannot be accidentally overwritten or duplicated.
let id="123"
let anotherid="123"
console.log(id==anotherid)

const bignum=3455555555555555555555555n
console.log(typeof bignum)
