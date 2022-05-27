const yandexRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const YandexTest = require('../../views/YandexTest');
const YandexMap = require('../../views/YandexTest')
const {Route} = require('../../db/models')
yandexRouter.get('/', async (req, res) => {
  const home = React.createElement(YandexTest);
  const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = yandexRouter;
