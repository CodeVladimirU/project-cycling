const homeRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
// const Layout = require('../../views/Layout');
// const { Review } = require('../../db/models');
const NewRouteForm = require("../../views/NewRouteForm");
const RouteList = require('../../views/RouteList');
const { Route, User, Location } = require('../../db/models');

homeRouter.get('/', async (req, res) => {
  const routes = await Route.findAll({ order: [['id', 'DESC']], include: [User, Location] });
  const location = await Location.findAll()
  const userSes = req.session.user;
  console.log('tut');
  console.log(userSes);
  if (userSes) {
    const user = await User.findOne({
      where: {
        username: userSes.username,
      },
    });
   const home = React.createElement(RouteList, { routes, user, location });
   const html = ReactDOMServer.renderToStaticMarkup(home)
  //   const html = ReactDOMServer.renderToStaticMarkup(home);
  res.write('<!DOCTYPE html>');
  res.end(html);
  } else {
  const home = React.createElement(RouteList, { routes, location });
  const html = ReactDOMServer.renderToStaticMarkup(home);
   res.write('<!DOCTYPE html>');
  res.end(html); }

 // res.json(routes)
});

homeRouter.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res
      .clearCookie('user_sid')
      .redirect('/');
  });
});

homeRouter.get('/route', (req, res) => {
  const newRouterForm = React.createElement(NewRouteForm);
  const html = ReactDOMServer.renderToStaticMarkup(newRouterForm);
  res.end(html);
});

homeRouter.post('/route', (req, res) => {
  const username = req.session.user.username;
  res.end(username)
})
module.exports = homeRouter;
