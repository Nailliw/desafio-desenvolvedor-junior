const database = require("../models");

class ServicesController {
  static async listAll(req, res) {
    try {
      const allData = await database.Services.findAll({
        include: [
          {
            model: database.Users,
          },
          {
            model: database.Pets,
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
      const data = await database.Services.findOne({
        where: {
          id: req.params.serviceID,
        },
        include: [
          {
            model: database.Users,
          },
          {
            model: database.Pets,
          },
        ],
      });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createService(req, res) {
    const newService = req.body;
    try {
      const data = await database.Services.create(newService);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateService(req, res) {
    const newInfos = req.body;
    try {
      await database.Services.update(newInfos, {
        where: { id: req.params.serviceID },
      });
      const data = await database.Services.findOne({
        where: { id: req.params.serviceID },
      });
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteService(req, res) {
    try {
      await database.Services.destroy({
        where: { id: req.params.serviceID },
      });
      return res.status(200).json({
        mensage: `Service number ${req.params.serviceID} has be destroyed`,
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = ServicesController;
