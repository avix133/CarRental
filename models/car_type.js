'use strict';

module.exports = (sequelize, DataTypes) => {
	return sequelize.define('car_type', {
		car_type_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
		mark: DataTypes.STRING,
		model: DataTypes.STRING,
		year: DataTypes.INTEGER
	}, {
		tableName: 'car_type',
		timestamps: false
	});
};