var express = require('express');
var router = express.Router();
var db = require('../db');


var rental_id;

/* GET home page. */
router.post('/:id', function (req, res) {
	rental_id = parseInt(req.params.id);
	db.rental.findOne({
		include: [{model:db.car, as:"rental_car_fk"}],
		where: {rental_id: rental_id}

	}).then(result => {
		res.render('modify', {title: 'CarRental', rental: result})
	});
});

router.post('/:id/dates', function (req, res) {
	console.log("HERE!")
	date_in = req.body.receipt_date;
	date_out = req.body.return_date;
	db.rental.findOne({
		where: {rental_id: rental_id}
	}).then(result => {
		if (result) {
			result.updateAttributes({
				date_in: date_in,
				date_out: date_out,
				accepted: false
			});
		res.redirect('/rentals');
	}});
});


module.exports = router;