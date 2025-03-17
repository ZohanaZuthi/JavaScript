// foreach function doesn't return anything
// to return the vlaues we use filter

const numbers = [5, 12, 8, 130, 44];

const filteredNumbers = numbers.filter((number) => number > 10);

console.log(filteredNumbers);
// for following case when we apply {} we mush use return
const fil = numbers.filter((number) => {return number > 10});

console.log(fil);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers
  .map((num) => num * 10)   // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  .map((num) => num + 1)    // [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
  .filter((num) => num >= 40); // [41, 51, 61, 71, 81, 91, 101]

console.log(newNums);
