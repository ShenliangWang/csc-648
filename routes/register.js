var express = require('express');
var router = express.Router();
const  db  = require('../db');

router.get('/', function(req,res,next) {
    res.render('register');
});

/* Register validated user and insert into users table */
router.post('/', function(req,res,next) {
    var fname = req.body.username;
    var lname = req.body.email;
    var phone = req.body.phone;
    var email = req.body.email;
    var pwd = req.body.pwd;

    db.Users.create_user(fname,lname,phone,email,pwd, (err)  => {
        if(err) {
            console.log(err);
        }
        else { //success
            res.redirect('/');
        }
    });
});

module.exports = router;