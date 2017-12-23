const db = require('../connect');

var table = "listings";
var insert = "INSERT INTO " + table + " ";
var select = "SELECT * FROM " + table + " ";
var update = "UPDATE " +  table + " ";
var del = "DELETE FROM " + table + " "; 

/* Insert new listing into the listing table in db.
   Note: Only agents can create listings.
   Note: Images can not be included in this fcn. 
   Call set_image() after calling this function to 
   associate a image with listing                  
   Note: Testing req'd
   @author: Felix + Julian*/
   //updated
function create_listing(agent_id, house_type, price, city, state, zip, beds, baths, sqrft, description, callback) {

 db.query("INSERT INTO listings(type, sqrft, price, city, state, zipcode, bedrooms, bathrooms, description, agent_id) VALUES (?,?,?,?,?,?,?,?,?,?)",
 [house_type, sqrft, price, city, state, zip, beds, baths, description, agent_id], 
    function(err,rows,fields) {
        if(err) {
           // res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

/* Delete selected listing from db table listing.
   Note: Testing req'd
   @author: Felix + Julian */
   //updated
function delete_listing(listing_id, callback) {
	db.query("DELETE FROM listings WHERE listing_id =?",[listing_id], 
    function(err,rows,fields) {
        if(err) {
            //res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

/* Gets listing in json format from db table listing
   Note: Images are not inlcuded.
   Note: Testing req'd
   @author: Felix   + Julian*/
   
function get_listing(listing_id, callback) {
    db.query("SELECT * FROM listings WHERE listing_id = ? LIMIT 1",[listing_id], 
    function(err,rows,fields) {
        if(err) {
           // res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        } else {
            
            

                var listing = {
		    'listing_id' : rows[0].listing_id,
                    'type' : rows[0].type,
                    'sqrft' : rows[0].sqrft,
                    'price' : rows[0].price,
		    'city' : rows[0].city,
                    'state' : rows[0].state,
                    'zipcode' : rows[0].zipcode,
                    'address' : rows[0].address,
		    'bedrooms' : rows[0].bedrooms,
		    'bathrooms' : rows[0].bathrooms,
                    'description' : rows[0].description,
                    'agent_id' : rows[0].agent_id
                
            }
            return callback(listing);
        }})}


/* Update selected dwelling type from db table listing.
   Types: 1 = House, 2 = Condo, 3 = Apartment 
   Note: Testing req'd
   @author: Felix  + Julian  */
   //updated
function set_type(listing_id, type, callback) {
	db.query("UPDATE TABLE listings SET type = ? WHERE listing_id = ?",[type, listing_id], 
    function(err,rows,fields) {
        if(err) {
            //res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

/* Update selected price from db table listing.
   Note: Testing req'd
   @author: Felix  + Julian */
   //updated
function set_price(listing_id, price, callback) {
	db.query("UPDATE TABLE listings SET price = ? WHERE listing_id = ?",[price, listing_id], 
    function(err,rows,fields) {
        if(err) {
           // res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

/* Update selected listing's address from db table listing.
   Note: Testing req'd
   @author: Felix  + Julian  */

function set_address(listing_id, address, callback) {
	db.query("UPDATE TABLE listings SET address = ? WHERE listing_id = ?",[address, listing_id], 
    function(err,rows,fields) {
        if(err) {
           // res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}


/* Update selected listing's city from db table listing.
   Note: Testing req'd
   @author: Felix + Julian */
   //updated
function set_city(listing_id, city, callback) {
	db.query("UPDATE TABLE listings SET city = ? WHERE listing_id = ?",[city, listing_id], 
    function(err,rows,fields) {
        if(err) {
            //res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

/* Update selected listing's state from db table listing.
   Note: Testing req'd
   @author: Felix + Julian  */
   //updated
function set_state(listing_id, state, callback) {
	db.query("UPDATE TABLE listings SET state = ? WHERE listing_id = ?",[state, listing_id], 
    function(err,rows,fields) {
        if(err) {
           // res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

/* Update selected listing's zipcode from db table listing.
   Note: Testing req'd
   @author: Felix  + Julian */
//updated
function set_zipcode(listing_id, zip, callback) {
	db.query("UPDATE TABLE listings SET zipcode = ? WHERE listing_id = ?",[zip, listing_id], 
    function(err,rows,fields) {
        if(err) {
          //  res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

/* Update selected listing's available bedrooms from db table listing.
   Note: Testing req'd
   @author: Felix                                                        */
//updated
function set_num_beds(listing_id, beds, callback) {
	db.query("UPDATE TABLE listings SET bedrooms = ? WHERE listing_id = ?",[beds, listing_id], 
    function(err,rows,fields) {
        if(err) {
           // res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}


/* Update selected listing's available restrooms from db table listing. 
   Note: Testing req'd
   @author: Felix  + Julian  */
//updated
function set_num_bathrooms(listing_id, baths, callback) {
	db.query("UPDATE TABLE listings SET bathrooms = ? WHERE listing_id = ?",[baths, listing_id], 
    function(err,rows,fields) {
        if(err) {
           // res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

/* Update selected listing's images with a new image from db table listing. 
   May be redundant as images table will have similar function
   @author: Felix + Julian
   */
//updated
function set_image(listing_id, image, callback) {
	db.query("UPDATE TABLE image SET image_path = ? WHERE listing_id = ?",[image, listing_id], 
    function(err,rows,fields) {
        if(err) {
           // res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}


/* Update selected listing's square footage from db table listing.
   Note: Testing req'd
   @author: Felix  + Julian */
//updated
function set_sqrft(listing_id, sqrft, callback) {
	db.query("UPDATE TABLE listings SET sqrft = ? WHERE listing_id = ?",[sqft, listing_id], 
    function(err,rows,fields) {
        if(err) {
           // res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

/* Update selected listing's description of the property from db table listing.
   Note: Testing req'd
   @author: Felix                                                                */

function set_description(listing_id, description, callback) {
	db.query("UPDATE TABLE listings SET description = ? WHERE listing_id = ?",[description, listing_id], 
    function(err,rows,fields) {
        if(err) {
           // res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

/* Searches the database for lisings LIKE the passed search query */
function search(query, callback) {
    db.query("SELECT * "+
                     "FROM listings " +
                     "WHERE city LIKE '%" + query +"%' " +
                     "OR zipcode LIKE '%" + query +"%'", 
    function(err,rows,fields) {
        if(err) {
           // res.status(500).json({"status_code": 500,"status_message": "internal server error"});
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
                    'type' : rows[i].type,
                    'agent': rows[i].agent_id,
                    'id': rows[i].listing_id,
                    'thumb': undefined
                }
                listings.push(listing);
            }
            return callback(listings, rows.length);
        }
    })
}

module.exports = {
	create_listing,
    delete_listing,
    get_listing,
	set_type,
    set_price,
    set_address,
	set_city,
	set_state,
	set_zipcode,
	set_num_beds,
	set_num_bathrooms,
	set_image,
	set_sqrft,
	set_description,
	search
};
