//  conversion of datatype
// daatypes-integer,string,undefined,object ,boolean,Null,bigint,Symbol
var number=15
var str="This is a string"
var bol=true
var bin=BigInt("23")
console.log(bin)
let n=null
let y=Symbol("Hello")
console.log(y)
var und;
const obj={
    // key:value
    name:"Sharddha",
    age: 35,
    
    followers:17000

}
console.log(obj)
// when you are adding some integer values with string the integer will add as a string
obj.name+=123
console.log(obj)
// in case of const we can change the key of the object
obj.name="shusmita"
console.log(obj.age)
console.log(obj["name"])
// float to integer- parseInt
var num=5.5
num=parseInt(num)
console.log(num)

// integer to float- parseFloat

var num2= 10
num2=parseFloat(num2)
console.log(num2)

// string to integer- Number

var str='12'
str=Number(str)
console.log(str)

// purpose of isNan=if a value is NaN (Not-a-Number). It returns true

console.log(isNaN(str))

// condition in javascript
console.log(10=='10') // double equal checks if the values are same
console.log(10==='10') //triple equal checks if the value and also the datatype are same or not