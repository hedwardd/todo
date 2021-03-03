module.exports = (app) => {

  const tasks = require('../controllers/task.controller.js');
  const router = require('express').Router();

  // Create a new task
  router.post('/', tasks.create);

  // Retrieve all tasks by list alias
  router.get('/:listAlias', tasks.findByAlias);

  // Update a task with id
  router.put('/id/:id', tasks.update);

  // Delete a task with id
  router.delete('/id/:id', tasks.delete);

  app.use('/api/tasks', router);
};