const db = require('../connect');

/* Gets password associated with a particular email from passwords table in db */
function get_password(email, callback) {
	//Needs implementation
}

/* Sets password in table passwords associated with a particular email in db */
function set_password(email, password, callback) {
	//Needs implementation
}




module.exports = {
	get_password,
	set_password
};
