const score=400
console.log(score,typeof score)
// if I assign a datatype especially

const num=new Number(400.000)
console.log(num)
console.log(num.toString())
console.log(num.toString().length)
// to define two digits after dot
console.log(num.toFixed(2))
// toPrecision returns a string value with round of
const num2=1234.6954
console.log(num2.toPrecision(4))

const num3=10000000
console.log(num3)
console.log(num3.toLocaleString())
console.log(num3.toLocaleString('en-IN '))
// at console
Number.MAX_VALUE
Number.MIN_VALUE
