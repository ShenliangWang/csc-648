const db = require('../connect');

/*insert new agent to agents table in db */
function create_agent(fname, lname, phone, email, pwd, callback) {
	//Needs implementation
}

/* Delete selected agent from db table agents.
   May not need this. Potential admin fcn from workbench */
function delete_agent(agent_id, callback) {
	//Needs implementation
}

//Gets agent from db table agents
function get_agent(agent_id, callback) {
        //Needs implementation
}

/* Update selected agent's fname from db table agents.
   May not need this. Potential admin fcn from workbench */
function set_fname(agent_id, fname, callback) {
        //Needs implementation
}

/* Update selected agent's lname from db table agents.
   May not need this. Potential admin fcn from workbench */
function set_lname(agent_id, lname, callback) {
        //Needs implementation
}

/* Update selected agent's phone from db table agents. */
function set_phone(agent_id, phone, callback) {
        //Needs implementation
}

/* Update selected agent's email from db table agents. */
function set_email(agent_id, email, callback) {
        //Needs implementation
}

/* Update selected agent's password from db table agents. */
function set_password(agent_id, pword, callback) {
        //Needs implementation
}




module.exports = {
	create_agent,
	delete_agent,
	get_agent,
	set_fname,
	set_lname,
	set_phone,
	set_email,
	set_password
};
