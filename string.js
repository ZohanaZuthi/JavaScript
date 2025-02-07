let str="This is from ApnaCollege"
console.log(str.length)
console.log(str[8])

// Template literals are a feature in JavaScript that allow easier string manipulation. They use backticks (`) instead of single (') or double (") quotes.

const obj={
    Name:"ApnaCollege",
    age:6,
    year:2014
}

let output=`I am learning javascript from ${obj.Name}, the channel was founded in ${obj.year}.`
console.log(output) 
// String interpolation is a method of embedding variables, expressions, or function calls inside a string using template literals (``).


// Escape character \n,\t
console.log("I had fun \nlearning")
console.log("I had fun \tlearning")