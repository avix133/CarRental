var express = require('express');
var router = express.Router();
// var models = require('../models');
// var CarType = require('../models/car_type');
var db = require('../db');



/* GET home page. */
router.get('/', function(req, res) {

	// models.car_type.belongsToMany(models.car, {
	// 	foreignKey: "model_id", as: "car_type", through: 'model_id'
	// });
	// models.car_type.belongsToMany(models.car, {
	// 	foreignKey: "model_id", as: "car_type", through: "model"
	// });

	// models.car.hasOne(models.car_type, { foreignKey: 'model_id' });
	db.car.findAll().then(cars => {
		for (var i = 0; i < cars.length; i++) {
			console.log("Here: " + cars[i].reg_no);
		}
	});
	// models.car.findAll( {include: [{ model: models.car_type, as: "car_type"}]}).then(cars => {
	// 	for (var i = 0; i < cars.length; i++) {
	// 		console.log("Here: " + cars[i].reg_no);
	// 		console.log("Here: " + cars[i].car_type.mark);
	// 	}
	// }
	// );
	res.render('index', { title: 'CarRental' });
});

// router.get('/cars', function(req, res) {
// 	res.render('index', { title: 'CARS' });
// });

router.use('/cars', require('./cars'));

module.exports = router;
