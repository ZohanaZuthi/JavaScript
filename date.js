const now = new Date();  // Current date and time
console.log(now);
console.log(now.toString())
console.log(now.toISOString())
console.log(now.toUTCString())
console.log(now.toJSON())
// date is an object
console.log(typeof now)
let myDate=new Date(2023,0,23)
console.log(myDate)
console.log(myDate.toLocaleString())

let my=new Date(2023,0,23,5,3)
console.log(my)
console.log(my.toLocaleString())

let my2=new Date("01-14-2023")
console.log(my2)
console.log(my2.toLocaleString())