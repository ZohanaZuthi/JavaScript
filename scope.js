if(true)
{
    let a=10
    const b=20
    var c=9
}
// console.log(a);
// console.log(b);
//  nested scope
// in this case we can call the function before the function declaration
one()
function one()
{
    const username="hitesh"
    function two()
    {
        const website="Youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    // console.log(website);
    
}
// function can be defined in another way
// in this way we can not call the function before function declaration
const addition =function(num)
{
    return num+1
}