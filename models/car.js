'use strict';


module.exports = (sequelize, DataTypes) => {
	return sequelize.define('car', {
		car_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
		car_type: {
			type: DataTypes.INTEGER,
		},
		reg_no: DataTypes.STRING,
		rate: DataTypes.FLOAT
	}, {
		tableName: 'car',
		timestamps: false
	});
};
