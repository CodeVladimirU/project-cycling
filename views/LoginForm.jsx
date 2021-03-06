const React = require('react');
const Layout = require('./Layout');

function LoginForm() {
  return (

    <Layout>
        <form
            className="login-form"
            method="POST"
            action="/login"
        >
            <div className="content">
            <p className="justtext">Войти</p>
            <p>Логин</p>
            <input className="inpl" name="username" type="text" placeholder="введите username" />
            <p>Пароль</p>
            <input className="inpl" name="password" type="password" placeholder="введите password" />
            <button className="btnl" type="submit">login</button>
            </div>
          </form>

    </Layout>
  );
}
module.exports = LoginForm;
