var mongoose = require('mongoose');


var User = mongoose.model('User', {

    email: {
        require: true,
        trim: true,
        type: String,
        minlength: 3
    }
});


module.exports = {User}

