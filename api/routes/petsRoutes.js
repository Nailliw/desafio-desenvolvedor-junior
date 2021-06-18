const { Router } = require("express");
const PetsController = require("../controllers/PetsController");

const router = Router();

router.get("/pets", PetsController.listAll);
router.get("/pets/:petID", PetsController.listById);
router.post("/pets", PetsController.createPet);
router.patch("/pets/:petID", PetsController.updatePet);
router.delete("/pets/:petID", PetsController.deletePet);

module.exports = router;
