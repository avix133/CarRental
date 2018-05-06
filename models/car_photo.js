'use strict';


module.exports = (sequelize, DataTypes) => {
	return sequelize.define('car_photo', {
		car_id: {type: DataTypes.INTEGER, primaryKey: true},
		photo: DataTypes.STRING
	}, {
		tableName: 'car_photo',
		timestamps: false
	});
};
