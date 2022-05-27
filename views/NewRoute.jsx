const React = require('react');

module.exports = function NewRoute({route, username, location}) {
    return(
        <li className="entry-item pad-b-4" id={`li${route.id}`}>
            <p><a href={`/router/${route.id}`} className="entry-title font-2 pad-b-1-4 c-white">{route.title}</a></p>
            <p className="entry-stub">{`created By ${username}`}</p>
            <p className="entry-stub">{`length: ${route.length_km} km`}</p>
            <p className="entry-stub">{`${location}`}</p>
            <button id={route.id} className="deleteRoute" type="submit">Удалить маршрут</button>
        </li>
    )
}
