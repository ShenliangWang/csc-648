const db = require('../connect');

var table = "users";
var insert = "INSERT INTO " + table + " ";
var select = "SELECT * FROM " + table + " ";
var update = "UPDATE " +  table + " ";
var del = "DELETE FROM " + table + " ";

/* insert new user to users table in db 
   Note: Testing required.
   @author: Felix. 			*/
   function create_user(fname, lname, phone, email, pwd, callback) {
	var mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

	db.query(  insert + 
		   "(firstname, lastname, phonenumber, email, created_at, updated_at) " + 
		     "VALUES " + 
		     "(" + mysql.escape(fname) + "," + mysql.escape(lname) + "," + mysql.escape(phone)
		     + "," + mysql.escape(email) +"," + mysqlTimestamp + "," + mysqlTimestamp +  ")",
		     function(err, user) {
			     if(err) {
				res.status(500).json({"status_code": 500,"status_message": "internal server error"});
				return callback(err);
			    } else {
				   return callback(user); 
			     }
		     }
	)

	//Todo: Insert into passwords table given password for this user.
}


/* Delete selected user from db table users.
   Note: Testing required.
   @author: Felix. 			 */
function delete_user(user_id, callback) {
	db.query(del +
		"WHERE user_id=" + user_id,
		function(err, user) {
			if(err) {
		   		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
		   		return callback(err);
	       		} else {
		      		return callback(user); 
			}
		}
	)
}

/* Gets user from db table user
   Note: Testing required.
   @author: Felix. 		*/
function get_user(user_id, callback) {
        db.query( select + 
		"WHERE user_id= " + mysql.escape(user_id), //built in mysql escape to prevent sql ijections
	       function(err, user) {
		       if(err) {
			       res.status(500).json({"status_code": 500,"status_message": "internal server error"});
			       return callback(err);
		       } else {
			       return callback(user);
		       }
	       }
       )
}

/* Update selected users's fname from db table users.
   Note: Testing required.
   @author: Felix. 					 */
function set_fname(user_id, fname, callback) {
        db.query( update +
		"SET fname = " + mysql.escape(fname) + //built in mysql escape to prevent sql ijections
	       " WHERE user_id = " + user_id,
	      function(err, result) {
		      if(err){
			      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
			      return callback(err);
		      } else {
			      return callback(result);
		      }
	      }
      )
}

/* Update selected user's lname from db table userts.
   Note: Testing required.
   @author: Felix. 					 */
function set_lname(user_id, lname, callback) {
        db.query( update +
		"SET fname = " + mysql.escape(lname) + //built in mysql escape to prevent sql ijections
	       " WHERE user_id = " + user_id,
	      function(err, result) {
		      if(err){
			      res.status(500).json({"status_code": 500,"status_message": "internal server error"});
			      return callback(err);
		      } else {
			      return callback(result);
		      }
	      }
	)
}

/* Update selected user's phone from db table users.
   Note: Testing required.
   @author: Felix. 				 */
function set_phone(user_id, phone, callback) {
        db.query(update + 
		"SET phonenumber = " + mysql.escape(phone) + //built in mysql escape to prevent sql ijections
		"WHERE user_id = " + user_id,
		function(err, result) {
		       if(err){
			       res.status(500).json({"status_code": 500,"status_message": "internal server error"});
			       return callback(err);
		       } else {
			       return callback(result);
		       }
	       }
       )
}

/* Update selected user's email from db table users.
   Note: Testing required.
   @author: Felix. 				 */
function set_email(users_id, email, callback) {
        db.query(update + 
		"SET email = " + mysql.escape(email) + //built in mysql escape to prevent sql ijections
		"WHERE user_id = " + user_id,
		function(err, result) {
		       if(err){
			       res.status(500).json({"status_code": 500,"status_message": "internal server error"});
			       return callback(err);
		       } else {
			       return callback(result);
		       }
	       }
	)
}

/* Update selected users's password from db table userss. */
function set_password(users_id, pword, callback) {
        //Needs implementation
}




module.exports = {
	create_user,
	delete_user,
	get_user,
	set_fname,
	set_lname,
	set_phone,
	set_email,
	set_password
};
