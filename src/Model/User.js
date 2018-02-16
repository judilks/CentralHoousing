var mongoose = require('mongoose');

let Schema = mongoose.Schema

var userSchema = new Schema({
    firstName: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    lastName: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    gender: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    id: {
        type: mongoose.Schema.Types.Int64,
        required: true
    },
    housingNumber: {
        type: mongoose.Schema.Types.Int32,
        required: true
    },
    loginInformation: {
        username: {
            type: mongoose.Schema.Types.String,
            required: true
        },
        password: {
            type: mongoose.Schema.Types.String,
            required: true
        }
    }

})