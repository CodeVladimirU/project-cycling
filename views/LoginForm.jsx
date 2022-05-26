const React = require('react');
const Loyaut = require('./Layout');

function LoginForm() {
  return (
    <Loyaut>
      <div className="login-page">
        <div className="form">
          <form
            className="login-form"
            method="POST"
            action="/login"
          >
            <input name="username" type="text" placeholder="username" />
            <input name="password" type="password" placeholder="password" />
            <button type="submit">login</button>
            <p className="message">
              Not registered?
              {' '}
              <a href="/registration">Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </Loyaut>
  );
}
module.exports = LoginForm;