module.exports = (app) => {

  const tasks = require('../controllers/task.controller.js');
  const router = require('express').Router();

  // Create a new task
  router.post('/', tasks.create);

  // Retrieve all tasks
  router.get('/:alias', tasks.findByAlias);

  // Retrieve all tasks
  router.get('/', tasks.findAll);

  // Retrieve all done tasks
  router.get('/done', tasks.findAllDone);

  // Retrieve a single task with id
  router.get('/id/:id', tasks.findOne);

  // Update a task with id
  router.put('/id/:id', tasks.update);

  // Delete a task with id
  router.delete('/id/:id', tasks.delete);

  // Delete all tasks
  router.delete('/', tasks.deleteAll);

  app.use('/api/tasks', router);
};