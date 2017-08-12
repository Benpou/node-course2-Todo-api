
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Uncable to connect to mongodb');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('598f4ab149f6f66f078821d6')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch', err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos counts: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch', err);
    // })

    db.collection('Users').find({name: 'Sadaf'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch', err);
    })

    //db.close();
});