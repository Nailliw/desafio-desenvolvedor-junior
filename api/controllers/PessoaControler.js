const database = require("../models");

class PessoaController {
  // lista todas as pessoas
  static async listAll(req, res) {
    try {
      const allData = await database.Pessoas.findAll();
      return res.status(200).json(allData);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // lista pessoa por ID
  static async listById(req, res) {
    try {
      const data = await database.Pessoas.findOne({
        where: {
          id: req.params.pessoaID,
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
      const data = await database.Pessoas.create(newPerson);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Atualiza a instância de Pessoa passada por ID
  static async updatePerson(req, res) {
    const newInfos = req.body;

    try {
      await database.Pessoas.update(newInfos, {
        where: {
          id: req.params.pessoaID,
        },
      });

      const data = await database.Pessoas.findOne({
        where: {
          id: req.params.pessoaID,
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
      await database.Pessoas.destroy({
        where: {
          id: req.params.pessoaID,
        },
      });

      return res
        .status(200)
        .json({
          mensage: `Person number ID ${req.params.pessoaID} was destroyed`,
        });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PessoaController;
