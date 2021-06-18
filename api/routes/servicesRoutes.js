const { Router } = require("express");
const ServicesController = require("../controllers/ServicesController");

const router = Router();

router.get("/services", ServicesController.listAll);

module.exports = router;
