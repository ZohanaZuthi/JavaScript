// IIFE (Immediately Invoked Function Expression) in JavaScript 
// is a function that runs immediately after being defined.
(function() {
    console.log("This function runs immediately!");
})();
// we have to give the semicolon to proof the sstatement end there
// if we dont then the second IIFE wont run
(function(name) {
    console.log(`My name is ${name}`);
})("Zuthi");

(function chai() {
    console.log("This function runs immediately!");
})();
