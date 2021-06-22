const database = require("../models");

class PetsController {
  static async listAll(req, res) {
    try {
      const allData = await database.Pets.findAll({
        include: [
          {
            model: database.Users,
          },
        ],
      });
      return res.status(200).json(allData);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async listById(req, res) {
    try {
      const data = await database.Pets.findOne({
        where: {
          id: req.params.petID,
        },
        include: [
          {
            model: database.Users,
          },
        ],
      });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createPet(req, res) {
    const newPet = req.body;
    try {
      const data = await database.Pets.create(newPet);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updatePet(req, res) {
    const newInfos = req.body;
    try {
      await database.Pets.update(newInfos, {
        where: {
          id: req.params.petID,
        },
      });
      const data = await database.Pets.findOne({
        where: { id: req.params.petID },
      });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletePet(req, res) {
    try {
      await database.Pets.destroy({
        where: {
          id: req.params.petID,
        },
      });

      return res.status(200).json({
        mensage: `Pet number ID ${req.params.petID} was destroyed`,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PetsController;
