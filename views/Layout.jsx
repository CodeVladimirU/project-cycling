const React = require('react');
const Navigation = require('./Navigation');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">

      <head>
        <meta charSet="utf-8" />
        <script defer src="/js/application.js"></script>

        <title>Broccoli Blog</title>
      </head>

      <body>
        <header role="banner" className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
          <div className="max-w-700 center wrap-float">
            <Navigation user={user} />
            <div className="formAjax" />
            <div className="logo-container">
              <img className="logo center block" src="/images/logo.png" alt="logo" />
              <h1>Broccoli Blog</h1>
            </div>
          </div>
        </header>
        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
          <div className="max-w-700 center">
            {children}
          </div>
        </div>
      </body>

    </html>
  );
};
