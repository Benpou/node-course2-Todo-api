var mongoose = require('mongoose');


var user = mongoose.model('user', {

    firstName: {
        require: true,
        minlength: 1,
        type: String
    },
    lastName: {
        require: true,
        minlength: 1,
        type: String
    }
    ,
    email: {
        require: true,
        trim: true,
        type: String,
        minlength: 3
    }
});


module.exports = {user};

