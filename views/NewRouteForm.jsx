const React = require('react');

module.exports = function NewRoureForm() {
    return(
        <form action="/route" method="POST" className="newRouteForm">

          <label className="text">Название маршрута</label>
            <input className="inpR" name="title" type="text" placeholder="Введите название маршрута"/>
            <label className="text">Населенный пункт</label>
            <input className="inpR" name="location" type="text" placeholder="Введите населенный пункт маршрута"/>
            <label className="text">Длина маршрута</label>
            <input className="inpR" name="length_km" type="text" placeholder="Введите длину маршрута, (км)"/>
            <label className="text">Адрес начальной точки</label>
            <input className="inpR" name="pointA" type="text" placeholder="Введите адрес начальной точки"/>
            <label className="text">Адрес конечной точки</label>
            <input className="inpR" name="pointB" type="text" placeholder="Введите адрес конечной точки"/>
            <button className="btnl" id="createRoute">Создать маршрут</button>

        </form>
    )
}
