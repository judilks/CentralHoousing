var react = require('react');
var mongoose = require('mongoose');
import user from './User.js';

function handleRequest(data) {
    var uri = 'mongodb://localhost:27017/centralhousing'
    mongoose.connect(uri);
    var connection = mongoose.connection;
    connection.on('error', console.log('Mongo Connection Error'));
    connection.once('open', () => {
        
    })
}