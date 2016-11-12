/*
 * 
 */

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var port = 3000;

var app = express();

var routes = require('./routes/index');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'secretsecret', resave: true, saveUninitialized: false}));

//paths
app.use('/', routes);

app.listen(process.env.PORT || port);