const React = require('react');

module.exports = function RoutListFiltered({ routes }) {
  return (
      <>
            {routes.map((route) => (
                <li className="entry-item pad-b-4">
                  <a href={`/entries/${route.id}`} className="entry-title font-2 pad-b-1-4 c-white">{route.title}</a>
                  {/* <span className="entry-date block font-3-4 c-lt-gray">
                    Written on
                    {' '}
                    {route.createdAt.toString()}
                  </span> */}
                  <p className="entry-stub">{`created By${route.User.username}`}</p>
                  <p className="entry-stub">{`length: ${route.length_km} km`}</p>
                  <p className="entry-stub">{`${route.Location.title}`}</p>
                </li>
              ))}
              
              </>
          
        )}
  

