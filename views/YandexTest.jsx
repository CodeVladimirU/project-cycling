const React = require('react');

function YandexTest() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/stylesheets/style.css" />
        <script defer src="https://api-maps.yandex.ru/2.1/?apikey=d5de7455-23c8-470b-b0ce-39ad83cbc4f4&lang=ru_RU" />
        <script defer src="/js/yandex.js"/>
      </head>
      <body>
        <a href="/">home</a>
      <div id="map"></div>
      </body>
    </html>
  )
};
module.exports = YandexTest;
