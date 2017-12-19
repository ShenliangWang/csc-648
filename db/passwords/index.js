const db = require('../connect');

var table = "passwords";
var insert = "INSERT INTO " + table + " ";
var select = "SELECT * FROM " + table + " ";
var update = "UPDATE " +  table + " ";
var del = "DELETE FROM " + table + " ";

/* Gets password associated with a particular email from passwords table in db 
   Note: Testing req'd
   @author: Felix
//upadated   */
function get_password(email, callback) {
	db.query(select password FROM password + 
		"WHERE email= ?",[email], 
	       function(err, result) {
		       if(err) {
			       res.status(500).json({"status_code": 500,"status_message": "internal server error"});
			       return callback(err);
		       } else {
			       return callback(result);
		       }})}

/* Sets password in table passwords associated with a particular email in db
   Note: Testing req'd
   @author: Felix		
   */
   //updated
   
function set_password(email, password, callback) {
	db.query(update +
			"SET password=? WHERE email=?",[password, email],
		   function(err, result) {
			if(err) {
				res.status(500).json({"status_code": 500,"status_message": "internal server error"});
				return callback(err);
			} else {
				return callback(result);
			  }})}




module.exports = {
	get_password,
	set_password
};
