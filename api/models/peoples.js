"use strict";
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Peoples = sequelize.define(
    "Peoples",
    {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      sex: DataTypes.STRING,
      email: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      // hooks: {
      //   beforeCreate: (people) => {
      //     const salt = bcrypt.genSaltSync();
      //     people.set("password", bcrypt.hashSync(people.password, salt));
      //   },
      //   afterUpsert: (people) => {
      //     const salt = bcrypt.genSaltSync();
      //     people.set("password", bcrypt.hashSync(people.password, salt));
      //   },
      //   beforeBulkCreate: (people) => {
      //     const salt = bcrypt.genSaltSync();
      //     people.set("password", bcrypt.hashSync(people.password, salt));
      //   },
      // },
      // classMethods: {
      //   isPassword: (encondedPassword, password) =>
      //     bcrypt.compareSync(password, encondedPassword),
      // },
    }
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
