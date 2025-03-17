const user={
    username:"hitesh",
    price:199,
    welcome: function()
    {
        console.log(`${this.username}, welcome to website`);
        
    }
}
user.welcome()
user.username="Sam"
user.welcome()
let username="Hitesh"

function chai(){
    console.log(this);
    let username="Juthi"
    // folowing this refers to global username
    console.log(this.username);

    console.log(`${this.username}`);
    
    
}
chai()
console.log(this);

// arrow function

const chaii=()=>{
    let username="hitesh"
    // folowing this refers to global username
    console.log(this.username);
    
    console.log(`${this.username}`);
}
chaii()
