module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Locations', [{
      title: 'St.Petersburg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Moscow',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Minsk',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ekaterinburg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Yaroslavl',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
