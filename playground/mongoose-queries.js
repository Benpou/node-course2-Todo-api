const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


var id = '5998a41d637e6b826cc78a3e';

Todo.find({
    _id: id
)}.then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
)}.then((todos) => {
    console.log('Todo', todo);
});

