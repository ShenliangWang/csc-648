var express = require('express');
var router = express.Router();
const  db  = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    res.render('index', { title: 'Essos Real Estate'});
});

/* Home page route workaround */
router.get('/fa17g06', function(req, res, next) {
    res.redirect('/fa17g06/');
});

router.get('/test', function(req, res, next) {
    
    req.check('search','Invalid search input').escape(req.query.search);//Sanatize the input by escaping harmful chars --Required
	//req.check('search','Invalid search input').isAlphanumeric(req.query.search,[en-US]);//checks if the string is alpha-numeric and US chars --helpful
    
    db.Listings.search(req.query.search, (searchResults, rows) => {
        
        /*
        for(var listing of searchResults) {
            db.Images.get_listing_images(listing.id, (path) => {
                listing.thumb = path[0].img;
            });
        }*/

        res.render('test', { title: 'Results Page', search: req.query.search, results: searchResults, search_val: req.query.search, resultsFound: rows});
    });
});

module.exports = router;
