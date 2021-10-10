const array = [1,2,3,4,5,6,7,8,9,10];

const foreach = array.forEach(n =>{});
console.log(foreach)

const filter = array.filter(n => n%2); 
console.log(filter)

const find = array.find(n => n>7); 
console.log(find)

const map = array.map(n => n*2); 
console.log(map)

const reduce = array.reduce(factorialFunc); 
console.log(reduce);

function  factorialFunc (previous,current,index,array){
    return previous * current
}

