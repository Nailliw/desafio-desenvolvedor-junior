"use strict";
module.exports = (sequelize, DataTypes) => {
  const Services = sequelize.define(
    "Services",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Services.associate = function (models) {
    Services.belongsTo(models.Users, {
      foreignKey: "user_id",
    });
    Services.belongsTo(models.Pets, {
      foreignKey: "pet_id",
    });
  };
  return Services;
};
