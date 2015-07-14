var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var User = require('./db/models/user.js');
var db = require('./db/config.js');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

module.exports = app;
