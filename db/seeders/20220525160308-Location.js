module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Locations', [{
      title: 'Санкт-Петербург',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Москва',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Великий Новгород',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
