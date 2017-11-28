var express = require('express');
var router = express.Router();
const  Listings  = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Essos Prototype' });
});

router.get('/test', function(req, res, next) {
    
    req.check('search','Invalid search input').escape(req.query.search);//Sanatize the input by escaping harmful chars --Required
	//req.check('search','Invalid search input').isAlphanumeric(req.query.search,[en-US]);//checks if the string is alpha-numeric and US chars --helpful
    
    Listings.Listings.search(req.query.search, (searchResults) => {
        res.render('test', { title: 'Results Page', search: req.query.search, results: searchResults});
    });
});

module.exports = router;
