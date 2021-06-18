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
      service: DataTypes.STRING,
    },
    {}
  );
  Pets.associate = function (models) {
    Pets.hasMany(models.Pessoas, {
      foreignKey: "people_id",
    });
  };
  return Pets;
};
