// there are two execution context
// 1.global execution context
// 2.function execution context
// extra: Eval execution context


// Memory creation phase and execution phase
// Types of Execution Context

// Global Execution Context (GEC)

// Created when a JavaScript file is executed.
// There is only one Global Execution Context.
// The this keyword in the global context refers to the global object (window in browsers, global in Node.js).

// Function Execution Context (FEC)

// Created whenever a function is invoked.
// Each function has its own execution context.

// Eval Execution Context

// Created when eval() function is executed.
// Rarely used due to security risks.
// Phases of Execution Context
// Each execution context goes through two phases:

// Creation Phase

// The JavaScript engine scans the code before execution.
// Memory is allocated for variables and functions (Hoisting happens).
// The this keyword is set based on the execution context.
// Execution Phase

// JavaScript starts executing the code line by line.
// Variables are assigned values.
// Functions are executed when called.

console.log("Start"); // Global Execution Context

function first() {
    console.log("Inside first function");
    second(); // Calls second function
    console.log("Exiting first function");
}

function second() {
    console.log("Inside second function");
}

first(); // Calls first function

console.log("End");
// Call Stack Execution:
// Global Execution Context created → console.log("Start") executes.
// first() is called → Function Execution Context for first() is created.
// Inside first(), console.log("Inside first function") executes.
// second() is called → Function Execution Context for second() is created.
// Inside second(), console.log("Inside second function") executes.
// second() finishes → Its Execution Context is popped off.
// Back to first(), console.log("Exiting first function") executes.
// first() finishes → Its Execution Context is popped off.
// console.log("End") executes in the Global Execution Context.
// The program ends → Global Execution Context is popped off.
