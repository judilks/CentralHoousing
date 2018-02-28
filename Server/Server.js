//import user from './User.js';
'use strict'
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
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

router.get('/', function(req, res) {
    console.log('hello')
    let tempRes = { username: 'dilksj1', password:'626yjjiz' }
    res.json(tempRes);
});

router.post('/getUser/', (req, res) => {
    var user = {
        "_id":"5a749892cfb9c6015c91052a",
        "firstName":"Justin",
        "lastName":"Dilks",
        "email":"dilksj1@central.edu",
        "gender":"M",
        "id":"1079753",
        "housingNumber":1,
        "loginInformation":{"username":"dilksj1","password":"626yjjiz!"}}
    var username = req.body.username;
    var password = req.body.password;
    console.log(req.body)
    if(user.loginInformation.username === username && user.loginInformation.password === password)
        res.json(user);
    else
        res.json('error')
})



app.use('/api', router);

/*app.get('/api/users', (req, res) => {
    var users = [
      {username: 'jdilks', password: 'blahblah'}  
    ];
    res.send('hello world');
    console.log(res);
  });
*/
app.listen(port, function() {

    console.log(`api running on port ${port}`);
   
   });

function handleRequest(data, req) {
    var uri = 'mongodb://localhost:27017/centralhousing'
    mongoose.connect(uri);
    var connection = mongoose.connection;
    connection.on('error', console.log('Mongo Connection Error'));
    connection.once('open', () => {
         if(req === "Login") {

        }
    })
} 