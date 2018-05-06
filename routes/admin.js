var express = require('express');
var router = express.Router();
var db = require('../db');



/* GET home page. */
router.get('/:id', function (req, res) {
	const rental_id = parseInt(req.params.id);
	db.rental.findAll({
		include: [{model: db.carType, as: "car_type_fk"},
			{model: db.carPhoto, as: "car_photo_fk"},
			{model: db.rental, as: "car_rental_fk"}],
		where: {rental_id: rental_id}

	}).then(result => {
		res.render('rentals', {title: 'CarRental', cars: result})
	});
});


module.exports = router;