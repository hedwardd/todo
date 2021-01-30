module.exports = (sequelize, Sequelize) => {
  
  const Task = sequelize.define("task", {
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    dueDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    isDone: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    } 
  });

  return Task;
};
