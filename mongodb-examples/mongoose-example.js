(async function(){
const mongoose = require('mongoose');

main()
    .then(() => console.log(`connected`))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}

const kittySchema = new mongoose.Schema({
    name: String
});

//compiling our schema into a Model.
//const Kitten = mongoose.model('Kitten', kittySchema);



// add "speak" functionality to our documents:
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
};



const Kitten = mongoose.model('Kitten', kittySchema);

// create an example kitten
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
/*Functions added to the methods property of a schema get compiled 
into the Model prototype and exposed on each document instance:
*/
const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"

//Each document can be saved to the database by calling its save method
await fluffy.save();
fluffy.speak();
//We can access all of the kitten documents through our Kitten model.
const kittens = await Kitten.find();
console.log(kittens);
// If we want to filter our kittens by name, Mongoose supports MongoDBs rich querying syntax.
await Kitten.find({ name: /^fluff/ });

})()