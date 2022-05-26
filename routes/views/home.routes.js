const homeRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
// const Layout = require('../../views/Layout');
const ReviewList = require('../../views/ReviewList');
const { Review, User } = require('../../db/models');

homeRouter.get('/', async (req, res) => {
  const reviews = await Review.findAll({ order: [['id', 'DESC']] });
  const userSes = req.session.user;
  console.log('tut');
  console.log(userSes);
  if (userSes) {
    const user = await User.findOne({
      where: {
        username: userSes.username,
      },
    });
    const home = React.createElement(ReviewList, { reviews, user });
    const html = ReactDOMServer.renderToStaticMarkup(home);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } else {
    const home = React.createElement(ReviewList, { reviews });
    const html = ReactDOMServer.renderToStaticMarkup(home);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
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
module.exports = homeRouter;
