const database = require("../models");

class PetsController {
  static async listAll(req, res) {
    try {
      const allData = await database.Pets.findAll();
      return res.status(200).json(allData);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PetsController;
