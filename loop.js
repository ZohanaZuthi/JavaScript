// for (initialization; condition; increment/decrement) {
//     // Code to be executed
// }
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}
// Output: 1, 2, 3, 4, 5

let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}
// Output: 1, 2, 3, 4, 5

let num = 1;
do {
    console.log("Number:", num);
    num++;
} while (num <= 5);
// Output: 1, 2, 3, 4, 5


// iteration over object properties
let person = { name: "Alice", age: 25, city: "New York" };

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: Alice
// age: 25
// city: New York


// for array and string
let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log(color);
}
// Output: Red, Green, Blue



// break statement
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;  // Stops at 5
    console.log(i);
}
// Output: 1, 2, 3, 4


// continue statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;  // Skips 3
    console.log(i);
}
// Output: 1, 2, 4, 5
