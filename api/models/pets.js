"use strict";
module.exports = (sequelize, DataTypes) => {
  const Pets = sequelize.define(
    "Pets",
    {
      name: DataTypes.STRING,
      sex: DataTypes.STRING,
      race: DataTypes.STRING,
      age: DataTypes.INTEGER,
      weight: DataTypes.STRING,
      observations: DataTypes.TEXT,
    },
    {}
  );
  Pets.associate = function (models) {
    Pets.hasMany(models.Services, {
      as: "PetId",
      foreignKey: "pet_id",
    });
  };
  return Pets;
};
