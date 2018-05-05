'use strict';
// var car_type = require('./car_type');
// var models = require('./');


module.exports = (sequelize, DataTypes) => {
	const Car = sequelize.define('car', {
		car_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
		model: {
			type: DataTypes.INTEGER,
			// references: {
			// 	model: models.car_type,
			// 	key: 'user_id'
			// }
		},
		reg_no: DataTypes.STRING,
		rate: DataTypes.FLOAT
	}, {
		tableName: 'car',
		timestamps: false
	});

	return Car;
};
