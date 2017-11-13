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

/* Searches the database for lisings LIKE the passed search query */
function search(query, callback) {
    connection.query("SELECT * "+
                     "FROM listings " +
                     "WHERE city LIKE '%" + query +"%' " +
                     "OR zipcode LIKE '%" + query +"%'", 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        } else {
            var listings = [];
            for(var i = 0; i < rows.length; i++) {

                var listing = {
                    'address' : rows[i].address,
                    'city' : rows[i].city,
                    'zipcode' : rows[i].zipcode,
                    'price' : rows[i].price,
                    'sqft' : rows[i].sqrft,
                    'type' : rows[i].type
                }
                listings.push(listing);
            }
            return callback(listings);
        }
    })
}

module.exports = {
    search
};
