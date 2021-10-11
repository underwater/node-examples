
function outerFunc() {

    let outerVar = 'I am outside!';
    
    function innerFunc() {
      console.log(outerVar); // => logs "I am outside!"
    }
    return innerFunc;
  }
  
  const myInnerFunc = outerFunc();
  myInnerFunc();
//  Now innerFunc() is executed outside of its lexical scope. And what’s important:
// innerFunc() still has access to outerVar from its lexical scope, even being executed outside of its lexical scope.



/*capturing variables from the lexical scope is useful in callbacks.
A setTimeout() callback:
*/

const message = 'Hello, World!';
setTimeout(function callback() {
  console.log(message); // logs "Hello, World!"
}, 1000);

// The callback() is a closure because it captures the variable message.
//An iterator function for forEach():

let countEven = 0;
const items = [1, 5, 100, 10];
items.forEach(function iterator(number) {
  if (number % 2 === 0) {
    countEven++;
  }
});
countEven; // => 2
//The iterator is a closure because it captures countEven variable.