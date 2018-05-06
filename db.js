'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:pass@localhost:3306/car_rental');

sequelize
	.authenticate()
	.then(() => {
		console.log('Database connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.car = require('./models/car')(sequelize, Sequelize);
db.user = require('./models/user')(sequelize, Sequelize);
db.carType = require('./models/car_type')(sequelize, Sequelize);
db.carPhoto = require('./models/car_photo')(sequelize, Sequelize);
db.rental = require('./models/rental')(sequelize, Sequelize);

//Relations
db.car.belongsTo(db.carType, {as: "car_type_fk", foreignKey: "car_type"});
db.car.hasOne(db.carPhoto, {as: "car_photo_fk", foreignKey: "car_id"});
db.rental.belongsTo(db.car, {as: "car_fk", foreignKey: "car"});


module.exports = db;