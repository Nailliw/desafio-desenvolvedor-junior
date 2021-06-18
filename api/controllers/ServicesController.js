const database = require("../models");

class ServicesController {
  static async listAll(req, res) {
    try {
      const allData = await database.Services.findAll();
      return res.status(200).json(allData);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ServicesController;
