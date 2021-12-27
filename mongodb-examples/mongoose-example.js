(async function() {
    const mongoose = require('mongoose');

    /*If you want to access the database as a particular user, 
    you can add the username and password in front of the hostname.
    var dbURI = 'mongodb://username:password@localhost/mydatabase';
    **/
    const dbURI = 'mongodb://localhost:27017/test';
    const dbOptions = { 'user': 'root', 'pass': 'root' };

    mongoose.connection
        .on('error', (err) => console.log('Mongoose connection error: ' + err))
        .on('connected', () => console.log(`Mongoose connected on ${dbURI}`))
        .on('disconnected', () => console.log('Mongoose disconnected'));

    mongoose
        .connect(dbURI)
        //.connect(dbURI, dbOptions)
        .then(() => console.log(`connected`))
        .catch(err => console.log(err));

    const kittySchema = new mongoose.Schema({
        name: String
    });


    // add "speak" functionality to our documents:
    // NOTE: methods must be added to the schema before compiling it with mongoose.model()

    // yes, can do, but avoid since doesn't belong to data layer (what if using microservice)
    kittySchema.methods.speak = function speak() {
        const greeting = this.name ?
            "Meow name is " + this.name :
            "I don't have a name";
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



    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Mongoose disconnected through app termination');
            process.exit(0);
        });
    });


})()