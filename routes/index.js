var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET home page. */
router.get('/', function(req, res) {
	models.car.findAll().then(cars => {
		for (var i = 0; i < cars.length; i++) {
			console.log("Here: " + cars[i].reg_no);
		}
	}
	);
	res.render('index', { title: 'CarRental' });
});

// router.get('/cars', function(req, res) {
// 	res.render('index', { title: 'CARS' });
// });

router.use('/cars', require('./cars'));

module.exports = router;
