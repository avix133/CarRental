var express = require('express');
var router = express.Router();
var db = require('../db');



/* GET home page. */
router.get('/', function (req, res) {
	var user = 1;
	db.car.findAll({
		include: [{model: db.carType, as: "car_type_fk"},
			{model: db.carPhoto, as: "car_photo_fk"},
			{model: db.rental, as: "car_rental_fk"}],
		where: {'$car_rental_fk.user$': user}

	}).then(result => {
		res.render('rentals', {title: 'CarRental', cars: result})
	});
});

router.post('/cancel/:id', function (req, res) {
	const rental_id = parseInt(req.params.id);
	console.log("Cancel id:" + rental_id);
	db.rental.findOne({where: {rental_id: rental_id}}).then(r => {
		r.destroy();
	});
	res.redirect('/rentals');
});

router.get('/admin', function (req, res) {
	db.car.findAll({
		include: [{model: db.carType, as: "car_type_fk"},
			{model: db.carPhoto, as: "car_photo_fk"},
			{model: db.rental, as: "car_rental_fk"}],
		where: {$not: {'$car_rental_fk.rental_id$': null}}

	}).then(result => {
		res.render('rentals', {title: 'CarRental', cars: result})
	});
});


module.exports = router;