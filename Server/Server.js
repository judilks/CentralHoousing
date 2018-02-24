//import user from './User.js';
'use strict'
var express = require('express');
var mongoose = require('mongoose');

var app = express();
var router = express.Router();
var port = 3001

app.get('/api/users', (req, res) => {

    var users = [
      {username: 'jdilks', password: 'blahblah'}  
    ];
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(users));
    console.log(res);
  });

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