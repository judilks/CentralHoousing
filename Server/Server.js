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

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

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