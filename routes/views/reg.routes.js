const React = require('react');
const bcrypt = require('bcrypt');
const ReactDOMServer = require('react-dom/server');
const regRouter = require('express').Router();
const Registration = require('../../views/RegistrationForm');
const { User } = require('../../db/models');

regRouter.get('/', (req, res) => {
  const registration = React.createElement(Registration, { title: 'Регистрация' });
  const html = ReactDOMServer.renderToStaticMarkup(registration);
  res.write('<!doctype html>');
  res.end(html);
});

regRouter.post('/create', async (req, res) => {
  const { username, password, email } = req.body;
  const emailCheck = await User.findOne({
    where: {
      email,
    },
  });
  if (emailCheck) {
    return res.status(500).send({ error: 'Пользователь с таким email уже существует' });
  }
  const usernameCheck = await User.findOne({
    where: {
      username: username.trim(),
    },
  });
  if (usernameCheck) {
    return res.status(500).send({ error: 'Пользователь с таким логином уже существует' });
  }

  try {
    const hash = await bcrypt.hash(password, 10);
    const createUser = await User.create({ email, username, password: hash });

    if (createUser) {
      res.redirect('/login');
      // res.sendStatus(201)
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

module.exports = regRouter;
