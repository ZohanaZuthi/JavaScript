function SayMyName(){
    console.log("Hitesh");    
}
SayMyName()
// the vales are passed are called parameters
function addition(num1,num2)
{
    return num1+num2
}
// the vales are passed are called arguments
console.log(addition(3,4));
console.log(addition(3,"a"));
console.log(addition(3,"6"));

// for assigning a defult value username="sam"
function loginuser(username="sam")
{

}
function loginUser(username)
{
    if(username==undefined)
    {
        console.log("Please enter a username");
        return
        
    }
    return `${username } just logged in`
}
console.log(loginUser("Hitesh"));
console.log(loginUser());

// when we giving multiple values at a time and want them to execute one by one
// we can use ... meaning rest operator
// it means give me all of the parameters
function print(...num)
{
    console.log(...num)
}
print(12,3,45)

function Print(val1,...num)
{
    console.log(...num)
}
Print(12,3,45)

const user={
    username:"hitesh",
    price:199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
// or we can use other way like
handleObject(
    {
        username: "sam",
        price: 399
    }
)
const arr=[200,400,100,600]
function returnsecondvalue(getArray)
{
    return getArray[1]
}
console.log(returnsecondvalue(arr))


