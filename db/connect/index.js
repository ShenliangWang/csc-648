const mysql = require('mysql');
const configDB = require('./configDB');

const connection = mysql.createConnection({
    host: configDB.host,
    user: configDB.user,
    password: configDB.password,
    database: configDB.database
});

const db = connection.connect(error => {
    if(error){
	console.log("Error connecting to database");
	 throw error;
    }
    else
   	console.log("Connected to database");
});	

module.exports = db;
