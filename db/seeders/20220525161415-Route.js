module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Routes', [
      {
        title: 'Ты никогда не выберешься из Купчино',
        pointA: 'Санкт-Петербург проспект Славы',
        pointB: 'Санкт-Петербург улица Салова',
        user_id: Math.floor(Math.random() * 5 + 1),
        location_id: 1,
        length_km: 3.4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Тут тоже какое-нибудь название маршрута',
        pointA: 'Санкт-Петербург улица Рощинская',
        pointB: 'Санкт-Петербург канал Грибоедова',
        user_id: Math.floor(Math.random() * 5 + 1),
        location_id: 1,
        length_km: 6.1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Попробуем выбраться из Купчино',
        pointA: 'Санкт-Петербург Комендантский проспект',
        pointB: 'Санкт Петербург Купчино',
        user_id: Math.floor(Math.random() * 5 + 1),
        location_id: 1,
        length_km: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Бага едет',
        pointA: 'Санкт-Петербург проспект Науки',
        pointB: 'Санкт Петербург  улица Кирочная 19 ',
        user_id: Math.floor(Math.random() * 5 + 1),
        location_id: 1,
        length_km: 10.9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: 'Настя очень хочет домой',
        pointA: 'Санкт Петербург  улица Кирочная 19',
        pointB: 'Санкт-Петербург Бестужевская улица',
        user_id: Math.floor(Math.random() * 5 + 1),
        location_id: 1,
        length_km: 7.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
{
      title: 'Возможно исторический центр Великого Новгорода',
      pointA: 'Великий Новгород улица Ломоносова',
      pointB: 'Великий Новгород улица Большая Московская',
      user_id: Math.floor(Math.random() * 5 + 1),
      location_id: 3,
      length_km: 5,
      createdAt: new Date(),
      updatedAt: new Date(),},
      {
        title: 'Возможно тоже исторический центр Великого Новгорода',
        pointA: 'Великий Новгород проспект Мира',
        pointB: 'Великий Новгород улица Державина',
        user_id: Math.floor(Math.random() * 5 + 1),
        location_id: 3,
        length_km: 6.1,
        createdAt: new Date(),
        updatedAt: new Date(),},
        {
          title: 'Рандомный маршрут, чтобы показать как у меня работает фильтр',
          pointA: 'Москва проспект Мира',
          pointB: 'Москва улица Ленина',
          user_id: Math.floor(Math.random() * 5 + 1),
          location_id: 2,
          length_km: 28.6,
          createdAt: new Date(),
          updatedAt: new Date(),}
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Routes', null, {});
  },
};
