require('@babel/register');
const express = require('express');

const app = express();
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const regRouter = require('./routes/views/reg.routes');
const loginRouter = require('./routes/views/login.routes');
const homeRouter = require('./routes/views/home.routes');
const yandexRouter = require('./routes/api/yaMap.routes');
const ymapRouter = require('./routes/api/ymap.routes');
const PORT = 3000;
app.use(session(
  {
    store: new FileStore(),
    name: 'user_sid',
    secret: process.env.SESSION_SECRET ?? 'test',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
    },
  },
));
app.use(express.static(path.join(process.env.PWD, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', homeRouter);
app.use('/registration', regRouter);
app.use('/login', loginRouter);
app.use('/entries', yandexRouter);
app.use('/api/map', ymapRouter)

app.listen(PORT, () => {
  console.log('йоу');
});
