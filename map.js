// map holds key values
const map=new Map()
map.set('BAN',"Bangladesh")
map.set('UN',"United Nation")
map.set('USA',"United states of America")
map.set('UK',"United Kingdom")

console.log(map);
// for...in is for objects: The for...in loop is designed to iterate over the enumerable properties of plain objects, not Map objects.
for(const key of map)
{
    console.log(key);
    
}
for(const [key,value] of map)
{
        console.log(key);
        
}

const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

const fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}