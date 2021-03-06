const homeRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
// const Layout = require('../../views/Layout');
const NewRouteForm = require("../../views/NewRouteForm");
const RouteList = require('../../views/RouteList');
const NewRoute = require('../../views/NewRoute')
const RoutListFiltered = require('../../views/RoutListFiltered')
const { Route, User, Location, Rating } = require('../../db/models');

homeRouter.get('/', async (req, res) => {
  const routes = await Route.findAll({ order: [['id', 'DESC']], include: [User, Location] });
  const location = await Location.findAll()
  const ratings = await Rating.findAll({raw: true})
  routes.forEach(el => el['AvRating'] = getAverage(el, ratings))
  routes.sort(function (b,a) {if (a['AvRating']>b['AvRating']) { return 1}  return -1}) 



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

homeRouter.post('/filter', async (req, res) => {
   const {location_id } = req.body
   console.log(req.body)
   const location = await Location.findAll()
   let routesNew
   if (location_id === "0") {
    routesNew = await Route.findAll({ order: [['id', 'DESC']], include: [User, Location]});}
   else {
   routesNew = await Route.findAll({ order: [['id', 'DESC']], include: [User, Location], where: {location_id: Number(location_id)}});
   }

   const ratings = await Rating.findAll({raw: true})

   routesNew.forEach(el => el['AvRating'] = getAverage(el, ratings))
   routesNew.sort(function (b,a) {if (a['AvRating']>b['AvRating']) { return 1}  return -1})

   //console.log(routesNew)
  
  const filteredListRoutes = React.createElement(RoutListFiltered, { routes:routesNew, location });
  const html = ReactDOMServer.renderToStaticMarkup(filteredListRoutes);
  res.end(html); 

});

  


homeRouter.get('/route', (req, res) => {

  const newRouterForm = React.createElement(NewRouteForm);
  const html = ReactDOMServer.renderToStaticMarkup(newRouterForm);
  console.log(html)
  res.end(html);
});

homeRouter.post('/route', async (req, res) => {
  const username = req.session.user.username;
  const {title, location, length_km, pointA, pointB} =req.body;
  console.log(req.body);
  // const id = req.session.user.id;
  const locationCheck = await Location.findOne({
    where: {
      title: location,
    }
  });
  console.log('====================================>',locationCheck);
  let newLocation;
  let createRoute;
  if (!locationCheck) {
  try {
    newLocation = await Location.create({title: location})
    } catch (err) {
    console.log(err.message)
    return res.status(500)
    }
    try {
      createRoute = await Route.create({
        title,
        user_id: req.session.user.id,
        location_id: newLocation.id,
        length_km,
        pointA,
        pointB,
      })
    } catch (err) {
      console.log(err.message)
      return res.status(500)
    }
    const id = createRoute.dataValues.id;
    const route = {id, title, length_km, pointA, pointB};
    console.log(route);
    const newRoute = React.createElement(NewRoute, {route, username, location: newLocation.title});
    const html = ReactDOMServer.renderToStaticMarkup(newRoute);
    res.end(html);
  } else {
    try {
      createRoute = await Route.create({
        title,
        user_id: req.session.user.id,
        location_id: locationCheck.dataValues.id,
        length_km,
        pointA,
        pointB,
      })
    } catch (err) {
      console.log(err.message)
      return res.status(500)
    }
    const id = createRoute.dataValues.id;
    const route = {id, title, length_km, pointA, pointB};
    console.log(route);
    const newRoute = React.createElement(NewRoute, {route, username, location: locationCheck.title});
    const html = ReactDOMServer.renderToStaticMarkup(newRoute);
    res.end(html);
  }
})

homeRouter.delete('/route/:id', async (req, res) => {
  const id = req.session.user.id
  const route = await Route.findOne({
    where: {
      id: req.params.id
    }
  });
  if (+route.dataValues.user_id === +id) {
  await Route.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json({message: "ok"})
   } else {
    res.json({message: 'no'})
  }

})



function getAverage(route, ratings) {
  let avRating = 0 
  const routRatings = ratings.filter(a=> a.route_id === route.id)
  if (routRatings.length === 0) {return avRating} else {
  const ratingsSum  = routRatings.reduce((sum,el) => sum + el.value, 0)
  avRating = (ratingsSum/routRatings.length).toFixed(1) }
  return avRating
  }

  module.exports = homeRouter;
