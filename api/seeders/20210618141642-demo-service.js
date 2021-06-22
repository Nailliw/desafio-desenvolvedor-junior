"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Services",
      [
        {
          name: "Banho",
          User_id: 1,
          pet_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacinação",
          User_id: 1,
          pet_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Banho",
          User_id: 4,
          pet_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacinação",
          User_id: 4,
          pet_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Banho",
          User_id: 2,
          pet_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vacinação",
          User_id: 2,
          pet_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('User', null, {});
    */
  },
};
