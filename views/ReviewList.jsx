const React = require('react');
const Layout = require('./Layout');

module.exports = function ReviewList({ reviews, user }) {
  return (
    <Layout user={user}>
      <div className="table">
        {user ? (
          <main role="main">

            <button id="newRoute"  type="submit" className="btnReview">Создать новый маршрут</button>
            <div className="formNewRoute"></div>
            <ul className="entries-list entries">

              {reviews.map((rev) => (
                <li className="countur">
                  <a href={`/entries/${rev.id}`} className="entry-title">{rev.title}</a>
                  <span className="entry-date">
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
            <ul className="entries">
              {reviews.map((rev) => (
                <li className="countur">
                  <a href={`/entries/${rev.id}`} className="entry-title font-2 pad-b-1-4 c-white">{rev.title}</a>
                  <span className="entry-date">
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
