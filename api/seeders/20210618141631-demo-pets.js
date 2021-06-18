"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Pets",
      [
        {
          name: "Buzzie",
          sex: "masc",
          race: "NDF",
          age: 4,
          weight: "20",
          observations: "",
          people_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lala",
          sex: "feminino",
          race: "Cocke Spaniel",
          age: 1,
          weight: "10",
          observations: "",
          people_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Darkside",
          sex: "masc",
          race: "Pastor Belga",
          age: 2,
          weight: "25",
          observations: "",
          people_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Obito",
          sex: "masc",
          race: "NDF",
          age: 4,
          weight: "20",
          observations: "",
          people_id: 4,
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
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
