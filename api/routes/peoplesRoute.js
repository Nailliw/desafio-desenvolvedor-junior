const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController");

const router = Router();

router.get("/peoples", PeopleController.listAll);
router.get("/peoples/:peopleID", PeopleController.listById);
router.post("/peoples", PeopleController.createPerson);
router.patch("/peoples/:peopleID", PeopleController.updatePerson);
router.delete("/peoples/:peopleID", PeopleController.deletePerson);

module.exports = router;
