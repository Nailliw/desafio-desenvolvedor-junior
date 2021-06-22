const database = require("../models");
const jwt = require("jsonwebtoken");

class UserController {
  static async login(req, res) {
    return res.status(200).json({ message: "login successful" });
  }
  static async searchEmail(email, password) {
    const User = await database.Users.findOne({
      where: {
        email: email,
        password: password,
      },
    });
    if (!User) {
      return null;
    }
    return User.dataValues;
  }

  // lista todas as pessoas
  static async listAll(req, res) {
    try {
      const allData = await database.Users.findAll({
        include: [
          {
            model: database.Pets,
          },
          {
            model: database.Services,
          },
        ],
      });
      return res.status(200).json(allData);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // lista pessoa por ID
  static async listById(req, res) {
    try {
      const data = await database.Users.findOne({
        where: {
          id: req.params.UserID,
        },
      });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Cria uma nova isntância de Pessoa
  static async createPerson(req, res) {
    const newPerson = req.body;
    try {
      const data = await database.Users.create(newPerson);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Atualiza a instância de Pessoa passada por ID
  static async updatePerson(req, res) {
    const newInfos = req.body;

    try {
      await database.Users.update(newInfos, {
        where: {
          id: req.params.UserID,
        },
      });

      const data = await database.Users.findOne({
        where: {
          id: req.params.UserID,
        },
      });

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Deleta pessoa
  static async deletePerson(req, res) {
    try {
      await database.Users.destroy({
        where: {
          id: req.params.UserID,
        },
      });

      return res.status(200).json({
        mensage: `Person number ID ${req.params.UserID} was destroyed`,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UserController;
