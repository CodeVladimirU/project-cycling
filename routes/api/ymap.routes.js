const ymapRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const YandexTest = require('../../views/YandexTest');
const YandexMap = require('../../views/YandexTest')
const {Route} = require('../../db/models');

ymapRouter.get('/', async (req, res) => {
  const routes = await Route.findOne({
    where: {id: 1}
  })
  res.json(routes);
});

module.exports = ymapRouter;
