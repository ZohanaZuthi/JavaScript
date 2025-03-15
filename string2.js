const str1=["apple","banana","orange","mango"]
const str2=["pineapple","lichi","lemon","guava"]
str1.push(str2)
console.log(str1)
//  by pushing we re pushing the whole array
// however if we want to push the scattered elements on the array inside str1
str1.concat(str2)
console.log(str1)
// in this case concat returns a new array so i had to store it some where
const str3=str1.concat(str2)
console.log(str3)
//  popular use in this case is spreas

const str4=[...str1,...str2,...str3]
console.log(str4)
// we can flatten an array which has nested array

const str5=str4.flat(Infinity)
console.log(str5)

console.log(Array.isArray(str1))
console.log(Array.from("Hitesh"))
// there is some twist if we dont specify which one i want to make string it will give wrong answer
console.log(Array.from({name:"Hitesh"}))
// it says empty string cuz we did not specify whether the key or the name
const score1=44
const score2=99
const score3=345
console.log(Array.of(score1,score2,score3))
