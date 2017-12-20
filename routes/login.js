var express = require('express');
var router = express.Router();
const  db  = require('../db');

/* Get Login Page */
router.get('/', function(req,res,next) {
    res.render('login');
});

module.exports = router;