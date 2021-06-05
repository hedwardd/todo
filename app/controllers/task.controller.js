const db = require("../models");
const Task = db.tasks;
const List = db.lists;
const Op = db.Sequelize.Op;

// Create and Save a new Task
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.dueDate || !req.body.listAlias) {
    res.json({
      error: "Name, due date, and list required."
    });
    return;
  }

  // Create a Task
  const task = {
    name: req.body.name,
    dueDate: req.body.dueDate,
    listAlias: req.body.listAlias,
    isDone: false,
  };

  // Save Task in the database
  Task.create(task)
    .then(data => {
      res.send({
        message: 'Task added.'
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Task."
      });
    });
};

// Retrieve all Tasks from the database in a given list.
exports.findByAlias = (req, res) => {
// Validate request
if (!req.params.listAlias) {
  res.json({
    error: "List alias required."
  });
  return;
}

  const { listAlias } = req.params;
  const condition = { where: { listAlias: listAlias } };

  Task.findAll(condition)
    .then(data => {
      const sortedTasks = data.sort((t1, t2) => new Date(t1.dueDate).getTime() > new Date(t2.dueDate).getTime());
      res.send(sortedTasks);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tasks."
      });
    });
};

// Update a Task by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Task.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Task was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Task with id=${id}. Maybe Task was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Task with id=" + id
      });
    });
};

// Delete a Task with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Task.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Task was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Task with id=${id}. Maybe Task was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Task with id=" + id
      });
    });
};
