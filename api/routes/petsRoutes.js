const { Router } = require("express");
const PetsController = require("../controllers/PetsController");

const router = Router();

router.get("/pets", PetsController.listAll);

module.exports = router;
