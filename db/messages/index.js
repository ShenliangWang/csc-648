const db = require('../connect');

/* Inserts a new message in the messages table in db */
function create_msg(agent_id, user_id, msg, callback) {
	//Needs implementation
}

/* Delete selected message from db table message. */
function delete_msg(msg_id, callback) {
	//Needs implementation
}

// Gets selected user's messages in the db table messages 
function get_Usermsgs(usr_id, callback) {
		//Needs implementation
}

/* Gets selected user's messages in the db table messages 
   with the associated date indicated */
function get_Umsgs_by_date(usr_id, timeStamp, callback) {
        //Needs implementation
}

// Gets selected agent's messages in the db table messages 
function get_Agentmsgs(agent_id, callback) {
		//Needs implementation
}

/* Gets selected agent's messages in the db table messages 
   with the associated date indicated */
function get_Amsgs_by_date(agent_id, timeStamp, callback) {
        //Needs implementation
}

/* Inserts a new message in the table messages, may be
   redundant with create_msg.                        */ 
function send_msg(usr_id, agent_id, msg, callback) {
        //Needs implementation
}





module.exports = {
	create_msg,
	delete_msg,
	get_Usermsgs,
	get_Umsgs_by_date.
	get_Agentmsgs,
	get_Amsgs_by_date
	send_msg
};
