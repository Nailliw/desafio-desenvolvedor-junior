"use strict";
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
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
      // Ao dar update a senha volta sem hash, sem tempo para fazer funcionar
      // hooks: {
      //   beforeCreate: (User) => {
      //     const salt = bcrypt.genSaltSync();
      //     User.set("password", bcrypt.hashSync(User.password, salt));
      //   },
      //   afterUpsert: (User) => {
      //     const salt = bcrypt.genSaltSync();
      //     User.set("password", bcrypt.hashSync(User.password, salt));
      //   },
      //   beforeBulkCreate: (User) => {
      //     const salt = bcrypt.genSaltSync();
      //     User.set("password", bcrypt.hashSync(User.password, salt));
      //   },
      // },
      // classMethods: {
      //   isPassword: (encondedPassword, password) =>
      //     bcrypt.compareSync(password, encondedPassword),
      // },
    }
  );

  Users.associate = function (models) {
    Users.hasMany(models.Pets, {
      foreignKey: "user_id",
      onDelete: "cascade",
    });
    Users.hasMany(models.Services, {
      foreignKey: "user_id",
      onDelete: "cascade",
    });
  };
  return Users;
};
// utilizando sequelize e sequelize-cli em versões mais antigas
// nas versões atuais a associação das models está com a documentação muito confusa
