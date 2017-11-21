const db = require('../connect');

/* Provides the caller fcn with a list of image paths 
   to images associated with a listing_id.
*/
function get_listing_images(listing_id, callback) {
		//Needs implementation
}

/* Update selected listing's images with a new image from db table listing. 
   Creates a new folder in /public/images/listing_id, where id is a integer 
   associated with the listing, if none exists already. The name of the image
   will be integers corresponding to the order they are created in. For exa:
   a new image in a new folder will be named 1.jpeg.
   May be redundant as listing's table will have similar function             */
function set_image(listing_id, image, callback) {
        //Needs implementation
}

// Deletes a selected image from the table images in the db.
function delete_image(image_id, callback) {
		//Needs implementation
}

// Deletes all images associated with a listing from the images table.
function delete_img_by_listing(listing_id, callback) {
		//Needs implementation
}



module.exports = {
	get_listing_images,
	set_image,
	delete_image,
	delete_img_by_listing
};
