const { Router } = require("express");
const ServicesController = require("../controllers/ServicesController");

const router = Router();

router.get("/services", ServicesController.listAll);
router.get("/services/:serviceID", ServicesController.listById);
router.post("/services/", ServicesController.createService);
router.patch("/services/:serviceID", ServicesController.updateService);
router.delete("/services/:serviceID", ServicesController.deleteService);

module.exports = router;
