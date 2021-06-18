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
    Peoples.hasMany(models.Pets, {
      foreignKey: "people_id",
    });
    Peoples.hasMany(models.Services, {
      foreignKey: "people_id",
    });
  };
  return Peoples;
};
// utilizando sequelize e sequelize-cli em versões mais antigas
// nas versões atuais a associação das models está com a documentação muito confusa
