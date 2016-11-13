/*
 * 
 */

var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var port = 3000;

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var routes = require('./routes/index');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'secretsecret', resave: true, saveUninitialized: false}));

//paths
app.use('/', routes);

var server = app.listen(process.env.PORT || port);
var io = require('socket.io').listen(server);

io.on('connection', function (socket) {
  socket.on('login', function(username) {
  	io.broadcast.emit('login', username);
  });
});