var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var models = require('./Models.js')
var app = express();
var router = express.Router();
var port = 3001

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-requested-With, content-type, authorization');
    next();
})
app.use('/api', router); 
app.listen(port, function() {
    console.log(`api running on port ${port}`);
});

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
    bathroom: {
        type: String,
        required: true
    },
    capacity: {
       type: String,
        required: true
    },
    occupied: {
        type: Boolean,
        required:true
    },
    occupants: {
        occupant1: {
            firstName: {
                type: String,
                required: false
            },
            lastName: {
                type: String,
                required: false
            }  
        },
        occupant2: {
            firstName: {
                type: String,
                required: false
            },
            lastName: {
                type: String,
                required: false
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


var roomModel = mongoose.model('rooms', roomSchema)

function generateRooms(building, numberOfRooms, floor, startingRoom) {
    for(i= startingRoom; i<numberOfRooms; i++){
        var room = new roomModel({ 
            roomNumber: i,
            floor: floor,
            building: building,
            AC: 'No',
            bathroom: 'Public',
            capacity: '2',
            occupied:false
        });
        room.save(function(err, room){
            if(err) console.log(err)
            console.log(room)
        })
    }
}

mongoose.connect('mongodb://localhost:27017/centralhousing')
var userModel = mongoose.model('users', userSchema)

router.post('/getUser/', (req, res) => {
    console.log(req.body)
    var username = req.body.username;
    var password = req.body.password;
    console.log('attempting find')
    userModel.findOne({'loginInformation.username': username}, function (err, user) {
        if(!user || password != user.loginInformation.password) {
            res.send(401);
            throw err
        } 
        res.send(user);
    })
})

router.get('/getUsers/', (req, res) => {
    console.log('attempting find')
    userModel.findOne({'loginInformation.username': 'dilksj1'}, function (err, user) {
        res.send(user);
    })
})
