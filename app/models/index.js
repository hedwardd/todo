const { Sequelize } = require('sequelize');

const { DB, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize({
  database: DB,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_PASSWORD,
  host: DB_HOST,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("./task.model.js")(sequelize, Sequelize);
db.lists = require("./list.model.js")(sequelize, Sequelize);

db.tasks.belongsTo(db.lists, { targetKey: 'alias', foreignKey: 'listAlias' });
db.lists.hasMany(db.tasks, { sourceKey: 'alias', foreignKey: 'listAlias' });

module.exports = db;
