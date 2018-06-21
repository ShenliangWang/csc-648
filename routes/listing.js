var express = require('express');
var router = express.Router();
const  db  = require('../db');

/* Get Login Page */
router.get('/:listing_id', function(req,res,next) {
   db.Listings.get_listing(req.params.listing_id, (result) => {
  	res.render('listing', { listing_id: result.listing_id, type: result.type, sqrft: result.sqrft, 
				price: result.price, city: result.city, state: result.state, zipcode: result.zipcode, 
				address: result.address, bedrooms: result.bedrooms, description: result.description, 
				agent_id: result.agent_id, bathrooms: result.bathrooms });
	//res.send('Got = ' + result.description );
   });
});

router.get('/', function(req,res,next){
    res.render('listing');
});
module.exports = router;
