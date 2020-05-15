'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('trainees',[
      {
        traineeId: 1,
        name: 'Sandra',
        surname: 'Perez',
        email: 'sandra@gmail.com',
        password: '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4',
        roleId: 4,
        workplace: 'Hospital de Fuenlabrada'
      }
    ] );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('trainees', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};