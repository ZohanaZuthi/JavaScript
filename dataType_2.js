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
