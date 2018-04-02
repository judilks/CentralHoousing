var mongoose = require('mongoose');

let Schema = mongoose.Schema

var userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    housingNumber: {
       type: String,
        required: true
    },
    loginInformation: {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }

})

var roomSchema = new Schema({
    roomNumber: {
        type: String,
        required: true
    },
    floor: {
        type: String,
        required: true
    },
    building: {
        type: String,
        required: true
    },
    AC: {
        type: String,
        required: true
    },
    Bathroom: {
        type: String,
        required: true
    },
    Capacity: {
       type: String,
        required: true
    },
    Occupants: {
        occupant1: {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            }  
        },
        occupant2: {
            firstName: {
                type: String,
                required: true
            },
            lastName: {
                type: String,
                required: true
            }  
        },
        occupant3: {
            firstName: {
                type: String,
                required: false
            },
            lastName: {
                type: String,
                required: false
            }  
        }
    }
        
})

//var userModel = mongoose.model('users', userSchema);
//let roomModel = mongoose.model('rooms', roomSchema)

//exports.userModel = userModel;
//exports.roomModel = roomModel;
