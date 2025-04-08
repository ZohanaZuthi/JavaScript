const one=document.getElementById('li')
console.log(one.childNodes)
console.log(one.childNodes[0])
console.log(one.parentNode)
console.log(one.parentNode.parentNode)
console.log(one.parentNode.parentNode.parentNode)
console.log(one.parentNode.parentNode.parentNode.parentNode)

const two=document.createElement('li')
two.innerText='Pithapuli';
one.appendChild(two)