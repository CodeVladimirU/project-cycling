const ymapRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const YandexTest = require('../../views/YandexTest');
const YandexMap = require('../../views/YandexTest')
const {Route} = require('../../db/models');

ymapRouter.get('/:id', async (req, res) => {
  const routes = await Route.findByPk(req.params.id, { raw: true });
  res.json(routes);
});

module.exports = ymapRouter;
