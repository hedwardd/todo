module.exports = (sequelize, Sequelize) => {
  
  const Task = sequelize.define("task", {
    name: Sequelize.TEXT,
    dueDate: Sequelize.DATE,
    isDone: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    } 
  });

  return Task;
};
