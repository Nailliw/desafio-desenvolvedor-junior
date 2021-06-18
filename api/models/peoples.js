"use strict";
module.exports = (sequelize, DataTypes) => {
  const Peoples = sequelize.define(
    "Peoples",
    {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      sex: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {}
  );
  Peoples.associate = function (models) {
    Peoples.belongsTo(models.Pets);
  };
  return Peoples;
};
// utilizando sequelize e sequelize-cli em versões mais antigas
// nas versões atuais a associação das models está com a documentação muito confusa
