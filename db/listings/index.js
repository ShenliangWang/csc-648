const db = require('../connect');

/* Insert new listing into the listing table in db.
   Note: Only agents can create listings.
   Note: Images can not be included in this fcn. 
   Call set_image() after calling this function to 
   associate a image with listing                   */
function create_listing(agent_id, house_type, price, city, state, zip, beds, baths, sqrft, description, callback) {
	//Needs implementation
}

/* Delete selected listing from db table listing. */
function delete_listing(listing_id, callback) {
	//Needs implementation
}

/* Gets listing in json format from db table listing
   Note: Images are not inlcuded.					*/
function get_listing(listing_id, callback) {
        //Needs implementation
}

/* Update selected agent from db table listing.
   May not need this. Potential admin fcn from workbench */
function set_agent(listing_id, agent_id, callback) {
        //Needs implementation
}

/* Update selected dwelling type from db table listing.
   Types: 1 = House, 2 = Condo, 3 = Apartment */
function set_type(listing_id, type, callback) {
        //Needs implementation
}

/* Update selected price from db table listing. */
function set_price(listing_id, price, callback) {
        //Needs implementation
}

/* Update selected listing's city from db table listing. */
function set_city(listing_id, city, callback) {
        //Needs implementation
}

/* Update selected listing's state from db table listing. */
function set_state(listing_id, state, callback) {
        //Needs implementation
}

/* Update selected listing's zipcode from db table listing. */
function set_zipcode(listing_id, zip, callback) {
        //Needs implementation
}

/* Update selected listing's available bedrooms from db table listing. */
function set_num_beds(listing_id, beds, callback) {
        //Needs implementation
}

/* Update selected listing's available restrooms from db table listing. */
function set_num_bathrooms(listing_id, baths, callback) {
        //Needs implementation
}

/* Update selected listing's images with a new image from db table listing. 
   May be redundant as images table will have similar function             */
function set_image(listing_id, image, callback) {
        //Needs implementation
}

/* Update selected listing's square footage from db table listing. */
function set_sqrft(listing_id, sqrft, callback) {
        //Needs implementation
}

/* Update selected listing's description of the property from db table listing. */
function set_description(listing_id, description, callback) {
        //Needs implementation
}

module.exports = {
	create_listing,
	delete_listing,
	get_listing,
	set_agent,
	set_type,
	set_price,
	set_city,
	set_state,
	set_zipcode,
	set_num_beds,
	set_num_bathrooms,
	set_image,
	set_sqrft,
	set_description
};
