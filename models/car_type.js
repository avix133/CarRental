'use strict';

module.exports = function (sequelize, DataTypes) {
	var car_type = sequelize.define('car_type', {
		model_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
		mark: DataTypes.STRING,
		model: DataTypes.STRING,
		year: DataTypes.INTEGER
	}, {
		tableName: 'car_type',
		timestamps: false,
		classMethods: {
			associate: function (models) {

			}
		}
	});

	return car_type;
};