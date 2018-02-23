//import user from './User.js';
'use strict'
var express = require('express');
var react = require('react');
var mongoose = require('mongoose');

var app = express();
var router = express.Router();
var port = 3001

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
   
    res.setHeader('Access-Control-Allow-Credentials', 'true');
   
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
   
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
   
   //and remove cacheing so we get the most recent comments
   
    res.setHeader('Cache-Control', 'no-cache');
   
    next();
   
   });

router.get('/', function(req, res) {

    res.json({ message: 'API Initialized!'});
   
});

app.use('/api', router);

app.listen(port, function() {

    console.log(`api running on port ${port}`);
   
   });

handleRequest(data, req) {
    var uri = 'mongodb://localhost:27017/centralhousing'
    mongoose.connect(uri);
    var connection = mongoose.connection;
    connection.on('error', console.log('Mongo Connection Error'));
    connection.once('open', () => {
         if(req === "Login") {

        }
    })
}

export default Driver