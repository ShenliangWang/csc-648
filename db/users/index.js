const db = require('../connect');
var moment= require('moment');

var table = "users";
var insert = "INSERT INTO " + table + " ";
var select = "SELECT * FROM " + table + " ";
var update = "UPDATE " +  table + " ";
var del = "DELETE FROM " + table + " ";

/* insert new user to users table in db 
   Note: Testing required.
   @author: Felix. 	+ Julian		*/
  

function create_user(fname, lname, phone, email, pwd, callback) {
var mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

 db.query("INSERT INTO Users(firstname, lastname, phonenumber, associated_email, createdAt) VALUES ("+db.escape(fname)+", "+db.escape(lname)+", "+db.escape(phone)+", "+db.escape(email)+", "+mysqlTimestamp+")", 
    function(err,rows,fields) {
        if(err) {
            //res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})
	
	 db.query("INSERT INTO password(email, password) VALUES ("+db.escape(email)+", "+db.escape(pwd)+")", 
    function(err,rows,fields) {
        if(err) {
            //res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}


/* Gets user from db table user
   Note: Testing required.
   @author: Felix + Julian*/
function get_user(user_id, callback) {
    db.query("SELECT * FROM Users WHERE user_id = " + mysql.escape(user_id) +"", 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        } else {
            var users = [];
            for(var i = 0; i < rows.length; i++) {
                var user = {
		    'user_id' : rows[i].user_id,
                    'firstname' : rows[i].firstname,
                    'lastname' : rows[i].lastname,
                    'phonenumber' : rows[i].zipcode,
                    'email' : rows[i].email
                }
                users.push(user);
            }
            return callback(users);
        }})}

/* Update selected users's fname from db table users.
   Note: Testing required.
   @author: Felix. + Julian */

function set_fname(user_id,fname,callback) {
	db.query("UPDATE TABLE Users SET firstname = "+mysql.escape(fname)+" WHERE user_id = "+mysql.escape(user_id)+")", 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

function set_fname(user_email,fname,callback) {
	db.query("UPDATE TABLE Users SET firstname = "+mysql.escape(fname)+" WHERE email = "+mysql.escape(user_email)+")", 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

/* Update selected user's lname from db table userts.
   Note: Testing required.
   @author: Felix. + Julian */
function set_lname(user_id, lname, callback) {
	db.query("UPDATE TABLE Users SET lastname = "+mysql.escape(lname)+" WHERE user_id = "+mysql.escape(user_id)+")", 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

function set_lname(user_email,lname,callback) {
	db.query("UPDATE TABLE Users SET lastname = "+mysql.escape(lname)+" WHERE email = "+mysql.escape(user_email)+")", 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

/* Update selected user's phone from db table users.
   Note: Testing required.
   @author: Felix. 				 */
function set_phone(user_id,phone,callback) {
	db.query("UPDATE TABLE Users SET phonenumber = "+mysql.escape(phone)+" WHERE user_id = "+mysql.escape(user_id)+")", 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

function set_phone(user_email,phone,callback) {
	db.query("UPDATE TABLE Users SET phonenumber = "+mysql.escape(phone)+" WHERE email = "+mysql.escape(user_email)+")", 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}


/* Update selected user's email from db table users.
   Note: Testing required.
   @author: Felix. + Julian */
function set_email(user_id,email,callback) {
	db.query("UPDATE TABLE Users SET email = "+mysql.escape(email)+" WHERE user_id = "+mysql.escape(agent_id)+")", 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

/* Update selected users's password from db table userss. 
  @author: Felix. + Julian 
*/
function set_password(user_email,pword,callback) {
	db.query("UPDATE TABLE password SET password = "+mysql.escape(pword)+" WHERE email = "+mysql.escape(user_email)+")", 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}




module.exports = {
	create_user,
	get_user,
	set_fname,
	set_lname,
	set_phone,
	set_email,
	set_password
};
