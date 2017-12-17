const db = require('../connect');

var table = "agents";
var insert = "INSERT INTO " + table + " ";
var select = "SELECT * FROM " + table + " ";
var update = "UPDATE " +  table + " ";
var del = "DELETE FROM " + table + " "; 

/* insert new agent to agents table in db 
   Note: Testing required.
   @author: Felix + Julian. 			*/
function create_agent(fname, lname, phone, email, pwd, callback) {

var mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

 db.query("INSERT INTO Agents(firstname, lastname, phonenumber, email, created_at) VALUES (?, ?, ?, ?, ?)", [fname, lname, phone, email], 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }
    })
	
	 db.query("INSERT INTO password(email, password) VALUES (?, ?)", [email, pwd], 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }
    })
}


/* Gets agent from db table agents
   Note: Testing required.
   @author: Felix + Julian		*/

function get_agent(agent_id, callback) {

    db.query("SELECT * FROM Agents WHERE agent_id = ?", [agent_id], 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        } else {
            var agents = [];
            for(var i = 0; i < rows.length; i++) {

                var agent = {
		    'agent_id' : rows[i].agent_id,
                    'firstname' : rows[i].firstname,
                    'lastname' : rows[i].lastname,
                    'phonenumber' : rows[i].zipcode,
                    'email' : rows[i].email
                }
                agents.push(agent);
            }
            return callback(agents);
        }})}


/* Update selected agent's phone from db table agents. 
   Note: Testing req'd
   @author: Felix + Julian   */
//This function updates the Agent's phone number using their ID
function set_phone(agent_id,phone,callback) {
	db.query("UPDATE TABLE Agents SET phonenumber = ? WHERE agent_id = ?", [phone, agent_id], 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}
//This function updates the Agent's phone number using their email
function set_phone(agent_email,phone,callback) {
	db.query("UPDATE TABLE Agents SET phonenumber = ? WHERE email = ?", [phone, agent_email], 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}



/* Update selected agent's email from db table agents. 
   Note: Testing req'd
   @author: Felix + Julian  */

/*Priority 2
function set_email(agent_id,email,callback) {
	db.query("UPDATE TABLE Agents SET email = ? WHERE agent_id = ?", [email, agent_id], 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}
*/
/* Update selected agent's password from db table agents. */
/*Priority 2
function set_password(agent_email,pword,callback) {
	db.query("UPDATE TABLE password SET password = ? WHERE email = ?" [pword, agent_email], 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

*/


module.exports = {
	create_agent,
	get_agent
};
