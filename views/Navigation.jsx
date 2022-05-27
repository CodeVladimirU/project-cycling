const React = require('react');

function Navigation({ user }) {
  return (
    <div>
      {
      user
        ? (
          <nav className="top-menu">
            <ul className="menu-main">
              <p className="left-item">Hello, {user.username}</p>
              <li className="right-item"><a className="loginLink" href="/logout">logout</a></li>
              <li className="right-item"><a href="/">home</a></li>
            </ul>
          </nav>
        ) : (
          <nav className="top-menu">
            <ul className="menu-main">
              <li className="right-item"><a className="regLink" href="/registration">register</a></li>
              <li className="right-item"><a className="loginLink" href="/login">login</a></li>
              <li className="left-item"><a href="/">home</a></li>
            </ul>
          </nav>
        )
    }
    </div>
  );
}

module.exports = Navigation;
