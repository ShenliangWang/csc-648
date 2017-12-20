var express = require('express');
var router = express.Router();
const  db  = require('../db');

var expressValidator = require('express-validator');
var passport = require('passport');

var bcrypt = require('bcrypt');
const saltRounds = 10;

/* Get Registration Page */
router.get('/', function(req,res,next) {
    res.render('register');
});

/* Register validated user and insert into users table */
router.post('/', function(req,res,next) {
    
    /* Field validation */
    req.checkBody('fname', 'First Name field cannot be empty.').notEmpty();
    req.checkBody('lname', 'Last Name field cannot be empty.').notEmpty();
    req.checkBody('email', 'The email you entered is invalid.').isEmail();
    req.checkBody('email', 'The email you entered is of invalid length.').len(4, 100);
    req.checkBody('pwd', 'Password must be at least 8 characters long.').len(8, 100);
    req.checkBody("pwd", "Password must include one lowercase character, one uppercase character, a number, and a special character.")
                 .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/, "i");
    req.checkBody('pwd-match', 'Password must be between 8-100 characters long.').len(8, 100);
    req.checkBody('pwd-match', 'Passwords do not match.').equals(req.body.pwd);

    const errors = req.validationErrors();

    if (errors) {
        console.log(`errors: ${JSON.stringify(errors)}`);
        res.render('register', {errors: errors});
    }
    else { //add new user
        var fname = req.body.fname;
        var lname = req.body.lname;
        var phone = req.body.phone;
        var email = req.body.email;
        var pwd = req.body.pwd;

        /* Hashes plain-text pw and stores hash into pw db */
        bcrypt.hash(pwd, saltRounds, function(err,hash) {
            db.Users.create_user(fname,lname,phone,email,hash, (err)  => {
                if(err) {console.log(err); throw err;}

                var conn = require('../db/connect');
                conn.query('SELECT LAST_INSERT_ID() as user_id', function(error, results, fields) {
                    if(error) throw error;

                    const user_id = results[0];
                    console.log(results[0]);
                    req.login(user_id, function(err) {
                        res.redirect('/');
                    });
                });
            });
        })
    }

});

passport.serializeUser(function(user_id, done) {
    done(null, user_id);
});
  
passport.deserializeUser(function(user_id, done) {
    done(null, user_id);
});

module.exports = router;