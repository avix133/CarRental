'use strict';


module.exports = (sequelize, DataTypes) => {
	return sequelize.define('rental', {
		rental_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
		user: DataTypes.INTEGER,
		car: DataTypes.INTEGER,
		date_in: DataTypes.DATE,
		date_out: DataTypes.DATE,
		accepted: DataTypes.BOOLEAN
	}, {
		tableName: 'rental',
		timestamps: false
	});
};
