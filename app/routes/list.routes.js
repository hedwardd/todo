module.exports = (app) => {

  const lists = require('../controllers/list.controller.js');
  const router = require('express').Router();

  // Create a new list
  router.post('/', lists.create);

  // Retrieve all lists
  router.get('/', lists.findAll);

  // Retrieve a single list with alias
  router.get('/:alias', lists.findOne);

  // Update a list with alias
  router.put('/:alias', lists.update);

  // Delete a list with alias
  router.delete('/:alias', lists.delete);

  // Check whether an alias is available
  router.get('/:alias/avail', lists.checkAlias);

  // Retrieves the theme for a list
  router.get('/:alias/theme', lists.getTheme);

  // Update theme for list 
  router.put('/:alias/theme', lists.updateTheme);

  // // Retrieve a single list with id
  // router.get('/:id', lists.findOne);

  // // Update a list with id
  // router.put('/:id', lists.update);

  // // Delete a list with id
  // router.delete('/:id', lists.delete);

  // // Delete all lists
  // router.delete('/', lists.deleteAll);

  app.use('/api/lists', router);
};
