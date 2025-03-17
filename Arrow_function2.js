const obj = {
    username: "Hitesh",
    greet: function () {
        console.log(this.username); // `this` refers to `obj`
    },

    greet1: () => {
        console.log(this.username); // `this` refers to the global object (not `obj`)
    }
};

obj.greet(); // Output: Hitesh
obj.greet1()
// when we write the statement in a cali bracket we dont need to call return
const addition=(num1,num2)=>({username:"hitesh"})
console.log(addition(1,4))

