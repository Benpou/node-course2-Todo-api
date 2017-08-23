
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
//const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5998a41d637e6b826cc78a3e';
var id = '5993e60ab1a3406a3a9d7ebb';

if (!ObjectID.isValid(id)) {
    return console.log('Id not valid')
}

User.findById('5993e60ab1a3406a3a9d7ebb').then((user) => {
    if (!user) {
        return console.log('No user');
    }

    console.log(JSON.stringify(user, undefined, 2));
});

// User.find({
//     id: id
// }).then((users) => {
//     console.log(users);
// });

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

//
// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('Id not found');
//     }
//     console.log('todo by id', todo);
// }).catch((e) => console.log(e));


