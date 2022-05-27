const React = require('react');

module.exports = function NewRoute({route, username, location}) {
    return(
        <li className="entry-item pad-b-4" id={`li${route.id}`}>
            <p><a href={`/entries/${route.id}`} className="entry-title font-2 pad-b-1-4 c-white">{route.title}</a></p>
            <p className="entry-stub">{`Создатель ${username}`}</p>
                  <p className="entry-stub">{`Длинна маршрута: ${route.length_km} km`}</p>
                  <p className="entry-stub">{`${location}`}</p>
                  <p className='entry-stub'>{`Стартовая точка - ${route.pointA}`}</p>
                  <p className='entry-stub'>{`Конечная точка - ${route.pointB}`}</p>
            <button id={route.id} className="deleteRoute" type="submit">Удалить маршрут</button>
        </li>
    )
}
