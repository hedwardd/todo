const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  
  const List = sequelize.define("list", {
    alias: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        is: {
          args: [/^[a-z0-9_-]{3,15}$/],
          msg: "Invalid alias."
        },
      },
    },
    theme: {
      type: DataTypes.STRING,
      defaultValue: "classy",
    }
  });

  return List;
};
