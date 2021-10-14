// newbie, using a promis
const axios = require('axios');

const url = 'www.google.com';
let res = axios.get(url); 
  res
  .then(data=> data.response) // implicit return (everytime we use arrow function) 
  .then(v => DoSomething(v))
  // will happen after 2 sec
  .then(noValue => {throw new Error('a problem')});// will happen after)

  function DoSomething(data){
      return new Promise( (res, rej) => {
        setTimeout((data )=> console.log(v), 2000)
      }
         
      )
  }
console.log(`Start ....`)

let p = new Promise( 
    (res, req) =>{
            console.log("do slow work here");
            return {message : "hello"}
});

p.then(
    msg => {console.log(`resolve - value: ${msg}`)},
    msg => {console.log(`rejected - value: ${msg}`)},
     
);


console.log(`End ....`)