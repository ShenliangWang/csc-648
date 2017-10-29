var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1192"
});

connection.connect(error => {
    if(error) throw error;
    console.log("Connected to database");
});

module.export = connection;