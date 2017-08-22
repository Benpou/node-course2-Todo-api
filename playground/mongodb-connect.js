const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Uncable to connect to mongodb');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert to do', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    //
    //
    // db.collection('Users').insertOne({
    //     name: 'Ben',
    //     age: 28,
    //     location: 'LA'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });



    db.close();
});