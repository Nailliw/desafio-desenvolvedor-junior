"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Ana Souza",
          active: true,
          email: "ana@ana.com",
          sex: "feminino",
          password: "123123123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Marcos Cintra",
          active: true,
          email: "marcos@marcos.com",
          sex: "masculino",
          password: "123123123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Felipe Cardoso",
          active: true,
          email: "felipe@felipe.com",
          sex: "masculino",
          password: "123123123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sandra Gomes",
          active: false,
          email: "sandra@sandra.com",
          sex: "feminino",
          password: "123123123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paula Morais",
          active: true,
          email: "paula@paula.com",
          sex: "feminino",
          password: "123123123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sergio Lopes",
          active: true,
          email: "sergio@sergio.com",
          sex: "masculino",
          password: "123123123",
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
