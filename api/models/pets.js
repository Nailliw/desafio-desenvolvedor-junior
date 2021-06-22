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
    Pets.belongsTo(models.Users, {
      foreignKey: "user_id",
    });
    Pets.hasMany(models.Services, {
      foreignKey: "pet_id",
      onDelete: "cascade",
    });
  };
  return Pets;
};
