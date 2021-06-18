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
    Services.belongsTo(models.Peoples, {
      foreignKey: "people_id",
    });
  };
  return Services;
};
