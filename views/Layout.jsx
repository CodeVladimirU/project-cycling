const React = require('react');
const Navigation = require('./Navigation');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
     <head>
        <meta charSet="utf-8" />
        <script defer src="/js/client.js" />
        <link rel="stylesheet" href="/css/review.css" />
        <link rel="stylesheet" href="/css/regastyle.css" />
        <link rel="stylesheet" href="/css/loginstyle.css" />
        <link rel="stylesheet" href="/css/navstyle.css" />
        <link rel="stylesheet" href="/css/style.css" />
       <title>Broccoli Blog</title>
      </head>

      <body>
        <header role="banner" className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
          
            <Navigation user={user} />
              <img className="logo-container" src="/img/logo2.png" alt="logo" />
        </header>

            {children}

      </body>

    </html>
  );
};
