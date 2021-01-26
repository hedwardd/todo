const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.ELEPHANT_SQL_URI);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("./task.model.js")(sequelize, Sequelize);

module.exports = db;
