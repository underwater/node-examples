


// for each works for this array
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

// why not able to iterate through all parameters ?
function DoWork(a, b, c, ...othersParams) {
    console.log(`number of args = ${arguments.length}`);

    let args1 = Array.from(arguments);
    let args2 = [...arguments];

    args1.forEach(arg => {
        console.log(` ${arg}`);
    });

    args2.forEach(arg => {
        console.log(` ${arg}`);
    });


    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);

    console.log(typeof (othersParams));

    //“Array-like” means that arguments has a length property and properties indexed from zero, but it doesn't have Array's built-in methods like forEach() or map()
    othersParams.forEach(arg => {
        console.log(` ${arg}`);
    });

    // why no stack overflow due to recursion
   // DoWork('hello', 2, 5, 'other params');
}

DoWork('hello', 2, 5, 'other params');