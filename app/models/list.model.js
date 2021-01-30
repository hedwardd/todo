module.exports = (sequelize, Sequelize) => {
  
  const List = sequelize.define("list", {
    alias: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        is: {
          args: [/^[a-z0-9_-]{3,15}$/],
          msg: "Invalid alias."
        },
      },
    },
  });

  return List;
};
