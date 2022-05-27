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
            <button id="newRoute" type="submit" className="block button w-100 mar-t-2 mar-b-3 pad-2 round-1 text-c center">Создать новый маршрут</button>
              <div className="formNewRoute"></div>
              <ul id="routeList" className="entries-list no-bullets no-padding">

              {routes.map((route) => (
                <li className="entry-item pad-b-4" id={`li${route.id}`}>
                  <p><a href={`/entries/${route.id}`} className="entry-title font-2 pad-b-1-4 c-white">{route.title}</a></p>
                  <p className="entry-stub">{`Создатель ${route.User.username}`}</p>
                  <p className="entry-stub">{`Длинна маршрута: ${route.length_km} km`}</p>
                  <p className="entry-stub">{`${route.Location.title}`}</p>
                  <p className='entry-stub'>{`Стартовая точка - ${route.pointA}`}</p>
                  <p className='entry-stub'>{`Конечная точка - ${route.pointB}`}</p>
                    <button id={route.id} className="deleteRoute" type="submit">Удалить маршрут</button>

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
                  <p className="entry-stub">{`Создатель ${route.User.username}`}</p>
                  <p className="entry-stub">{`Длинна маршрута: ${route.length_km} km`}</p>
                  <p className="entry-stub">{`${route.Location.title}`}</p>
                  <p className='entry-stub'>{`Стартовая точка - ${route.pointA}`}</p>
                  <p className='entry-stub'>{`Конечная точка - ${route.pointB}`}</p>
                </li>

              ))}
            </ul>
          </main>
        )}
      </div>
    </Layout>
  );
};
