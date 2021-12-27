var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27019/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    //address starts with the letter "S":
    var query = { address: /^S/ };
    var projection = { projection: { _id: 0, name: 1, address: 1 } };
    dbo
        .collection("customers")
        .find(query, projection)
        .toArray(logResult(db));
});

function logResult(db) {
    return function(err, result) {
        if (err)
            throw err;
        console.log(result);
        db.close();
    };
}