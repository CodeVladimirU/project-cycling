const React = require('react');
const Layout = require('./Layout');

module.exports = function ReviewList({ reviews, user }) {
  return (
    <Layout user={user}>
      <div>
        {user ? (
          <main role="main">
            <button type="submit" className="block button w-100 mar-t-2 mar-b-3 pad-2 round-1 text-c center">Создать новый маршрут</button>
            <ul className="entries-list no-bullets no-padding">
              {reviews.map((rev) => (
                <li className="entry-item pad-b-4">
                  <a href={`/entries/${rev.id}`} className="entry-title font-2 pad-b-1-4 c-white">{rev.title}</a>
                  <span className="entry-date block font-3-4 c-lt-gray">
                    Written on
                    {' '}
                    {rev.createdAt.toString()}
                  </span>
                  <p className="entry-stub">{rev.body}</p>
                </li>
              ))}
            </ul>
          </main>
        ) : (
          <main role="main">
            <ul className="entries-list no-bullets no-padding">
              {reviews.map((rev) => (
                <li className="entry-item pad-b-4">
                  <a href={`/entries/${rev.id}`} className="entry-title font-2 pad-b-1-4 c-white">{rev.title}</a>
                  <span className="entry-date block font-3-4 c-lt-gray">
                    Written on
                    {' '}
                    {rev.createdAt.toString()}
                  </span>
                  <p className="entry-stub">{rev.body}</p>
                </li>
              ))}
            </ul>
          </main>
        )}
      </div>
    </Layout>
  );
};
