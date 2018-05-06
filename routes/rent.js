var express = require('express');
var router = express.Router();
var db = require('../db');



/* GET home page. */
router.get('/', function (req, res) {
	res.render('rent', {title: 'CarRental', cars: {}});
});

var date_in;
var date_out;

function countDays(date_in, date_out) {
	const oneDay = 24*60*60*1000;
	const firstDate = new Date(date_in);
	const secondDate = new Date(date_out);
	return Math.round((secondDate.getTime() - firstDate.getTime())/(oneDay))
}

router.post('/dates', function (req, res) {
	date_in = req.body.receipt_date;
	date_out = req.body.return_date;

	if (!date_in || !date_out) {
		res.render('rent', {title: 'CarRental', cars: {}})
	}

	const days_count = countDays(date_in, date_out);
	if (days_count < 0) {
		res.render('rent', {title: 'CarRental', cars: {}})
	}

	console.log("Days: " + days_count);


	db.car.findAll({
		include: [{model: db.carType, as: "car_type_fk"},
			{model: db.carPhoto, as: "car_photo_fk"},
			{model: db.rental, as: "car_rental_fk"}],
		where: {$or:
					[{'$car_rental_fk.rental_id$': null},
					{$not: {$and:
							[{'$car_rental_fk.date_in$': {$lt: req.body.return_date}},
							{'$car_rental_fk.date_out$': {$gt: req.body.receipt_date}}
							]}
					}]}
	}).then(result => {
		res.render('rent', {title: 'CarRental', cars: result, days: days_count})
	});
});

router.post('/car/:id', function (req, res) {
	const car_id = parseInt(req.params.id);

	db.rental.create({user: 1, car: car_id, date_in: date_in, date_out:date_out, accepted: false}).then(() => {
		res.redirect('/rentals');
	});

});

module.exports = router;