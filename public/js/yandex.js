async function init () {
  /**
   * Создаем мультимаршрут.
   * Первым аргументом передаем модель либо объект описания модели.
   * Вторым аргументом передаем опции отображения мультимаршрута.
   * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml
   * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel.xml
   */
   const response = await fetch('/api/map/');
  const p1p2 = await response.json();
  console.log(p1p2);
  var multiRoute = new ymaps.multiRouter.MultiRoute({
      // Описание опорных точек мультимаршрута.
      referencePoints: [
          p1p2.pointA,
          p1p2.pointB
      ],
      // Параметры маршрутизации.
      params: {
          // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
          results: 2
      }
  }, {
      // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
      boundsAutoApply: true
  });

  // Создаем карту с добавленными на нее кнопками.
  var myMap = new ymaps.Map('map', {
      center: [55.750625, 37.626],
      zoom: 7,
  }, {
      buttonMaxWidth: 300
  });


  myMap.geoObjects.add(multiRoute);
}

ymaps.ready(init);

