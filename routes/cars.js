var express = require('express');
var router = express.Router();
var db = require('../db');



/* GET home page. */
router.get('/', function(req, res) {
	db.getCars().then( cars => {
		res.render('cars', { title: 'CarRental', cars: cars });
	});

});



module.exports = router;
