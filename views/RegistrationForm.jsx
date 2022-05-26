const React = require('react');
const Layout = require('./Layout');

function RegistrationForm() {
  return (
    <Layout>
      <body>
        <div className="login-page">
          <div className="form">
            <form className="login-form regUser" method="POST" action="/registration/create">
              <input name="username" type="text" placeholder="name" />
              <input name="password" type="password" placeholder="password" />
              <input name="email" type="text" placeholder="email address" />
              <button type="submit">create</button>
            </form>
          </div>
        </div>
        <div className="errMessage" />
      </body>
    </Layout>
  );
}
module.exports = RegistrationForm;
