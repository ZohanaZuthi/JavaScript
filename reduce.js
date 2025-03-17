const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0); // Initial value set to 0

console.log(myTotal);


const myNum = [1, 2, 3];

const myTota = myNum.reduce((acc, currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0); // Initial value set to 0

console.log(myTota);
const shoppingCart = [
    { item: "Laptop", price: 1000 },
    { item: "Phone", price: 500 },
    { item: "Headphones", price: 100 },
    { item: "Mouse", price: 50 }
  ];
  
  const totalPrice = shoppingCart.reduce((acc, currItem) => {
    console.log(`acc: $${acc} and adding item: ${currItem.item} with price: $${currItem.price}`);
    return acc + currItem.price;
  }, 0); // Initial value set to 0
  
  console.log(`Total Price: $${totalPrice}`);
  