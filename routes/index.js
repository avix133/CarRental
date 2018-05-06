var express = require('express');
var router = express.Router();
var db = require('../db');


/* GET home page. */
router.get('/', function(req, res) {

	res.render('index', {title: 'CarRental'});
});

router.use('/cars', require('./cars'));
router.use('/rent', require('./rent'));
router.use('/dates', require('./rent'));
router.use('/rentals', require('./rentals'));
router.use('/modify', require('./modify'));
router.use('/admin', require('./admin'));

module.exports = router;
