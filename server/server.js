var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./modles/todo');
var {User} = require('./modles/user');

var app = express();


app.use(bodyParser.json());



app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text

    });
    console.log(req.body);
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.post('/users', (req, res) => {
   var user = new User({
       email: req.body.email
   });
   user.save().then((doc) => {
       res.send(doc);
   }, (e) => {
       res.status(400).send(e);
   })
});

app.listen(3000, () => {
    console.log('Started on the port 3000');
});





