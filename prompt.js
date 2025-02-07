// The prompt() function in JavaScript is used to take user input through a popup dialog box in the browser.

let userInput = prompt("Enter your name:");


let age = prompt("Enter your age:");
age = Number(age); // Convert string to number

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// prompt() only works in browsers, not in Node.js.
// The input is always a string, so convert it when necessary.
// It blocks script execution until the user responds.
