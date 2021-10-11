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