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
   @author: Felix                                 */
function create_listing(agent_id, house_type, price, address, city, state, zip, beds, baths, sqrft, description, callback) {
        db.query(insert + 
                "(agent_id, type, price, address, city, state, zipcode, bedrooms, bathrooms, sqrft, description) " + 
                "VALUES( " + agent_id + "," + house_type + "," + price + "," + mysql.escape(address) + "," + mysql.escape(city) + "," + 
                         mysql.escape(state) + "," + zip + "," + beds + "," + baths + "," + sqrft + "," + mysql.escape(description),
                         function(err, result) {
                                if(err) {
                                   res.status(500).json({"status_code": 500,"status_message": "internal server error"});
                                   return callback(err);
                               }else{
                                      return callback(result); 
                                }
                        }
        )
}

/* Delete selected listing from db table listing.
   Note: Testing req'd
   @author: Felix                                */
function delete_listing(listing_id, callback) {
	db.query(del +
		"WHERE listing_id=" + listing_id,
		function(err, agent) {
			if(err) {
			   res.status(500).json({"status_code": 500,"status_message": "internal server error"});
			   return callback(err);
		       } else {
			      return callback(agent); 
			}
		}
	)
}

/* Gets listing in json format from db table listing
   Note: Images are not inlcuded.
   Note: Testing req'd
   @author: Felix   					*/
function get_listing(listing_id, callback) {
        db.query(select +
                "WHERE listing_id=" + listing_id,
                function(err, agent) {
			if(err) {
			   res.status(500).json({"status_code": 500,"status_message": "internal server error"});
			   return callback(err);
		       } else {
			      return callback(agent); 
			}
                }
        )
}


/* Update selected dwelling type from db table listing.
   Types: 1 = House, 2 = Condo, 3 = Apartment 
   Note: Testing req'd
   @author: Felix                                       */
function set_type(listing_id, type, callback) {
        db.query(update + 
                "SET type=" + type + " " + 
                "WHERE listing_id=" + listing_id,
                function(err, result) {
                       if(err){
                               res.status(500).json({"status_code": 500,"status_message": "internal server error"});
                               return callback(err);
                       } else {
                               return callback(result);
                       }
               }
       )
}

/* Update selected price from db table listing.
   Note: Testing req'd
   @author: Felix                                 */
function set_price(listing_id, price, callback) {
        db.query(update + 
                "SET price=" + price + " " + 
                "WHERE listing_id=" + listing_id,
                function(err, result) {
                       if(err){
                               res.status(500).json({"status_code": 500,"status_message": "internal server error"});
                               return callback(err);
                       } else {
                               return callback(result);
                       }
               }
       )
}

/* Update selected listing's address from db table listing.
   Note: Testing req'd
   @author: Felix                                        */
function set_address(listing_id, address, callback) {
        db.query(update + 
                "SET address=" + mysql.escape(address) + " " + 
                "WHERE listing_id=" + listing_id,
                function(err, result) {
                       if(err){
                               res.status(500).json({"status_code": 500,"status_message": "internal server error"});
                               return callback(err);
                       } else {
                               return callback(result);
                       }
               }
       )
}

/* Update selected listing's city from db table listing.
   Note: Testing req'd
   @author: Felix                                        */
function set_city(listing_id, city, callback) {
        db.query(update + 
                "SET city=" + mysql.escape(city) + " " + 
                "WHERE listing_id=" + listing_id,
                function(err, result) {
                       if(err){
                               res.status(500).json({"status_code": 500,"status_message": "internal server error"});
                               return callback(err);
                       } else {
                               return callback(result);
                       }
               }
       )
}

/* Update selected listing's state from db table listing.
   Note: Testing req'd
   @author: Felix                                        */
function set_state(listing_id, state, callback) {
        db.query(update + 
                "SET state=" + state + " " + 
                "WHERE listing_id=" + listing_id,
                function(err, result) {
                       if(err){
                               res.status(500).json({"status_code": 500,"status_message": "internal server error"});
                               return callback(err);
                       } else {
                               return callback(result);
                       }
               }
       )
}

/* Update selected listing's zipcode from db table listing.
   Note: Testing req'd
   @author: Felix                                        */
function set_zipcode(listing_id, zip, callback) {
        db.query(update + 
                "SET zipcode=" + zip + " " + 
                "WHERE listing_id=" + listing_id,
                function(err, result) {
                       if(err){
                               res.status(500).json({"status_code": 500,"status_message": "internal server error"});
                               return callback(err);
                       } else {
                               return callback(result);
                       }
               }
       )
}

/* Update selected listing's available bedrooms from db table listing.
   Note: Testing req'd
   @author: Felix                                                        */
function set_num_beds(listing_id, beds, callback) {
        db.query(update + 
                "SET bedrooms=" + beds + " " + 
                "WHERE listing_id=" + listing_id,
                function(err, result) {
                       if(err){
                               res.status(500).json({"status_code": 500,"status_message": "internal server error"});
                               return callback(err);
                       } else {
                               return callback(result);
                       }
               }
       )
}

/* Update selected listing's available restrooms from db table listing. 
   Note: Testing req'd
   @author: Felix                                                       */
function set_num_bathrooms(listing_id, baths, callback) {
        db.query(update + 
                "SET bathrooms=" + baths + " " + 
                "WHERE listing_id=" + listing_id,
                function(err, result) {
                       if(err){
                               res.status(500).json({"status_code": 500,"status_message": "internal server error"});
                               return callback(err);
                       } else {
                               return callback(result);
                       }
               }
       )
}

/* Update selected listing's images with a new image from db table listing. 
   May be redundant as images table will have similar function */
function set_image(listing_id, image, callback) {
        //Needs implementation
}

/* Update selected listing's square footage from db table listing.
   Note: Testing req'd
   @author: Felix                                                */
function set_sqrft(listing_id, sqrft, callback) {
        db.query(update + 
                "SET sqrft=" + sqrft + " " + 
                "WHERE listing_id=" + listing_id,
                function(err, result) {
                       if(err){
                               res.status(500).json({"status_code": 500,"status_message": "internal server error"});
                               return callback(err);
                       } else {
                               return callback(result);
                       }
               }
       )
}

/* Update selected listing's description of the property from db table listing.
   Note: Testing req'd
   @author: Felix                                                                */
function set_description(listing_id, description, callback) {
        db.query(update + 
                "SET description=" + mysql.escape(description) + " " + 
                "WHERE listing_id=" + listing_id,
                function(err, result) {
                       if(err){
                               res.status(500).json({"status_code": 500,"status_message": "internal server error"});
                               return callback(err);
                       } else {
                               return callback(result);
                       }
               }
       )
}

/* Searches the database for lisings LIKE the passed search query */
function search(query, callback) {
    db.query("SELECT * "+
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
