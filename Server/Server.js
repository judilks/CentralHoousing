var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var models = require('./Models.js')
var app = express();
var router = express.Router();
var port = 3001
var group = require("./Group.js");

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

//Will move to models file later. having trouble importing
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
    displayName: {
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
    },
    loginStatus: {
        type: Boolean,
        required:true
    }

})

var roomSchema = new Schema({
    roomNumber: {
        type: String,
        required: true
    },
    building: {
        type: String,
        required: true
    },
    floor: {
        type: String,
        required: true
    },
    displayName: {
        type:String
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
    occupants: []
        
})


var roomModel = mongoose.model('rooms', roomSchema)
var userModel = mongoose.model('users', userSchema)

// function generateRooms(building, numberOfRooms, floor, startingRoom) {
//     for(i= startingRoom; i<numberOfRooms; i++){
//         var room = new roomModel({ 
//             roomNumber: i,
//             floor: floor,
//             building: building,
//             AC: 'No',
//             bathroom: 'Public',
//             capacity: '2',
//             occupied:false
//         });
//         room.save(function(err, room){
//             if(err) console.log(err)
//             console.log(room)
//         })
//     }
// }

mongoose.connect('mongodb://localhost:27017/centralhousing')

var currentGroups = []
var loggedInUsers = []

router.post('/logIn/', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    userModel.findOne({'loginInformation.username': username}, function (err, user) {
        if(!user || password != user.loginInformation.password //|| user.loginStatus === true
        ) {
            res.sendStatus(401);
        }
        else{
            res.send(user);
            user.loginStatus = true
            user.save()
            var currentUser = new User(user)
            loggedInUsers.push(currentUser);
            var group = new Group([user])
            currentGroups.push(group)
        } 
    })
})

router.post('/logOut/', (req,res) => {
    currentUser = req.body
    userModel.findOne({'id': currentUser.id}, function (err, user) {
        user.loginStatus = false
        user.save()
    })
    for (var k in loggedInUsers) {
        if(loggedInUsers[k].userInfo.id === currentUser.id){
            loggedInUsers.splice(k, 1)
        }
    }
    var locations = findUserInGroup(currentUser)
    removeUserFromGroup(locations[0], locations[1])
    res.sendStatus(202)
        
})

router.post('/register/', (req, res) => {
    var registerInformation = req.body;
    var user = new userModel({ 
        firstName: registerInformation.firstName,
        lastName: registerInformation.lastName,
        displayName: registerInformation.firstName + ' ' + registerInformation.lastName,
        email: registerInformation.email,
        gender: registerInformation.gender,
        id: registerInformation.id,
        housingNumber: Math.floor((Math.random() * 100) + 1),
        loginInformation: {
            username: registerInformation.username,
            password: registerInformation.password
        },
        loginStatus: false
    });
    user.save(function(err, user){
        if(err){
            res.sendStatus(400)
        }
        else{
            res.sendStatus(201)
        }
    })
})

router.get('/getUsers/', (req, res) => {
    userModel.find({'loginStatus': true}, function (err, users) {
        res.send(users)
    })
})

router.post('/sendInvite/', (req,res) => {
    var currentUser = req.body.currentUser
    var selectedUser = req.body.selectedUser
    for(i in loggedInUsers) {
        if(loggedInUsers[i].userInfo.id === selectedUser.id){
            loggedInUsers[i].invites.push(currentUser)
            res.sendStatus(202)
        }
    }       
})

router.post('/getInvites/', (req, res) => {
    var currentUser = req.body
    var haveInvites = false
    for (i in loggedInUsers) {
        if(loggedInUsers[i].userInfo.id === currentUser.id) {
            if (loggedInUsers[i].invites.length != 0) {
                var invites = loggedInUsers[i].invites
                haveInvites = true
            }
        }        
    }
    if(haveInvites) {
        res.send(invites[0])
        invites.shift()
    }
    else{
        res.sendStatus(203)
    }
})

router.post('/acceptInvite/', (req, res) => {
    var currentUser = req.body.currentUser
    var selectedUser = req.body.selectedUser
    var locations = findUserInGroup(currentUser)
    if(removeUserFromGroup(locations[0], locations[1])){
        locations = findUserInGroup(selectedUser)
        if(addUserToGroup(currentUser, locations[0])) {
            res.sendStatus(201)
        }
        else{
            res.sendStatus(203)
        }
    }
    else{
        res.sendStatus(203)
    }
})

router.post('/getGroupInfo/', (req, res) => {
    var currentUser = req.body
    var locations = findUserInGroup(currentUser)
    if(locations !== undefined){
        currentGroup = currentGroups[locations[0]]
    }
    else{
        currentGroup = ""
    }
    let averageNumbersArray = []
    for (i in currentGroups) {
        averageNumbersArray.push(currentGroups[i].getAverageNumber())
    }
    groupInfo = {
        peckingOrder: averageNumbersArray,
        currentGroup: currentGroup
    }
    res.send(groupInfo)
})

router.post('/leaveGroup/', (req,res) => {
    currentUser = req.body
    var locations = findUserInGroup(currentUser)
    removeUserFromGroup(locations[0], locations[1])
    var group = new Group([currentUser])
    currentGroups.push(group)
    console.log(currentGroups)
    res.sendStatus(202)
        
})

router.get('/getAverageNumberGroups/', (req, res) => {
    let averageNumbersArray = []
    for (i in currentGroups) {
        averageNumbersArray.push(currentGroups[i].getAverageNumber())
    }
    res.send(averageNumbersArray)
})

router.post('/getRooms/', (req, res) => {
    var building = req.body.building
    var floor = req.body.floor
    roomModel.find({'building': building, 'floor': floor, occupied:false}, function (err, rooms) {
        res.send(rooms)
    })
})

router.post('/confirmRoomSelection/', (req,res) => {
    newGroup = req.body
    newGroup.users.forEach((user) => {
        roomModel.findOne({displayName: user.roomNumber}, function (err, room) {
            if(err)
                res.sendStatus(203)
            if(room.occupants === undefined)
                room.occupants = []
            room.occupants.push(user)
            room.occupied = true
            room.save()

        })
    });
    var locations = findUserInGroup(newGroup.users[0])
    currentGroups.splice(locations[0], 1)
})

//Group Functions
function removeUserFromGroup(i, j){
    user = currentGroups[i].users.splice(j, 1)
    if(user.length > 0) {
        if(currentGroups[i].users.length === 0) {
            currentGroups.splice(i, 1)
            return true
        }
        else{
            currentGroups[i].updateAverageNumber()
            return true
        }
    }
    else{
        return false
    }

}

function addUserToGroup(currentUser, i){
    var currentLength = currentGroups[i].users.length
    var newLength = currentGroups[i].users.push(currentUser)
    if(newLength > currentLength) {
        currentGroups[i].updateAverageNumber()
        return true
    }
    else {
        return false
    }    
}

function findUserInGroup(currentUser){
    for(var i in currentGroups) {
        for(var j in currentGroups[i].users) {
            if(currentUser.loginInformation.username === currentGroups[i].users[j].loginInformation.username) {
                return [i,j]
            }
        }
    }

}



//GROUP
function Group(user) {
    this.users = user;
    this.averageNumber = user[0].housingNumber
    this.groupLeader = user[0]
}

Group.prototype.getUsers = function() {
    return this.users;
}

Group.prototype.addUser = function(user) {
    this.users.push(user)
}
//refactor not in use
Group.prototype.removeUser = function(user) {
    let userLocation = this.users.find(user)
    this.users.splice(userLocation, 1)
}
//refactor not in use
Group.prototype.getUser = function(user) {
    let userLocation = this.users.find(user)
    return this.users[userLocation]
}

Group.prototype.updateAverageNumber = function() {
    let numbers = []
    for(var i in this.users) {
        numbers.push(parseInt(this.users[i].housingNumber))
    }
    let average = numbers.reduce((total, amount) => total + amount)
    this.averageNumber = average / numbers.length
}

Group.prototype.getAverageNumber = function() {
    return this.averageNumber
}

module.exports = Group;

//USER
function User(userInfo) {
    this.userInfo = userInfo;
    this.invites = []
}

User.prototype.getUserInfo = function() {
    return this.userInfo;
}

User.prototype.addInvite = function(user) {
    this.invites.push(user)
}

User.prototype.removeInvite = function(userInfo) {
    val = this.invites.indexOf(this.userInfo)
    this.invites.splice(val, 1)
}

module.exports = User
