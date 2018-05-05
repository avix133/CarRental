'use strict';

module.exports = function (sequelize, DataTypes) {
	const User = sequelize.define('user', {
		user_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
		name: DataTypes.STRING,
		surname: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
	}, {
		tableName: 'user',
		timestamps: false,
		classMethods: {
			associate: function (models) {

			}
		}
	});
	return User;
};