var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1192",
    database: "essos_local"
});

connection.connect(error => {
    if(error) throw error;
    console.log("Connected to database");
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Essos Prototype' });
});

router.get('/test', function(req, res, next) {
    connection.query("SELECT * "+
                     "FROM listings " +
                     "WHERE city LIKE '%" + req.query.search +"%' " +
                     "OR zipcode LIKE '%" + req.query.search +"%'",
     function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
        } else {
            var listings = [];
            for(var i = 0; i < rows.length; i++) {
                var listing = {
                    'address' : rows[i].address_id,
                    'city' : rows[i].city,
                    'zipcode' : rows[i].zipcode,
                    'price' : rows[i].price,
                    'sqft' : rows[i].sqrft,
                    'type' : rows[i].type
                }

                listings.push(listing);
            }
        }
        res.render('test', { title: 'Results Page', search: req.query.search, results: listings});
    })
});

module.exports = router;
