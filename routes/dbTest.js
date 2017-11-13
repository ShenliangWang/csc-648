var express = require('express');
var router = express.Router();
var db = require('../db.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('dbTest', { title: 'tester' });
});

router.get('/test', function(req, res, next) {
    db.search(req.query.search, (searchResults) => {
        res.render('test', { title: 'Results Page', search: req.query.search, results: searchResults});
    });
});

module.exports = router;
