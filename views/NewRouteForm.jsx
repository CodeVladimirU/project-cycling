const React = require('react');

module.exports = function NewRoureForm() {
    return(
        <form action="/route" method="POST" className="newRouteForm">

          <label >Название маршрута</label>
            <input name="title" type="text" placeholder="Введите название маршрута"/>
            <label >Населенный пункт</label>
            <input name="location" type="text" placeholder="Введите населенный пункт маршрута"/>
            <label >Длина маршрута</label>
            <input name="length_km" type="text" placeholder="Введите длину маршрута, (км)"/>
            <label >Адрес начальной точки</label>
            <input name="pointA" type="text" placeholder="Введите адрес начальной точки"/>
            <label >Адрес конечной точки</label>
            <input name="pointB" type="text" placeholder="Введите адрес конечной точки"/>
            <button id="createRoute">Создать маршрут</button>

        </form>
    )
}
