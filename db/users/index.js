const db = require('../connect');

/*insert new user to users table in db */
function create_user(fname, lname, phone, email, pwd, callback) {
	//Needs implementation
}

/* Delete selected user from db table users. */
function delete_user(user_id, callback) {
	//Needs implementation
}

//Gets user from db table user
function get_user(user_id, callback) {
        //Needs implementation
}

/* Update selected users's fname from db table users. */
function set_fname(user_id, fname, callback) {
        //Needs implementation
}

/* Update selected user's lname from db table userts. */
function set_lname(user_id, lname, callback) {
        //Needs implementation
}

/* Update selected user's phone from db table users. */
function set_phone(user_id, phone, callback) {
        //Needs implementation
}

/* Update selected user's email from db table users. */
function set_email(users_id, email, callback) {
        //Needs implementation
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
