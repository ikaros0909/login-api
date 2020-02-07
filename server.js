var express    = require('express');
var app        = express();
var path       = require('path');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var config = require("./config/config.json");
var env = process.env.NODE_ENV || "development";

// Database
mongoose.Promise = global.Promise;

var options = {
    user: config[env].MONGO_DB_LOGIN_API.user,
    pass: config[env].MONGO_DB_LOGIN_API.pass,
    useMongoClient: true
  };

mongoose.connect(config[env].MONGO_DB_LOGIN_API.url, options);

var db = mongoose.connection;
db.once('open', function () {
   console.log('DB connected!');
});
db.on('error', function (err) {
  console.log('DB ERROR:', err);
});

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, x-access-token');
  next();
});

// API
app.use('/api/users', require('./api/users'));
app.use('/api/auth', require('./api/auth'));

// Server
var port = 3000;
app.listen(port, function(){
  console.log('listening on port:' + port);
});
