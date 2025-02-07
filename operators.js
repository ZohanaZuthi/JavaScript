// 1. Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b);  // Addition: 10 + 5 = 15
console.log(a - b);  // Subtraction: 10 - 5 = 5
console.log(a * b);  // Multiplication: 10 * 5 = 50
console.log(a / b);  // Division: 10 / 5 = 2
console.log(a % b);  // Modulus (Remainder): 10 % 5 = 0
console.log(a ** 2); // Exponentiation: 10^2 = 100

// 2. Assignment Operators
let x = 10;
x += 5; // Equivalent to x = x + 5
console.log(x); // 15
x -= 3; // Equivalent to x = x - 3
console.log(x); // 12
x *= 2; // Equivalent to x = x * 2
console.log(x); // 24
x /= 4; // Equivalent to x = x / 4
console.log(x); // 6

// 3. Comparison Operators
console.log(a == b);   // Equal to (checks value only) => false
console.log(a === b);  // Strict equal (checks value and type) => false
console.log(a != b);   // Not equal => true
console.log(a !== b);  // Strict not equal => true
console.log(a > b);    // Greater than => true
console.log(a < b);    // Less than => false
console.log(a >= b);   // Greater than or equal => true
console.log(a <= b);   // Less than or equal => false

// 4. Logical Operators
let p = true;
let q = false;
console.log(p && q); // Logical AND: true && false => false
console.log(p || q); // Logical OR: true || false => true
console.log(!p);     // Logical NOT: !true => false

// 5. Bitwise Operators
console.log(5 & 1);  // Bitwise AND: 0101 & 0001 => 0001 (1)
console.log(5 | 1);  // Bitwise OR:  0101 | 0001 => 0101 (5)
console.log(5 ^ 1);  // Bitwise XOR: 0101 ^ 0001 => 0100 (4)
console.log(~5);     // Bitwise NOT: ~0101 => -(0101+1) => -6
console.log(5 << 1); // Left shift:  0101 << 1 => 1010 (10)
console.log(5 >> 1); // Right shift: 0101 >> 1 => 0010 (2)

// 6. Ternary Operator (Conditional)
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"

// 7. Type Operators
console.log(typeof 42);        // "number"
console.log(typeof "Hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof {});        // "object"
console.log(typeof undefined); // "undefined"

// 8. Nullish Coalescing Operator (??)
let user;
console.log(user ?? "Guest"); // If user is null/undefined, returns "Guest"



// Comparison Operators in JavaScript

// 1. Equal (==) - checks if values are the same (ignores type)
console.log(5 == "5");  // true (values are same, type ignored)
console.log(10 == 10);  // true (values are same)

// 2. Strict Equal (===) - checks if values and types are the same
console.log(5 === "5"); // false (same value, but different type)
console.log(10 === 10); // true (both value and type match)

// 3. Not Equal (!=) - checks if values are different (ignores type)
console.log(5 != "5");  // false (values are same, type ignored)
console.log(10 != 20);  // true (10 is not equal to 20)

// 4. Strict Not Equal (!==) - checks if values OR types are different
console.log(5 !== "5"); // true (same value, different type)
console.log(10 !== 10); // false (both value and type are same)

// 5. Greater Than (>)
console.log(10 > 5);    // true (10 is greater than 5)
console.log(5 > 10);    // false (5 is not greater than 10)

// 6. Less Than (<)
console.log(5 < 10);    // true (5 is less than 10)
console.log(10 < 5);    // false (10 is not less than 5)

// 7. Greater Than or Equal (>=)
console.log(10 >= 10);  // true (10 is equal to 10)
console.log(15 >= 10);  // true (15 is greater than 10)
console.log(5 >= 10);   // false (5 is not greater than 10)

// 8. Less Than or Equal (<=)
console.log(5 <= 10);   // true (5 is less than 10)
console.log(10 <= 10);  // true (10 is equal to 10)
console.log(15 <= 10);  // false (15 is not less than or equal to 10)

// 9. String Comparison - Uses Unicode values
console.log("apple" > "banana");  // false ("a" comes before "b")
console.log("carrot" < "zebra");  // true ("c" comes before "z")
console.log("2" > "12");          // true (string comparison: "2" is greater than "1")
