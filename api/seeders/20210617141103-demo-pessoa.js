module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome: "Ana Souza",
          ativo: true,
          email: "ana@ana.com",
          sexo: "feminino",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Marcos Cintra",
          ativo: true,
          email: "marcos@marcos.com",
          sexo: "masculino",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Felipe Cardoso",
          ativo: true,
          email: "felipe@felipe.com",
          sexo: "masculino",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Sandra Gomes",
          ativo: false,
          email: "sandra@sandra.com",
          sexo: "feminino",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Paula Morais",
          ativo: true,
          email: "paula@paula.com",
          sexo: "feminino",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Sergio Lopes",
          ativo: true,
          email: "sergio@sergio.com",
          sexo: "masculino",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Pessoas", null, {});
  },
};
