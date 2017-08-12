
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Uncable to connect to mongodb');
    }
    console.log('Connected to MongoDB server');

    // deleteMany

    db.collection('Todos').deleteMany({name: 'Jim'}).then((result) => {
        console.log(result);
    })

    //deleteOne
    db.collection('Todos').deleteOne({name:'Ben'}).then((result) => {
        console.log(result);
    })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({name: 'Ben'}).then((result) => {
    //    console.log(result);
    // });



    //db.close();
});