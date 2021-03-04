const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("./task.model.js")(sequelize, Sequelize);
db.lists = require("./list.model.js")(sequelize, Sequelize);

db.tasks.belongsTo(db.lists, { targetKey: 'alias', foreignKey: 'listAlias' });
db.lists.hasMany(db.tasks, { sourceKey: 'alias', foreignKey: 'listAlias' });

module.exports = db;
