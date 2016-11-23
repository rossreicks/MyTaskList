//=============== Imports ===============================

var express = require("express");
var app = express();
var mongoose = require('mongoose');
var database = require('./config/database');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var port = 3000;

//================ Configuration ========================

app.use(express.static(__dirname + '/public')); 
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());

//=============== Routes ================================

require('./app/routes')(app);

//=============== Database ==============================

mongoose.connect(database.url);

//================ Server Start =========================

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
})