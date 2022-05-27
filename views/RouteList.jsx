const React = require('react');
const FilterBar = require('./FilterBar');

const Layout = require('./Layout');

module.exports = function RoutList({ routes,location, user }) {
  return (
    <Layout user={user}>
      <FilterBar location={location}></FilterBar>
      <div>
        {user ? (
          <main role="main">
            <button type="submit" className="block button w-100 mar-t-2 mar-b-3 pad-2 round-1 text-c center">Создать новый маршрут</button>
            <ul className="entries-list no-bullets no-padding js-container-list">
              {routes.map((route) => (
                <li className="entry-item pad-b-4">
                  <p><a href={`/entries/${route.id}`} className="entry-title font-2 pad-b-1-4 c-white">{route.title}</a></p>
                  {/* <span className="entry-date block font-3-4 c-lt-gray">
                    Written on
                    {' '}
                    {route.createdAt.toString()}
                  </span> */}
                  <p className="entry-stub">{`${route.Location.title}`}</p>
                  <p className="entry-stub">{`length: ${route.length_km} km`}</p>
                  <p className="entry-stub">{`created By ${route.User.username}`}</p>
                  <p className="entry-stub">{`Rating:  7/10`}</p>
                </li>
              ))}
            </ul>
          </main>
        ) : (
          <main role="main">
            <ul className="entries-list no-bullets no-padding js-container-list">
            {routes.map((route) => (
                <li className="entry-item pad-b-4">
                  <a href={`/entries/${route.id}`} className="entry-title font-2 pad-b-1-4 c-white">{route.title}</a>
                  {/* <span className="entry-date block font-3-4 c-lt-gray">
                    Written on
                    {' '}
                    {route.createdAt.toString()}
                  </span> */}

                  <p className="entry-stub">{`${route.Location.title}`}</p>
                  <p className="entry-stub">{`length: ${route.length_km} km`}</p>
                  <p className="entry-stub">{`created By ${route.User.username}`}</p>
                  <p className="entry-stub">{`Rating:  7/10`}</p>
                </li>

              ))}
            </ul>
          </main>
        )}
      </div>
    </Layout>
  );
};
