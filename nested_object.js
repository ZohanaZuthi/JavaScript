const n_obj={

    name:{
        firstname:"Nazifa",
        middlename:"Fairuz",
        lastname:"Zuthi"

    },
    hobby:{
        first:"Art",
        second:"Anime"

    }
}
console.log(n_obj.name?.firstname)
// this what sign is not mandatory it is given for explanation for if you dont find the element
const obj1={1:"I",2:"He",3:"who"}
const obj2={4:"I",5:"SHe",6:"whom"}

const obj3={obj1,obj2}
console.log(obj3)
// but we dont want nested obj
const obj4={...obj1,...obj2}
console.log(obj4)
const obj5=Object.assign({},obj1,obj2,obj4)
console.log(obj5)
