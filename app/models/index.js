const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("./task.model.js")(sequelize, Sequelize);
db.lists = require("./list.model.js")(sequelize, Sequelize);

db.lists.hasMany(db.tasks, { as: "tasks" });
db.tasks.belongsTo(db.lists, {
  foreignKey: "listId",
  as: "list",
})

module.exports = db;
