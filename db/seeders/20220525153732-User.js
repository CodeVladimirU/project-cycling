const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../../config/variables');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'test1',
        email: 'test1@gmail.com',
        password: await bcrypt.hash('qwerty1', SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'test2',
        email: 'test2@gmail.com',
        password: await bcrypt.hash('qwerty2', SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'test3',
        email: 'test3@gmail.com',
        password: await bcrypt.hash('qwerty3', SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'test4',
        email: 'test4@gmail.com',
        password: await bcrypt.hash('qwerty4', SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'test5',
        email: 'tes54@gmail.com',
        password: await bcrypt.hash('qwerty5', SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
