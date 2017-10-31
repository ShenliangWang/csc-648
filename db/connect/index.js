var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'sfsuse.com',
    user: 'fa17g06',
    password: 'csc648fa17g06',
    database: 'fa17g06',
    debug: false,
});

db.connect(function(err) {
	if(err) {
		console.log('Error connecting: ' + err.stack);
		return;
	}
	console.log('DB connected!');
});

module.exports = db;
