//use defined env variables for db connections
require("dotenv").config();

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var db = require('./db');

// File Uploads
var multer = require('multer');
var storage = multer.diskStorage({
  destination: './public/images/',
  filename: function(req, file, cb) {
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({
  storage: storage,
  limits: {fileSize: 1000000},
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('enter field name here'); //TODO

function checkFileType(file, cb) {
  var filetypes = /jpeg|jgp|png|gif/;
  var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  var mimetype = filetypes.test(file.mimetype);
  if(mimetype && extname) {
    return cb(null,true);
  } else {
    cb('Error: Images only!');
  }
}

// Authentication Packages
var session = require('express-session');
var passport = require('passport');
var MySQLStore = require('express-mysql-session')(session);

var index = require('./routes/index');
var users = require('./routes/users');
var dbTest = require('./routes/dbTest');
var register = require('./routes/register');
var login = require('./routes/login');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Passport - Sessions
var options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

var sessionStore = new MySQLStore(options);

app.use(session({
  secret: 'ahlkdsjfuiuwe',
  resave: false,
  store: sessionStore,
  saveUninitialized: false,
  //cookie: { secure: true }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/users', users);
app.use('/dbTest', dbTest);
app.use('/register', register);
app.use('/login', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//commented out for debugging
/*app.get('/test', expressValidator(validation.test), function(req, res){//NEW
    res.json(200);
});

app.get('/test', expressValidator(test), function(req, res){//NEW  
    res.json(200);
});*/

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err) {
      //res.render...
    }
    else {
      if(req.file == undefined) {
        //... no file selected
      }
      console.log(req.file);
    }
  });
});

module.exports = app;
