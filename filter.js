// foreach function doesn't return anything
// to return the vlaues we use filter

const numbers = [5, 12, 8, 130, 44];

const filteredNumbers = numbers.filter((number) => number > 10);

console.log(filteredNumbers);
// for following case when we apply {} we mush use return
const fil = numbers.filter((number) => {return number > 10});

console.log(fil);