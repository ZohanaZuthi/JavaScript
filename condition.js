if(10<13)
{
    console.log("my name is Juthi")
}
else console.log("I am not a human")
// let is similar to var
let str="Muri kha"
console.log(str)
// there is another way to declare variable const, by using const we can not redefine that

// 1. Simple if statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

// 2. if-else statement
let temperature = 30;
if (temperature > 25) {
    console.log("It's hot outside.");
} else {
    console.log("It's not too hot.");
}

// 3. if-else if-else ladder
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// 4. Nested if-else (if inside another if)
let user = "admin";
let password = "12345";

if (user === "admin") {
    if (password === "12345") {
        console.log("Access granted.");
    } else {
        console.log("Incorrect password.");
    }
} else {
    console.log("User not recognized.");
}

// 5. if-else with Logical Operators
let isSunny = true;
let isWarm = true;

if (isSunny && isWarm) {
    console.log("Let's go outside!");
} else if (isSunny || isWarm) {
    console.log("It's decent weather.");
} else {
    console.log("Better stay inside.");
}

// 6. if-else using NOT operator
let raining = false;
if (!raining) {
    console.log("No need for an umbrella.");
} else {
    console.log("Take an umbrella!");
}

// 7. Shortened if-else (Ternary Operator)
let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); // Output: "Even"

// 8. Checking multiple conditions
let speed = 80;
if (speed > 100) {
    console.log("Over speed! Slow down.");
} else if (speed > 60 && speed <= 100) {
    console.log("You are at a safe speed.");
} else {
    console.log("You are driving too slow.");
}
