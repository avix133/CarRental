var express = require('express');
var router = express.Router();
var db = require('../db');



/* GET home page. */
router.get('/', function (req, res) {
	db.rental.findAll({
		include: [{model:db.car, as:"rental_car_fk"}]
	}).then(result => {
		res.render('admin', {title: 'CarRental', rentals: result})
	});
});

router.post('/accept/:id', function (req, res) {
	console.log("Accept")
	const rental_id = parseInt(req.params.id);
	db.rental.findOne({
		where: {rental_id: rental_id}
	}).then(result => {
		if (result) {
			result.updateAttributes({
				accepted: true
			});
			res.redirect('/admin');
		}});
});


module.exports = router;