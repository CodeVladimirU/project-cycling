const React = require('react');
const Layout = require('./Layout');

function RegistrationForm() {
  return (
    <Layout>
      <body>
            <form className="login-form regUser" method="POST" action="/registration/create">
            <div className="cont">
          <p className="justtext">Регистрация</p>
          <p>Логин</p>
              <input className="inpr" name="username" type="text" placeholder="введите name" />
              <p>Пароль</p>
              <input className="inpr" name="password" type="password" placeholder="введите password" />
              <p>email</p>
              <input className="inpr" name="email" type="email" placeholder="введите email address" />
              <button className="btnr" type="submit" >create</button>
              </div>
            </form>
      </body>
    </Layout>
  );
}
module.exports = RegistrationForm;
