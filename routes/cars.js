var express = require('express');
var router = express.Router();
var db = require('../db');



function getCars() {
	return db.car.findAll({include: [{model: db.carType, as: "car_type_fk"},
			{model: db.carPhoto, as: "car_photo_fk"}]});
}


/* GET home page. */
router.get('/', function(req, res) {
	getCars().then( cars => {
		res.render('cars', { title: 'CARS!', cars: cars });
	});

});

module.exports = router;
