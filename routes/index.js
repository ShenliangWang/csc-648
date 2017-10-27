var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();



app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));


/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Fuck All' });

var querey = req.param('querey');
res.send(querey);

});

//router.get('/test', function(req, res, next) {
//res.render('index', { title: 'Express:Test' });
//var querey = req.param('querey');
//res.send(querey);
//});





module.exports = router;
