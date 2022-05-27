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
    name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
    secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
    resave: false, // Пересохранять ли куку при каждом запросе
    saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
    cookie: {
      maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    },
  },
));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/', homeRouter);
app.use('/registration', regRouter);
app.use('/login', loginRouter);
app.use('/yandex', yandexRouter);
app.use('/api/map', ymapRouter)

app.listen(PORT, () => {
  console.log('йоу');
});
