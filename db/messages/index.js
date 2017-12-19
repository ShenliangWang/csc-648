const db = require('../connect');

var table = "messages";
var insert = "INSERT INTO " + table + " ";
var select = "SELECT * FROM " + table + " ";
var update = "UPDATE " +  table + " ";
var del = "DELETE FROM " + table + " ";

/* Inserts a new message in the messages table in db
   Note: Testing required.
   @author: Felix. 					*/
function create_msg(agent_id, user_id, msg, callback) {
	db.query(insert +
		 "(, agent_id, user_id, message ) " + 
		 "VALUES (?, ?, ?)", [agent_id, user_id, msg], 
		 function(err, result) {
			if(err) {
			   return callback(err);
		       }else {
			      return callback(result); 
			}
		}
	)
}

/* Delete selected message from db table message.
   Note: Testing required.
   @author: Felix. 					 */
function delete_msg(msg_id, callback) {
	db.query(del + 
		 "WHERE message_id=" + msg_id,
		 function(err, result) {
			if(err) {
		   		return callback(err);
	       		} else {
		      		return callback(result); 
			}
		}
	)
}

/* Gets selected user's messages in the db table messages
   Note: Testing required.
   @author: Felix. 					*/ 
function get_Usermsgs(usr_id, callback) {
	db.query(select + 
		"WHERE user_id= " + usr_id, 
	       function(err, result) {
		       if(err) {
			       return callback(err);
		       } else {
			       return callback(result);
		       }
	       }
       )
}


/* Gets selected user's messages in the db table messages 
   with the associated date indicated 
   Priority 2
function get_Umsgs_by_date(usr_id, timeStamp, callback) {
        //Needs implementation
}
*/

/* Gets selected agent's messages in the db table messages
   Note: Testing required.
   @author: Felix. 					*/ 
function get_Agentmsgs(agent_id, callback) {
	db.query(select + 
		"WHERE agent_id= " + agent_id, 
	       function(err, result) {
		       if(err) {
			       return callback(err);
		       } else {
			       return callback(result);
		       }
	       }
       )
}

/* Gets selected agent's messages in the db table messages 
   with the associated date indicated 
   priority 2
function get_Amsgs_by_date(agent_id, timeStamp, callback) {
        //Needs implementation
}
*/

/* Inserts a new message in the table messages, may be
   redundant with create_msg.
   Note: Testing required.
   @author: Felix. 		                        
   Removed as this fcn is already implemented with create_msg
function send_msg(usr_id, agent_id, msg, callback) {
        db.query(insert +
		"(, agent_id, user_id, message ) " + 
		"VALUES (" + agent_id + ", " + user_id + ", " + mysql.escape(msg) + ")", 
		function(err, result) {
		       if(err) {
			  res.status(500).json({"status_code": 500,"status_message": "internal server error"});
			  return callback(err);
		      } else {
			     return callback(result); 
		       }
	       }
       )
}
*/





module.exports = {
	create_msg,
	delete_msg,
	get_Usermsgs,
	get_Umsgs_by_date,
	get_Agentmsgs,
	get_Amsgs_by_date,
	send_msg
};
