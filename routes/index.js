const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Nathan Budge');
});

module.exports = routes;