
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((reuslt) => {
//    console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('59a1e3cbdc048fcc96e952c7').then((todo) => {
   console.log(todo);
});

