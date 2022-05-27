const React = require('react');

module.exports = function NewRoureForm() {
    return(
        <form action="/route" method="POST" className="newRouteForm">
            <input name="title" type="text" placeholder="Введите название маршрута"/>
            {/*<input name="user" type="text" placeholder="Введите автора маршрута"/>*/}
            <input name="location" type="text" placeholder="Введите населенный пункт маршрута"/>
            <input name="length_km" type="text" placeholder="Введите длину маршрута, (км)"/>
            <button id="createRoute">Создать маршрут</button>
        </form>
    )
}
