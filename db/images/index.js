const db = require('../connect');

/* Provides the caller fcn with a list of image paths 
   to images associated with a listing_id.
*/
function get_listing_images(listing_id, callback) {
	db.query("SELECT * FROM image WHERE listing_id=" + listing_id,
        function(err,rows,fields) {
                if(err) {
                        res.status(500).json({"status_code": 500,"status_message": "internal server error"});
                        return callback(err);
                } else {
                        var img_paths = [];
                        for(var i = 0; i < rows.length; i++) {

                                var path = {
                                'img' : rows[i].image_path
                                }
                                img_paths.push(path);
                        }
                        return callback(img_paths);
                }
        })
        
}

/* Update selected listing's images with a new image from db table listing. 
   Creates a new folder in /public/images/listing_id, where id is a integer 
   associated with the listing, if none exists already. The name of the image
   will be integers corresponding to the order they are created in. For exa:
   a new image in a new folder will be named 1.jpeg.
   May be redundant as listing's table will have similar function             */

function set_image(listing_id, image, callback) {
	db.query("UPDATE TABLE image SET image_path = "+mysql.escape(image)+" WHERE listing_id = "+mysql.escape(listing_id)+")", 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

// Deletes a selected image from the table images in the db.
function delete_image(image_id, callback) {
	db.query("DELETE * FROM image WHERE image_pk = "+mysql.escape(image_id)+")", 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}

// Deletes all images associated with a listing from the images table.
function delete_img_by_listing(listing_id, callback) {
	db.query("DELETE * FROM image WHERE listing_id = "+mysql.escape(listing_id)")", 
    function(err,rows,fields) {
        if(err) {
            res.status(500).json({"status_code": 500,"status_message": "internal server error"});
            return callback(err);
        }})}



module.exports = {
	get_listing_images,
	set_image,
	delete_image,
	delete_img_by_listing
};
