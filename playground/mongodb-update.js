
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Uncable to connect to mongodb');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('598f665e0e30e088133a4242')
    }, {
        $set: {
            name: 'Andy',
        },
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(results);
    });

    //db.close();
});