const database = require("../models");

class PeopleController {
  // lista todas as pessoas
  static async listAll(req, res) {
    try {
      const allData = await database.Peoples.findAll();
      return res.status(200).json(allData);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // lista pessoa por ID
  static async listById(req, res) {
    try {
      const data = await database.Peoples.findOne({
        where: {
          id: req.params.peopleID,
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
      const data = await database.Peoples.create(newPerson);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Atualiza a instância de Pessoa passada por ID
  static async updatePerson(req, res) {
    const newInfos = req.body;

    try {
      await database.Peoples.update(newInfos, {
        where: {
          id: req.params.peopleID,
        },
      });

      const data = await database.Peoples.findOne({
        where: {
          id: req.params.peopleID,
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
      await database.Peoples.destroy({
        where: {
          id: req.params.peopleID,
        },
      });

      return res.status(200).json({
        mensage: `Person number ID ${req.params.peopleID} was destroyed`,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PeopleController;
