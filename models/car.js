'use strict';
module.exports = function (sequelize, DataTypes) {
	var Car = sequelize.define('car', {
		car_id: {type: DataTypes.INTEGER, primaryKey: true},
		model: DataTypes.INTEGER,
		reg_no: DataTypes.STRING,
		rate: DataTypes.FLOAT
	}, {
		tableName: 'car',
		timestamps: false,
		classMethods: {
			associate: function (models) {

			}
		}
	});
	return Car;
};