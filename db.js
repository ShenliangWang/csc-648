var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "fa17g06",
    password: "csc648fa17g06",
    database: "fa17g06"
});

connection.connect(error => {
    if(error) throw error;
    console.log("Connected to database");
});

module.export = connection;