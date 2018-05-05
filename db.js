'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:pass@localhost:3306/car_rental');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.car = require('./models/car')(sequelize, Sequelize);

//Relations
// db.comments.belongsTo(db.posts);
// db.posts.hasMany(db.comments);
// db.posts.belongsTo(db.users);
// db.users.hasMany(db.posts);

module.exports = db;