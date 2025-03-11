// time stamp is used when we need accurate time info for first second third in a contest
let myTimestamp=Date.now()
console.log(myTimestamp)

let mydate=new Date("01-14-2023")
// to get accurate second with date
console.log(mydate.getTime())
console.log(Date.now())
// to get the second in smaller term
console.log(Math.floor(Date.now()/1000))
let date1=new Date()
console.log(date1)
console.log(date1.getMonth())
console.log(date1.getDay())
// we can apply more customization on date
console.log(date1.toString('default',{weekday:"long"}))