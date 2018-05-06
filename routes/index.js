var express = require('express');
var router = express.Router();
var db = require('../db');


/* GET home page. */
router.get('/', function(req, res) {

	db.rental.findAll({include: [{model: db.car, as: "car_fk"}]}).then(rentals => {
		for (var i = 0; i < rentals.length; i++) {
			console.log("Rental: " + rentals[i].rental_id);
			console.log("Car no: " + rentals[i].car_fk.reg_no);
		}
	});

	res.render('index', { title: 'CarRental' });
});

router.use('/cars', require('./cars'));

module.exports = router;
