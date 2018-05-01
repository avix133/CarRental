var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET home page. */
router.get('/', function(req, res) {
	models.car.findAll().then(cars => {
		console.log("Here: " + cars[0].reg_no);
	}
	);
	res.render('index', { title: 'Express' });
});

module.exports = router;
