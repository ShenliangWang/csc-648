const db = require('../connect');

var table = "agents";
var insert = "INSERT INTO " + table + " ";
var select = "SELECT * FROM " + table + " ";
var update = "UPDATE " +  table + " ";
var del = "DELETE FROM " + table + " "; 

/* insert new agent to agents table in db 
   Note: Testing required.
   @author: Felix. 			*/
function create_agent(fname, lname, phone, email, pwd, callback) {
	var mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

	db.query(  insert + 
		   "(firstname, lastname, phonenumber, email, created_at, updated_at) " + 
		     "VALUES " + 
		     "(" + mysql.escape(fname) + "," + mysql.escape(lname) + "," + mysql.escape(phone)
		     + "," + mysql.escape(email) +"," + mysqlTimestamp + "," + mysqlTimestamp +  ")",
		     function(err, agent) {
			     if(err) {
				res.status(500).json({"status_code": 500,"status_message": "internal server error"});
				return callback(err);
			    } else {
				   return callback(agent); 
			     }
		     }
	)

	//Todo: Insert into passwords table given password for this agent.
}


/* Gets agent from db table agents
   Note: Testing required.
   @author: Felix		*/
function get_agent(agent_id, callback) {
	db.query( select + 
		 "WHERE agent_id= " + mysql.escape(agent_id), //built in mysql escape to prevent sql ijections
		function(err, agent) {
			if(err) {
				res.status(500).json({"status_code": 500,"status_message": "internal server error"});
				return callback(err);
			} else {
				return callback(agent);
			}
		}
	)
}


/* Update selected agent's phone from db table agents. 
   Note: Testing req'd
   @author: Felix					*/
function set_phone(agent_id, phone, callback) {
	db.query(update + 
		 "SET phonenumber = " + mysql.escape(phone) + //built in mysql escape to prevent sql ijections
		 "WHERE agent_id = " + agent_id,
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

/* Update selected agent's email from db table agents. 
   Note: Testing req'd
   @author: Felix					*/
function set_email(agent_id, email, callback) {
        db.query(update + 
		"SET email = " + mysql.escape(email) + //built in mysql escape to prevent sql ijections
		"WHERE agent_id = " + agent_id,
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

/* Update selected agent's password from db table agents. */
function set_password(agent_id, pword, callback) {
        //Needs implementation
}




module.exports = {
	create_agent,
	get_agent,
	set_phone,
	set_email,
	set_password
};
