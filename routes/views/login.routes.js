const React = require('react');
const bcrypt = require('bcrypt');
const ReactDOMServer = require('react-dom/server');
const loginRouter = require('express').Router();
const Login = require('../../views/LoginForm');
const { User } = require('../../db/models');

loginRouter.get('/', (req, res) => {
  const login = React.createElement(Login, { title: 'Вход' });
  const html = ReactDOMServer.renderToStaticMarkup(login);
  res.write('<!doctype html>');
  res.end(html);
});

loginRouter.post('/', async (req, res) => {
  const { username, password } = req.body;
  let user;
  console.log(username, password);
  try {
    user = await User.findOne({
      where: {
        username,
      },
    });
  } catch (err) {
    res.status(500);
    res.json({ message: err.message });
  }
  if (!user) {
    res.status(404);
    res.json({ message: 'Такой пользователь не найден' });
  }
  console.log(user);
  let isSame;
  try {
    isSame = await bcrypt.compare(password, user.password);
  } catch (err) {
    res.status(500);
    res.json({ message: err.message });
  }
  if (!isSame) {
    res.status(404);
    res.json({ message: 'Неверный логин или пароль' });
  }
  req.session.user = user;
  // res.json(isSame);
  res.redirect('/');
});

module.exports = loginRouter;
