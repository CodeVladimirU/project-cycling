const React = require('react');

function Navigation({ user }) {
  return (
    <div>
      {
      user
        ? (
          <nav className="clearfix mar-b-1">
            <ul className="no-bullets no-margin no-padding right">
              <p>Hello {user.username}</p>
              <li className="pipe-separate t-light-green left"><a className="loginLink" href="/logout">logout</a></li>
              <li className="pipe-separate t-light-green left"><a href="/">home</a></li>
            </ul>
          </nav>
        ) : (
          <nav className="clearfix mar-b-1">
            <ul className="no-bullets no-margin no-padding right">
              <li className="pipe-separate t-light-green left"><a className="regLink" href="/registration">register</a></li>
              <li className="pipe-separate t-light-green left"><a className="loginLink" href="/login">login</a></li>
              <li className="pipe-separate t-light-green left"><a href="/">home</a></li>
            </ul>
          </nav>
        )
    }
    </div>
  );
}

module.exports = Navigation;
